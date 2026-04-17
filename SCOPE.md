# Scope

The curated list of AI tools, MCP servers, Claude skills, and agents that plug into a marketer's daily workflow and **have marketing work happen for them** — one canonical pick per atomic job.

## Thesis

`marketing-ai-stack` exists because the alternative is drowning. There are 90,000+ Claude skills on skills.sh, four competing marketing skill packs with 10k+ stars each, and three awesome-lists with "Marketing" subsections of three entries. Nobody ranks. Nobody publishes rejections. Everybody ships one more blog-writing tool.

The editorial wedge is: **opinion as mechanism.** I pick one canonical tool per atomic marketing job, show alternates only when they serve a genuinely different persona, and publish the rejection log for everything else. The list earns trust by what it leaves out.

## The 3-filter inclusion test

Every entry passes all three filters or it is rejected — and the rejection is recorded in `rejected/<atom>.md`.

### 1. Daily workflow fit

A real marketer reaches for this — or invokes it via MCP from Claude, Cursor, or another agent — during a regular marketing task. Not "an engineer could build something with it."

- **Pass:** A Google Ads MCP that lets a paid marketer ask Claude to pause underperforming ad groups and rebalance budgets without opening Ads Manager.
- **Fail:** A general-purpose web scraper — a marketer might benefit from the data, but will never use it directly.

### 2. Automation, not assistance

The tool removes work. It drafts the post, creates the campaign, extracts the GSC insight, generates the creative, ships the email. **Automation depth is surfaced as a badge** on every entry:

- **🟢 Automate** — agent runs it end-to-end; marketer reviews, doesn't drive.
- **🟡 Augment** — AI does 60–80% of keystrokes; marketer drives and polishes.
- **🔵 Assist** — AI helps at the margins.

Entries ranked `canonical` must clear at least 🟡 Augment. 🔵 Assist tools belong in substrate, not the front-page workflows.

### 3. Marketer-achievable setup

A non-engineering marketer with moderate technical comfort — edits a config file, pastes an API key, installs Claude Desktop, copies a Docker compose command from a README — can be productive within a week. If it needs Kubernetes literacy, it's out. Self-hosted apps are acceptable only when they are the only open option in their category.

## The taxonomy: workflows and atoms

The list is cut by **workflow**, not channel. Channel cuts ("SEO / social / email") leak redundancy — every contributor redraws the boundary slightly, so overlap accumulates. Atom cuts force the question: *does this tool serve a job no other listed tool serves?*

### The 8 workflow buckets (+ substrate appendix)

Each workflow contains atomic jobs. Every entry lives in exactly one atom.

| Workflow | Atoms |
|---|---|
| **Research & intelligence** | competitor-monitoring · customer-voice-extraction · icp-discovery · market-scans |
| **Positioning & strategy** | campaign-brief · launch-messaging · battlecard · icp-persona-docs |
| **Content production** | long-form-drafting · refresh-decay-audit · repurposing · case-study |
| **Organic discovery** | keyword-research · on-page-seo-audit · technical-seo-crawl · geo-aeo-citation-tracking · internal-linking |
| **Social & short-form video** | multi-channel-scheduling · long-to-shorts · creator-outreach · community-reply |
| **Paid acquisition** | ad-copy-variants · ad-creative-variants · budget-rebalancing · landing-page-from-brief · ab-test-analysis |
| **Lifecycle & email** | welcome-nurture-sequence · list-segmentation · newsletter-production · inbox-triage · deliverability-watchdog |
| **Measurement & narration** | analytics-narration · attribution-narration · landing-page-test-analysis · performance-report |
| **Substrate** *(appendix)* | mcp-bridge · platform · orchestrator |

### Why atoms, not channels

- **Dedupe is mechanical.** A new SEO tool must name an atomic job — on-page / technical crawl / GEO / keyword — that the current canonical doesn't cover, or beat the canonical head-to-head. Reviewer applies the test in 30 seconds.
- **Frontier categories have homes.** GEO/AEO citation tracking, attribution narration, refresh/decay audits — all named gaps that channel cuts hide.
- **Cross-cutting skills land cleanly.** Anthropic Marketing Plugin covers campaign-brief, launch-messaging, and battlecard; it's listed once under campaign-brief and cross-referenced from the other two.

## The canonical-alternate mechanism

