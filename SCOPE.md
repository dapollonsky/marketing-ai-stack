# Scope

The curated list of AI tools, MCP servers, and Claude Code skills that plug into the tools marketers already use — and automate marketing work, not just assist it.

## Thesis

`marketing-ai-stack` is for the marketer who wants the AI to do the work, not narrate it. Every entry earns its place by slotting into a real marketing workflow — drafting a post, rebalancing Google Ads, pulling GSC insights, scheduling a week of Instagram — and removing labor from it. Tools that only "empower" the marketer to keep clicking do not belong here. Tools that need a six-engineer integration before a marketer ever touches them do not belong here either.

## The 3-filter inclusion test

An entry must pass all three filters or it is rejected on review.

### 1. Daily workflow fit

A real marketer opens this — or invokes it via MCP from Claude Desktop, Cursor, or another agent — during a regular marketing task. The test is whether you can imagine the marketer reaching for it on a Tuesday, not whether an engineer supporting marketing could theoretically build something with it.

- **Pass:** A Google Ads MCP that lets a paid marketer ask Claude to pause underperforming ad groups and rebalance budgets without opening Ads Manager.
- **Fail:** A general-purpose web scraper — a marketer might benefit from the data, but will never use it directly.

### 2. Labor automation, not labor assistance

The tool removes work. It drafts the post, creates the campaign, extracts the GSC insight, generates the creative, ships the email. It does not add an "AI" sidebar to a screen the marketer still has to drive.

- **Pass:** Postiz, a self-hosted social scheduler that generates platform-tailored posts and schedules them across Instagram, LinkedIn, X, and TikTok in one pass.
- **Fail:** A WordPress plugin that adds a "Suggest title with AI" button to the post editor. The marketer is still writing the post manually.

### 3. Marketer-achievable setup

A non-engineering marketer with moderate technical comfort — edits a config file, pastes an API key, installs Claude Desktop, copies a Docker compose command from a README — can be productive within a week. Self-hosted apps (Postiz, Mautic, listmonk) are acceptable *only* when they are the only open option in their category. If the project requires Kubernetes literacy, it is out.

- **Pass:** A Claude Code skill-pack for SEO audits that ships as a one-line install and documented slash commands.
- **Fail:** A bare LangChain example that requires the marketer to write prompt templates, pick a vector store, and manage tool routing.

## What's explicitly excluded

- **Sales-side tools.** SDR agents, cold-outbound sequencers, sales prospecting, meeting recorders, RFP writers, deal desks, sales-only CRMs (Salesforce, Attio, Close, Pipedrive, HubSpot Sales Hub).
- **Customer success, support, RevOps forecasting.** Out of scope here and in the parent `gtm-ai-stack`.
- **Generic agent frameworks without shipped marketing templates.** CrewAI as substrate, LangChain, Mastra. They belong on a generic AI list.
- **Developer primitives.** Vector databases, scrapers, generic LLM wrappers — allowed only as the single direct substrate a marketing tool in scope depends on.
- **Pure LLM wrappers with no clear marketing job.** Another ChatGPT prompt collection is not an entry.
- **Closed-source SaaS.** Mentioned in Market Context only — no full entries.

## The 8-category taxonomy

Every entry lives in exactly one category. Pick the primary marketing job. Cross-posting is not allowed.

- **`content` — Content** — Long-form writing, blog drafting, copywriting, newsletter drafts, and video scripts — the work that fills the marketer's calendar.
- **`seo` — SEO** — Keyword research, Search Console analysis, GEO (generative engine optimisation), and rank tracking for the AI-search era.
- **`social` — Social** — Self-hosted social schedulers, short-form video generation, and community/Reddit research — post daily without a Buffer subscription.
- **`ads` — Ads & Creative** — Natural-language campaign management and ad creative generation across Google, Meta, TikTok, and LinkedIn.
- **`email` — Email** — Newsletter platforms, email marketing MCPs, and LLM-powered inbox triage — the email layer marketers actually ship from.
- **`analytics` — Marketing Analytics** — LLM narratives over GA, PostHog, Mixpanel, and marketing mix modelling. Ask questions about last week's funnel in plain English.
- **`research` — Research & Intelligence** — Competitor monitoring, brand mentions, and market research agents — ambient intel that used to require a research intern.
- **`integrations` — Integrations & Substrate** — MCP servers, aggregators, and platforms that plug the marketer's existing tools into Claude, Cursor, and other AI agents.

## The `ai_nativeness` distinction

Every entry is tagged with one of three values. Load-bearing for readers deciding what to trust.

- **`ai-native`** — Architecture is AI-first. Remove the LLM and the product does nothing useful. Postiz is the clean example: post generation, scheduling, and per-platform tailoring all run on model calls.
- **`ai-enabled`** — A pre-existing product that added AI features that materially changed the workflow. Mautic with LLM content suggestions and segment summarization sits here.
- **`substrate`** — Not AI itself, but the foundation a marketer-facing AI tool depends on. listmonk is canonical: a self-hosted newsletter sender that becomes the backbone for AI newsletter workflows shipping to real audiences.

## Anti-dump principles

The default failure mode for any list like this is entropy. These principles exist to stop that.

- **`why_it_matters` is mandatory and specific.** One sentence naming persona, task, and outcome. Marketing adjectives get rejected.
- **`closed_alternative` is mandatory unless genuinely none exists.** Name the incumbent — Jasper, Buffer, Mailchimp, Ahrefs, Clay, SEMrush. `null` is rare and scrutinized.
- **Automated nightly pruning.** `scripts/fetch-stats.js` refreshes stars, last commit, and license for every `kind=repo` entry. Stale entries get flagged.
- **Editorial judgement over breadth.** Two strong entries beat ten mediocre ones.

## Removal policy

- **Upstream archived** → status flipped to `archived`, hidden from default views.
- **No commits in 180 days and not tagged `reference`** → moved to `watchlist` for curator review; may return to `active` or age out.
- **Broken links** → automated PR opened by CI; curator fixes or removes.
- **Scope drift** (project pivots away from marketing) → removed with a note in the commit history.

## Closed-source policy

Closed-source tools that dominate a category get exactly one line in a **Market Context** section at the top of the relevant category. Format: name, one-sentence description, link. No tags, no stars. This exists so readers can orient against the commercial landscape — Jasper, Buffer, Ahrefs, Mailchimp — not to promote closed products. If a closed tool later ships a meaningful open component, it can graduate to a full entry.

## Relationship to gtm-ai-stack

`marketing-ai-stack` is a tighter, marketer-first subset of [`gtm-ai-stack`](https://github.com/dapollonsky/gtm-ai-stack). The parent list maps the entire go-to-market funnel — prospecting, outbound, meetings, closing, plumbing — across nine categories, many of them tools a sales engineer would touch before a marketer ever sees them. This list strips that down to the surface area a working marketer actually opens, with a stricter daily-workflow filter and a marketer-achievable setup bar. Want the full GTM picture? Read `gtm-ai-stack`. Want the shortlist of things that automate marketing work? Stay here. The two share schema, tooling, and editorial discipline; they differ in where the cut-off line sits.
