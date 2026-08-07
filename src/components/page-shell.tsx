import type { ReactNode } from "react";

interface PageShellProps {
  title: string;
  /** Optional lead paragraph shown under the page heading. */
  intro?: string;
  children: ReactNode;
}

/**
 * Shared shell for every section page: the page heading and vertical rhythm.
 *
 * Each page carries its own <h1>, which is also what tells a reader where they are — the
 * reason the header navigation does not need a client-side active state.
 */
export function PageShell({ title, intro, children }: PageShellProps) {
  return (
    <article className="page-container py-12 sm:py-16">
      <h1 className="text-section">{title}</h1>
      {intro ? <p className="measure-prose mt-4 text-muted">{intro}</p> : null}
      <div className="mt-10">{children}</div>
    </article>
  );
}
