export interface Publication {
  /** Locates `/writing/<slug>.pdf` and, optionally, `/writing/<slug>-cover.jpg`. */
  readonly slug: string;
  readonly title: string;
  readonly venue: string;
  readonly volume: string;
  readonly issue: string;
  readonly year: string;
  readonly citation: string;
  /** One paragraph per entry. */
  readonly summary: readonly string[];
  /** External hosted version (e.g. the journal's own page), if one exists. */
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
    slug: "leadership-of-remote-work",
    title: "Understanding the Leadership of Remote Work",
    venue: "Journal of Business and Educational Leadership",
    volume: "34",
    issue: "1",
    year: "2022",
    citation:
      "Jeffery Whiteside, “Understanding the Leadership of Remote Work,” " +
      "Journal of Business and Educational Leadership, 34(1), 147–160.",
    summary: [
      "My research into a question I've encountered throughout my career: What does " +
        "effective leadership look like when teams aren't in the same room?",
      "This teaching case explores authentic leadership in remote work environments and " +
        "how trust, communication, and leadership behavior influence the effectiveness of " +
        "distributed teams.",
    ],
    url: null,
  },
] as const satisfies readonly Publication[];
