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
  {
    id: 'research',
    title: 'Research & intelligence',
    emoji: '🔭',
    blurb: 'Competitor monitors, customer-voice extractors, and market-scan agents — ambient intel that used to require a research intern.',
    atoms: ['competitor-monitoring', 'customer-voice-extraction', 'icp-discovery', 'market-scans'],
  },
  {
    id: 'positioning',
    title: 'Positioning & strategy',
    emoji: '🧭',
    blurb: 'Campaign briefs, launch messaging, battlecards, and ICP docs — the pre-execution thinking that sets up everything else.',
    atoms: ['campaign-brief', 'launch-messaging', 'battlecard', 'icp-persona-docs'],
  },
  {
    id: 'content',
    title: 'Content production',
    emoji: '✍️',
    blurb: 'Long-form drafting, decay audits, repurposing, case studies — filling the editorial calendar.',
    atoms: ['long-form-drafting', 'refresh-decay-audit', 'repurposing', 'case-study'],
  },
  {
    id: 'organic',
    title: 'Organic discovery (SEO + GEO/AEO)',
    emoji: '🔍',
    blurb: 'Keyword research, on-page and technical audits, GEO/AEO citation tracking, internal linking.',
    atoms: ['keyword-research', 'on-page-seo-audit', 'technical-seo-crawl', 'geo-aeo-citation-tracking', 'internal-linking'],
  },
  {
    id: 'social',
    title: 'Social & short-form video',
    emoji: '📱',
    blurb: 'Multi-channel scheduling, long-to-shorts clipping, creator outreach, community replies.',
    atoms: ['multi-channel-scheduling', 'long-to-shorts', 'creator-outreach', 'community-reply'],
  },
  {
    id: 'paid',
    title: 'Paid acquisition',
    emoji: '💰',
    blurb: 'Ad copy and creative variants, budget rebalancing, landing-page generation, A/B test analysis.',
    atoms: ['ad-copy-variants', 'ad-creative-variants', 'budget-rebalancing', 'landing-page-from-brief', 'ab-test-analysis'],
  },
  {
    id: 'lifecycle',
    title: 'Lifecycle & email',
    emoji: '📬',
    blurb: 'Welcome/nurture sequences, segmentation, newsletter production, inbox triage, deliverability watchdogs.',
    atoms: ['welcome-nurture-sequence', 'list-segmentation', 'newsletter-production', 'inbox-triage', 'deliverability-watchdog'],
  },
  {
    id: 'measurement',
    title: 'Measurement & narration',
    emoji: '📊',
    blurb: 'Analytics narration, attribution narration, A/B test analysis, performance reports.',
    atoms: ['analytics-narration', 'attribution-narration', 'landing-page-test-analysis', 'performance-report'],
  },
];

const ATOM_TITLES = {
  'competitor-monitoring': 'Competitor monitoring',
  'customer-voice-extraction': 'Customer-voice extraction',
  'icp-discovery': 'ICP discovery',
  'market-scans': 'Market scans',
  'campaign-brief': 'Campaign brief',
  'launch-messaging': 'Launch messaging',
  battlecard: 'Battlecards',
  'icp-persona-docs': 'ICP / persona docs',
  'long-form-drafting': 'Long-form drafting',
  'refresh-decay-audit': 'Refresh / decay audit',
  repurposing: 'Repurposing',
  'case-study': 'Case studies',
  'keyword-research': 'Keyword research',
  'on-page-seo-audit': 'On-page SEO audit',
  'technical-seo-crawl': 'Technical SEO crawl',
  'geo-aeo-citation-tracking': 'GEO / AEO citation tracking',
  'internal-linking': 'Internal linking',
  'multi-channel-scheduling': 'Multi-channel scheduling',
  'long-to-shorts': 'Long-video → shorts',
  'creator-outreach': 'Creator outreach',
  'community-reply': 'Community reply',
  'ad-copy-variants': 'Ad copy variants',
  'ad-creative-variants': 'Ad creative variants',
  'budget-rebalancing': 'Budget rebalancing',
  'landing-page-from-brief': 'Landing page from brief',
  'ab-test-analysis': 'A/B test analysis',
  'welcome-nurture-sequence': 'Welcome / nurture sequence',
  'list-segmentation': 'List segmentation',
  'newsletter-production': 'Newsletter production',
  'inbox-triage': 'Inbox triage',
  'deliverability-watchdog': 'Deliverability watchdog',
  'analytics-narration': 'Analytics narration',
  'attribution-narration': 'Attribution narration',
  'landing-page-test-analysis': 'Landing-page test analysis',
  'performance-report': 'Performance report',
};

