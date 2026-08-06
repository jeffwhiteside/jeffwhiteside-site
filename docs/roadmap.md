# Roadmap

## Current iteration

**Iteration 1 — Repository, documentation, and project foundation.** Awaiting local review.

## Planned iterations

Version 1 is delivered in nine iterations. Each is reviewed locally, committed manually, and
reviewed again through a Vercel preview deployment before the next begins.

| #   | Iteration                          | Scope                                                                                  | Status      |
| --- | ---------------------------------- | -------------------------------------------------------------------------------------- | ----------- |
| 1   | Repository and foundation          | Next.js project, TypeScript, Tailwind, ESLint, docs, ADRs, design tokens, metadata       | In review   |
| 2   | Visual system and page skeleton    | Typography, spacing, colors, header, footer, empty semantic sections, anchor navigation  | Not started |
| 3   | Hero and leadership positioning    | Hero section, leadership focus areas                                                     | Not started |
| 4   | Selected experience                | CommandLink and Ritchie Bros. / Xcira entries                                            | Not started |
| 5   | Personal projects                  | Personal Time Tracker and RSS Reader entries, screenshot strategy                        | Not started |
| 6   | Publication and contact            | Published teaching case, contact section, final footer                                   | Not started |
| 7   | Content and visual refinement      | Consistency, hierarchy, spacing, copy cleanup — no new sections                          | Not started |
| 8   | Integration and quality review     | Responsive, accessibility, SEO, dependency and documentation audit                       | Not started |
| 9   | Production deployment preparation  | Favicon, OG image, production URL, DNS, production deployment                            | Not started |

## Future ideas

Possible after Version 1 ships. Each would need its own decision and, where architectural, an
ADR.

- A writing section or blog
- Project case-study detail pages
- A downloadable résumé
- Analytics
- An AI assistant
- Dark mode
- Speaking, mentoring, or advisory sections

## Explicitly deferred

Not implemented in Version 1. No infrastructure is being quietly prepared for any of them.

| Deferred item                       | Reason                                                                 |
| ----------------------------------- | ---------------------------------------------------------------------- |
| AI assistant                        | Not needed to support a job search; adds cost, latency, and risk        |
| Blog engine                         | No content pipeline yet; would drive an MDX and routing decision        |
| CMS                                 | Content changes are rare and the owner edits code directly              |
| Database                            | No dynamic data exists                                                  |
| Analytics                           | Keeps the privacy posture at zero data collection                       |
| Authentication                      | Nothing on the site is private                                          |
| Contact-form backend                | Email and LinkedIn are sufficient and require no server                 |
| Dark mode                           | Doubles visual review effort; light theme is the priority for V1        |
| Multiple page architecture          | A single page is the right scope for the audience                       |
| Project case-study pages            | Project content is still placeholder                                    |
| Interactive architecture diagrams   | Diagrams belong in documentation, not on a professional landing page    |
| Downloadable résumé                 | Needs a decision on hosting a PDF and keeping it current                |
| Automated test suite                | Disproportionate for a static page with no logic                        |
| Public display of internal docs     | Documentation is for the repository, not for site visitors              |

## Requires a separate decision before implementation

These need an explicit decision, and in most cases an ADR, before any work starts.

- **Publishing a résumé PDF** — hosting, versioning, and whether to gate it.
- **Adding a headshot** — not approved; no placeholder exists.
- **Publishing the phone number** — currently withheld by decision.
- **Project screenshots** — real assets are required; no invented imagery.
- **Live links for personal projects** — depends on whether those applications are publicly
  deployed and ready to be judged by a hiring manager.
- **Publication URL** — a link for the teaching case has not been supplied.
- **Moving from a single page to multiple routes** — would change the routing architecture.
