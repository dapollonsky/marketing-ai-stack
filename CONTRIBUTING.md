# Contributing

Thanks for wanting to add something to `marketing-ai-stack`. Before you open a PR, read [SCOPE.md](./SCOPE.md) — if your submission does not pass the 3-filter test, it will be closed.

## What goes in

[SCOPE.md](./SCOPE.md) is the editorial constitution. The short version:

1. **Daily workflow fit.** A real marketer reaches for this during a regular marketing task — writing copy, running ads, analyzing search, scheduling social, triaging email.
2. **Labor automation, not labor assistance.** The tool drafts, creates, extracts, generates, ships. It does not add an AI sidebar to a screen the marketer still has to drive.
3. **Marketer-achievable setup.** A non-engineering marketer with moderate technical comfort can be productive within a week — config files and API keys, not Kubernetes manifests.

## Schema

[`data/schema.json`](./data/schema.json) is the source of truth. `npm run validate` runs it against every entry in `data/entries/`. If it fails locally, it fails in CI.

## Required fields

### `name`
Display name, max 80 chars.
- **Good:** `Postiz`
- **Bad:** `Postiz — the open-source AI social scheduler that replaces Buffer` — marketing copy.

### `slug`
Kebab-case. Must match the YAML filename without `.yaml`.
- **Good:** `postiz` (file: `data/entries/postiz.yaml`)
- **Bad:** `Postiz_App` — wrong case, wrong separator.

### `kind`
One of `repo`, `hosted`, or `docs`.
- **Good:** `repo` for Postiz on GitHub; `hosted` for a SaaS that ships an open MCP server.
- **Bad:** `repo` on a closed SaaS with no source available.

### `url`
Product home page or main docs. Must resolve.
- **Good:** `https://postiz.com`
- **Bad:** `https://github.com/gitroomhq/postiz-app/blob/main/README.md#install` — deep link.

### `repo`
GitHub repo URL. Required when `kind=repo`.
- **Good:** `https://github.com/gitroomhq/postiz-app`
- **Bad:** `https://gitroom.com` — that is a company page.

### `category`
Exactly one of the eight categories in [SCOPE.md](./SCOPE.md). No cross-posting.

### `tags`
Six required keys: `type`, `personas`, `openness`, `maturity`, `ai_nativeness`, `mcp_ready`. `personas` draws from `marketer`, `gtm-eng`, and `founder` — not `sdr-ae` (that's a sales persona).

### `description`
One sentence, 10–280 chars. What it is.
- **Good:** `Self-hosted social scheduler that generates platform-tailored posts and ships them across Instagram, LinkedIn, X, and TikTok in one pass.`
- **Bad:** `The best AI-powered social media tool for modern marketing teams.`

### `closed_alternative`
Name the incumbent a marketer would otherwise pay for. See below.

### `stats`, `submitted`, `status`
Leave `stats` as `null` — `scripts/fetch-stats.js` fills them nightly. Set `submitted` to today and `status` to `active`.

## How to write a good `why_it_matters`

A job story compressed into one sentence. The test: can the reader name (a) the marketer persona, (b) the marketing task, and (c) the outcome after reading it once?

- **Good:** `Lets paid marketers rebalance their Google Ads budget from inside Claude without opening Ads Manager — one sentence ends where another five minutes of clicking would have gone.`
- **Bad:** `Leverages AI to empower marketers to optimize their ad campaigns more efficiently.` — vague, passive, meaningless. Rejected.

If you cannot write that sentence, the entry is not ready.

## How to pick a category

- Writing a blog post, newsletter, or video script? → **`content`**
- Keyword research, GSC analysis, GEO, rank tracking? → **`seo`**
- Scheduling posts, generating short-form video, mining Reddit? → **`social`**
- Managing or generating ad campaigns and creative? → **`ads`**
- Sending newsletters, drip campaigns, triaging the marketing inbox? → **`email`**
- Asking questions about GA / PostHog / Mixpanel in plain English? → **`analytics`**
- Watching competitors, brand mentions, market research? → **`research`**
- Connecting an existing marketing tool to Claude, Cursor, or another agent? → **`integrations`**

If two feel correct, pick the one closer to the marketer's primary daily task. A Reddit MCP server a content marketer uses to find topics goes in `integrations`; a Reddit research agent that ships a finished trend report goes in `research`.

## Closed alternative naming

Name the commercial product the prospective user would otherwise buy — a one-name answer to "what would I cancel to adopt this?"

- **Good:** `Jasper`, `Buffer`, `Mailchimp`, `Ahrefs`, `SEMrush`, `Clay`, `Hootsuite`, `Beehiiv`, `Surfer SEO`.
- **Bad:** `Various marketing tools` / `The legacy stack` — vague, rejected.
- **Acceptable `null`:** A first-of-its-kind MCP server with no commercial equivalent. Rare.

## Slug rules

- Kebab-case: lowercase letters, digits, hyphens.
- Must match the filename: `data/entries/<slug>.yaml`.
- Must be unique across the whole list.
- Prefer the project's canonical short name (`postiz`, not `postiz-social-app`).

## Local workflow

```bash
npm install
npm run validate   # schema + dedup check
npm run build      # regenerates README.md and site data
```

## PR review checklist

- [ ] `npm run validate` passes locally
- [ ] Entry is in exactly one of the eight categories and the category fits
- [ ] `why_it_matters` names a specific marketer persona, marketing task, and outcome
- [ ] `closed_alternative` names a real incumbent (or is justifiably `null`)
- [ ] Slug matches the filename and is not a duplicate
- [ ] Link check passes
- [ ] Entry belongs per [SCOPE.md](./SCOPE.md)

## What auto-review does vs. what the curator does

**CI (auto-review):** schema validation, slug dedup, build dry-run, link check, stale-check.

**The curator:** category fit, `why_it_matters` quality (persona + task + outcome), `closed_alternative` honesty, fit with the editorial constitution.

CI catches shape. The curator catches substance.
