#!/usr/bin/env node
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import yaml from 'js-yaml';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const ENTRIES_DIR = path.join(ROOT, 'data', 'entries');
const REJECTED_DIR = path.join(ROOT, 'rejected');
const README_PATH = path.join(ROOT, 'README.md');

const WORKFLOWS = [
  { id: 'research', title: 'Research & intelligence', emoji: '🔭',
    atoms: ['competitor-monitoring', 'customer-voice-extraction', 'icp-discovery', 'market-scans'] },
  { id: 'positioning', title: 'Positioning & strategy', emoji: '🧭',
    atoms: ['campaign-brief', 'launch-messaging', 'battlecard', 'icp-persona-docs'] },
  { id: 'content', title: 'Content production', emoji: '✍️',
    atoms: ['long-form-drafting', 'refresh-decay-audit', 'repurposing', 'case-study'] },
  { id: 'organic', title: 'Organic discovery', emoji: '🔍',
    atoms: ['keyword-research', 'on-page-seo-audit', 'technical-seo-crawl', 'geo-aeo-citation-tracking', 'internal-linking'] },
  { id: 'social', title: 'Social & video', emoji: '📱',
    atoms: ['multi-channel-scheduling', 'long-to-shorts', 'creator-outreach', 'community-reply'] },
  { id: 'paid', title: 'Paid acquisition', emoji: '💰',
    atoms: ['ad-copy-variants', 'ad-creative-variants', 'budget-rebalancing', 'landing-page-from-brief', 'ab-test-analysis'] },
  { id: 'lifecycle', title: 'Lifecycle & email', emoji: '📬',
    atoms: ['welcome-nurture-sequence', 'list-segmentation', 'newsletter-production', 'inbox-triage', 'deliverability-watchdog'] },
  { id: 'measurement', title: 'Measurement', emoji: '📊',
    atoms: ['analytics-narration', 'attribution-narration', 'landing-page-test-analysis', 'performance-report'] },
];

const ATOM_TITLES = {
  'competitor-monitoring': 'Competitor monitoring',
  'customer-voice-extraction': 'Customer-voice extraction',
  'icp-discovery': 'ICP discovery',
  'market-scans': 'Market scans',
  'campaign-brief': 'Campaign briefs',
  'launch-messaging': 'Launch messaging',
  battlecard: 'Battlecards',
  'icp-persona-docs': 'ICP / persona docs',
  'long-form-drafting': 'Long-form drafts',
  'refresh-decay-audit': 'Refresh / decay audits',
  repurposing: 'Repurposing',
  'case-study': 'Case studies',
  'keyword-research': 'Keyword research',
  'on-page-seo-audit': 'On-page SEO audit',
  'technical-seo-crawl': 'Technical SEO crawl',
  'geo-aeo-citation-tracking': 'GEO / AEO citation tracking',
  'internal-linking': 'Internal linking',
  'multi-channel-scheduling': 'Multi-channel scheduling',
  'long-to-shorts': 'Long video → shorts',
  'creator-outreach': 'Creator outreach',
  'community-reply': 'Community reply',
  'ad-copy-variants': 'Ad copy variants',
  'ad-creative-variants': 'Ad creative variants',
  'budget-rebalancing': 'Budget rebalancing',
  'landing-page-from-brief': 'Landing pages from brief',
  'ab-test-analysis': 'A/B test analysis',
  'welcome-nurture-sequence': 'Welcome / nurture sequences',
  'list-segmentation': 'List segmentation',
  'newsletter-production': 'Newsletter production',
  'inbox-triage': 'Inbox triage',
  'deliverability-watchdog': 'Deliverability watchdog',
  'analytics-narration': 'Analytics narration',
  'attribution-narration': 'Attribution narration',
  'landing-page-test-analysis': 'Landing-page test analysis',
  'performance-report': 'Performance reports (MMM)',
};

// Atoms whose canonical is the same entry as another atom's canonical — the row
// in the main shortlist gets a combined label and we skip the secondary atoms.
const CROSS_REFS = {
  'launch-messaging': { slug: 'anthropic-marketing-plugin', from: 'campaign-brief' },
  battlecard: { slug: 'anthropic-marketing-plugin', from: 'campaign-brief' },
  'landing-page-test-analysis': { slug: 'growthbook', from: 'ab-test-analysis' },
};

// When a canonical covers multiple atoms, override its main-table Job label.
const COMBINED_JOB_LABELS = {
  'anthropic-marketing-plugin': 'Briefs, messaging, battlecards',
  // growthbook is already "A/B test analysis" which covers LP test analysis fine
};

const DEPTH_BADGE = {
  automate: '🟢 Automate',
  augment: '🟡 Augment',
  assist: '🔵 Assist',
};

async function loadEntries() {
  const files = (await fs.readdir(ENTRIES_DIR))
    .filter((f) => f.endsWith('.yaml') || f.endsWith('.yml'))
    .sort();
  const entries = [];
  for (const f of files) {
    const raw = await fs.readFile(path.join(ENTRIES_DIR, f), 'utf8');
    entries.push(yaml.load(raw));
  }
  return entries;
}

