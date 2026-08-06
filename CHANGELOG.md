# Changelog

Iteration-based history of the project. No release or version semantics.

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
