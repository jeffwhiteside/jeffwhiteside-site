/**
 * Single source of truth for the site's sections, each of which is its own route.
 *
 * The header navigation and the routes themselves are both derived from this list, so
 * navigation cannot link to a page that does not exist and a page cannot exist without
 * appearing in navigation.
 */

export interface SectionDefinition {
  /** Stable identifier, also the route segment. */
  readonly id: string;
  /** Route path. */
  readonly href: string;
  /** Page heading. */
  readonly title: string;
  /** Shorter label used in the header navigation. */
  readonly navLabel: string;
  /**
   * Overrides `href` for the header nav link only. Used when the nav should scroll to an
   * in-page anchor on the home page rather than navigate to the section's own route — the
   * route still exists and is still linked to elsewhere (e.g. the homepage principle cards).
   */
  readonly navHref: string | null;
  /** Page-level meta description. Provisional copy. */
  readonly description: string;
}

export const SECTIONS = [
  {
    id: "leadership",
    href: "/leadership",
    title: "Leadership focus",
    navLabel: "Leadership",
    navHref: null,
    description:
      "How Jeff Whiteside builds engineering teams, develops managers, and establishes the " +
      "operating system for reliable delivery.",
  },
  {
    id: "experience",
    href: "/experience",
    title: "Selected experience",
    navLabel: "Experience",
    navHref: null,
    description:
      "Selected engineering leadership experience: CommandLink and Ritchie Bros. / Xcira.",
  },
  {
    id: "projects",
    href: "/projects",
    title: "Things I Build for Myself",
    navLabel: "Projects",
    navHref: null,
    description: "Personal software projects built by Jeff Whiteside.",
  },
  {
    id: "writing",
    href: "/writing",
    title: "Writing and publication",
    navLabel: "Writing",
    navHref: null,
    description:
      "Writing and published work by Jeff Whiteside, including a teaching case on the " +
      "leadership of remote work.",
  },
  {
    id: "about",
    href: "/about",
    title: "About",
    navLabel: "About",
    navHref: null,
    description: "About Jeff Whiteside — background, approach, and interests.",
  },
] as const satisfies readonly SectionDefinition[];

export type SectionId = (typeof SECTIONS)[number]["id"];

/**
 * Header navigation. About is excluded for now — hidden from navigation, but the route, its
 * content, and `getSection("about")` all still work.
 *
 * There is no Contact section or route. It was a placeholder page reachable only by a hidden
 * (CSS `lg:hidden` counterpart never rendered on desktop) link, which meant it stayed
 * crawlable and publicly reachable at /contact while offering nothing real — worse than not
 * having it. Reaching out happens through the footer's direct LinkedIn and email links instead.
 */
const HIDDEN_FROM_NAV: readonly SectionId[] = ["about"];

export const NAV_SECTIONS = SECTIONS.filter(
  (section) => !HIDDEN_FROM_NAV.includes(section.id),
);

/**
 * Look up a section by id. Throws rather than returning undefined: every caller is a route
 * that cannot render without its definition, so a missing id is a build-time bug.
 */
export function getSection(id: SectionId): SectionDefinition {
  const section = SECTIONS.find((candidate) => candidate.id === id);
  if (!section) {
    throw new Error(`Unknown section id: ${id}`);
  }
  return section;
}
