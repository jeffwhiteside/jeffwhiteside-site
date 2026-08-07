export interface Project {
  /** Locates the screenshot at `/projects/<slug>.jpg`. */
  readonly slug: string;
  readonly name: string;
  readonly description: string;
  /** Real technologies only. Empty until the owner confirms the stack. */
  readonly technologies: readonly string[];
  readonly repositoryUrl: string | null;
  readonly liveUrl: string | null;
  /** True while the entry still needs real detail from the owner. */
  readonly isPlaceholder: boolean;
}

/**
 * Personal projects.
 *
 * The first two are named in the owner's positioning material; the third is a confirmed slot
 * with no details yet. Technologies, links, and architecture are supplied in Iteration 5 —
 * nothing is invented here, and the reference mockup's project names and tech tags were
 * fabricated and are not reproduced.
 */
export const PROJECTS = [
  {
    slug: "project-1",
    name: "Personal Time Tracker",
    description:
      "A personal application for understanding how time is allocated across projects, " +
      "responsibilities, and priorities.",
    technologies: [],
    repositoryUrl: null,
    liveUrl: null,
    isPlaceholder: true,
  },
  {
    slug: "project-2",
    name: "RSS Reader",
    description:
      "A focused RSS reading application designed to reduce noise and make it easier to " +
      "follow selected sources.",
    technologies: [],
    repositoryUrl: null,
    liveUrl: null,
    isPlaceholder: true,
  },
  {
    slug: "project-3",
    name: "Third project",
    description: "Details to be supplied.",
    technologies: [],
    repositoryUrl: null,
    liveUrl: null,
    isPlaceholder: true,
  },
] as const satisfies readonly Project[];
