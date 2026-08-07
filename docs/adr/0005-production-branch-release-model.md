# ADR 0005: Use a dedicated `production` branch for release promotion

- Status: Accepted
- Date: 2026-08-06

## Context

The project is built in reviewed iterations. Each iteration is reviewed locally, committed,
and then reviewed again as a deployed artifact before the next begins. Production deployment
to `jeffwhiteside.dev` happens once, in Iteration 9, and only on explicit approval.

Vercel's default Git behavior conflicts with this. On import, the repository's default branch
— `main` — becomes the **Production Branch**, so every push to `main` produces a *production*
deployment. Under that default, the routine act of pushing an iteration would publish it.

While no custom domain is attached the consequence is minor, but it becomes a real hazard the
moment `jeffwhiteside.dev` is connected. A decision was needed on how to separate "reviewed
work" from "published work".

## Decision

Set Vercel's **Production Branch** to `production`, a branch that does not yet exist.

- Day-to-day work is committed and pushed to `main`.
- Because `main` is no longer the production branch, each push builds as a **Preview
  Deployment** with its own immutable URL.
- In Iteration 9, `production` is created from the approved commit on `main`. That is the act
  of going live.
- Afterwards, publishing is an explicit fast-forward of `production` — never a side effect of
  pushing ordinary work.

## Rationale

- **Publishing becomes deliberate.** Going live requires a distinct, named action rather than
  being the default outcome of `git push`.
- **It matches the review process** rather than fighting it. The workflow already requires
  preview review for Iterations 1–8; this makes the tooling enforce that.
- **No branch overhead per iteration.** The alternative — a feature branch for each iteration
  — would also produce previews, but adds a branch and a merge to every cycle for a
  single-author repository.
- **`main` stays the working trunk**, which is what a reader of the repository expects. The
  release pointer is separate from the development branch.
- **Reversible in one setting.** If it proves awkward, changing the Production Branch back to
  `main` restores the default behavior with no code change.

## Alternatives Considered

- **Accept the default (`main` = production).** Simplest, and harmless until a domain is
  attached. Rejected: it means reviewing production deployments during a process that
  explicitly calls for previews, and it fails unsafely later rather than now.
- **A branch per iteration** (`iteration-2`, `iteration-3`, …) with `main` as production.
  Conventional and produces correct previews. Rejected as ceremony disproportionate to a
  single-author site — every iteration would need a branch, a push, and a merge.
- **Disconnect Git and deploy manually via the Vercel CLI.** Gives total control but loses
  automatic per-commit previews and the commit-to-deployment link, and depends on a
  local CLI session.
- **A Vercel deployment protection or promotion workflow.** More machinery than a personal
  site warrants.

## Consequences

- Every push to `main` yields a preview URL suitable for iteration review, and cannot reach
  the production domain.
- The Vercel dashboard will show **no production deployment** for this project until
  Iteration 9. This is expected, not a misconfiguration.
- Iteration 1 is the one exception: importing the project built `main` once as production
  before the setting could be changed. It landed on a `.vercel.app` URL with no custom domain
  attached and had no visitor-facing effect.
- Going live requires creating the `production` branch — a step that must be documented in the
  README before Iteration 9 so it is not a surprise.
- Preview URLs are unlisted but publicly reachable by anyone holding the link. Since all
  content here is intended to be public, this is acceptable.
