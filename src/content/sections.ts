/**
 * Single source of truth for the site's sections, each of which is its own route.
 *
 * The header navigation, the home page contents index, and the routes themselves are all
 * derived from this list, so navigation cannot link to a page that does not exist and a page
 * cannot exist without appearing in navigation.
 */

export interface SectionDefinition {
  /** Stable identifier, also the route segment. */
  readonly id: string;
  /** Route path. */
  readonly href: string;
  /** Page heading and contents-index entry. */
  readonly title: string;
  /** Shorter label used in the header navigation. */
  readonly navLabel: string;
  /** One-line description shown in the home page contents index. Provisional copy. */
  readonly summary: string;
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
    summary: "How I build teams, develop managers, and set the operating system for delivery.",
    description:
      "How Jeff Whiteside builds engineering teams, develops managers, and establishes the " +
      "operating system for reliable delivery.",
    plannedIn: "Iteration 3",
  },
  {
    id: "experience",
    href: "/experience",
    title: "Selected experience",
    navLabel: "Experience",
    summary: "Two decades leading SaaS and marketplace engineering organizations.",
    description:
      "Selected engineering leadership experience: CommandLink and Ritchie Bros. / Xcira.",
    plannedIn: "Iteration 4",
  },
  {
    id: "projects",
    href: "/projects",
    title: "Projects",
    navLabel: "Projects",
    summary: "Things I build to stay close to the craft.",
    description: "Personal software projects built by Jeff Whiteside.",
    plannedIn: "Iteration 5",
  },
  {
    id: "writing",
    href: "/writing",
    title: "Writing and publication",
    navLabel: "Writing",
    summary: "A published teaching case on leadership and remote work.",
    description:
      "Writing and published work by Jeff Whiteside, including a teaching case on the " +
      "leadership of remote work.",
    plannedIn: "Iteration 6",
  },
  {
    id: "about",
    href: "/about",
    title: "About",
    navLabel: "About",
    summary: "Background, approach, and what I do outside of engineering.",
    description: "About Jeff Whiteside — background, approach, and interests.",
    plannedIn: "Iteration 6",
  },
  {
    id: "contact",
    href: "/contact",
    title: "Contact",
    navLabel: "Contact",
    summary: "Email and LinkedIn.",
    description: "How to reach Jeff Whiteside.",
    plannedIn: "Iteration 6",
  },
] as const satisfies readonly SectionDefinition[];

export type SectionId = (typeof SECTIONS)[number]["id"];

/**
 * Header navigation. Contact is excluded because it is reached by the header's
 * "Let's Connect" button rather than a nav link.
 */
export const NAV_SECTIONS = SECTIONS.filter((section) => section.id !== "contact");

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
