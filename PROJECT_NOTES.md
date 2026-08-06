# Project Notes

Working state of the project. Updated during every iteration, before the local review gate.

Last updated: 2026-08-06 (Iteration 1)

## Current project status

Iteration 1 is implemented and awaiting local review. The Next.js project is scaffolded,
tooling is configured, documentation is in place, and the application builds and runs. No
visible website sections exist yet — the page is a labeled placeholder.

## Approved decisions

| Decision                                              | Where recorded                          |
| ----------------------------------------------------- | --------------------------------------- |
| Next.js 16 with the App Router, TypeScript strict      | ADR 0001                                |
| Tailwind CSS v4, CSS-first `@theme` tokens             | ADR 0002                                |
| Static content, single page for V1                     | ADR 0003                                |
| No database, CMS, auth, or contact-form backend        | ADR 0004                                |
| Polished light theme only; no dark mode in V1           | Vision, roadmap                         |
| No headshot, no stock photography                       | Not approved by owner                   |
| Phone number not published                              | Owner decision                          |
| Owner creates every Git commit; agent never commits     | Collaboration rules                     |
| Iterations 1–8 reviewed via Vercel preview deployments  | Collaboration rules                     |

## Environment facts

- Project root: `C:\Users\jeffw\OneDrive\dev\Website`
- Node 24.16.0, npm 11.13.0, git 2.24.1 (Windows)
- Vercel CLI 54.6.1 is installed. GitHub CLI (`gh`) is **not** installed.
- The parent folder `OneDrive\dev` is itself a Git repository (remote: `jeffwhiteside/curator`).
  `Website/` is excluded from it via `dev/.git/info/exclude` — a local-only exclusion that
  does not modify or dirty that repository.

## Important assumptions

1. The site is a personal, non-commercial professional presence; no legal or compliance
   review is expected.
2. Positioning, employment dates, and the publication citation were supplied by the owner and
   are treated as accurate. No metrics or outcomes are invented.
3. The GitHub repository does not exist yet; the owner will create it and add the remote.
4. `jeffwhiteside.dev` is owned by the site owner and DNS can be pointed at Vercel in
   Iteration 9.
5. The audience uses modern evergreen browsers. No legacy browser support is targeted.
6. Copy is provisional until explicitly approved in the iteration that introduces it.

## Iteration status

- **Completed:** none.
- **Current:** Iteration 1 — repository, documentation, and project foundation (awaiting local
  review).
- **Remaining:** Iterations 2 through 9. See [docs/roadmap.md](docs/roadmap.md).

## Known placeholders

| Placeholder                          | Resolved in  |
| ------------------------------------ | ------------ |
| Home page content is a labeled stub  | Iterations 2–6 |
| No favicon or site icons             | Iteration 9  |
| No Open Graph image                  | Iteration 9  |
| Typography is a system font stack    | Iteration 2  |
| Publication URL unknown              | Iteration 6, if supplied |
| Project screenshots not supplied     | Iteration 5  |
| Project repository and live URLs unknown | Iteration 5 |

## Open questions

Needed from the owner, roughly in the order they become blocking:

1. **Iteration 5** — For Personal Time Tracker and RSS Reader: are the repositories public?
   Are the applications publicly deployed? What are the URLs? Which technologies were actually
   used? Screenshots, if any should be shown.
2. **Iteration 6** — Is there a public URL or DOI for *Understanding the Leadership of Remote
   Work*?
3. **Iteration 9** — Is `jeffwhiteside.dev` registered, and where is DNS managed?
4. **Any iteration** — Confirm the GitHub repository name and whether it is public. A public
   repository is itself a positive signal for this audience, but it means the documentation in
   this repository is visible to hiring managers.

## Known issues

- None currently. Lint, type check, and production build all pass.
- Watch item: the project lives inside a OneDrive-synced folder. OneDrive may attempt to sync
  `node_modules` and `.next`, which can cause slow rebuilds or intermittent file-lock errors
  on Windows. Excluding both folders from OneDrive sync is recommended if this appears.
