# ADR 0002: Use Tailwind CSS

- Status: Accepted
- Date: 2026-08-06

## Context

The site needs a consistent visual system — typography scale, spacing rhythm, a small color
palette, and reliable responsive behavior — without adopting a component library, which is
explicitly out of scope.

The visual direction calls for restraint: strong typography, generous whitespace, one accent
color. The styling approach has to make consistency easy and drift hard.

## Decision

Use Tailwind CSS v4 with its CSS-first configuration. Design tokens are declared in an
`@theme` block in `src/app/globals.css`. There is no `tailwind.config.ts`.

## Alternatives Considered

- **Plain CSS Modules.** No dependency and full control. Rejected because maintaining a
  consistent spacing and type scale by hand across sections invites drift, and responsive
  variants become verbose.
- **A component library (shadcn/ui, MUI, Chakra).** Explicitly out of scope. A personal site
  with no forms, modals, or data tables needs almost nothing these libraries provide, and
  their visual defaults are recognizable — the opposite of a distinct professional presence.
- **CSS-in-JS (styled-components, Emotion).** Adds a runtime dependency and works against
  Server Components. Rejected.
- **Vanilla Extract or Panda CSS.** Reasonable type-safe options, but they add build
  complexity for a site this small.

## Rationale

- **Tokens are the design system.** Values registered in `@theme` become utilities
  automatically, so `--color-ink` yields `text-ink` and `bg-ink`. There is one place to change
  the palette, and no way to use an off-palette color without noticing.
- **Constrained by default.** Tailwind's spacing and type scales prevent the arbitrary
  one-off values that make a hand-rolled stylesheet inconsistent.
- **No runtime cost.** Tailwind is a build-time dependency. The browser receives plain CSS,
  and unused utilities are never emitted.
- **v4 needs no JavaScript config.** Configuration lives in the stylesheet next to the base
  styles, which is one less file and one less indirection.
- **Responsive and state variants are inline**, which keeps a component's full behavior
  readable in one place — valuable when sections are reviewed one at a time.

## Consequences

- Markup carries long `className` strings. Accepted; the tradeoff is that behavior is local
  and visible rather than hidden in a separate file.
- Tailwind v4's CSS-first configuration differs from the v3 JavaScript config most existing
  documentation describes. Anyone reading this repository should expect `@theme`, not
  `tailwind.config.ts`.
- A global `:focus-visible` rule is defined in `@layer base` rather than repeated per
  component, so accessibility does not depend on remembering a utility class.
- If the site later adopts dark mode, the token block is the natural seam — overriding the
  same variables under `prefers-color-scheme` rather than rewriting components.