// Cross-references: atom covered by a canonical listed under a different atom.
const CROSS_REFS = {
  'launch-messaging': { slug: 'anthropic-marketing-plugin', from: 'campaign-brief' },
  battlecard: { slug: 'anthropic-marketing-plugin', from: 'campaign-brief' },
  'landing-page-test-analysis': { slug: 'growthbook', from: 'ab-test-analysis' },
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

function badgesFor(entry) {
  const badges = [];
  const depth = entry.tags?.automation_depth;
  if (depth && DEPTH_BADGE[depth]) badges.push(DEPTH_BADGE[depth]);
  if (entry.tags?.mcp_ready) badges.push('🔌 MCP');
  if (entry.closed_alternative) badges.push(`↩ Replaces: ${entry.closed_alternative}`);
  return badges;
}

function renderEntryCard(entry, indent = '') {
  const href = entry.repo || entry.url;
  const badges = badgesFor(entry).join(' · ');
  const why = entry.why_it_matters.replace(/\s+/g, ' ').trim();
  return [
    `${indent}**[${entry.name}](${href})** — ${why}`,
    badges ? `${indent}<sub>${badges}</sub>` : '',
  ]
    .filter(Boolean)
    .join('\n');
}

async function renderAtom(atom, canonicals, alternates) {
  const title = ATOM_TITLES[atom] || atom;
  const lines = [`#### ${title}`, ''];

  if (canonicals.length === 0) {
    const xref = CROSS_REFS[atom];
    if (xref) {
      lines.push(`> Covered by **${xref.slug}** (see *${ATOM_TITLES[xref.from] || xref.from}*).`);
    } else {
      lines.push('> **Open slot** — no credible OSS canonical today. Contributions welcome.');
    }
  } else {
    for (const c of canonicals) {
      lines.push(renderEntryCard(c));
      lines.push('');
    }
  }

  if (alternates.length > 0) {
    lines.push('');
    lines.push('<details><summary>Other options considered</summary>');
    lines.push('');
    for (const a of alternates) {
      lines.push(`- ${renderEntryCard(a).replace(/\n/g, '  \n  ')}`);
    }
    lines.push('');
    lines.push('</details>');
  }

  if (await rejectedExists(atom)) {
    lines.push('');
    lines.push(`<sub>🗑️ [Rejected candidates](rejected/${atom}.md)</sub>`);
  }

  lines.push('');
  return lines.join('\n');
}

async function renderWorkflow(wf, byAtom) {
  const lines = [
    `<a id="${wf.id}"></a>`,
    `## ${wf.emoji} ${wf.title}`,
    '',
    `_${wf.blurb}_`,
    '',
  ];
  for (const atom of wf.atoms) {
    const entries = byAtom[atom] || [];
    const canonicals = entries.filter((e) => e.rank === 'canonical' && e.status === 'active');
    const alternates = entries.filter((e) => e.rank === 'alternate' && e.status === 'active');
    lines.push(await renderAtom(atom, canonicals, alternates));
  }
  return lines.join('\n');
}

function renderShortlist(byAtom) {
  // Pick one featured canonical per workflow — the one with most stars, or first canonical if none.
  const rows = [];
  for (const wf of WORKFLOWS) {
    const candidates = [];
    for (const atom of wf.atoms) {
      const entries = (byAtom[atom] || []).filter(
        (e) => e.rank === 'canonical' && e.status === 'active'
      );
      candidates.push(...entries);
    }
    if (candidates.length === 0) {
      rows.push(`| ${wf.emoji} **${wf.title}** | — | _open_ |`);
      continue;
    }
    candidates.sort((a, b) => (b.stats?.stars ?? 0) - (a.stats?.stars ?? 0));
    const pick = candidates[0];
    const replaces = pick.closed_alternative
      ? pick.closed_alternative.split(',')[0].trim()
      : '—';
    rows.push(
      `| ${wf.emoji} **${wf.title}** | [${pick.name}](${pick.repo || pick.url}) | ${replaces} |`
    );
  }
  return [
    '| Workflow | Install | Replaces |',
    '|---|---|---|',
    rows.join('\n'),
  ].join('\n');
}

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
    '<a id="substrate"></a>',
    '<details><summary>🧱 <strong>Substrate appendix</strong> — MCP bridges, platforms, orchestrators</summary>',
    '',
    '_Not marketing-specific. These are the plumbing under the workflows above — list of what connects and hosts, with a star marking the canonical pick per sub-bucket._',
    '',
    section('MCP bridges', bridges),
    section('Self-hosted platforms', platforms),
    section('Orchestrators', orchestrators),
    '</details>',
    '',
  ].join('\n');
}

