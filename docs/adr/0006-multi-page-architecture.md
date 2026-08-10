# ADR 0006: Move from a single page to a route per section

- Status: Accepted
- Date: 2026-08-07
- Supersedes: the single-page portion of [ADR 0003](0003-use-static-content-for-v1.md)

## Context

ADR 0003 established Version 1 as a single statically prerendered page with in-page anchor
navigation, and recorded that promoting a section to its own route later would be cheap
because each section was a self-contained component.

The owner subsequently requested that each section become its own page in its own file. This
is the scope change that ADR 0003 and the project roadmap both anticipated, now exercised.

The design research behind [design-brief.md](../design-brief.md) had argued for a single page,
on the grounds that the primary audience — hiring managers, executives, and recruiters — spends
under 60 seconds and scans rather than navigates. Splitting the content across routes puts
five clicks between a visitor and the full picture. That concern was raised before
implementation and the owner's decision stands.

## Decision

Each section becomes an App Router route: `/leadership`, `/experience`, `/projects`,
`/writing`, `/contact`. All remain statically prerendered.

The home page becomes a **cover and contents**: the hero, plus an index listing every section
with a one-line summary.

`src/content/sections.ts` becomes the route registry. It is the single source of truth for
ids, paths, titles, navigation labels, index summaries, and per-page meta descriptions.

## Rationale

- **The contents index preserves most of the scan.** The summary lines mean a visitor who
  never clicks still learns the shape of the site. This directly mitigates the cost of
  splitting the content.
- **The registry keeps routes and navigation in sync.** Pages, header navigation, and the
  index all derive from one array, so a link cannot point at a page that does not exist.
- **Per-page metadata is a genuine gain.** Each route now has its own title and description,
  which a single page cannot have. A recruiter can link directly to `/experience`.
- **Static output is unchanged.** All six routes prerender; there is no server runtime, no
  data fetching, and no new dependency.
- **Deep links become possible.** Sharing a specific page is more natural than sharing an
  anchor.

## Alternatives Considered

- **Keep the single page.** What the research recommended and what ADR 0003 chose. Rejected by
  the owner, who wants separate pages and separate files.
- **Single page plus duplicate routes for deep links.** Would satisfy both models but ships the
  content twice, creating duplicate-content signals and two places to edit every change.
- **Route groups with a shared scrolling layout.** Adds App Router complexity for no gain at
  this size.

## Consequences

- A visitor must navigate to see everything; the home page must carry enough summary to make
  that worthwhile. **If analytics ever show visitors not clicking through, this decision
  should be revisited** — measuring that would require adding analytics, which is deferred.
  *(Update: PostHog pageview analytics were added after this ADR was written — see
  docs/architecture.md. Click-through between sections specifically isn't instrumented yet,
  so the revisit trigger described here still hasn't been evaluated.)*
- Six routes to keep visually consistent instead of one page. `PageShell` exists to make that
  automatic.
- The in-page `Section` component and anchor navigation were removed. `scroll-mt` offsets and
  the smooth-scroll rule are now only relevant to same-page anchors, of which there are none.
- The skip link still targets `<main id="main">` on every route.
- No client components were introduced. The header has no active-page indicator, because each
  page's `<h1>` already tells a reader where they are, and adding one would mean a
  `"use client"` boundary for a redundant cue.
- Adding a section is still a one-entry change in `sections.ts`, plus one page file.
