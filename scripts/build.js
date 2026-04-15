#!/usr/bin/env node
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import yaml from 'js-yaml';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const ENTRIES_DIR = path.join(ROOT, 'data', 'entries');
const README_PATH = path.join(ROOT, 'README.md');
const SITE_DATA_PATH = path.join(ROOT, 'site', 'src', 'data', 'entries.json');

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

function slugifyAnchor(s) {
  return s
    .toLowerCase()
    .replace(/&/g, '')
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}

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
  return [
    `## ${cat.title}`,
    '',
    cat.blurb,
    '',
    '| Project | Type | AI | MCP | Stars | Last commit | Why it matters |',
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
    .map((c) => `- [${c.title}](#${slugifyAnchor(c.title)}) — ${byCategory[c.id].length}`);
  if (watchlist.length > 0) toc.push('- [Watchlist](#watchlist)');
  if (archived.length > 0) toc.push('- [Archive](#archive)');

  const sections = CATEGORIES.map((c) => renderCategorySection(c, byCategory[c.id])).filter(Boolean);

  const watchlistSection = watchlist.length
    ? [
        '## Watchlist',
        '',
        'Projects listed but not fully endorsed — stale maintenance, ToS risk, very early, or otherwise requiring caution.',
        '',
        ...watchlist
          .slice()
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((e) => `- [${e.name}](${e.repo || e.url}) — ${e.why_it_matters}`),
        '',
      ].join('\n')
    : '';

  const archivedSection = archived.length
    ? [
        '## Archive',
        '',
        'Previously listed projects, now archived upstream or no longer maintained. Kept for historical reference.',
        '',
        ...archived
          .slice()
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((e) => `- [${e.name}](${e.repo || e.url}) — ${e.why_it_matters}`),
        '',
      ].join('\n')
    : '';

  const today = new Date().toISOString().slice(0, 10);

  const md = [
    '# Marketing AI Stack',
    '',
    '**AI tools, MCP servers, and Claude Code skills that plug into the tools marketers already use — and automate marketing work.**',
    '',
    `${active.length} active · ${watchlist.length} watchlist · ${archived.length} archived · built ${today}`,
    '',
    '> This README is generated from [`data/entries/*.yaml`](data/entries). Do not edit it directly — open a PR against a YAML entry and CI will rebuild.',
    '',
    '## What this is',
    '',
    'An opinionated, curated list of AI tools that plug into the tools marketers already use — Google Ads, GA4, Notion, HubSpot, Webflow, Mailchimp, Search Console — and automate marketing work, not just assist it. Every entry has to answer one question: **what specific marketing task does this automate, and who benefits?**',
    '',
    'The list is organised around the marketer\'s daily workflow, not the broader GTM funnel. Sales, customer success, and RevOps forecasting are explicitly out of scope — see [`gtm-ai-stack`](https://github.com/dapollonsky/gtm-ai-stack) for the wider view.',
    '',
    'Three tiers live side-by-side:',
    '',
    '1. **Integrations & substrate** — MCP servers and platforms that connect the marketer\'s existing tools (HubSpot, GA4, Webflow, Notion) to Claude, Cursor, and other agents.',
    '2. **Agents & apps** — End-user tools that automate specific marketing jobs: content drafting, social scheduling, paid campaign management, competitor research.',
    '3. **Skill packs & templates** — Claude Code skills and CrewAI/n8n templates — ready-to-install recipes for common marketing workflows.',
    '',
    'What this is **not**: an AI-tool dump. See [`SCOPE.md`](SCOPE.md) for the editorial constitution and [`CONTRIBUTING.md`](CONTRIBUTING.md) to submit an entry.',
    '',
    '## Why this exists',
    '',
    'Most "AI for marketing" lists are either flat SaaS directories or broad GTM/agent catalogues. Neither is useful to a marketer trying to answer "what can I install this week to automate X?" This list applies a stricter test: every entry must integrate into a real marketer\'s daily workflow, automate actual work (not just add an AI sidebar), and be usable without a dedicated engineering team — a non-engineering marketer with moderate technical comfort should be productive with it within a week.',
    '',
    '## Site',
    '',
    'A searchable, filterable version of this list: **[dapollonsky.github.io/marketing-ai-stack](https://dapollonsky.github.io/marketing-ai-stack/)** _(live once GitHub Pages is enabled)_.',
    '',
    '## Contents',
    '',
    toc.join('\n'),
    '',
    sections.join('\n'),
    watchlistSection,
    archivedSection,
    '## Editorial',
    '',
    '- **[SCOPE.md](SCOPE.md)** — the editorial constitution (what is in, what is out, and why)',
    '- **[CONTRIBUTING.md](CONTRIBUTING.md)** — how to submit, schema reference, PR rules',
    '- **License** — code under [MIT](LICENSE); entry data under [CC-BY-SA 4.0](LICENSE-DATA)',
    '',
    '## Relationship to gtm-ai-stack',
    '',
    'This is a stricter, marketer-first subset of [`dapollonsky/gtm-ai-stack`](https://github.com/dapollonsky/gtm-ai-stack). The parent list covers sales and GTM plumbing in addition to marketing. If your question is "what can a marketer install tomorrow?" you\'re in the right place; if your question is "what\'s happening in AI for go-to-market broadly?" the parent list is broader.',
    '',
    '## Acknowledgements',
    '',
    'Prior work that informed scoping: [Specter — AI × GTM Landscape 2025](https://insights.tryspecter.com/ai-x-gtm-landscape-2025/), [joylarkin/Awesome-AI-Market-Maps](https://github.com/joylarkin/Awesome-AI-Market-Maps), [jmedia65/awesome-ai-marketing](https://github.com/jmedia65/awesome-ai-marketing), and the broader MCP community.',
    '',
  ]
    .filter((x) => x !== '')
    .join('\n');

  await fs.writeFile(README_PATH, md + '\n', 'utf8');

  await fs.mkdir(path.dirname(SITE_DATA_PATH), { recursive: true });
  const siteData = {
    built_at: today,
    categories: CATEGORIES,
    entries: entries.map((e) => ({ ...e, href: e.repo || e.url })),
    counts: {
      active: active.length,
      watchlist: watchlist.length,
      archived: archived.length,
    },
  };
  await fs.writeFile(SITE_DATA_PATH, JSON.stringify(siteData, null, 2) + '\n', 'utf8');

  const populatedCats = CATEGORIES.filter((c) => byCategory[c.id].length > 0).length;
  console.log(
    `✓ README.md + site/src/data/entries.json built — ${active.length} active across ${populatedCats}/${CATEGORIES.length} categories`
  );
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
