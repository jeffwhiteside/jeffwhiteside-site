export interface Publication {
  readonly kind: "publication";
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
    kind: "publication",
    slug: "leadership-of-remote-work",
    title: "Understanding the Leadership of Remote Work",
    venue: "Journal of Business and Educational Leadership",
    volume: "34",
    issue: "1",
    year: "2022",
    citation:
      "Jeff Whiteside, “Understanding the Leadership of Remote Work,” " +
      "Journal of Business and Educational Leadership, 34(1), 147–160.",
    summary: [
      "Research I co-authored with Dr. Deirdre Dixon of the University of Tampa, exploring a question I've encountered throughout my career: What does effective leadership look like when teams aren't in the same room?",
      "This teaching case explores authentic leadership in remote work environments and " +
        "how trust, communication, and leadership behavior influence the effectiveness of " +
        "distributed teams.",
    ],
    url: null,
  },
] as const satisfies readonly Publication[];

export interface Article {
  readonly kind: "article";
  /**
   * Locates the article's body at `src/content/articles/<slug>.html` — a plain HTML fragment
   * edited directly, no build step required — and, optionally, a cover image at
   * `public/writing/<slug>-cover.jpg` or `.png`.
   */
  readonly slug: string;
  readonly title: string;
  /** Display date, e.g. "Aug 25, 2026". */
  readonly date: string;
  readonly category: readonly string[];
  /** Teaser shown on the writing index card. */
  readonly summary: string;
}

export const ARTICLES = [
  {
    kind: "article",
    slug: "ai-is-moving-the-constraint",
    title: "AI Is Moving the Constraint in Software Engineering",
    date: "Aug 25, 2026",
    category: ["Engineering", "AI & Technology"],
    summary:
      "AI is changing software engineering, but not simply by making engineers more " +
      "productive. Using the Theory of Constraints, I explore how AI is shifting the " +
      "bottleneck from writing code to understanding problems, defining solutions, and " +
      "making better decisions.",
  },
] as const satisfies readonly Article[];

export type WritingItem = Article | Publication;

/** Everything shown on the writing index, most recent first. Ordered by hand — there are
 * few enough entries that a manual chronological order is simpler than a sort key that mixes
 * an article's display date with a publication's year. */
export const WRITING_ITEMS: readonly WritingItem[] = [...ARTICLES, ...PUBLICATIONS];
