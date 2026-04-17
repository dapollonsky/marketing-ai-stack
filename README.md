```
  ┏┳┓┏━┓┏━┓┏┓┏┓┏━┓╺┳╸╻┏┓╻┏━╸   ┏━┓╻   ┏━┓╺┳╸┏━┓┏━╸╻┏
  ┃┃┃┣━┫┣┳┛┣┻┓┣╸  ┃ ┃┃┗┫┃╺┓╺━╸┣━┫┃╺━╸┗━┓ ┃ ┣━┫┃  ┣┻┓
  ╹ ╹╹ ╹╹┗╸┗━┛┗━┛ ╹ ╹╹ ╹┗━┛   ╹ ╹╹   ┗━┛ ╹ ╹ ╹┗━╸╹ ╹
```
One canonical OSS pick per marketing job. Editorial, not comprehensive. Rejections public.
## What to install
| Job | Install | Cancels |
|---|---|---|
| Competitor monitoring | [Open Scouts](https://github.com/firecrawl/open-scouts) | Crayon |
| Customer-voice extraction | [noScribe](https://github.com/kaixxx/noScribe) | Otter.ai |
| Market scans | [GPT Researcher](https://github.com/assafelovic/gpt-researcher) | Perplexity Pro |
| Briefs, messaging, battlecards | [Anthropic Marketing Plugin](https://github.com/anthropics/knowledge-work-plugins) | Jasper Brand Voice |
| Long-form drafts | [ALwrity](https://github.com/AJaySi/ALwrity) | Jasper |
| Keyword research | [DataForSEO MCP](https://github.com/dataforseo/mcp-server-typescript) | Semrush |
| On-page SEO audit | [SEO & GEO Claude Skills](https://github.com/aaron-he-zhu/seo-geo-claude-skills) | Surfer SEO |
| Technical SEO crawl | [LibreCrawl](https://github.com/PhialsBasement/LibreCrawl) | Screaming Frog |
| GEO / AEO citation tracking | [GEO AI Agent](https://github.com/brightdata/geo-ai-agent) | Profound |
| Multi-channel scheduling | [Postiz](https://github.com/gitroomhq/postiz-app) | Buffer |
| Long video → shorts | [MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | Submagic |
| Ad copy variants | [claude-ads](https://github.com/AgriciDaniel/claude-ads) | Copy.ai |
| Ad creative variants | [ComfyUI](https://github.com/Comfy-Org/ComfyUI) | AdCreative.ai |
| Budget rebalancing | [Meta Ads MCP](https://github.com/pipeboard-co/meta-ads-mcp) | Meta Ads Manager UI |
| A/B test analysis | [GrowthBook](https://github.com/growthbook/growthbook) | Optimizely |
| Inbox triage | [Inbox Zero](https://github.com/elie222/inbox-zero) | Superhuman |
| Analytics narration | [Google Analytics MCP](https://github.com/googleanalytics/google-analytics-mcp) | GA4 Explorations UI |
| Performance reports (MMM) | [PyMC-Marketing](https://github.com/pymc-labs/pymc-marketing) | Nielsen MMM |
**Open slots** (no OSS canonical yet): ICP discovery · ICP / persona docs · Refresh / decay audits · Repurposing · Case studies · Internal linking · Creator outreach · Community reply · Landing pages from brief · Welcome / nurture sequences · List segmentation · Newsletter production · Deliverability watchdog · Attribution narration.

See [rejected/](rejected/) for what we evaluated and didn't list.
---
## Detail
<details>
<summary>🔭 <strong>Research & intelligence</strong> — full detail & alternates</summary>

### Competitor monitoring

**Pick →** [Open Scouts](https://github.com/firecrawl/open-scouts) — The only OSS agent loop purpose-built for the "define a watch topic, get weekly briefs" job — backed by Firecrawl's scraping, with a real inbox deliverable instead of another dashboard to check. <sub>🟢 Automate</sub>

**Also consider:**
- [changedetection.io](https://github.com/dgtlmoon/changedetection.io) — When a marketer needs reliable, cheap, deterministic monitoring of competitor pricing pages, job boards, or changelogs — and will pipe the diffs through an LLM themselves — this is the pick where Open Scouts' prompt-loop would be overkill. <sub>🟢 Automate</sub>
- [FireGEO](https://github.com/firecrawl/firegeo) — Different surface than web monitoring — tracks share-of-voice inside LLM answer engines, which matters as buyer research shifts from Google to AI chats. Worth forking when GEO visibility is the KPI. <sub>🟡 Augment</sub>

<sub>🗑️ [Rejected candidates](rejected/competitor-monitoring.md)</sub>

### Customer-voice extraction

**Pick →** [noScribe](https://github.com/kaixxx/noScribe) — The only OSS tool that nails interview transcription end-to-end — speaker diarization, a usable review editor, and no cloud hop for sensitive customer calls. Everything downstream (themes, quotes, pain points) is then a single LLM pass. <sub>🟢 Automate</sub>

**Also consider:**
- [Reddit Research MCP](https://github.com/king-of-the-grackles/reddit-research-mcp) — Where noScribe handles your own calls, this surfaces raw buyer language in the wild — pain points, objections, and phrasing your prospects actually use. Complementary primitive for voice-of-customer work. <sub>🟢 Automate · 🔌 MCP</sub>

<sub>🗑️ [Rejected candidates](rejected/customer-voice-extraction.md)</sub>

### ICP discovery

**Pick →** _Open slot. No OSS canonical yet._

<sub>🗑️ [Rejected candidates](rejected/icp-discovery.md)</sub>

### Market scans

**Pick →** [GPT Researcher](https://github.com/assafelovic/gpt-researcher) — The most-adopted OSS deep-research agent — a marketer describes the market area, gets a structured brief with sources, and skips the afternoon of tab-juggling. Sets the bar others are measured against. <sub>🟢 Automate</sub>

**Also consider:**
- [LangChain Open Deep Research](https://github.com/langchain-ai/open_deep_research) — Where GPT Researcher is opinionated and turnkey, this is the pick for a marketing engineer who wants to customize the writer/planner stack or bolt in proprietary MCPs — different persona, different tradeoff. <sub>🟡 Augment · 🔌 MCP</sub>

<sub>🗑️ [Rejected candidates](rejected/market-scans.md)</sub>

</details>

<details>
<summary>🧭 <strong>Positioning & strategy</strong> — full detail & alternates</summary>

### Campaign briefs

**Pick →** [Anthropic Marketing Plugin](https://github.com/anthropics/knowledge-work-plugins) — First-party, Anthropic-maintained, and the new default as of the Cowork launch — spans campaign-brief, launch-messaging, and battlecard atoms with a single install. The substrate other strategy skill packs now compete against. <sub>🟢 Automate · 🔌 MCP</sub>

**Also consider:**
- [Corey Haines Marketing Skills](https://github.com/coreyhaines31/marketingskills) — Different persona from Anthropic's neutral plugin — opinionated SaaS-startup POV from a practitioner marketer. The pick when you want "this is what a startup CMO actually ships," not the textbook framework. <sub>🟢 Automate</sub>

<sub>🗑️ [Rejected candidates](rejected/campaign-brief.md)</sub>

### Launch messaging

**Pick →** Covered by *anthropic-marketing-plugin* — see [Campaign briefs](#campaign-brief).

<sub>🗑️ [Rejected candidates](rejected/launch-messaging.md)</sub>

### Battlecards

**Pick →** Covered by *anthropic-marketing-plugin* — see [Campaign briefs](#campaign-brief).

<sub>🗑️ [Rejected candidates](rejected/battlecard.md)</sub>

### ICP / persona docs

**Pick →** _Open slot. No OSS canonical yet._

<sub>🗑️ [Rejected candidates](rejected/icp-persona-docs.md)</sub>

</details>

<details>
<summary>✍️ <strong>Content production</strong> — full detail & alternates</summary>

### Long-form drafts

**Pick →** [ALwrity](https://github.com/AJaySi/ALwrity) — The most credible OSS Jasper/Copy.ai alternative a marketer can self-host today — research → outline → content → SEO → publish in one workflow. Nothing else in OSS ships this much of the long-form-drafting job end-to-end. <sub>🟡 Augment</sub>

**Also consider:**
- [Microsoft Content Generation Accelerator](https://github.com/microsoft/content-generation-solution-accelerator) — Different persona than ALwrity — enterprise Azure-based brief-to-asset pipeline with brand-compliance validation. The pick for procurement-heavy orgs that need a Microsoft pattern to ship inside. <sub>🟡 Augment</sub>

<sub>🗑️ [Rejected candidates](rejected/long-form-drafting.md)</sub>

### Refresh / decay audits

**Pick →** _Open slot. No OSS canonical yet._

<sub>🗑️ [Rejected candidates](rejected/refresh-decay-audit.md)</sub>

### Repurposing

**Pick →** _Open slot. No OSS canonical yet._

<sub>🗑️ [Rejected candidates](rejected/repurposing.md)</sub>

### Case studies

**Pick →** _Open slot. No OSS canonical yet._

<sub>🗑️ [Rejected candidates](rejected/case-study.md)</sub>

</details>

<details>
<summary>🔍 <strong>Organic discovery</strong> — full detail & alternates</summary>

### Keyword research

**Pick →** [DataForSEO MCP](https://github.com/dataforseo/mcp-server-typescript) — The only agent-ready data layer that actually returns commercial-grade volume/CPC/difficulty on par with Ahrefs or Semrush — one install gets a marketer the same data set the paid tools sell, usable from any MCP client. <sub>🟢 Automate · 🔌 MCP</sub>

**Also consider:**
- [mcp-gsc](https://github.com/AminForou/mcp-gsc) — Different tradeoff from DataForSEO — first-party GSC data for "what am I actually ranking for" rather than third-party volume for discovery. The pick when the job is diagnosing your own traffic rather than prospecting new keywords. <sub>🟢 Automate · 🔌 MCP</sub>

<sub>🗑️ [Rejected candidates](rejected/keyword-research.md)</sub>

### On-page SEO audit

**Pick →** [SEO & GEO Claude Skills](https://github.com/aaron-he-zhu/seo-geo-claude-skills) — The only OSS pack that ships an opinionated on-page audit runnable against a URL from Claude Code — skills-native, not a port of a 2018 CLI. Narrow scope is a feature; it competes only within SEO and wins the atom. <sub>🟢 Automate</sub>

<sub>🗑️ [Rejected candidates](rejected/on-page-seo-audit.md)</sub>

### Technical SEO crawl

**Pick →** [LibreCrawl](https://github.com/PhialsBasement/LibreCrawl) — The clearest Screaming Frog replacement on the market — MIT-licensed, unlimited URLs, and enough feature density to run a real technical audit without a per-seat license. <sub>🟢 Automate</sub>

**Also consider:**
- [crawl4ai](https://github.com/unclecode/crawl4ai) — Different persona from LibreCrawl — not an SEO tool per se, but the substrate most LLM-native SEO agents compose on top of for custom technical crawls. The pick for marketing engineers building bespoke audit flows. <sub>🟡 Augment · 🔌 MCP</sub>
- [RustySEO](https://github.com/mascanho/RustySEO) — Different tradeoff from LibreCrawl — Rust-native, ships a log-file parser (Nginx/Apache) that LibreCrawl lacks. The pick when the job is log-based SEO forensics. <sub>🟡 Augment</sub>

<sub>🗑️ [Rejected candidates](rejected/technical-seo-crawl.md)</sub>

### GEO / AEO citation tracking

**Pick →** [GEO AI Agent](https://github.com/brightdata/geo-ai-agent) — The most-deployed OSS pattern for querying multiple LLMs and diffing brand citations over time — Bright Data backing gives it a real scraper substrate the hobby projects lack. Canonical by default; field is unsettled and this entry is on review watch (last push Oct 2025). <sub>🟡 Augment</sub>

**Also consider:**
- [getcito](https://github.com/ai-search-guru/getcito-worlds-first-open-source-aio-aeo-or-geo-tool) — Different persona from GEO AI Agent — a deployable web app with dashboards rather than a CrewAI script. The pick for teams that want a tool, not a Claude thread. <sub>🟡 Augment</sub>

<sub>🗑️ [Rejected candidates](rejected/geo-aeo-citation-tracking.md)</sub>

### Internal linking

**Pick →** _Open slot. No OSS canonical yet._

<sub>🗑️ [Rejected candidates](rejected/internal-linking.md)</sub>

</details>

<details>
<summary>📱 <strong>Social & video</strong> — full detail & alternates</summary>

### Multi-channel scheduling

**Pick →** [Postiz](https://github.com/gitroomhq/postiz-app) — The clearest "replace Buffer" OSS story — 9× Mixpost's stars, covers every channel a modern founder posts to, and keeps the content history and analytics on the team's own infrastructure. Settled atom. <sub>🟢 Automate</sub>

**Also consider:**
- [LangChain Social Media Agent](https://github.com/langchain-ai/social-media-agent) — Different persona from Postiz — not a scheduler, a sourcing + drafting agent with approval queues. The pick when the job is "generate + curate" rather than "plan a calendar," and the team wants review before sends. <sub>🟢 Automate</sub>
- [Mixpost](https://github.com/inovector/mixpost) — Different license tradeoff from Postiz — MIT (vs. Postiz's AGPL-3.0). The pick when commercial resale or closed-source embedding matters and the AGPL virality would block you. <sub>🟢 Automate</sub>

<sub>🗑️ [Rejected candidates](rejected/multi-channel-scheduling.md)</sub>

### Long video → shorts

**Pick →** [MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) — By far the most popular OSS pipeline for shipping TikToks and Shorts — rough edges, but lets a solo marketer go from topic to posted video without touching a timeline editor. Category leader by a 100× margin on stars. <sub>🟢 Automate</sub>

**Also consider:**
- [OpenShorts](https://github.com/mutonby/openshorts) — Different tradeoff from MoneyPrinter — clip from real long-form video (podcasts, YouTube) rather than synthesize from a keyword. The pick for repurposing existing content, not spinning up new. <sub>🟢 Automate</sub>
- [Viral Clips Crew](https://github.com/alexfazio/viral-clips-crew) — The cleanest reference architecture for a video-repurposing agent — different deployment model from MoneyPrinter (template, not product). Author notes it's "vibe-coded," so fork it, don't expect upstream progress. <sub>🟡 Augment</sub>

<sub>🗑️ [Rejected candidates](rejected/long-to-shorts.md)</sub>

### Creator outreach

**Pick →** _Open slot. No OSS canonical yet._

<sub>🗑️ [Rejected candidates](rejected/creator-outreach.md)</sub>

### Community reply

**Pick →** _Open slot. No OSS canonical yet._

<sub>🗑️ [Rejected candidates](rejected/community-reply.md)</sub>

</details>

<details>
<summary>💰 <strong>Paid acquisition</strong> — full detail & alternates</summary>

### Ad copy variants

**Pick →** [claude-ads](https://github.com/AgriciDaniel/claude-ads) — The only OSS asset with meaningful mindshare built specifically for ad copy — opinionated prompts, not a framework. Narrow scope plus early traction (2.6k stars in weeks) makes it the pick for "generate + score ad variants at scale." <sub>🟢 Automate</sub>

<sub>🗑️ [Rejected candidates](rejected/ad-copy-variants.md)</sub>

### Ad creative variants

**Pick →** [ComfyUI](https://github.com/Comfy-Org/ComfyUI) — The only OSS substrate professional creative teams (OpenAI, Netflix, EA, Amazon Studios) actually use for batch ad-variant generation at scale — everything else is a hosted SaaS wrapper around it. Settled atom. <sub>🟡 Augment</sub>

<sub>🗑️ [Rejected candidates](rejected/ad-creative-variants.md)</sub>

### Budget rebalancing

**Pick →** [Meta Ads MCP](https://github.com/pipeboard-co/meta-ads-mcp) — The only OSS Meta Ads MCP with a verified Meta Business Partner badge, giving agents a clean API-compliance path to pause and rebalance without API bans. Credentials tier matters more than feature breadth here. <sub>🟡 Augment · 🔌 MCP</sub>

**Also consider:**
- [Ads MCP (multi-platform)](https://github.com/amekala/ads-mcp) — Different deployment model — multi-platform, one endpoint. Tradeoff is lower per-platform fidelity and no partner tier. The pick when an agent needs unified access and you can live with less polish per channel. <sub>🟡 Augment · 🔌 MCP</sub>
- [Google Ads MCP](https://github.com/googleads/google-ads-mcp) — Different channel than Meta Ads MCP — Google-official, Apache-2.0. Pair with Meta Ads MCP to cover the two dominant paid channels. Biggest time-saver for performance teams running Search and Performance Max. <sub>🟡 Augment · 🔌 MCP</sub>

<sub>🗑️ [Rejected candidates](rejected/budget-rebalancing.md)</sub>

### Landing pages from brief

**Pick →** _Open slot. No OSS canonical yet._

<sub>🗑️ [Rejected candidates](rejected/landing-page-from-brief.md)</sub>

### A/B test analysis

**Pick →** [GrowthBook](https://github.com/growthbook/growthbook) — Settled winner for LP and funnel A/B testing — proper stats, ships its own MCP for agents to summarize experiments and declare winners, and no OSS competitor is remotely close. Pair with any copy-variant skill. <sub>🟢 Automate · 🔌 MCP</sub>

<sub>🗑️ [Rejected candidates](rejected/ab-test-analysis.md)</sub>

</details>

<details>
<summary>📬 <strong>Lifecycle & email</strong> — full detail & alternates</summary>

### Welcome / nurture sequences

**Pick →** _Open slot. No OSS canonical yet._

<sub>🗑️ [Rejected candidates](rejected/welcome-nurture-sequence.md)</sub>

### List segmentation

**Pick →** _Open slot. No OSS canonical yet._

<sub>🗑️ [Rejected candidates](rejected/list-segmentation.md)</sub>

### Newsletter production

**Pick →** _Open slot. No OSS canonical yet._

<sub>🗑️ [Rejected candidates](rejected/newsletter-production.md)</sub>

### Inbox triage

**Pick →** [Inbox Zero](https://github.com/elie222/inbox-zero) — Mature, self-hostable, and 10k+ stars with real momentum — the only OSS inbox-triage app with rules, auto-draft, unsubscribe, and bulk processing wired together. Gives a founder-marketer a working triage layer over partnership pitches and press inquiries. <sub>🟡 Augment</sub>

**Also consider:**
- [mcp_agent_mail](https://github.com/Dicklesworthstone/mcp_agent_mail) — Different persona from Inbox Zero — the pick when the job is letting multiple agents coordinate over mail-like threads, not triaging a human inbox. Emerging pattern for Claude Code-heavy marketing teams. <sub>🟢 Automate · 🔌 MCP</sub>

<sub>🗑️ [Rejected candidates](rejected/inbox-triage.md)</sub>

### Deliverability watchdog

**Pick →** _Open slot. No OSS canonical yet._

<sub>🗑️ [Rejected candidates](rejected/deliverability-watchdog.md)</sub>

</details>

<details>
<summary>📊 <strong>Measurement</strong> — full detail & alternates</summary>

### Analytics narration

**Pick →** [Google Analytics MCP](https://github.com/googleanalytics/google-analytics-mcp) — Official, Apache-2.0, and GA4 is the data source most marketers actually have. Paired with a weekly-summary skill it produces plain-English funnel stories — replaces an afternoon of building Explorations in the GA4 UI. <sub>🟢 Automate · 🔌 MCP</sub>

**Also consider:**
- [PostHog MCP](https://github.com/PostHog/posthog) — Different persona from GA4 MCP — product analytics with behavioral cohorts GA4 can't see. The pick for product-led teams. (Server lives in the PostHog monorepo; the standalone PostHog/mcp repo was archived and folded in.) <sub>🟢 Automate · 🔌 MCP</sub>

<sub>🗑️ [Rejected candidates](rejected/analytics-narration.md)</sub>

### Attribution narration

**Pick →** _Open slot. No OSS canonical yet._

<sub>🗑️ [Rejected candidates](rejected/attribution-narration.md)</sub>

### Landing-page test analysis

**Pick →** Covered by *growthbook* — see [A/B test analysis](#ab-test-analysis).

<sub>🗑️ [Rejected candidates](rejected/landing-page-test-analysis.md)</sub>

### Performance reports (MMM)

**Pick →** [PyMC-Marketing](https://github.com/pymc-labs/pymc-marketing) — The actively developed Bayesian-correct replacement for Meta's Robyn — Python-native, supported by PyMC Labs, and the right substrate for defensible channel-contribution reporting. Pair with an LLM for the narration layer. <sub>🟡 Augment</sub>

**Also consider:**
- [Robyn](https://github.com/facebookexperimental/Robyn) — Different stack from PyMC-Marketing — R-based, Meta-backed, with a large existing practitioner community. Pick it when the team already runs R or needs Meta's specific parameterizations, but watch for staleness (last commit early 2026). <sub>🟡 Augment</sub>

<sub>🗑️ [Rejected candidates](rejected/performance-report.md)</sub>

</details>

<details>
<summary>🧱 <strong>Substrate</strong> — MCP bridges, platforms, orchestrators</summary>

_Not marketing jobs. The plumbing underneath: connectors to tools marketers already use, self-hosted platforms, and orchestration layers._

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

_Flagged but not fully endorsed — stale, ToS risk, or very early._

- **[AI-ContentCraft](https://github.com/nicekate/AI-ContentCraft)** — A useful template for founders and marketing teams building content pipelines that span text and audio — one codebase to crib from instead of stitching Jasper and ElevenLabs together.
- **[aiwriter](https://github.com/kristianfreeman/aiwriter)** — A lightweight way for marketers and founders to produce SEO-aware long-form drafts without running their own GPU infrastructure — deploy it to a free Cloudflare account and start shipping posts the same day.
- **[Klaviyo MCP Server](https://github.com/mattcoatsworth/Klaviyo-MCP-Server)** — Lets a lifecycle marketer create flows, build segments, and trigger campaigns from a chat agent until the official Klaviyo hosted MCP is more widely rolled out — bridging the gap between briefs and shipped sends.

</details>

---
[Scope](SCOPE.md) · [Contributing](CONTRIBUTING.md) · [gtm-ai-stack](https://github.com/dapollonsky/gtm-ai-stack) · [MIT](LICENSE) · [CC-BY-SA 4.0](LICENSE-DATA)