async function rejectedExists(atom) {
  try {
    await fs.access(path.join(REJECTED_DIR, `${atom}.md`));
    return true;
  } catch {
    return false;
  }
}

function firstClosedAlt(s) {
  if (!s) return '—';
  return s.split(',')[0].trim();
}

function escapePipes(s) {
  return (s || '').replace(/\|/g, '\\|').replace(/\s+/g, ' ').trim();
}

function badgesFor(entry) {
  const badges = [];
  const depth = entry.tags?.automation_depth;
  if (depth && DEPTH_BADGE[depth]) badges.push(DEPTH_BADGE[depth]);
  if (entry.tags?.mcp_ready) badges.push('🔌 MCP');
  if (entry.closed_alternative) badges.push(`↩ Replaces: ${entry.closed_alternative}`);
  return badges;
}

// ──────────────────────────────────────────────────────────────────────
// Main shortlist table
// ──────────────────────────────────────────────────────────────────────

function renderShortlist(byAtom) {
  const rows = [];
  for (const wf of WORKFLOWS) {
    for (const atom of wf.atoms) {
      if (CROSS_REFS[atom]) continue; // merged into the referenced canonical's row
      const entries = (byAtom[atom] || []).filter(
        (e) => e.rank === 'canonical' && e.status === 'active'
      );
      if (entries.length === 0) continue; // open slot — shown in the open-slots line
      const pick = entries[0];
      const label = COMBINED_JOB_LABELS[pick.slug] || ATOM_TITLES[atom] || atom;
      const href = pick.repo || pick.url;
      const cancels = firstClosedAlt(pick.closed_alternative);
      rows.push(
        `| ${escapePipes(label)} | [${escapePipes(pick.name)}](${href}) | ${escapePipes(cancels)} |`
      );
    }
  }
  return [
    '| Job | Install | Cancels |',
    '|---|---|---|',
    rows.join('\n'),
  ].join('\n');
}

function renderOpenSlots(byAtom) {
  const slots = [];
  for (const wf of WORKFLOWS) {
    for (const atom of wf.atoms) {
      if (CROSS_REFS[atom]) continue;
      const entries = (byAtom[atom] || []).filter(
        (e) => e.rank === 'canonical' && e.status === 'active'
      );
      if (entries.length === 0) slots.push(ATOM_TITLES[atom] || atom);
    }
  }
  return slots;
}

// ──────────────────────────────────────────────────────────────────────
// Collapsed per-workflow detail (alternates + cross-refs + open slots)
// ──────────────────────────────────────────────────────────────────────

function renderEntryLine(entry) {
  const href = entry.repo || entry.url;
  const badges = badgesFor(entry).join(' · ');
  return `**[${entry.name}](${href})** — ${entry.why_it_matters.replace(/\s+/g, ' ').trim()}${badges ? `<br/><sub>${badges}</sub>` : ''}`;
}

async function renderWorkflowDetail(wf, byAtom) {
  const lines = [];
  for (const atom of wf.atoms) {
    const entries = (byAtom[atom] || []).filter((e) => e.status === 'active');
    const canonicals = entries.filter((e) => e.rank === 'canonical');
    const alternates = entries.filter((e) => e.rank === 'alternate');
    const title = ATOM_TITLES[atom] || atom;
    const xref = CROSS_REFS[atom];

    lines.push(`**${title}**  `);

    if (canonicals.length > 0) {
      for (const c of canonicals) {
        lines.push(renderEntryLine(c) + '  ');
      }
    } else if (xref) {
      lines.push(`↑ covered by **${xref.slug}** (see *${ATOM_TITLES[xref.from]}*)  `);
    } else {
      lines.push(`_Open slot — no OSS canonical yet._  `);
    }

    if (alternates.length > 0) {
      for (const a of alternates) {
        lines.push(`&nbsp;&nbsp;&nbsp;&nbsp;↳ ${renderEntryLine(a)}  `);
      }
    }

    if (await rejectedExists(atom)) {
      lines.push(`<sub>🗑️ [rejected candidates](rejected/${atom}.md)</sub>  `);
    }
    lines.push('');
  }
  return lines.join('\n');
}

async function renderAllDetails(byAtom) {
  const sections = [];
  for (const wf of WORKFLOWS) {
    const body = await renderWorkflowDetail(wf, byAtom);
    sections.push(
      [
        `<details>`,
        `<summary>${wf.emoji} <strong>${wf.title}</strong> — full detail & alternates</summary>`,
        '',
        body,
        `</details>`,
        '',
      ].join('\n')
    );
  }
  return sections.join('\n');
}

// ──────────────────────────────────────────────────────────────────────
// Appendices
// ──────────────────────────────────────────────────────────────────────

