#!/usr/bin/env node
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import yaml from 'js-yaml';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const ENTRIES_DIR = path.join(ROOT, 'data', 'entries');
const README_PATH = path.join(ROOT, 'README.md');

const CATEGORIES = [
  {
    id: 'content',
    title: 'Content',
    blurb: 'Long-form writing, blog drafting, copywriting, newsletter drafts, and video scripts — the work that fills the marketer\'s calendar.',
  },
  {
    id: 'seo',
    title: 'SEO',
    blurb: 'Keyword research, Search Console analysis, GEO (generative engine optimisation), and rank tracking for the AI-search era.',
  },
  {
    id: 'social',
    title: 'Social',
    blurb: 'Self-hosted social schedulers, short-form video generation, and community/Reddit research — post daily without a Buffer subscription.',
  },
  {
    id: 'ads',
    title: 'Ads & Creative',
    blurb: 'Natural-language campaign management and ad creative generation across Google, Meta, TikTok, and LinkedIn.',
  },
  {
    id: 'email',
    title: 'Email',
    blurb: 'Newsletter platforms, email marketing MCPs, and LLM-powered inbox triage — the email layer marketers actually ship from.',
  },
  {
    id: 'analytics',
    title: 'Marketing Analytics',
    blurb: 'LLM narratives over GA, PostHog, Mixpanel, and marketing mix modelling — ask questions about last week\'s funnel in plain English.',
  },
  {
    id: 'research',
    title: 'Research & Intelligence',
    blurb: 'Competitor monitoring, brand mentions, and market research agents — ambient intel that used to need a research intern.',
  },
  {
    id: 'integrations',
    title: 'Integrations & Substrate',
    blurb: 'MCP servers, aggregators, and platforms that plug the marketer\'s existing tools into Claude, Cursor, and other AI agents.',
  },
];

const CATEGORY_EMOJI = {
  content: '✍️',
  seo: '🔍',
  social: '📱',
  ads: '💰',
  email: '📬',
  analytics: '📊',
  research: '🔭',
  integrations: '🔌',
};

const TYPE_LABEL = {
  mcp: 'MCP',
  aggregator: 'Aggregator',
  agent: 'Agent',
  app: 'App',
  framework: 'Framework',
  'skill-pack': 'Skill pack',
  template: 'Template',
  cms: 'CMS',
  crm: 'CRM',
  library: 'Library',
};

const AI_LABEL = {
  'ai-native': 'AI-native',
  'ai-enabled': 'AI-enabled',
  substrate: 'Substrate',
};

function formatStars(n) {
  if (n == null) return '—';
  if (n >= 1000) return `${(n / 1000).toFixed(1)}k`;
  return `${n}`;
}

function formatMonth(s) {
  if (!s) return '—';
  return s.slice(0, 7);
}

function escapePipes(s) {
  return s.replace(/\|/g, '\\|').replace(/\s+/g, ' ').trim();
}

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

function renderEntryRow(e) {
  const href = e.repo || e.url;
  const name = `[${e.name}](${href})`;
  const type = TYPE_LABEL[e.tags.type] || e.tags.type;
  const ai = AI_LABEL[e.tags.ai_nativeness];
  const mcp = e.tags.mcp_ready ? '✓' : '';
  const stars = formatStars(e.stats?.stars);
  const last = formatMonth(e.stats?.last_commit);
  const why = escapePipes(e.why_it_matters);
  return `| ${name} | ${type} | ${ai} | ${mcp} | ${stars} | ${last} | ${why} |`;
}

function renderCategorySection(cat, entries) {
  if (entries.length === 0) return '';
  const sorted = entries.slice().sort((a, b) => {
    const sa = a.stats?.stars ?? -1;
    const sb = b.stats?.stars ?? -1;
    if (sb !== sa) return sb - sa;
    return a.name.localeCompare(b.name);
  });
  const emoji = CATEGORY_EMOJI[cat.id] || '';
  return [
    `<a id="${cat.id}"></a>`,
    `### ${emoji} ${cat.title}`,
    '',
    '| Project | Type | AI | MCP | ⭐ | 🔄 | Why |',
    '|---|---|---|---|---|---|---|',
    sorted.map(renderEntryRow).join('\n'),
    '',
  ].join('\n');
}

