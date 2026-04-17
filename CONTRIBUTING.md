# Contributing

Thanks for wanting to add something to `marketing-ai-stack`. Before you open a PR, read [SCOPE.md](./SCOPE.md) — if your submission does not pass the 3-filter test, it will be closed and logged in `rejected/<atom>.md` with the reason.

## What goes in

The short version of [SCOPE.md](./SCOPE.md):

1. **Daily workflow fit.** A marketer reaches for this during a regular marketing task.
2. **Automation, not assistance.** The tool drafts, creates, extracts, generates, ships. Canonicals must be at least 🟡 Augment.
3. **Marketer-achievable setup.** A non-engineering marketer with moderate technical comfort can be productive within a week.

Additional editorial bar for 2026:

- **You are submitting to an atom, not a category.** The atom you pick is the dedupe key. If the canonical for that atom already exists, your entry must either (a) serve a genuinely different persona (list as `alternate`) or (b) beat the current canonical head-to-head (promote + demote via PR).
- **Mediocre entries get rejected, not hidden.** "Similar to X but with fewer stars" is an auto-rejection. The rejection log (`rejected/<atom>.md`) is part of the product.

## Schema

[`data/schema.json`](./data/schema.json) is the source of truth. `npm run validate` runs it against every entry in `data/entries/`. If it fails locally, it fails in CI.

## Required fields

### Identity

- **`name`** — display name, max 80 chars. (e.g. `Postiz`)
- **`slug`** — kebab-case, must match filename. (e.g. `postiz.yaml` → `slug: postiz`)
- **`url`** — product home page or main docs. Must resolve.
- **`repo`** — GitHub repo URL. `null` allowed for hosted-only services.

### Taxonomy

- **`workflow`** — one of: `research`, `positioning`, `content`, `organic`, `social`, `paid`, `lifecycle`, `measurement`, `substrate`. Substrate is the appendix — for MCP bridges, platforms, and orchestrators, not marketer-facing workflows.
- **`atom`** — kebab-case atomic job. See the atom list below. If your submission doesn't fit an existing atom, propose a new atom in the PR description.
- **`rank`** — one of: `canonical`, `alternate`. Only one `canonical` per atom (validated).

### Tags

- **`type`** — one of `mcp`, `aggregator`, `agent`, `app`, `framework`, `skill-pack`, `template`, `cms`, `crm`, `library`, `plugin`.
- **`ai_nativeness`** — one of `ai-native`, `ai-enabled`, `substrate`.
- **`mcp_ready`** — boolean. `true` if the project is or ships an MCP server. Surfaces as 🔌 MCP badge.
- **`automation_depth`** — one of `automate`, `augment`, `assist`. Surfaces as 🟢🟡🔵 badge.

### Copy

- **`description`** — one sentence, 10–280 chars. What it is.
- **`why_it_matters`** — one sentence, 20–400 chars. **Names persona + atomic job + differentiation from canonical (or why it IS canonical).** Marketing adjectives rejected.
- **`closed_alternative`** — name the incumbent a marketer would otherwise pay for. Surfaces as "Replaces:" badge. `null` only when genuinely no incumbent exists.

### Stats and dates

- **`stats`** — auto-refreshed nightly. Leave as nulls at submission.
- **`submitted`** — today (YYYY-MM-DD).
- **`last_reviewed`** — today (YYYY-MM-DD). Re-dated on every curator review.
- **`status`** — one of `active`, `watchlist`, `archived`.

## The atom list

Pick exactly one atom. If two feel correct, the one closer to the marketer's primary daily task wins — or propose splitting the atom.

