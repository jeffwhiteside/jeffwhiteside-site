# ADR 0001: Use Next.js with the App Router

- Status: Accepted
- Date: 2026-08-06

## Context

The site needs a modern React framework that produces a fast, statically served page, is
straightforward to deploy, and is credible to a technical audience — hiring managers may look
at the repository as evidence of current technical judgment.

The content is essentially static today, but the structure should not block later additions
such as detail pages or a writing section.

## Decision

Use Next.js 16 with the App Router, TypeScript in strict mode, and React Server Components as
the default. Pages are statically prerendered at build time.

## Rationale

- **Static output without a static-site generator's ceiling.** Next.js prerenders the page to
  HTML, but adding a route, dynamic segment, or server-rendered page later requires no
  migration.
- **Server Components by default** means near-zero client JavaScript for content that never
  needs interactivity, which suits a text-heavy page.
- **First-class Vercel deployment.** Zero build configuration, automatic preview deployments
  per commit, and HTTPS with managed certificates.
- **Familiar and current.** The App Router is the supported convention in Next.js 16; building
  on the legacy Pages Router would signal the opposite of currency.
- **Built-in metadata API** handles title, description, and Open Graph tags without extra
  dependencies.

## Alternatives Considered

- **Astro.** Arguably a better fit for a content site and ships less JavaScript by default.
  Rejected because React and Next.js are directly relevant to the professional positioning,
  and the difference in delivered performance for one page is negligible.
- **Plain HTML and CSS.** The smallest possible solution and genuinely defensible. Rejected
  because it demonstrates the least about current technical capability and makes iterating on
  a component-based layout more tedious.
- **Vite plus React.** Would require assembling routing, metadata, and prerendering manually,
  and lacks the Vercel integration.
- **Next.js Pages Router.** Rejected as legacy for a greenfield project.

## Consequences

- Deployment, preview environments, and HTTPS are effectively free.
- The App Router's Server Component model must be understood; adding interactivity requires an
  explicit `"use client"` boundary. This is a benefit — it makes shipping client JavaScript a
  conscious act.
- Next.js is a substantial dependency for one page. Accepted knowingly: the framework's cost
  is borne at build time, and the served output is static.
- The project is coupled to Vercel for the smoothest path, though static output could be
  hosted elsewhere if needed.
