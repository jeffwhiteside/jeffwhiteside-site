# Changelog

Iteration-based history of the project. No release or version semantics.

## Iteration 2

- Rebuilt the visual system against an owner-supplied mockup: navy and royal blue replacing
  the clay accent, a white canvas with grey section bands, centred section headings, a card
  treatment for parallel items, filled and outlined buttons, a JW monogram, and a small
  hand-drawn icon set.
- Rebuilt the home page as a full overview — hero, leadership focus, experience timeline, and
  featured projects — each linking to its own page for depth.
- Added typed content modules for leadership focus areas, experience, projects, and
  publications.
- Added an About route.
- Rebuilt the footer as a three-column band above a navy bar.
- Populated the layout with real content only. The mockup's employers, projects, blog posts,
  and quantified outcomes were fabricated and were not reproduced; no metric appears on the
  site.

- Made the name the page heading. The home `h1` is now "Jeff Whiteside" with a mono role line
  beneath it, and the positioning statement follows at a strong secondary size — a personal
  site should identify the person before the slogan.
- Added image support through `next/image`, with a three-tier resolver: the real asset, then a
  gitignored local stock placeholder for review, then a drawn outline. Stock imagery is never
  committed or deployed, and a missing asset degrades to the outline rather than a broken
  image.
- Added screenshot slots to each project entry.
- Rebuilt the footer to repeat the name and role alongside email and LinkedIn.
- **Split the site into a route per section** — `/leadership`, `/experience`, `/projects`,
  `/writing`, `/contact` — each in its own file, all statically prerendered. Recorded in
  ADR 0006, which supersedes the single-page portion of ADR 0003.
- Rebuilt the home page as a cover and contents: the hero plus an index listing every section
  with a one-line summary, so the shape of the site is legible without navigating.
- Added per-page titles and meta descriptions, with a title template in the root layout.
- Enlarged the portrait placeholder to a 4:5 editorial crop set beside the hero statement,
  with the scope facts beneath it.
- Replaced the in-page `Section` component with `PageShell`; removed anchor navigation.
- Added `docs/design-brief.md`, the design direction derived from a review of 21 comparable
  personal sites. Selected direction: editorial base with an Operating Notes margin column.
- Added the margin column, the design's one structural device: a `9rem` annotation track
  carrying the hero's scope numerals, collapsing to a stacked metadata line below `lg`. It
  carries factual annotation only; a block with nothing to annotate has an empty margin.
- Ran a design critique pass and applied the results: removed decorative section indices,
  replaced the circular initials portrait placeholder with an undesigned outlined square,
  demoted the LinkedIn link so exactly one accent call to action remains, dropped uppercase
  and wide tracking from the margin labels, removed a redundant border around the projects
  list, corrected six off-scale spacing values, halved the section rhythm from 192px to the
  specified 96px, and reduced three border radii to a single `2px`.
- Added the hero with a portrait placeholder, provisional headline and supporting copy,
  scope facts, and two calls to action.
- Changed the accent from deep teal to deep clay `#8a4b2a` to sit with the warm canvas.
- Narrowed the measures to 64rem page, 48rem content, 36rem prose, replacing the single
  56rem container — every editorial site reviewed was narrower.
- Widened the type scale so the hero is roughly 2.7x a section heading.
- Added `src/content/contact.ts` so contact details are defined once.
- Scaffolded three project slots as ruled rows rather than cards.
- Established the typographic system: Source Serif 4 for headings, Inter for body, both
  self-hosted at build time through `next/font`.
- Added the sticky site header with in-page section navigation.
- Added a simple site footer.
- Added semantic section containers for the hero, leadership focus, selected experience,
  projects, writing and publication, and contact, each with labeled placeholder content.
- Added `src/content/sections.ts` as the single source of truth for section ids, headings,
  and navigation labels, consumed by both the header and the page.
- Added a skip-to-content link, section landmarks, anchor scroll offsets, and reduced-motion
  handling for smooth scrolling.
- Moved site chrome into the root layout so the header and footer are shared by any future
  route.
- Recorded the release model in ADR 0005: Vercel's production branch is `production`, so
  pushes to `main` build as preview deployments.
- Updated the architecture documentation and the application-structure and deployment
  diagrams to match the implementation.

## Iteration 1

- Initialized the Next.js 16 application with the App Router, TypeScript in strict mode,
  Tailwind CSS v4, and ESLint 9 flat config.
- Added the root layout with site metadata, including Open Graph and Twitter card tags.
- Added a placeholder home page confirming the App Router, theme tokens, and build pipeline.
- Established the initial design tokens — warm neutral light palette with a single accent —
  as Tailwind v4 `@theme` variables, plus a global keyboard focus style.
- Added a `typecheck` script for standalone type checking.
- Added project documentation: `README.md`, `PROJECT_NOTES.md`, `CHANGELOG.md`,
  `docs/vision.md`, `docs/architecture.md`, and `docs/roadmap.md`.
- Added the initial architecture decision records covering Next.js, Tailwind CSS, static
  content for Version 1, and the choice of no database or CMS.
- Added Mermaid diagrams for system context, application structure, and deployment flow.
- Added `.gitignore`, excluding the local-only `.project/` directory.
