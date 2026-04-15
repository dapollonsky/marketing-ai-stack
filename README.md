# Marketing AI Stack
**AI tools, MCP servers, and Claude Code skills that plug into the tools marketers already use — and automate marketing work.**
27 active · 3 watchlist · 1 archived · built 2026-04-15
> This README is generated from [`data/entries/*.yaml`](data/entries). Do not edit it directly — open a PR against a YAML entry and CI will rebuild.
## What this is
An opinionated, curated list of AI tools that plug into the tools marketers already use — Google Ads, GA4, Notion, HubSpot, Webflow, Mailchimp, Search Console — and automate marketing work, not just assist it. Every entry has to answer one question: **what specific marketing task does this automate, and who benefits?**
The list is organised around the marketer's daily workflow, not the broader GTM funnel. Sales, customer success, and RevOps forecasting are explicitly out of scope — see [`gtm-ai-stack`](https://github.com/dapollonsky/gtm-ai-stack) for the wider view.
Three tiers live side-by-side:
1. **Integrations & substrate** — MCP servers and platforms that connect the marketer's existing tools (HubSpot, GA4, Webflow, Notion) to Claude, Cursor, and other agents.
2. **Agents & apps** — End-user tools that automate specific marketing jobs: content drafting, social scheduling, paid campaign management, competitor research.
3. **Skill packs & templates** — Claude Code skills and CrewAI/n8n templates — ready-to-install recipes for common marketing workflows.
What this is **not**: an AI-tool dump. See [`SCOPE.md`](SCOPE.md) for the editorial constitution and [`CONTRIBUTING.md`](CONTRIBUTING.md) to submit an entry.
## Why this exists
Most "AI for marketing" lists are either flat SaaS directories or broad GTM/agent catalogues. Neither is useful to a marketer trying to answer "what can I install this week to automate X?" This list applies a stricter test: every entry must integrate into a real marketer's daily workflow, automate actual work (not just add an AI sidebar), and be usable without a dedicated engineering team — a non-engineering marketer with moderate technical comfort should be productive with it within a week.
## Site
A searchable, filterable version of this list: **[dapollonsky.github.io/marketing-ai-stack](https://dapollonsky.github.io/marketing-ai-stack/)** _(live once GitHub Pages is enabled)_.
## Contents
- [Content](#content) — 2
- [SEO](#seo) — 5
- [Social](#social) — 4
- [Ads & Creative](#ads-creative) — 3
- [Email](#email) — 2
- [Marketing Analytics](#marketing-analytics) — 2
- [Research & Intelligence](#research-intelligence) — 1
- [Integrations & Substrate](#integrations-substrate) — 8
- [Watchlist](#watchlist)
- [Archive](#archive)
## Content

Long-form writing, blog drafting, copywriting, newsletter drafts, and video scripts — the work that fills the marketer's calendar.

| Project | Type | AI | MCP | Stars | Last commit | Why it matters |
|---|---|---|---|---|---|---|
| [ALwrity](https://github.com/AJaySi/ALwrity) | App | AI-native |  | 983 | 2026-04 | One of the few credible OSS alternatives to Jasper, Copy.ai, or Writer that a marketer can self-host today — install it once and stop paying per-seat for a writing tool. |
| [Microsoft Content Generation Accelerator](https://github.com/microsoft/content-generation-solution-accelerator) | Template | AI-native |  | 217 | 2026-04 | A reference architecture for enterprise teams spinning up an internal AI content factory — carries Microsoft's name and patterns, which matters for GTM engineers who have to ship inside a procurement-heavy org. |

## SEO

Keyword research, Search Console analysis, GEO (generative engine optimisation), and rank tracking for the AI-search era.

| Project | Type | AI | MCP | Stars | Last commit | Why it matters |
|---|---|---|---|---|---|---|
| [mcp-gsc](https://github.com/AminForou/mcp-gsc) | MCP | AI-enabled | ✓ | 689 | 2026-04 | Lets a marketer have the model narrate query performance, diagnose ranking drops, and suggest content fixes without opening GSC — the fastest way to turn weekly SEO review meetings into a single Claude thread. |
| [RustySEO](https://github.com/mascanho/RustySEO) | App | AI-enabled |  | 197 | 2026-04 | The most promising OSS Screaming Frog alternative with AI-era features — marketers get a native desktop app they own rather than a licensed per-seat crawler. |
| [DataForSEO MCP](https://github.com/dataforseo/mcp-server-typescript) | MCP | AI-enabled | ✓ | 176 | 2026-04 | The most comprehensive agent-ready SEO data layer — one MCP install gets a marketer the same data set Semrush and Ahrefs sell, usable from any MCP-capable client. |
| [SEO Research MCP](https://github.com/egebese/seo-research-mcp) | MCP | AI-enabled | ✓ | 171 | 2026-01 | Useful for marketing engineers who want to run Ahrefs-quality SEO research from inside Claude Code or Cursor — keeps the workflow in the editor instead of bouncing into Ahrefs' UI. |
| [GEO AI Agent](https://github.com/brightdata/geo-ai-agent) | Agent | AI-native |  | 153 | 2025-10 | Measures and improves how a brand shows up in ChatGPT, Perplexity, and Gemini answers — the first OSS answer to closed GEO tools as buyer research shifts from Google to LLM chats. |

## Social

Self-hosted social schedulers, short-form video generation, and community/Reddit research — post daily without a Buffer subscription.

| Project | Type | AI | MCP | Stars | Last commit | Why it matters |
|---|---|---|---|---|---|---|
| [MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | App | AI-native |  | 55.8k | 2026-04 | By far the most popular OSS pipeline for shipping TikToks and Shorts — rough edges, but lets a solo marketer go from topic to posted video without touching a timeline editor. |
| [Postiz](https://github.com/gitroomhq/postiz-app) | App | AI-enabled |  | 28.6k | 2026-04 | The clearest "replace Buffer" OSS story — very actively maintained, covers every channel a modern founder posts to, and keeps the content history and analytics on the team's own infrastructure. |
| [Viral Clips Crew](https://github.com/alexfazio/viral-clips-crew) | Template | AI-native |  | 755 | 2026-02 | The cleanest reference architecture for a video-repurposing agent — easy to fork for podcast or YouTube pipelines, so a single founder can run what used to be an editor's entire job. |
| [Reddit Research MCP](https://github.com/king-of-the-grackles/reddit-research-mcp) | MCP | AI-enabled | ✓ | 105 | 2025-12 | The bridge between agents and Reddit community intelligence — marketers surface real buyer language and pain points for content ideation and prospect research without paying for Reddit Pro or GummySearch. |

## Ads & Creative

Natural-language campaign management and ad creative generation across Google, Meta, TikTok, and LinkedIn.

| Project | Type | AI | MCP | Stars | Last commit | Why it matters |
|---|---|---|---|---|---|---|
| [Meta Ads MCP](https://github.com/pipeboard-co/meta-ads-mcp) | MCP | AI-enabled | ✓ | 776 | 2026-04 | The most-used bridge between agents and Meta Ads Manager — lets a paid marketer ask "which ad set is leaking spend" and get an answer back without clicking through seven Ads Manager tabs. |
| [Google Ads MCP](https://github.com/googleads/google-ads-mcp) | MCP | AI-enabled | ✓ | 377 | 2026-04 | Lets paid teams drive campaigns by natural language without learning the Google Ads UI — the biggest single time-saver for performance marketers running Search and Performance Max in 2026. |
| [Ads MCP (multi-platform)](https://github.com/amekala/ads-mcp) | MCP | AI-enabled | ✓ | 30 | 2026-04 | The fastest way to give an agent multi-channel paid read/write access from a single endpoint — one install unlocks the whole paid stack instead of running four separate MCP servers. |

## Email

Newsletter platforms, email marketing MCPs, and LLM-powered inbox triage — the email layer marketers actually ship from.

| Project | Type | AI | MCP | Stars | Last commit | Why it matters |
|---|---|---|---|---|---|---|
| [listmonk](https://github.com/knadh/listmonk) | App | Substrate |  | 19.5k | 2026-04 | Lets a content marketer run owned-audience newsletters at any list size without per-subscriber pricing, pairing cleanly with an LLM drafting step that hands finished HTML to listmonk for sending. |
| [Inbox Zero](https://github.com/elie222/inbox-zero) | App | AI-native |  | 10.5k | 2026-04 | Gives a founder-marketer a working triage layer over partnership pitches, press inquiries, and user replies so the inbox stops being the bottleneck on response time. |

## Marketing Analytics

LLM narratives over GA, PostHog, Mixpanel, and marketing mix modelling — ask questions about last week's funnel in plain English.

| Project | Type | AI | MCP | Stars | Last commit | Why it matters |
|---|---|---|---|---|---|---|
| [Google Analytics MCP](https://github.com/googleanalytics/google-analytics-mcp) | MCP | AI-enabled | ✓ | 1.8k | 2026-04 | Lets a growth marketer ask plain-English questions about sessions, conversions, and acquisition channels from Claude instead of building Explorations in the GA4 UI. |
| [Robyn](https://github.com/facebookexperimental/Robyn) | Library | Substrate |  | 1.4k | 2026-01 | Gives a performance marketer a defensible first-party MMM to allocate paid spend across channels without buying a six-figure consulting engagement from a legacy MMM vendor. |

## Research & Intelligence

Competitor monitoring, brand mentions, and market research agents — ambient intel that used to need a research intern.

| Project | Type | AI | MCP | Stars | Last commit | Why it matters |
|---|---|---|---|---|---|---|
| [Open Scouts](https://github.com/firecrawl/open-scouts) | Agent | AI-native |  | 1.3k | 2026-01 | Gives a competitive intel marketer a real agent loop for tracking competitor launches, brand mentions, and topic trends instead of curating a graveyard of Google Alerts. |

## Integrations & Substrate

MCP servers, aggregators, and platforms that plug the marketer's existing tools into Claude, Cursor, and other AI agents.

| Project | Type | AI | MCP | Stars | Last commit | Why it matters |
|---|---|---|---|---|---|---|
| [Mautic](https://github.com/mautic/mautic) | App | Substrate |  | 9.4k | 2026-04 | Lets a marketer own their whole automation stack — sequences, segmentation, landing pages — and layer any LLM or agent on top via the API, instead of paying Marketo or HubSpot Marketing Hub forever. |
| [Exa MCP](https://github.com/exa-labs/exa-mcp-server) | MCP | AI-enabled | ✓ | 4.3k | 2026-04 | The default search primitive for any prospect or account research agent — neural search returns the right company or news item on the first try where keyword search would miss it. |
| [Notion MCP](https://github.com/makenotion/notion-mcp-server) | MCP | AI-enabled | ✓ | 4.2k | 2026-03 | Makes Notion the live content and docs substrate for marketing agents — briefs, editorial calendars, and campaign specs become readable and writable by Claude or Cursor without copy-paste. |
| [Google Workspace MCP](https://github.com/taylorwilsdon/google_workspace_mcp) | MCP | AI-enabled | ✓ | 2.1k | 2026-04 | Replaces four or five separate Google integrations with one hardened server, so any GTM agent can read email threads, book meetings, and update spreadsheets without the team standing up its own OAuth gauntlet. |
| [Webflow MCP](https://github.com/webflow/mcp-server) | MCP | AI-enabled | ✓ | 122 | 2026-04 | Lets a content marketer update CMS entries, swap hero copy, and publish site changes from Claude or Cursor without opening the Webflow Designer for every small edit. |
| [Contentful MCP](https://github.com/contentful/contentful-mcp-server) | MCP | AI-enabled | ✓ | 50 | 2026-04 | Lets a marketing team query, draft, and publish headless CMS entries from any MCP-compatible agent so localization edits and campaign updates do not require shuttling tickets through engineering. |
| [HubSpot MCP](https://developers.hubspot.com/mcp) | MCP | AI-enabled | ✓ | — | — | Lets marketers and reps drive the entire HubSpot CRM from an agent without touching the native UI or waiting on Breeze — the default entry point for any HubSpot-shop GTM automation built in 2026. |
| [Zapier MCP](https://github.com/zapier/zapier-mcp) | Aggregator | AI-enabled | ✓ | — | — | Instantly gives an agent read/write access to Outreach, Salesloft, Front, Lemlist, ActiveCampaign, Marketo, Iterable, Close, and every other tool without a native MCP — the fastest way to backfill a long tail of GTM integrations. |

## Watchlist

Projects listed but not fully endorsed — stale maintenance, ToS risk, very early, or otherwise requiring caution.

- [AI-ContentCraft](https://github.com/nicekate/AI-ContentCraft) — A useful template for founders and marketing teams building content pipelines that span text and audio — one codebase to crib from instead of stitching Jasper and ElevenLabs together.
- [aiwriter](https://github.com/kristianfreeman/aiwriter) — A lightweight way for marketers and founders to produce SEO-aware long-form drafts without running their own GPU infrastructure — deploy it to a free Cloudflare account and start shipping posts the same day.
- [Klaviyo MCP Server](https://github.com/mattcoatsworth/Klaviyo-MCP-Server) — Lets a lifecycle marketer create flows, build segments, and trigger campaigns from a chat agent until Klaviyo ships an official server, closing the gap between briefs and shipped sends.

## Archive

Previously listed projects, now archived upstream or no longer maintained. Kept for historical reference.

- [PostHog MCP](https://github.com/PostHog/mcp) — Lets a growth marketer ask "which landing page converted best last week?" inside Claude and get a narrated answer with the underlying funnel, replacing a tab-juggling session in the PostHog UI.

## Editorial
- **[SCOPE.md](SCOPE.md)** — the editorial constitution (what is in, what is out, and why)
- **[CONTRIBUTING.md](CONTRIBUTING.md)** — how to submit, schema reference, PR rules
- **License** — code under [MIT](LICENSE); entry data under [CC-BY-SA 4.0](LICENSE-DATA)
## Relationship to gtm-ai-stack
This is a stricter, marketer-first subset of [`dapollonsky/gtm-ai-stack`](https://github.com/dapollonsky/gtm-ai-stack). The parent list covers sales and GTM plumbing in addition to marketing. If your question is "what can a marketer install tomorrow?" you're in the right place; if your question is "what's happening in AI for go-to-market broadly?" the parent list is broader.
## Acknowledgements
Prior work that informed scoping: [Specter — AI × GTM Landscape 2025](https://insights.tryspecter.com/ai-x-gtm-landscape-2025/), [joylarkin/Awesome-AI-Market-Maps](https://github.com/joylarkin/Awesome-AI-Market-Maps), [jmedia65/awesome-ai-marketing](https://github.com/jmedia65/awesome-ai-marketing), and the broader MCP community.