function renderSubstrateAppendix(substrate) {
  const bridges = substrate.filter((e) => e.atom === 'mcp-bridge' && e.status === 'active');
  const platforms = substrate.filter((e) => e.atom === 'platform' && e.status === 'active');
  const orchestrators = substrate.filter((e) => e.atom === 'orchestrator' && e.status === 'active');

  const section = (title, entries) => {
    if (entries.length === 0) return '';
    entries.sort((a, b) => {
      if (a.rank !== b.rank) return a.rank === 'canonical' ? -1 : 1;
      return (b.stats?.stars ?? 0) - (a.stats?.stars ?? 0);
    });
    return [
      `**${title}**`,
      '',
      ...entries.map((e) => {
        const href = e.repo || e.url;
        const rank = e.rank === 'canonical' ? '⭐' : ' ';
        return `- ${rank} [${e.name}](${href}) — ${e.description.replace(/\s+/g, ' ').trim()}`;
      }),
      '',
    ].join('\n');
  };

  return [
    '<details>',
    '<summary>🧱 <strong>Substrate</strong> — MCP bridges, platforms, orchestrators</summary>',
    '',
    '_Not marketing jobs. The plumbing underneath: connectors to tools marketers already use, self-hosted platforms, and orchestration layers._',
    '',
    section('MCP bridges', bridges),
    section('Self-hosted platforms', platforms),
    section('Orchestrators', orchestrators),
    '</details>',
    '',
  ].join('\n');
}

function renderStatusAppendix(title, emoji, entries, blurb) {
  if (entries.length === 0) return '';
  entries.sort((a, b) => a.name.localeCompare(b.name));
  return [
    '<details>',
    `<summary>${emoji} <strong>${title}</strong> (${entries.length})</summary>`,
    '',
    `_${blurb}_`,
    '',
    ...entries.map(
      (e) => `- **[${e.name}](${e.repo || e.url})** — ${e.why_it_matters.replace(/\s+/g, ' ').trim()}`
    ),
    '',
    '</details>',
    '',
  ].join('\n');
}

// ──────────────────────────────────────────────────────────────────────
// Main
// ──────────────────────────────────────────────────────────────────────

async function main() {
  const entries = await loadEntries();
  const active = entries.filter((e) => e.status === 'active');
  const watchlist = entries.filter((e) => e.status === 'watchlist');
  const archived = entries.filter((e) => e.status === 'archived');

  const workflowEntries = active.filter((e) => e.workflow !== 'substrate');
  const substrateEntries = entries.filter((e) => e.workflow === 'substrate');

  const byAtom = {};
  for (const e of workflowEntries) {
    (byAtom[e.atom] ||= []).push(e);
  }

  const openSlots = renderOpenSlots(byAtom);
  const detailSections = await renderAllDetails(byAtom);

  const md = [
    '```',
    '  ┏┳┓┏━┓┏━┓┏┓┏┓┏━┓╺┳╸╻┏┓╻┏━╸   ┏━┓╻   ┏━┓╺┳╸┏━┓┏━╸╻┏',
    '  ┃┃┃┣━┫┣┳┛┣┻┓┣╸  ┃ ┃┃┗┫┃╺┓╺━╸┣━┫┃╺━╸┗━┓ ┃ ┣━┫┃  ┣┻┓',
    '  ╹ ╹╹ ╹╹┗╸┗━┛┗━┛ ╹ ╹╹ ╹┗━┛   ╹ ╹╹   ┗━┛ ╹ ╹ ╹┗━╸╹ ╹',
    '```',
    '',
    'One canonical OSS pick per marketing job. Editorial, not comprehensive. Rejections public.',
    '',
    '## What to install',
    '',
    renderShortlist(byAtom),
    '',
    openSlots.length > 0
      ? `**Open slots** (no OSS canonical yet): ${openSlots.join(' · ')}.\n\nSee [rejected/](rejected/) for what we evaluated and didn't list.`
      : '',
    '',
    '---',
    '',
    '## Detail',
    '',
    detailSections,
    renderSubstrateAppendix(substrateEntries),
    renderStatusAppendix(
      'Watchlist',
      '⚠️',
      watchlist,
      'Flagged but not fully endorsed — stale, ToS risk, or very early.'
    ),
    renderStatusAppendix(
      'Archive',
      '📦',
      archived,
      'Archived upstream or absorbed into a parent project.'
    ),
    '---',
    '',
    '[Scope](SCOPE.md) · [Contributing](CONTRIBUTING.md) · [gtm-ai-stack](https://github.com/dapollonsky/gtm-ai-stack) · [MIT](LICENSE) · [CC-BY-SA 4.0](LICENSE-DATA)',
    '',
  ]
    .filter((x) => x !== '')
    .join('\n');

  await fs.writeFile(README_PATH, md + '\n', 'utf8');

  const canonicalCount = Object.values(byAtom)
    .flat()
    .filter((e) => e.rank === 'canonical' && e.status === 'active').length;
  console.log(
    `✓ README.md built — ${canonicalCount} canonicals, ${openSlots.length} open slots`
  );
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
