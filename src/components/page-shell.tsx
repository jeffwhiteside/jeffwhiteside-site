import type { ReactNode } from "react";

interface PageShellProps {
  title: string;
  /** Optional lead paragraph shown under the page heading. Accepts JSX (e.g. a literal
   * `<br />`) as well as plain text. */
  intro?: ReactNode;
  /** Short accent-coloured rule under the intro. Opt-in per page, off by default. */
  accentBar?: boolean;
  /** Lets the intro paragraph wrap at the full page width instead of the usual 40rem reading
   * measure. Opt-in per page, for intros too long to read well in a narrow column. */
  wideIntro?: boolean;
  children: ReactNode;
}

/**
 * Shared shell for every section page: the page heading and vertical rhythm.
 *
 * Each page carries its own <h1>, which is also what tells a reader where they are — the
 * reason the header navigation does not need a client-side active state.
 */
export function PageShell({
  title,
  intro,
  accentBar = false,
  wideIntro = false,
  children,
}: PageShellProps) {
  return (
    <article className="page-container py-12 sm:py-16">
      <h1 className="text-section">{title}</h1>
      {intro ? (
        <p className={`mt-4 text-muted ${wideIntro ? "" : "measure-prose"}`}>{intro}</p>
      ) : null}
      {accentBar ? (
        <span aria-hidden="true" className="mt-5 block h-1 w-10 rounded-full bg-accent" />
      ) : null}
      <div className="mt-10">{children}</div>
    </article>
  );
}
