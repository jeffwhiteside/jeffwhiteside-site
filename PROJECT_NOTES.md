# Project Notes

Working state of the project. Updated during every iteration, before the local review gate.

Last updated: 2026-08-07 (Iteration 2)

## Current project status

Iteration 2 is implemented and awaiting local review. It was revised twice mid-iteration:
first following design research, then following an owner-approved scope change to a
multi-page architecture.

The site now has six statically prerendered routes. The home page is a cover and contents —
hero, 4:5 portrait placeholder, scope facts, one call to action, and an index summarising
every section. Each section is its own page with its own title and meta description. All
section pages render clearly labeled placeholder content; no final copy has been written.

Design decisions follow [docs/design-brief.md](docs/design-brief.md): editorial base with a
margin annotation column, narrow measures, a wide type scale, and a clay accent.

Three items are pending from the owner and do not block the scaffolding: the portrait image,
the three project descriptions, and confirmation of the hero scope facts.

Iteration 1 was committed (`b78ab98`) and pushed. **Its Gate 3 deployment review was
deferred**, so no version of the site has yet been verified in a deployed environment. The
Vercel project setup was not confirmed and the Vercel CLI is not authenticated.

## Approved decisions

| Decision                                              | Where recorded                          |
| ----------------------------------------------------- | --------------------------------------- |
| Next.js 16 with the App Router, TypeScript strict      | ADR 0001                                |
| Tailwind CSS v4, CSS-first `@theme` tokens             | ADR 0002                                |
| Static content, single page for V1                     | ADR 0003                                |
| No database, CMS, auth, or contact-form backend        | ADR 0004                                |
| Vercel production branch is `production`, not `main`   | ADR 0005                                |
| Serif headings (Source Serif 4) + sans body (Inter)    | architecture.md, Typography             |
| Full nav at `md`+; Contact-only link below it          | `site-header.tsx`                       |
| Direction: editorial base + Operating Notes margin     | design-brief.md                         |
| Accent: navy `#16244d` + royal blue `#2f4fd8` (from mockup) | design-brief.md, Revision 2026-08-07 |
| Cards, buttons, icons reinstated per owner mockup      | design-brief.md, Revision 2026-08-07    |
| Portrait approved; photograph to be supplied           | design-brief.md, Photography            |
| Projects section kept, three or more entries           | design-brief.md                         |
| Leadership focus precedes Selected experience          | design-brief.md, Content hierarchy      |
| **Scope change:** each section is its own route        | ADR 0006 (supersedes part of ADR 0003)  |
| Polished light theme only; no dark mode in V1           | Vision, roadmap                         |
| No headshot, no stock photography                       | Not approved by owner                   |
| Phone number not published                              | Owner decision                          |
| Owner creates every Git commit; agent never commits     | Collaboration rules                     |
| Iterations 1–8 reviewed via Vercel preview deployments  | Collaboration rules                     |

## Environment facts

- Project root: `C:\Users\jeffw\OneDrive\dev\Website`
- GitHub: `https://github.com/jeffwhiteside/jeffwhiteside-site` (public, default branch `main`)
- Node 24.16.0, npm 11.13.0, git 2.24.1 (Windows)
- Vercel CLI 54.6.1 is installed but **not authenticated**. GitHub CLI (`gh`) is not installed.
- The parent folder `OneDrive\dev` is itself a Git repository (remote: `jeffwhiteside/curator`).
  `Website/` is excluded from it via `dev/.git/info/exclude` — a local-only exclusion that
  does not modify or dirty that repository.

## Important assumptions

1. The site is a personal, non-commercial professional presence; no legal or compliance
   review is expected.
2. Positioning, employment dates, and the publication citation were supplied by the owner and
   are treated as accurate. No metrics or outcomes are invented.
3. The repository is public, so the documentation in it — including this file — is visible to
   anyone, hiring managers included.
4. `jeffwhiteside.dev` is owned by the site owner and DNS can be pointed at Vercel in
   Iteration 9.
5. The audience uses modern evergreen browsers. No legacy browser support is targeted.
6. Copy is provisional until explicitly approved in the iteration that introduces it.

## Iteration status

- **Completed:** Iteration 1 — implemented, reviewed locally, committed, and pushed. Deployed
  review deferred rather than performed.
- **Current:** Iteration 2 — visual system and page skeleton (awaiting local review).
- **Remaining:** Iterations 3 through 9. See [docs/roadmap.md](docs/roadmap.md).

## Known placeholders

