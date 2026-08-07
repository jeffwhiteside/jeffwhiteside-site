export interface Publication {
  readonly title: string;
  readonly venue: string;
  readonly citation: string;
  readonly summary: string;
  readonly url: string | null;
}

/**
 * Published work.
 *
 * One real publication. The reference mockup showed a list of dated blog posts; those were
 * fabricated and are not reproduced. If a blog is ever added it is a separate decision —
 * currently deferred in the roadmap.
 */
export const PUBLICATIONS = [
  {
    title: "Understanding the Leadership of Remote Work",
    venue: "Journal of Business and Educational Leadership",
    citation:
      "Jeffery Whiteside, “Understanding the Leadership of Remote Work,” " +
      "Journal of Business and Educational Leadership, 34(1), 147–160.",
    summary:
      "A published teaching case examining how authentic leadership can improve " +
      "remote-work outcomes.",
    url: null,
  },
] as const satisfies readonly Publication[];
