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
  /**
   * Temporary scaffolding: which iteration replaces this page's placeholder with real
   * content. Removed from each entry as that page is built.
   */
  readonly plannedIn: string | null;
}

export const SECTIONS = [
  {
    id: "leadership",
    href: "/leadership",
    title: "Leadership focus",
    navLabel: "Leadership",
    navHref: "/#principles-heading",
    description:
      "How Jeff Whiteside builds engineering teams, develops managers, and establishes the " +
      "operating system for reliable delivery.",
    plannedIn: null,
  },
  {
    id: "experience",
    href: "/experience",
    title: "Selected experience",
    navLabel: "Experience",
    navHref: "/#experience-heading",
    description:
      "Selected engineering leadership experience: CommandLink and Ritchie Bros. / Xcira.",
    plannedIn: null,
  },
  {
    id: "projects",
    href: "/projects",
    title: "Things I Build for Myself",
    navLabel: "Projects",
    navHref: null,
    description: "Personal software projects built by Jeff Whiteside.",
    plannedIn: null,
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
    plannedIn: null,
  },
  {
    id: "about",
    href: "/about",
    title: "About",
    navLabel: "About",
    navHref: null,
    description: "About Jeff Whiteside — background, approach, and interests.",
    plannedIn: null,
  },
  {
    id: "contact",
    href: "/contact",
    title: "Contact",
    navLabel: "Contact",
    navHref: null,
    description: "How to reach Jeff Whiteside.",
    plannedIn: "Iteration 6",
  },
] as const satisfies readonly SectionDefinition[];

export type SectionId = (typeof SECTIONS)[number]["id"];

/**
 * Header navigation. Contact is excluded because it is reached by the header's
 * "Let's Connect" button rather than a nav link. About is excluded for now — hidden from
 * navigation, but the route, its content, and `getSection("about")` all still work.
 */
const HIDDEN_FROM_NAV: readonly SectionId[] = ["contact", "about"];

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
