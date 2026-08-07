# jeffwhiteside.dev

The personal professional website for Jeff Whiteside, a software engineering leader based in
Tampa, Florida.

The site supports a senior engineering leadership job search. A home page carries the
positioning and a contents index; each section — leadership focus, selected experience,
projects, writing, contact — is its own statically prerendered route. It is intentionally
small: static content, no database, no CMS.

## Technology stack

| Concern     | Choice                                        |
| ----------- | --------------------------------------------- |
| Framework   | Next.js 16 (App Router)                       |
| Language    | TypeScript (strict)                           |
| Styling     | Tailwind CSS v4 (CSS-first `@theme` tokens)   |
| Linting     | ESLint 9 flat config (`eslint-config-next`)   |
| Runtime     | React 19                                      |
| Hosting     | Vercel                                        |

There are no runtime dependencies beyond Next.js and React. See
[docs/architecture.md](docs/architecture.md) for the reasoning.

## Local setup

Requires Node.js 20.9 or newer (developed on Node 24).

```bash
npm install
```

## Development commands

```bash
npm run dev     # start the dev server on http://localhost:3000
npm run build   # production build
npm start       # serve the production build (run npm run build first)
```

## Validation commands

Run all three before every commit. Lint and build failures are treated as blockers.

```bash
npm run lint       # ESLint
npm run typecheck  # next typegen && tsc --noEmit
npm run build      # production build (also type-checks)
```

`npm run build` performs its own type check, so `npm run typecheck` is mainly useful as a
fast standalone check during development.

`typecheck` runs `next typegen` first on purpose. Next.js 16 generates route-aware global
types (such as `LayoutProps<"/">`) into `.next/types`, which is gitignored. Without the
typegen step, `tsc --noEmit` fails on a clean checkout with `Cannot find name 'LayoutProps'`.

## Production build

```bash
npm run build
npm start
```

Then open http://localhost:3000. This is the closest local approximation of what Vercel
serves and is the recommended final check before pushing.

## Repository structure

```text
src/
  app/
    layout.tsx      root layout: fonts, metadata, header/footer, skip link
    page.tsx        home: hero + contents index
    globals.css     Tailwind import, design tokens, measures, base styles
    leadership/page.tsx   experience/page.tsx   projects/page.tsx
    writing/page.tsx      contact/page.tsx
  components/
    site-header.tsx sticky header and route navigation
    site-footer.tsx footer
    hero.tsx        home hero: portrait, headline, scope facts, calls to action
    contents-index.tsx  home index of every section
    page-shell.tsx  shared shell for section pages
    margin-layout.tsx   margin + main grid shared by every page
    portrait-placeholder.tsx  stand-in until a photograph is supplied
  content/
    sections.ts     route registry: ids, paths, titles, summaries, descriptions
    contact.ts      email, LinkedIn, location
docs/
  design-brief.md   design direction, palette, type scale, grid
  vision.md         purpose, audience, positioning, non-goals
  architecture.md   living architecture description and diagrams
  roadmap.md        iterations, future ideas, deferred features
  adr/              architecture decision records
.project/           local-only notes, not committed (see .gitignore)
```

Configuration lives at the repository root: `next.config.ts`, `tsconfig.json`,
`eslint.config.mjs`, `postcss.config.mjs`.

## Deployment

The site deploys to Vercel from `github.com/jeffwhiteside/jeffwhiteside-site`.

- Builds run `npm run build`; no custom build configuration and no `vercel.json` are required.
- No environment variables or secrets are used.
- The production domain is `jeffwhiteside.dev`.

**Vercel's Production Branch is `production`, not `main`.** That branch does not exist yet.
Consequently every push to `main` builds as a **Preview Deployment** and cannot reach the
production domain. Going live means creating `production` from an approved commit:

```bash
git switch -c production   # first release only
git push -u origin production
```

Afterwards, publishing is an explicit fast-forward of `production` — never a side effect of
pushing ordinary work. The reasoning is in
[docs/adr/0005-production-branch-release-model.md](docs/adr/0005-production-branch-release-model.md).

Iterations 1 through 8 are reviewed exclusively through preview deployments. Production
deployment happens in Iteration 9.

## Documentation

- [docs/vision.md](docs/vision.md) — what this site is for
- [docs/design-brief.md](docs/design-brief.md) — design direction, palette, typography, grid
- [docs/architecture.md](docs/architecture.md) — how it is built, with diagrams
- [docs/roadmap.md](docs/roadmap.md) — what is planned and what is deferred
- [docs/adr/](docs/adr/) — architecture decision records
- [PROJECT_NOTES.md](PROJECT_NOTES.md) — current status, assumptions, open questions
- [CHANGELOG.md](CHANGELOG.md) — what changed in each iteration