| Workflow | Atom | One-line test |
|---|---|---|
| research | `competitor-monitoring` | Can a marketer point it at a competitor list and get a weekly brief? |
| research | `customer-voice-extraction` | Does it turn calls/reviews/interviews into themes and quotes? |
| research | `icp-discovery` | Does it output a target account list from signals + firmographics? |
| research | `market-scans` | Does it produce a citation-backed research report? |
| positioning | `campaign-brief` | Goal + audience → full campaign brief? |
| positioning | `launch-messaging` | Product info → positioning / announcement copy? |
| positioning | `battlecard` | Competitor info → structured battlecard? |
| positioning | `icp-persona-docs` | Customer data → ICP + persona docs? |
| content | `long-form-drafting` | Topic → long-form blog or article draft? |
| content | `refresh-decay-audit` | URL + ranking data → specific edit recs? |
| content | `repurposing` | One asset → N channel-appropriate assets? |
| content | `case-study` | Transcript → polished case study? |
| organic | `keyword-research` | Topic → keyword cluster with volume/intent/difficulty? |
| organic | `on-page-seo-audit` | URL → ranked on-page fix list? |
| organic | `technical-seo-crawl` | Domain → technical crawl (schema, CWV, redirects)? |
| organic | `geo-aeo-citation-tracking` | Brand → citations in ChatGPT/Perplexity/AI Overviews over time? |
| organic | `internal-linking` | Content inventory → internal-link recommendations? |
| social | `multi-channel-scheduling` | Post → scheduled across IG/LI/X/TikTok/YouTube? |
| social | `long-to-shorts` | Long video → N shorts with captions? |
| social | `creator-outreach` | ICP → creator shortlist with contact/stats? |
| social | `community-reply` | Mentions/DMs → drafted on-brand replies? |
| paid | `ad-copy-variants` | Audience → matrix of headline/description variants? |
| paid | `ad-creative-variants` | Concept → image/video ad variants? |
| paid | `budget-rebalancing` | Paid account data → pause/rebalance recs or execution? |
| paid | `landing-page-from-brief` | Brief → working landing page? |
| paid | `ab-test-analysis` | Test data → winner + confidence + recommendation? |
| lifecycle | `welcome-nurture-sequence` | Product + audience → full multi-email sequence? |
| lifecycle | `list-segmentation` | Subscriber data → useful segments? |
| lifecycle | `newsletter-production` | Brief → newsletter-ready issue? |
| lifecycle | `inbox-triage` | Marketing inbox → categorized + drafted replies? |
| lifecycle | `deliverability-watchdog` | Sending infra → deliverability-degradation alerts? |
| measurement | `analytics-narration` | GA4/PostHog/Mixpanel data → plain-English weekly story? |
| measurement | `attribution-narration` | Multi-touch data → channel-contribution story? |
| measurement | `landing-page-test-analysis` | LP test data → winner + why? |
| measurement | `performance-report` | Channel data → stakeholder-ready report? |
| substrate | `mcp-bridge` | Is it an MCP server wrapping a tool a marketer already owns? |
| substrate | `platform` | Is it self-hosted marketing infrastructure (send layer, CMS, MA)? |
| substrate | `orchestrator` | Does it glue other tools (n8n-style, Zapier-style)? |

## How to write a good `why_it_matters`

A differentiation sentence, not a marketing sentence. The test: does it name (a) the persona, (b) the atomic job, and (c) why this wins over the canonical (or if this IS the canonical, why it wins over the field)?

- **Canonical example (good):** `The only OSS Meta Ads MCP with a verified Meta Business Partner badge, giving agents a clean API-compliance path to pause and rebalance without API bans. Credentials tier matters more than feature breadth here.`
- **Alternate example (good):** `Different license tradeoff from Postiz — MIT (vs. Postiz's AGPL-3.0). The pick when commercial resale or closed-source embedding matters and the AGPL virality would block you.`
- **Bad:** `Leverages AI to empower marketers to optimize their ad campaigns more efficiently.` — vague, passive, meaningless. Rejected.

If you can't write that sentence, the entry is not ready.

## If your entry's atom has a canonical already

You have two paths:

**Path A: Alternate.** Set `rank: alternate`. `why_it_matters` must start with "Different [persona/tradeoff/deployment/license] from \[canonical\]" and explain when the reader should pick yours instead. At most 2 alternates per atom — if there are 2 already, one has to go.

**Path B: Demote the canonical.** In the PR description, make the case that your entry beats the current canonical head-to-head. Include: activity comparison, feature delta, and a concrete scenario where the current canonical fails and yours succeeds. Set `rank: canonical` and demote the old one to `alternate` or add a note to `rejected/<atom>.md`. Curator will evaluate.

**No Path C.** "Another one in the same slot" is not acceptable.

## Local workflow

```bash
npm install
npm run validate   # schema + slug + one-canonical-per-atom checks
npm run build      # regenerates README.md
```

## PR review checklist

- [ ] `npm run validate` passes locally
- [ ] Entry is in exactly one atom and the atom fits
- [ ] `rank` is `canonical` (and no other canonical exists for the atom) or `alternate` (with a clear differentiation)
- [ ] `why_it_matters` names persona + atomic job + differentiation
- [ ] `closed_alternative` names a real incumbent (or is justifiably `null`)
- [ ] `automation_depth` is accurate — don't claim 🟢 Automate for a tool that can't run unattended
- [ ] Slug matches filename and is not a duplicate
- [ ] Link check passes
- [ ] Entry belongs per [SCOPE.md](./SCOPE.md)

## What auto-review does vs. what the curator does

**CI (auto-review):** schema validation, slug dedup, one-canonical-per-atom, build dry-run, link check, stale-check.

**The curator:** atom fit, `why_it_matters` quality, `closed_alternative` honesty, whether the entry beats the canonical or genuinely serves a different persona, fit with the editorial constitution.

CI catches shape. The curator catches substance. Substance is the product.