Each atom has **exactly one canonical pick** — featured above the fold on the README. Alternates — up to two per atom — live in a `<details>` collapsible. Everything else goes in `rejected/<atom>.md` with a one-line verdict and a `reconsider if…` clause.

Rules:

1. **One canonical per atom.** Enforced by `scripts/validate.js`. If two tools genuinely serve different personas, **split the atom** rather than ship two canonicals. The taxonomy flexes; the rule doesn't.
2. **Alternates must be differentiated.** Different license, different persona, different deployment model, different tradeoff. "Similar but fewer stars" is not a differentiation.
3. **Canonicals can be demoted.** Quarterly re-review via `last_reviewed`; git history shows swaps. That's the source of long-term trust, not the first pick.
4. **Rejections are public.** Every `rejected/<atom>.md` is part of the editorial gate. If you disagree with a rejection, open a PR with the `reconsider if` condition that's been met.

## The `ai_nativeness` distinction

Orthogonal to automation depth, and still load-bearing for readers.

- **`ai-native`** — Architecture is AI-first. Remove the LLM and the product does nothing useful.
- **`ai-enabled`** — A pre-existing product that added AI features that materially changed the workflow.
- **`substrate`** — Not AI itself, but the foundation a marketer-facing AI tool depends on (listmonk, Ghost, Postal, crawl4ai).

Substrate entries live in the substrate appendix, not in workflow sections.

## Skills policy

Claude skill packs are where the list either becomes a directory of merit or a graveyard. Four rules, stricter than the main list:

1. **Narrowly-focused skill packs can be canonical.** If a skill pack scopes to one atom or one tightly-related cluster (claude-ads for ad-copy-variants, seo-geo-claude-skills for on-page-seo-audit), it's eligible.
2. **Mega-packs land as alternates under their primary atom.** coreyhaines31/marketingskills (36 skills) and the Anthropic Marketing Plugin (8+ skills) are cross-cutting — one entry per pack, primary atom chosen.
3. **Prefer MCP over skill when both exist.** MCPs are deterministic plumbing; skills are prompts. A marketer gets more reliability from an MCP. Skills graduate to canonical only when no comparable MCP exists.
4. **No overflow appendix.** Everything that doesn't fit goes into `rejected/` with a verdict. "Another blog-post generator" gets rejected on first sight.

## Anti-dump principles

The default failure mode for any list like this is entropy. These principles exist to stop that.

- **`why_it_matters` is mandatory and specific.** One sentence naming persona, atomic job, and differentiation from the canonical (or why it IS canonical). Marketing adjectives rejected.
- **`closed_alternative` is mandatory.** Named incumbent — Jasper, Buffer, Mailchimp, Ahrefs, Clay, Semrush, Optimizely. `null` is rare and scrutinized. Surfaces as the "Replaces:" badge.
- **Automated nightly pruning.** `scripts/fetch-stats.js` refreshes stars, last commit, and license for every entry with a repo URL.
- **Quarterly re-review.** `last_reviewed` dates drive a cadence. Entries past 90 days get flagged in CI.
- **Editorial judgement over breadth.** Two strong entries beat ten mediocre ones. If the atom doesn't have a credible canonical, it's an **open slot** — marked explicitly in the README, not filled with a mediocre pick.

## Removal policy

- **Upstream archived** → status flipped to `archived`; hidden from shortlist.
- **No commits in 180 days** → moved to `watchlist` for curator review; may return to `active`, graduate to `archived`, or be demoted to alternate.
- **Broken links** → automated PR opened by CI; curator fixes or removes.
- **Scope drift** → removed with a note in commit history and an entry in `rejected/<atom>.md`.

## Closed-source policy

Closed-source tools show up only as the value of `closed_alternative` — "Replaces: Jasper" — never as entries. The reader orients against the commercial landscape without the list becoming a promotion channel. If a closed tool later ships a meaningful open component, it can graduate to a full entry.

## Relationship to gtm-ai-stack

`marketing-ai-stack` is a tighter, marketer-first subset of [`gtm-ai-stack`](https://github.com/dapollonsky/gtm-ai-stack). The parent list maps the entire go-to-market funnel; this one strips to the surface a working marketer actually touches, with stricter filters and the atom-cut taxonomy. Want the broader picture? Read `gtm-ai-stack`. Want the shortlist of things that actually automate marketing work? Stay here.