async function main() {
  const entries = await loadEntries();
  const active = entries.filter((e) => e.status === 'active');
  const watchlist = entries.filter((e) => e.status === 'watchlist');
  const archived = entries.filter((e) => e.status === 'archived');

  const byCategory = Object.fromEntries(CATEGORIES.map((c) => [c.id, []]));
  for (const e of active) {
    if (byCategory[e.category]) byCategory[e.category].push(e);
  }

  const toc = CATEGORIES
    .filter((c) => byCategory[c.id].length > 0)
    .map((c) => `- [${CATEGORY_EMOJI[c.id]} ${c.title}](#${c.id}) — ${byCategory[c.id].length}`);
  if (watchlist.length > 0) toc.push('- [⚠️ Watchlist](#watchlist)');
  if (archived.length > 0) toc.push('- [📦 Archive](#archive)');

  const sections = CATEGORIES
    .map((c) => renderCategorySection(c, byCategory[c.id]))
    .filter(Boolean);

  const watchlistSection = watchlist.length
    ? [
        '<a id="watchlist"></a>',
        '### ⚠️ Watchlist',
        '',
        '_Flagged but not fully endorsed — stale maintenance, ToS risk, very early._',
        '',
        ...watchlist
          .slice()
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((e) => `- **[${e.name}](${e.repo || e.url})** — ${e.why_it_matters}`),
        '',
      ].join('\n')
    : '';

  const archivedSection = archived.length
    ? [
        '<a id="archive"></a>',
        '### 📦 Archive',
        '',
        '_Archived upstream — kept for historical reference._',
        '',
        ...archived
          .slice()
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((e) => `- **[${e.name}](${e.repo || e.url})** — ${e.why_it_matters}`),
        '',
      ].join('\n')
    : '';

  const today = new Date().toISOString().slice(0, 10);

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
    '       ░▒▓  tools that plug into a marketer\'s daily stack  ▓▒░',
    '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
    '```',
    '',
    `🎯 **${active.length} active** · ⚠️ **${watchlist.length} watchlist** · 📦 **${archived.length} archived** · 🔄 built ${today}`,
    '',
    '> Generated from [`data/entries/*.yaml`](data/entries) — open a PR against a YAML entry, not this file.',
    '',
    '## ⚡ What',
    '',
    'AI tools, MCP servers, and Claude Code skills that plug into the tools marketers already use — Google Ads, GA4, Notion, HubSpot, Webflow, Mailchimp, Search Console — and **automate marketing work**.',
    '',
    '**Not** sales · **Not** support · **Not** AI-washed SaaS',
    '',
    '→ [`SCOPE.md`](SCOPE.md) · [`CONTRIBUTING.md`](CONTRIBUTING.md)',
    '',
    '## 🗺️ The stack',
    '',
    toc.join('\n'),
    '',
    '---',
    '',
    sections.join('\n'),
    watchlistSection,
    archivedSection,
    '---',
    '',
    '🔀 [gtm-ai-stack](https://github.com/dapollonsky/gtm-ai-stack) (broader GTM view) · 📜 [MIT](LICENSE) · [CC-BY-SA 4.0](LICENSE-DATA)',
    '',
  ]
    .filter((x) => x !== '')
    .join('\n');

  await fs.writeFile(README_PATH, md + '\n', 'utf8');

  const populatedCats = CATEGORIES.filter((c) => byCategory[c.id].length > 0).length;
  console.log(
    `✓ README.md built — ${active.length} active across ${populatedCats}/${CATEGORIES.length} categories`
  );
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
