import { BroadcastIcon, ClockIcon, GlobeIcon, type Icon } from "@/components/ui/icons";
import type { TileColor } from "@/content/leadership";

export interface Project {
  /** Locates the screenshot at `/projects/<slug>.jpg`, and the future detail page at `/projects/<slug>`. */
  readonly slug: string;
  readonly name: string;
  readonly description: string;
  readonly icon: Icon;
  readonly tile: TileColor;
  /** Real technologies only. Empty until the owner confirms the stack. */
  readonly technologies: readonly string[];
  readonly repositoryUrl: string | null;
  readonly liveUrl: string | null;
  /** True while the entry still needs real detail from the owner. */
  readonly isPlaceholder: boolean;
}

/**
 * Personal projects, matching the owner's mockup for the projects index. Each links to its own
 * detail page at `/projects/<slug>` — not yet built, added in a later iteration.
 */
export const PROJECTS = [
  {
    slug: "curator",
    name: "Curator",
    description:
      "AI-powered hub for the content I care consume (RSS feeds, podcasts, YouTube channels, " +
      "and books). It summarizes, evaluates, and ranks everything so I know what's worth my " +
      "time.",
    icon: BroadcastIcon,
    tile: "violet",
    technologies: ["React", "TypeScript", "Supabase", "AI / LLMs", "Notion API"],
    repositoryUrl: null,
    liveUrl: null,
    isPlaceholder: false,
  },
  {
    slug: "timetracker",
    name: "TimeTracker",
    description:
      "A focused time tracking app that helps me understand how I spend my time, protect " +
      "deep work, and continuously improve.",
    icon: ClockIcon,
    tile: "green",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Charts", "Vercel"],
    repositoryUrl: null,
    liveUrl: null,
    isPlaceholder: false,
  },
  {
    slug: "jeffwhiteside-dev",
    name: "JeffWhiteside.dev",
    description:
      "My portfolio and digital home. A place to share my journey, leadership philosophy, " +
      "writing, and the projects I'm building.",
    icon: GlobeIcon,
    tile: "blue",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React", "Vercel"],
    repositoryUrl: null,
    liveUrl: null,
    isPlaceholder: false,
  },
] as const satisfies readonly Project[];