function renderStatusAppendix(title, id, emoji, entries, blurb) {
  if (entries.length === 0) return '';
  entries.sort((a, b) => a.name.localeCompare(b.name));
  return [
    `<a id="${id}"></a>`,
    `<details><summary>${emoji} <strong>${title}</strong> (${entries.length})</summary>`,
    '',
    `_${blurb}_`,
    '',
    ...entries.map((e) => `- **[${e.name}](${e.repo || e.url})** — ${e.why_it_matters.replace(/\s+/g, ' ').trim()}`),
    '',
    '</details>',
    '',
  ].join('\n');
}

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

  // Count canonicals, alternates, open slots
  let canonicalCount = 0;
  let alternateCount = 0;
  let openSlotCount = 0;
  const allAtoms = WORKFLOWS.flatMap((w) => w.atoms);
  for (const atom of allAtoms) {
    const es = (byAtom[atom] || []).filter((e) => e.status === 'active');
    const c = es.filter((e) => e.rank === 'canonical').length;
    const a = es.filter((e) => e.rank === 'alternate').length;
    canonicalCount += c;
    alternateCount += a;
    if (c === 0 && !CROSS_REFS[atom]) openSlotCount += 1;
  }

  const today = new Date().toISOString().slice(0, 10);

  const toc = WORKFLOWS.map(
    (w) => `- [${w.emoji} ${w.title}](#${w.id})`
  ).join('\n');

  const workflowSections = [];
  for (const wf of WORKFLOWS) {
    workflowSections.push(await renderWorkflow(wf, byAtom));
  }

  const md = [
    '```text',
    '███╗   ███╗ █████╗ ██████╗ ██╗  ██╗███████╗████████╗██╗███╗   ██╗ ██████╗',
    '████╗ ████║██╔══██╗██╔══██╗██║ ██╔╝██╔════╝╚══██╔══╝██║████╗  ██║██╔════╝',
    '██╔████╔██║███████║██████╔╝█████╔╝ █████╗     ██║   ██║██╔██╗ ██║██║  ███╗',
    '██║╚██╔╝██║██╔══██║██╔══██╗██╔═██╗ ██╔══╝     ██║   ██║██║╚██╗██║██║   ██║',
    '██║ ╚═╝ ██║██║  ██║██║  ██║██║  ██╗███████╗   ██║   ██║██║ ╚████║╚██████╔╝',
    '╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝   ╚═╝   ╚═╝╚═╝  ╚═══╝ ╚═════╝',
    '          █████╗ ██╗    ███████╗████████╗ █████╗  ██████╗██╗  ██╗',
    '         ██╔══██╗██║    ██╔════╝╚══██╔══╝██╔══██╗██╔════╝██║ ██╔╝',
    '         ███████║██║    ███████╗   ██║   ███████║██║     █████╔╝ ',
    '         ██╔══██║██║    ╚════██║   ██║   ██╔══██║██║     ██╔═██╗ ',
    '         ██║  ██║██║    ███████║   ██║   ██║  ██║╚██████╗██║  ██╗',
    '         ╚═╝  ╚═╝╚═╝    ╚══════╝   ╚═╝   ╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝',
    '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
    "       ░▒▓  one canonical pick per marketing job  ▓▒░",
    '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
    '```',
    '',
    `🎯 **${canonicalCount} canonical** · 🔀 **${alternateCount} alternates** · 🕳️ **${openSlotCount} open slots** · 🔄 built ${today}`,
    '',
    '> Generated from [`data/entries/*.yaml`](data/entries) — open a PR against a YAML entry, not this file.',
    '',
    '## ⚡ What',
    '',
    'AI tools, MCP servers, Claude skills, and agents that **have marketing work happen for the marketer** — not another AI sidebar.',
    '',
    'Organized by marketing workflow, cut into atomic jobs. **One canonical pick per job.** Alternates collapsed. Everything else in the [rejection log](rejected/) with the reason.',
    '',
    '**Not** sales · **Not** support · **Not** AI-washed SaaS · **Not** a dump of 100 skills doing the same thing',
    '',
    '→ [`SCOPE.md`](SCOPE.md) · [`CONTRIBUTING.md`](CONTRIBUTING.md) · [`rejected/`](rejected/)',
    '',
    '## 🎯 The shortlist',
    '',
    '_One install per workflow. What the marketer cancels when they adopt it._',
    '',
    renderShortlist(byAtom),
    '',
    '## 🗺️ The workflows',
    '',
    toc,
    '',
    '<sub>Badges: 🟢 Automate = agent runs it end-to-end · 🟡 Augment = AI drives 60–80%, marketer polishes · 🔵 Assist = AI helps at margins · 🔌 MCP = exposes an MCP server</sub>',
    '',
    '---',
    '',
    workflowSections.join('\n'),
    renderSubstrateAppendix(substrateEntries),
    renderStatusAppendix(
      'Watchlist',
      'watchlist',
      '⚠️',
      watchlist,
      'Flagged but not fully endorsed — stale maintenance, ToS risk, or very early. Present for visibility; not part of the shortlist.'
    ),
    renderStatusAppendix(
      'Archive',
      'archive',
      '📦',
      archived,
      'Archived upstream or absorbed into a parent project — kept for historical reference.'
    ),
    '---',
    '',
    '🔀 [gtm-ai-stack](https://github.com/dapollonsky/gtm-ai-stack) (broader GTM view) · 📜 [MIT](LICENSE) · [CC-BY-SA 4.0](LICENSE-DATA)',
    '',
  ]
    .filter((x) => x !== '')
    .join('\n');

  await fs.writeFile(README_PATH, md + '\n', 'utf8');

  console.log(
    `✓ README.md built — ${canonicalCount} canonicals, ${alternateCount} alternates, ${openSlotCount} open slots across ${WORKFLOWS.length} workflows (+${substrateEntries.length} substrate)`
  );
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
