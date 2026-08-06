# ADR 0004: No database or CMS for Version 1

- Status: Accepted
- Date: 2026-08-06

## Context

Personal sites frequently acquire a headless CMS or a database — often to enable a blog, a
contact form, or view counters. Each adds an account, a service dependency, credentials, and a
runtime failure mode.

This decision records deliberately declining that infrastructure, so the absence reads as a
choice rather than an omission.

## Decision

Version 1 has **no database, no headless CMS, no authentication, and no server-side data
access**. The application performs no runtime I/O of any kind.

Contact is handled by a `mailto:` link and a LinkedIn link rather than a form with a backend.

## Rationale

- **There is no dynamic data.** Nothing is user-specific, time-sensitive, or writable. A
  database would store content that a static file already holds correctly.
- **A CMS optimizes for the wrong problem.** Its value is letting non-technical editors change
  content without a deploy. The only editor here is the site's author, who is an engineer, and
  content changes a few times a year.
- **Operational cost is not free.** A hosted database or CMS means another account, another
  bill, credential rotation, a service that can be deprecated, and a dependency that can be
  down while the site is being reviewed by a hiring manager.
- **Security and privacy improve by subtraction.** With no data store, no forms, and no
  secrets, there is no credential to leak, no injection surface, and no personal data to
  protect.
- **A contact form is not worth a backend.** It would require spam protection, an email
  delivery provider, and error handling — to replicate what `mailto:` and LinkedIn already do,
  while giving the sender less confidence the message was received.
- **It is proportional.** Judgment about when *not* to add infrastructure is the point.

## Alternatives Considered

- **A headless CMS (Contentful, Sanity, Notion as a source).** Rejected: editor convenience
  the author does not need, at the cost of a service dependency and a build integration.
- **A managed database (Postgres, Supabase) for view counts or a guestbook.** Rejected: no
  audience need, and it would introduce data collection where there is currently none.
- **A contact form with a serverless function.** Rejected as described above.
- **A form service (Formspree, Netlify Forms).** Rejected: still a third-party dependency and
  still a privacy consideration, for no gain over `mailto:`.

## Consequences

- The site has no runtime dependencies and cannot fail because a third-party service is down.
- Hosting cost stays at zero on Vercel's free tier, with no scaling concerns for a static
  page.
- No cookie banner or privacy policy is required, because nothing is collected.
- Visitors must use email or LinkedIn to make contact. This is judged acceptable and arguably
  preferable for the intended audience, who overwhelmingly use LinkedIn already.
- Adding a blog later would require revisiting this decision — though MDX files in the
  repository would likely satisfy it without a CMS.
- Any future feature that needs persistence must supersede this ADR explicitly.
