# jeffwhiteside.dev

The personal professional website for Jeff Whiteside, a software engineering leader based in
Tampa, Florida.

The site is a single, polished page supporting a senior engineering leadership job search. It
presents leadership focus areas, selected experience, personal projects, and a published
teaching case. It is intentionally small: static content, no database, no CMS.

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
    layout.tsx      root layout, <html>/<body>, site metadata
    page.tsx        the single page
    globals.css     Tailwind import, design tokens, base styles
docs/
  vision.md         purpose, audience, positioning, non-goals
  architecture.md   living architecture description and diagrams
  roadmap.md        iterations, future ideas, deferred features
  adr/              architecture decision records
.project/           local-only notes, not committed (see .gitignore)
```

Configuration lives at the repository root: `next.config.ts`, `tsconfig.json`,
`eslint.config.mjs`, `postcss.config.mjs`.

## Deployment

The site deploys to Vercel from this Git repository.

- Every pushed branch produces a **Preview Deployment** with its own URL.
- The production domain is `jeffwhiteside.dev`.
- Builds run `npm run build`; no custom build configuration is required.
- No environment variables or secrets are used.

Iterations 1 through 8 are reviewed exclusively through preview deployments. Production
deployment is configured in Iteration 9.

## Documentation

- [docs/vision.md](docs/vision.md) — what this site is for
- [docs/architecture.md](docs/architecture.md) — how it is built, with diagrams
- [docs/roadmap.md](docs/roadmap.md) — what is planned and what is deferred
- [docs/adr/](docs/adr/) — architecture decision records
- [PROJECT_NOTES.md](PROJECT_NOTES.md) — current status, assumptions, open questions
- [CHANGELOG.md](CHANGELOG.md) — what changed in each iteration
