# ADR 0003: Use static content and a single page for Version 1

- Status: Accepted
- Date: 2026-08-06

## Context

The site presents a fixed set of information: positioning, leadership focus areas, two
employers, two personal projects, one publication, and contact details. This content changes
rarely — a few times a year at most — and only the owner edits it.

A decision was needed on how content is stored and rendered, and whether Version 1 should be
one page or several.

## Decision

Version 1 is a **single statically prerendered page** with content authored directly in TSX.

Content is extracted into typed modules only where a component maps over a collection — for
example, experience entries or project cards. Prose that appears once stays inline in the
component that renders it.

Navigation between sections uses in-page anchors, not routes.

## Rationale

- **It matches how the audience reads.** Hiring managers and recruiters scan. A single page
  they can skim beats a navigation structure that hides content behind clicks.
- **Static prerendering is the correct rendering mode** when nothing is personalized,
  time-sensitive, or user-specific. Every visitor gets identical HTML from a CDN.
- **Content in TSX is honest about scale.** Six sections of copy do not justify a content
  pipeline. Adding Markdown parsing or a content layer now would be building a system to
  manage roughly two pages of text.
- **Typed content modules where it helps.** Defining an `ExperienceEntry` type and mapping
  over an array makes structural inconsistency a type error rather than a visual bug — worth
  it for repeated structures, not for one-off paragraphs.
- **The single-page choice is cheap to reverse.** Because each section is a self-contained
  component, promoting one to its own route later means moving a file and adding a segment.

## Alternatives Considered

- **Markdown or MDX content files.** Better separation of content from layout and more natural
  for prose. Rejected for Version 1: it adds a parsing dependency and a build step for a small
  amount of copy. This becomes the right answer if a blog is added.
- **A JSON or YAML content file.** Would separate content without a parser, but loses type
  safety at the boundary and makes inline links and emphasis awkward to express.
- **Multiple routes from the start** (`/experience`, `/projects`). Rejected as premature: it
  fragments a short story across pages and adds navigation state for no benefit.

## Consequences

- Editing copy means editing a `.tsx` file and redeploying. Acceptable — the owner is the only
  editor and is comfortable in the codebase.
- Content and presentation are partially coupled. Mitigated by extracting repeated structures
  into typed data.
- The whole page is one document, so section ordering is a code-level concern.
- Build output is fully static and can be served from a CDN with no server runtime.
- If content volume grows substantially, this decision should be revisited with a new ADR
  rather than stretched.
