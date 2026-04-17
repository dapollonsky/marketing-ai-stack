#!/usr/bin/env node
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import yaml from 'js-yaml';
import Ajv from 'ajv/dist/2020.js';
import addFormats from 'ajv-formats';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const ENTRIES_DIR = path.join(ROOT, 'data', 'entries');
const SCHEMA_PATH = path.join(ROOT, 'data', 'schema.json');

async function main() {
  const schema = JSON.parse(await fs.readFile(SCHEMA_PATH, 'utf8'));

  const ajv = new Ajv({ allErrors: true, strict: false });
  addFormats(ajv);
  const validate = ajv.compile(schema);

  const files = (await fs.readdir(ENTRIES_DIR))
    .filter((f) => f.endsWith('.yaml') || f.endsWith('.yml'))
    .sort();

  if (files.length === 0) {
    console.log('ℹ No entries found yet.');
    return;
  }

  let errorCount = 0;
  const slugs = new Set();
  // atomCanonicals[atom] = count of active canonicals
  const atomCanonicals = {};
  const atomAlternates = {};

  for (const file of files) {
    const fp = path.join(ENTRIES_DIR, file);
    const raw = await fs.readFile(fp, 'utf8');

    let entry;
    try {
      entry = yaml.load(raw);
    } catch (e) {
      console.error(`✗ ${file}: YAML parse error — ${e.message}`);
      errorCount++;
      continue;
    }

    if (!validate(entry)) {
      console.error(`✗ ${file}:`);
      for (const err of validate.errors) {
        const where = err.instancePath || '(root)';
        console.error(`    ${where} ${err.message}${err.params ? ' ' + JSON.stringify(err.params) : ''}`);
      }
      errorCount++;
      continue;
    }

    const stem = file.replace(/\.(yaml|yml)$/, '');
    if (entry.slug !== stem) {
      console.error(`✗ ${file}: slug "${entry.slug}" must match filename "${stem}"`);
      errorCount++;
    }

    if (slugs.has(entry.slug)) {
      console.error(`✗ ${file}: duplicate slug "${entry.slug}"`);
      errorCount++;
    }
    slugs.add(entry.slug);

    if (entry.repo && !/^https:\/\/github\.com\//.test(entry.repo)) {
      console.error(`✗ ${file}: repo must start with https://github.com/`);
      errorCount++;
    }
    try {
      const u = new URL(entry.url);
      if (!/^https?:$/.test(u.protocol)) {
        console.error(`✗ ${file}: url must be http(s)`);
        errorCount++;
      }
    } catch {
      console.error(`✗ ${file}: url is not a valid URL`);
      errorCount++;
    }

    // Track atom-level stats for only active entries
    if (entry.status === 'active') {
      const key = entry.atom;
      if (entry.rank === 'canonical') {
        atomCanonicals[key] = (atomCanonicals[key] || 0) + 1;
      } else if (entry.rank === 'alternate') {
        atomAlternates[key] = (atomAlternates[key] || 0) + 1;
      }
    }
  }

  // Enforce editorial rules on active entries:
  // - For workflow atoms (not substrate atoms), at most 1 canonical per atom.
  // - For workflow atoms, at most 2 alternates per atom (warn, not error).
  const SUBSTRATE_ATOMS = new Set(['mcp-bridge', 'platform', 'orchestrator']);
  for (const [atom, count] of Object.entries(atomCanonicals)) {
    if (SUBSTRATE_ATOMS.has(atom)) continue;
    if (count > 1) {
      console.error(`✗ atom "${atom}" has ${count} active canonicals — only one allowed`);
      errorCount++;
    }
  }
  for (const [atom, count] of Object.entries(atomAlternates)) {
    if (SUBSTRATE_ATOMS.has(atom)) continue;
    if (count > 2) {
      console.warn(`⚠ atom "${atom}" has ${count} active alternates — curator should trim to ≤2`);
    }
  }

  if (errorCount > 0) {
    console.error(`\n${errorCount} validation error(s) across ${files.length} file(s)`);
    process.exit(1);
  }

  console.log(`✓ ${files.length} entries valid (${Object.keys(atomCanonicals).length} atoms with canonicals)`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