| Placeholder                                        | Resolved in              |
| -------------------------------------------------- | ------------------------ |
| Portrait — stock placeholder locally, real photo pending | Owner to supply     |
| Project screenshots — stock placeholders locally    | Owner to supply / Iteration 5 |
| Hero scope facts — **unconfirmed by owner**         | Owner to confirm         |
| Project names and all project detail (3 slots)      | Iteration 5              |
| Hero headline and supporting copy                   | Iteration 3              |
| Leadership focus content                            | Iteration 3              |
| Selected experience content                         | Iteration 4              |
| Projects content                                    | Iteration 5              |
| Writing and publication content                     | Iteration 6              |
| Contact content and final footer                    | Iteration 6              |
| `plannedIn` field in `sections.ts` (scaffolding)    | Removed per section      |
| No favicon or site icons                            | Iteration 9              |
| No Open Graph image                                 | Iteration 9              |
| Publication URL unknown                             | Iteration 6, if supplied |
| Project screenshots not supplied                    | Iteration 5              |
| Project repository and live URLs unknown            | Iteration 5              |

## Open questions

Needed from the owner, roughly in the order they become blocking:

1. **Portrait** — 4:5 crop, at least 720×900, saved to `public/jeff-whiteside.jpg`. It
   replaces the local stock placeholder automatically; no code change is needed. Project
   screenshots go to `public/projects/<slug>.jpg` at 16:10.

   **Local-only stock placeholders** live in `public/placeholder/` and are gitignored. They
   exist so layout can be judged against real photography during review. They are never
   committed and never deployed; without them the components fall back to a drawn outline.
   Delete the directory at any time to see exactly what a deployment renders.
2. **Hero scope facts** — the margin currently reads `20+ years`, `7 SaaS products`,
   `Eng · QA · Product`, `Tampa, Florida`. All are derived from the owner's own positioning
   material but none are explicitly confirmed. These are the most load-bearing statements on
   the page and should be verified before the site is public.
3. **Iteration 5** — three projects, not two. For each: name, problem solved, real
   technologies, repository visibility and URL, live URL if deployed, current status, and
   whether a screenshot exists.
2. **Iteration 6** — Is there a public URL or DOI for *Understanding the Leadership of Remote
   Work*?
3. **Iteration 9** — Is `jeffwhiteside.dev` registered, and where is DNS managed?
4. **Any iteration** — Confirm the GitHub repository name and whether it is public. A public
   repository is itself a positive signal for this audience, but it means the documentation in
   this repository is visible to hiring managers.

## Decisions needed from the owner

1. **Download Résumé** — the mockup shows this button. The roadmap defers a downloadable
   résumé, and there is no file to link to. Not implemented. Confirm whether to add it,
   which requires a PDF and a decision on keeping it current.
2. **"Beyond Work"** — the mockup's footer shows guitar and cooking interests. These were not
   supplied by the owner and are not assumed; the column renders a placeholder.
3. **GitHub link** — the header, hero, and footer link to `github.com/jeffwhiteside`. Confirm
   this is the right profile and that its public repositories are worth a hiring manager
   seeing.
4. **Role line** — the hero eyebrow reads "Engineering Leader. Product Partner. Builder."
   Taken from the mockup; confirm it is accurate.

## Known issues

- Lint, type check, and production build all pass.
- **Gate 3 has never been exercised.** No deployment of any iteration has been verified. The
  Vercel project may or may not exist, and the CLI is unauthenticated. This should be resolved
  before Iteration 2 is committed, so a preview can be reviewed while the skeleton is still
  cheap to change.
- The mobile header shows only a Contact link below the `md` breakpoint. Deliberate, but worth
  confirming during review.
- The header does not indicate the current page. Deliberate: it would require a client
  component for a cue each page's `<h1>` already provides.
- **Multi-page costs a click.** The design research concluded a single page suited a
  sub-60-second executive reader; five of six routes are now one navigation away. The home
  contents index mitigates this. Worth revisiting if it ever proves wrong — though measuring
  it would require analytics, which are deferred.
- No sitemap or `robots.txt`, which matters more with six routes than with one. Next.js can
  generate both with no dependency; candidate for Iteration 8 or 9.
- Section page copy such as the contents-index summaries is provisional and unreviewed.
- Watch item: the project lives inside a OneDrive-synced folder. OneDrive may attempt to sync
  `node_modules` and `.next`, which can cause slow rebuilds or intermittent file-lock errors
  on Windows. Excluding both folders from OneDrive sync is recommended if this appears.
