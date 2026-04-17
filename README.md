```
  ┏┳┓┏━┓┏━┓┏┓┏┓┏━┓╺┳╸╻┏┓╻┏━╸   ┏━┓╻   ┏━┓╺┳╸┏━┓┏━╸╻┏
  ┃┃┃┣━┫┣┳┛┣┻┓┣╸  ┃ ┃┃┗┫┃╺┓╺━╸┣━┫┃╺━╸┗━┓ ┃ ┣━┫┃  ┣┻┓
  ╹ ╹╹ ╹╹┗╸┗━┛┗━┛ ╹ ╹╹ ╹┗━┛   ╹ ╹╹   ┗━┛ ╹ ╹ ╹┗━╸╹ ╹
```
_A running list of open-source tools that try to do marketing work end-to-end. One pick per job, where we can find one._
This list collects 18 open-source tools, MCP servers, and Claude skills grouped by the 8 workflows marketers tend to run: research, positioning, content, SEO, social, paid, lifecycle, and measurement. Each workflow breaks down into smaller jobs like keyword research, ad copy variants, or inbox triage. Where we found a pick we're happy to recommend, it's listed as the canonical. 14 jobs don't have a canonical yet and are marked open.
**How we try to pick.** We look for tools that (1) fit a daily marketing workflow, (2) do the work itself rather than just suggest it, and (3) can be installed by a non-engineering marketer in under a week. When 2 tools serve meaningfully different use cases, we list both. Tools we considered and passed on go in [rejected/](rejected/) with our reasoning, so you can disagree out loud if we got one wrong. We try to re-review picks quarterly.
**How to help.** If a pick is wrong, a tool we missed should be here, or an open slot has been filled, open a PR against a YAML file in [data/entries/](data/entries/) and the README regenerates from there. Full flow in [CONTRIBUTING.md](CONTRIBUTING.md). Corrections welcome.
## The shortlist
| Job | Install | Cancels |
|---|---|---|
| Competitor monitoring | [Open Scouts](https://github.com/firecrawl/open-scouts) | Crayon |
| Customer interviews | [noScribe](https://github.com/kaixxx/noScribe) | Otter.ai |
| Market research | [GPT Researcher](https://github.com/assafelovic/gpt-researcher) | Perplexity Pro |
| Briefs, messaging, battlecards | [Anthropic Marketing Plugin](https://github.com/anthropics/knowledge-work-plugins) | Jasper Brand Voice |
| Long blog posts | [ALwrity](https://github.com/AJaySi/ALwrity) | Jasper |
| Keyword research | [DataForSEO MCP](https://github.com/dataforseo/mcp-server-typescript) | Semrush |
| On-page SEO audits | [SEO & GEO Claude Skills](https://github.com/aaron-he-zhu/seo-geo-claude-skills) | Surfer SEO |
| Site crawls | [LibreCrawl](https://github.com/PhialsBasement/LibreCrawl) | Screaming Frog |
| Tracking LLM mentions | [GEO AI Agent](https://github.com/brightdata/geo-ai-agent) | Profound |
| Social scheduling | [Postiz](https://github.com/gitroomhq/postiz-app) | Buffer |
| Long video to shorts | [MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | Submagic |
| Ad copy variants | [claude-ads](https://github.com/AgriciDaniel/claude-ads) | Copy.ai |
| Ad creative variants | [ComfyUI](https://github.com/Comfy-Org/ComfyUI) | AdCreative.ai |
| Ad budget management | [Meta Ads MCP](https://github.com/pipeboard-co/meta-ads-mcp) | Meta Ads Manager UI |
| A/B test analysis | [GrowthBook](https://github.com/growthbook/growthbook) | Optimizely |
| Inbox triage | [Inbox Zero](https://github.com/elie222/inbox-zero) | Superhuman |
| Analytics summaries | [Google Analytics MCP](https://github.com/googleanalytics/google-analytics-mcp) | GA4 Explorations UI |
| Performance reports | [PyMC-Marketing](https://github.com/pymc-labs/pymc-marketing) | Nielsen MMM |
## Open slots

14 marketing jobs where we haven't found an OSS pick we're comfortable recommending yet. Closed tools tend to own these today (Clay for ICP discovery, Dreamdata for attribution, Profound for LLM citation tracking, Surfer for content updates, Modash for creator outreach). If you know of an OSS tool that fits, or you're building one, open a PR and we'll take a look.

ICP discovery · Customer personas · Updating old posts · Repurposing content · Case studies · Internal linking · Creator outreach · Community replies · Landing pages from a brief · Welcome email sequences · Email list segmentation · Newsletter writing · Deliverability monitoring · Attribution summaries.

Things we looked at and passed on live in [rejected/](rejected/) with our reasoning.
---
## Why each pick won
<details>
<summary>🔭 <strong>Research & intelligence</strong> (canonicals + alternates)</summary>

### Competitor monitoring

**Canonical:** [Open Scouts](https://github.com/firecrawl/open-scouts). Firecrawl-backed agent loop that watches topics on a schedule and emails weekly briefs. A real inbox deliverable, not another dashboard to check. <sub>🟢 Automate</sub>

**Also considered:**
- [changedetection.io](https://github.com/dgtlmoon/changedetection.io). Deterministic page diffs via XPath and CSS selectors, with webhooks on every change. Best for cheap, reliable monitoring piped into a custom downstream agent. <sub>🟢 Automate</sub>
- [FireGEO](https://github.com/firecrawl/firegeo). Firecrawl starter for tracking brand and competitor citations inside ChatGPT, Claude, and Perplexity answers. Best when GEO visibility is the KPI, not web pages. <sub>🟡 Augment</sub>

<sub>🗑️ [Rejected candidates](rejected/competitor-monitoring.md)</sub>

### Customer interviews

**Canonical:** [noScribe](https://github.com/kaixxx/noScribe). Local-first interview transcription with speaker diarization and a usable review editor. No cloud hop for sensitive customer calls. Everything downstream (themes, quotes, pain points) is a single LLM pass. <sub>🟢 Automate</sub>

**Also considered:**
- [Reddit Research MCP](https://github.com/king-of-the-grackles/reddit-research-mcp). MCP with semantic search across 20,000 subreddits and citations. Best for surfacing buyer language, objections, and phrasing from outside your own customer base. <sub>🟢 Automate · 🔌 MCP</sub>

<sub>🗑️ [Rejected candidates](rejected/customer-voice-extraction.md)</sub>

### ICP discovery

_No canonical yet._

<sub>🗑️ [Rejected candidates](rejected/icp-discovery.md)</sub>

### Market research

**Canonical:** [GPT Researcher](https://github.com/assafelovic/gpt-researcher). Autonomous research agent that does tree-like topic exploration and returns a citation-backed brief. 26k stars, actively maintained. Describe the market area, get a structured report back. <sub>🟢 Automate</sub>

**Also considered:**
- [LangChain Open Deep Research](https://github.com/langchain-ai/open_deep_research). Multi-agent research scaffold with MCP-native tool use and configurable report structures. For marketing engineers who want to tune the writer and planner stack. <sub>🟡 Augment · 🔌 MCP</sub>

<sub>🗑️ [Rejected candidates](rejected/market-scans.md)</sub>

</details>

<details>
<summary>🧭 <strong>Positioning & strategy</strong> (canonicals + alternates)</summary>

### Campaign briefs

**Canonical:** [Anthropic Marketing Plugin](https://github.com/anthropics/knowledge-work-plugins). First-party plugin from Anthropic covering campaign briefs, launch messaging, and battlecards in 1 install. Ships with MCP wiring to Notion, HubSpot, Ahrefs, and Supermetrics. <sub>🟢 Automate · 🔌 MCP</sub>

**Also considered:**
- [Corey Haines Marketing Skills](https://github.com/coreyhaines31/marketingskills). 36 Claude skills from a working SaaS marketer, structured around a shared product-marketing-context spine. Best for startup-flavored strategy rather than generic frameworks. <sub>🟢 Automate</sub>

<sub>🗑️ [Rejected candidates](rejected/campaign-brief.md)</sub>

### Launch messaging

**Canonical:** Covered by the *Anthropic Marketing Plugin* entry under Campaign briefs.

<sub>🗑️ [Rejected candidates](rejected/launch-messaging.md)</sub>

### Battlecards

**Canonical:** Covered by the *Anthropic Marketing Plugin* entry under Campaign briefs.

<sub>🗑️ [Rejected candidates](rejected/battlecard.md)</sub>

### Customer personas

_No canonical yet._

<sub>🗑️ [Rejected candidates](rejected/icp-persona-docs.md)</sub>

</details>

<details>
<summary>✍️ <strong>Content production</strong> (canonicals + alternates)</summary>

### Long blog posts

**Canonical:** [ALwrity](https://github.com/AJaySi/ALwrity). Self-hosted blog drafting that ships the full pipeline: research, outline, SEO scoring, publish. 1 Streamlit app, 20-minute install. <sub>🟡 Augment</sub>

**Also considered:**
- [Microsoft Content Generation Accelerator](https://github.com/microsoft/content-generation-solution-accelerator). Enterprise Azure AI Foundry pipeline with brief-to-asset agents and brand-compliance validation. For procurement-heavy orgs that need a Microsoft reference pattern. <sub>🟡 Augment</sub>

<sub>🗑️ [Rejected candidates](rejected/long-form-drafting.md)</sub>

### Updating old posts

_No canonical yet._

<sub>🗑️ [Rejected candidates](rejected/refresh-decay-audit.md)</sub>

### Repurposing content

_No canonical yet._

<sub>🗑️ [Rejected candidates](rejected/repurposing.md)</sub>

### Case studies

_No canonical yet._

<sub>🗑️ [Rejected candidates](rejected/case-study.md)</sub>

</details>

<details>
<summary>🔍 <strong>Organic discovery</strong> (canonicals + alternates)</summary>

### Keyword research

**Canonical:** [DataForSEO MCP](https://github.com/dataforseo/mcp-server-typescript). Commercial-grade SEO data via MCP. Volume, CPC, difficulty, all agent-ready. The data foundation Ahrefs and Semrush sell, reachable from any MCP client. <sub>🟢 Automate · 🔌 MCP</sub>

**Also considered:**
- [mcp-gsc](https://github.com/AminForou/mcp-gsc). MCP for Google Search Console with query performance, URL inspection, and sitemap status. Best for diagnosing your own ranking traffic rather than prospecting new keywords. <sub>🟢 Automate · 🔌 MCP</sub>

<sub>🗑️ [Rejected candidates](rejected/keyword-research.md)</sub>

### On-page SEO audits

**Canonical:** [SEO & GEO Claude Skills](https://github.com/aaron-he-zhu/seo-geo-claude-skills). Focused Claude skill pack with 20 SEO and GEO skills. On-page auditor runs against a URL from Claude Code with an EEAT and CITE scoring rubric. Narrow scope by design. <sub>🟢 Automate</sub>

<sub>🗑️ [Rejected candidates](rejected/on-page-seo-audit.md)</sub>

### Site crawls

**Canonical:** [LibreCrawl](https://github.com/PhialsBasement/LibreCrawl). Screaming Frog replacement. MIT-licensed, unlimited URLs, full technical coverage for redirects, canonicals, schema, and Core Web Vitals. Runs as desktop or web app. <sub>🟢 Automate</sub>

**Also considered:**
- [crawl4ai](https://github.com/unclecode/crawl4ai). LLM-friendly web crawler optimized for clean markdown and structured output. For marketing engineers composing custom SEO agents on top of a crawl layer. <sub>🟡 Augment · 🔌 MCP</sub>
- [RustySEO](https://github.com/mascanho/RustySEO). Rust and Tauri desktop SEO toolkit with a Nginx/Apache log-file parser LibreCrawl lacks. For log-based SEO forensics. <sub>🟡 Augment</sub>

<sub>🗑️ [Rejected candidates](rejected/technical-seo-crawl.md)</sub>

### Tracking LLM mentions

**Canonical:** [GEO AI Agent](https://github.com/brightdata/geo-ai-agent). Tracks how a brand shows up in ChatGPT, Perplexity, and Gemini answers over time. Bright Data scraper under a CrewAI loop. Category is still unsettled, so expect this entry to move as better tools ship. <sub>🟡 Augment</sub>

**Also considered:**
- [getcito](https://github.com/ai-search-guru/getcito-worlds-first-open-source-aio-aeo-or-geo-tool). Self-hostable web app for GEO tracking with run-over-run dashboards. For teams that want a deployable tool rather than a Claude thread. <sub>🟡 Augment</sub>

<sub>🗑️ [Rejected candidates](rejected/geo-aeo-citation-tracking.md)</sub>

### Internal linking

_No canonical yet._

<sub>🗑️ [Rejected candidates](rejected/internal-linking.md)</sub>

</details>

<details>
<summary>📱 <strong>Social & video</strong> (canonicals + alternates)</summary>

### Social scheduling

**Canonical:** [Postiz](https://github.com/gitroomhq/postiz-app). Self-hosted social scheduler across X, LinkedIn, Instagram, TikTok, YouTube, Threads, and Bluesky. Content history and analytics stay on the team's own infrastructure. Settled atom. <sub>🟢 Automate</sub>

**Also considered:**
- [LangChain Social Media Agent](https://github.com/langchain-ai/social-media-agent). LangGraph sourcing and drafting agent with Slack human-in-the-loop approval. For teams that want review queues before social sends rather than a calendar. <sub>🟢 Automate</sub>
- [Mixpost](https://github.com/inovector/mixpost). MIT-licensed social scheduler covering the same channels as Postiz. Best for commercial resale or closed-source embedding where AGPL would block you. <sub>🟢 Automate</sub>

<sub>🗑️ [Rejected candidates](rejected/multi-channel-scheduling.md)</sub>

### Long video to shorts

**Canonical:** [MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo). One-click AI short-video pipeline. Script, TTS, stock footage, subtitles, output. 55k stars, the category leader by a 100x margin. <sub>🟢 Automate</sub>

**Also considered:**
- [OpenShorts](https://github.com/mutonby/openshorts). Clips existing long-form video into shorts with YouTube Studio integration and no watermarks. For podcast and YouTube repurposing rather than topic-from-scratch generation. <sub>🟢 Automate</sub>
- [Viral Clips Crew](https://github.com/alexfazio/viral-clips-crew). CrewAI template for transcription, highlight selection, and cutting agents. A reference pattern for custom video pipelines, not a shipped product. Author describes it as "vibe-coded," so expect to maintain any fork yourself. <sub>🟡 Augment</sub>

<sub>🗑️ [Rejected candidates](rejected/long-to-shorts.md)</sub>

### Creator outreach

_No canonical yet._

<sub>🗑️ [Rejected candidates](rejected/creator-outreach.md)</sub>

### Community replies

_No canonical yet._

<sub>🗑️ [Rejected candidates](rejected/community-reply.md)</sub>

</details>

<details>
<summary>💰 <strong>Paid acquisition</strong> (canonicals + alternates)</summary>

### Ad copy variants

**Canonical:** [claude-ads](https://github.com/AgriciDaniel/claude-ads). Claude skill pack for ad copy audit and variant generation. Covers Google, Meta, YouTube, LinkedIn, TikTok, Microsoft, and Apple with weighted scoring. 2.6k stars, narrow scope. <sub>🟢 Automate</sub>

<sub>🗑️ [Rejected candidates](rejected/ad-copy-variants.md)</sub>

### Ad creative variants

**Canonical:** [ComfyUI](https://github.com/Comfy-Org/ComfyUI). Node-based visual workflow app for generative image and video. Used by professional creative teams at OpenAI, Netflix, EA, and Amazon Studios for batch ad-variant generation. Settled atom. <sub>🟡 Augment</sub>

<sub>🗑️ [Rejected candidates](rejected/ad-creative-variants.md)</sub>

### Ad budget management

**Canonical:** [Meta Ads MCP](https://github.com/pipeboard-co/meta-ads-mcp). Meta Business Partner-approved MCP for Facebook and Instagram ads. Clean API path and compliant credentials matter once an agent actually moves budget. <sub>🟡 Augment · 🔌 MCP</sub>

**Also considered:**
- [Ads MCP (multi-platform)](https://github.com/amekala/ads-mcp). Single MCP covering Google, Meta, LinkedIn, and TikTok Ads through one endpoint. Tradeoff is lower per-platform fidelity. For agents that need unified multi-channel access. <sub>🟡 Augment · 🔌 MCP</sub>
- [Google Ads MCP](https://github.com/googleads/google-ads-mcp). Google's first-party Apache-2.0 MCP covering campaigns, budgets, keywords, ad groups, and performance queries. Covers Search and Performance Max alongside Meta Ads MCP. <sub>🟡 Augment · 🔌 MCP</sub>

<sub>🗑️ [Rejected candidates](rejected/budget-rebalancing.md)</sub>

### Landing pages from a brief

_No canonical yet._

<sub>🗑️ [Rejected candidates](rejected/landing-page-from-brief.md)</sub>

### A/B test analysis

**Canonical:** [GrowthBook](https://github.com/growthbook/growthbook). Bayesian and frequentist experimentation platform with CUPED, sequential testing, SRM checks, and an official MCP. Handles LP and funnel tests end-to-end. Settled atom. <sub>🟢 Automate · 🔌 MCP</sub>

<sub>🗑️ [Rejected candidates](rejected/ab-test-analysis.md)</sub>

</details>

<details>
<summary>📬 <strong>Lifecycle & email</strong> (canonicals + alternates)</summary>

### Welcome email sequences

_No canonical yet._

<sub>🗑️ [Rejected candidates](rejected/welcome-nurture-sequence.md)</sub>

### Email list segmentation

_No canonical yet._

<sub>🗑️ [Rejected candidates](rejected/list-segmentation.md)</sub>

### Newsletter writing

_No canonical yet._

<sub>🗑️ [Rejected candidates](rejected/newsletter-production.md)</sub>

### Inbox triage

**Canonical:** [Inbox Zero](https://github.com/elie222/inbox-zero). Self-hosted AI email assistant with rules, auto-drafting, bulk unsubscribe, and a clean review UI. Clears partnership pitches, press inquiries, and user replies before the inbox becomes a bottleneck. <sub>🟡 Augment</sub>

**Also considered:**
- [mcp_agent_mail](https://github.com/Dicklesworthstone/mcp_agent_mail). Agent-to-agent mail layer exposed as an MCP server. For teams letting multiple agents coordinate over mail-like threads rather than triaging a human inbox. <sub>🟢 Automate · 🔌 MCP</sub>

<sub>🗑️ [Rejected candidates](rejected/inbox-triage.md)</sub>

### Deliverability monitoring

_No canonical yet._

<sub>🗑️ [Rejected candidates](rejected/deliverability-watchdog.md)</sub>

</details>

<details>
<summary>📊 <strong>Measurement</strong> (canonicals + alternates)</summary>

### Analytics summaries

**Canonical:** [Google Analytics MCP](https://github.com/googleanalytics/google-analytics-mcp). Google's official GA4 MCP server. Exposes reports, dimensions, and metrics over the Data API. Pairs with a weekly-summary skill for plain-English funnel stories. <sub>🟢 Automate · 🔌 MCP</sub>

**Also considered:**
- [PostHog MCP](https://github.com/PostHog/posthog). Official PostHog hosted MCP for events, funnels, cohorts, insights, and feature flags. For product-led teams where behavioral cohorts matter more than web analytics. <sub>🟢 Automate · 🔌 MCP</sub>

<sub>🗑️ [Rejected candidates](rejected/analytics-narration.md)</sub>

### Attribution summaries

_No canonical yet._

<sub>🗑️ [Rejected candidates](rejected/attribution-narration.md)</sub>

### Landing-page test analysis

**Canonical:** Covered by the *GrowthBook* entry under A/B test analysis.

<sub>🗑️ [Rejected candidates](rejected/landing-page-test-analysis.md)</sub>

### Performance reports

**Canonical:** [PyMC-Marketing](https://github.com/pymc-labs/pymc-marketing). Bayesian Marketing Mix Modeling and Customer Lifetime Value toolkit built on PyMC. Python-native, actively developed by PyMC Labs. Media-saturation and adstock transforms baked in. <sub>🟡 Augment</sub>

**Also considered:**
- [Robyn](https://github.com/facebookexperimental/Robyn). R-based Marketing Mix Modeling library from Meta with ridge regression, Nevergrad optimization, and a large practitioner community. For analytics teams already working in R. <sub>🟡 Augment</sub>

<sub>🗑️ [Rejected candidates](rejected/performance-report.md)</sub>

</details>

<details>
<summary>🧱 <strong>Substrate</strong> (MCP bridges, platforms, orchestrators)</summary>

_The plumbing. Not marketing work in itself, but every pick above runs on this layer._

**MCP bridges**

- ⭐ [Figma MCP](https://github.com/GLips/Figma-Context-MCP) — Community MCP server that exposes Figma frames, components, and designs to Claude/Cursor for design-to-code and creative review workflows.
- ⭐ [Exa MCP](https://github.com/exa-labs/exa-mcp-server) — Official Exa MCP server with neural web search, content extraction, and advanced filters for date, domain, and content type.
- ⭐ [Notion MCP](https://github.com/makenotion/notion-mcp-server) — Official Notion MCP server exposing 22 tools for pages, databases, blocks, comments, and users across a Notion workspace.
- ⭐ [Google Workspace MCP](https://github.com/taylorwilsdon/google_workspace_mcp) — Full Google Workspace MCP server with OAuth 2.1 multi-user support covering Gmail, Calendar, Drive, Docs, and Sheets behind a single endpoint.
- ⭐ [HubSpot MCP](https://developers.hubspot.com/mcp) — First-party HubSpot MCP (public beta) hosted at mcp.hubspot.com with tools for contacts, companies, deals, tickets, carts, products, orders, invoices, quotes, subscriptions, lists, and engagements.
-   [WordPress MCP Adapter](https://github.com/WordPress/mcp-adapter) — Official WordPress MCP adapter — the canonical bridge for agent-driven edits to WordPress sites, replacing the archived Automattic/wordpress-mcp repo.
-   [Airtable MCP](https://github.com/domdomegg/airtable-mcp-server) — Community MCP server for Airtable with read/write access to bases, tables, and records.
-   [Ghost MCP](https://github.com/MFYDev/ghost-mcp) — Community MCP server for Ghost — the canonical bridge between Claude/Cursor and Ghost's content and membership APIs.
-   [Webflow MCP](https://github.com/webflow/mcp-server) — Official Webflow MCP server for the Webflow Data API, exposing CMS items, collections, and site publishing actions to MCP-compatible agents.
-   [Contentful MCP](https://github.com/contentful/contentful-mcp-server) — Official Contentful MCP server for the Contentful Management API, giving agents access to spaces, content types, entries, and assets.
-   [Beehiiv MCP](https://github.com/danvega/beehiiv-mcp-server) — Community MCP server for Beehiiv's newsletter API, plus an official hosted Beehiiv MCP available for paid accounts.

**Self-hosted platforms**

- ⭐ [Ghost](https://github.com/TryGhost/Ghost) — Publishing platform with built-in newsletter, membership, and Stripe-backed subscriptions — the canonical OSS creator stack.
- ⭐ [listmonk](https://github.com/knadh/listmonk) — High-performance, self-hosted newsletter and mailing list manager that ships as a single Go binary with a modern dashboard.
-   [Postal](https://github.com/postalserver/postal) — Full-featured open-source mail server for outbound sending with bounce tracking, complaint handling, and deliverability dashboards.
-   [Mautic](https://github.com/mautic/mautic) — Leading open-source marketing automation platform with email sequences, workflows, forms, landing pages, and segmentation.
-   [Plunk](https://github.com/useplunk/plunk) — AWS SES-backed self-hosted email platform with a visual workflow builder, transactional + marketing sending, and a modern dashboard.

**Orchestrators**

- ⭐ [n8n](https://github.com/n8n-io/n8n) — Fair-code workflow automation tool with 400+ integrations, a visual node editor, and a growing library of AI and agent nodes.
- ⭐ [Zapier MCP](https://mcp.zapier.com) — Remote MCP server from Zapier that exposes 9,000+ apps and 40,000+ actions through a single endpoint.
-   [Activepieces](https://github.com/activepieces/activepieces) — Open-source no-code orchestrator positioned as a Zapier alternative with MIT-licensed pieces and an AI-agents module.
-   [Trigger.dev](https://github.com/triggerdotdev/trigger.dev) — TypeScript-native background jobs and scheduled agents framework with observability, retries, and long-running task support.

</details>

<details>
<summary>⚠️ <strong>Watchlist</strong> (3)</summary>

_On watch. Too stale, too young, or ToS-risky to canonize today._

- **[AI-ContentCraft](https://github.com/nicekate/AI-ContentCraft)** — A useful template for founders and marketing teams building content pipelines that span text and audio — one codebase to crib from instead of stitching Jasper and ElevenLabs together.
- **[aiwriter](https://github.com/kristianfreeman/aiwriter)** — A lightweight way for marketers and founders to produce SEO-aware long-form drafts without running their own GPU infrastructure — deploy it to a free Cloudflare account and start shipping posts the same day.
- **[Klaviyo MCP Server](https://github.com/mattcoatsworth/Klaviyo-MCP-Server)** — Lets a lifecycle marketer create flows, build segments, and trigger campaigns from a chat agent until the official Klaviyo hosted MCP is more widely rolled out — bridging the gap between briefs and shipped sends.

</details>

---
Last reviewed: 2026-04-17
[Scope](SCOPE.md) · [Contributing](CONTRIBUTING.md) · [gtm-ai-stack](https://github.com/dapollonsky/gtm-ai-stack) · [MIT](LICENSE) · [CC-BY-SA 4.0](LICENSE-DATA)
