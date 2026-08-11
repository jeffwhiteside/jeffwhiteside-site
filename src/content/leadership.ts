import {
  BookOpenIcon,
  ChecklistIcon,
  CompassIcon,
  GearsIcon,
  LightbulbIcon,
  PeopleIcon,
  ShieldCheckIcon,
  WrenchIcon,
  type Icon,
} from "@/components/ui/icons";

/** Tile hue. The only place the palette uses more than one colour. */
export type TileColor = "blue" | "teal" | "violet" | "amber" | "green";

export const TILE_CLASSES: Record<TileColor, string> = {
  blue: "bg-tile-blue",
  teal: "bg-tile-teal",
  violet: "bg-tile-violet",
  amber: "bg-tile-amber",
  green: "bg-tile-green",
};

/** Tinted border + background, for a card sitting on the light band rather than an icon tile. */
export const TILE_SOFT_CLASSES: Record<TileColor, string> = {
  blue: "border-tile-blue/25 bg-tile-blue/8",
  teal: "border-tile-teal/25 bg-tile-teal/8",
  violet: "border-tile-violet/25 bg-tile-violet/8",
  amber: "border-tile-amber/25 bg-tile-amber/8",
  green: "border-tile-green/25 bg-tile-green/8",
};

/** Solid top-border accent colour, for marking off a full block (e.g. one principle's
 * section) rather than tinting a card. */
export const TILE_BORDER_CLASSES: Record<TileColor, string> = {
  blue: "border-t-tile-blue",
  teal: "border-t-tile-teal",
  violet: "border-t-tile-violet",
  amber: "border-t-tile-amber",
  green: "border-t-tile-green",
};

/**
 * The five recurring sub-sections every principle below walks through, in order. Shared by
 * the "each principle explores" legend and by each principle's own section headings, so the
 * two can't drift out of sync.
 */
export const PRINCIPLE_EXPLORES = [
  { label: "What I Believe", icon: PeopleIcon },
  { label: "How I Put It Into Practice", icon: WrenchIcon },
  { label: "What Experience Taught Me", icon: LightbulbIcon },
  { label: "Ideas That Shaped My Thinking", icon: BookOpenIcon },
  { label: "What I've Learned Along the Way", icon: GearsIcon },
] as const;

export interface PracticeItem {
  readonly title: string;
  readonly description: string;
}

export interface IdeaSource {
  /** Shown as a small tag: "Book", "Research", "Experience", etc. */
  readonly type: string;
  readonly title: string;
  readonly author?: string;
  readonly description: string;
  readonly linkLabel?: string;
  readonly linkHref?: string;
}

export interface PrincipleDetail {
  /** "01" through "05" — display only, not used for logic. */
  readonly number: string;
  /** Anchor id, e.g. "elevate-people". Also what the sidebar TOC links to. */
  readonly id: string;
  readonly title: string;
  readonly tagline: string;
  readonly icon: Icon;
  readonly tile: TileColor;
  readonly whatIBelieve: readonly string[];
  readonly howIPractice: readonly PracticeItem[];
  readonly experienceTagline: string;
  readonly experienceParagraph: string;
  readonly experienceLinkLabel?: string;
  readonly experienceLinkHref?: string;
  readonly ideasThatShaped: readonly IdeaSource[];
  readonly learnedTagline: string;
  readonly learnedParagraph: string;
}

/**
 * The five operating principles, each expanded into a full section. Content for "Elevate
 * People" is real, transcribed from the owner's mockup. The other four are structural
 * placeholders — same shape, same design, clearly marked pending copy — added now so the page
 * template is complete and doesn't need rebuilding when the real content arrives.
 *
 * Titles, tiles, and icons match the homepage's operating-principles preview
 * (components/home/leadership-preview.tsx) so the same principle reads the same way in both
 * places.
 */
export const PRINCIPLE_DETAILS: readonly PrincipleDetail[] = [
  {
    number: "01",
    id: "elevate-people",
    title: "Elevate People",
    tagline: "Great organizations grow when their people grow.",
    icon: PeopleIcon,
    tile: "blue",
    whatIBelieve: [
      "My first responsibility as a leader is to help people become more capable, " +
        "confident, and effective than they were before we worked together.",
      "That means creating opportunities, giving meaningful ownership, coaching, and " +
        "challenging people beyond what they think is possible. Empowerment doesn't mean " +
        "lowering expectations. People do their best work when they are trusted with real " +
        "responsibility, understand what's expected, and know their leader is invested in " +
        "their success.",
    ],
    howIPractice: [
      {
        title: "Coach before solving",
        description:
          "I ask questions first. My goal is to build judgment and confidence, not " +
          "dependence.",
      },
      {
        title: "Give meaningful ownership",
        description:
          "People grow when they own problems that matter and have room to solve them " +
          "their way.",
      },
      {
        title: "Set high standards",
        description:
          "I'm clear about what good looks like and hold myself and others accountable " +
          "to it.",
      },
      {
        title: "Develop leaders who develop others",
        description:
          "My impact multiplies through leaders who inspire growth in the people they lead.",
      },
    ],
    experienceTagline: "Scaling an organization changed how I thought about leadership.",
    experienceParagraph:
      "Growing teams from 25 to more than 60 people taught me I couldn't be the source of " +
      "all answers. I had to shift from being the expert to building the conditions for " +
      "others to become experts. That meant investing in engineering managers, clarifying " +
      "ownership, and creating feedback loops that helped people learn faster than I ever " +
      "could.",
    experienceLinkLabel: "Read more about my journey",
    experienceLinkHref: "/experience",
    ideasThatShaped: [
      {
        type: "Book",
        title: "Dare to Lead",
        author: "Brené Brown",
        description:
          "Taught me that courage, vulnerability, and clear expectations are the " +
          "foundation of trust and growth.",
        linkLabel: "View on Amazon",
        linkHref: "https://www.amazon.com/s?k=Dare+to+Lead+Brene+Brown",
      },
      {
        type: "Research",
        title: "Psychological Safety",
        author: "Amy Edmondson",
        description:
          "Her research gave me language for something I saw firsthand: safety and high " +
          "standards aren't opposites.",
        linkLabel: "Read study",
        linkHref: "https://scholar.google.com/scholar?q=Amy+Edmondson+psychological+safety",
      },
      {
        type: "Book",
        title: "Hidden Potential",
        author: "Adam Grant",
        description:
          "Reinforced my belief that leaders should expand what people believe they're " +
          "capable of becoming.",
        linkLabel: "View on Amazon",
        linkHref: "https://www.amazon.com/s?k=Hidden+Potential+Adam+Grant",
      },
      {
        type: "Experience",
        title: "Leading Distributed Teams",
        description:
          "Managing teams in India, Belarus, and Latin America taught me that investment " +
          "and trust transcend distance.",
      },
    ],
    learnedTagline: "I used to think protecting people from failure was my job.",
    learnedParagraph:
      "Early in my career, I tried to shield my team from risk. I realized I was " +
      "depriving them of the chance to grow. Now I focus on giving people a safe " +
      "environment to take smart risks, learn, and stretch.",
  },
  {
    number: "02",
    id: "build-trust",
    title: "Build Trust",
    tagline: "Trust is earned through integrity, not authority.",
    icon: ShieldCheckIcon,
    tile: "green",
    whatIBelieve: [
      "Placeholder — the owner's core belief about building trust hasn't been written " +
        "yet. Will expand on how integrity, accountability, and honest conversations earn " +
        "trust over time.",
    ],
    howIPractice: [
      {
        title: "Placeholder",
        description: "A specific practice for building trust, pending from the owner.",
      },
      {
        title: "Placeholder",
        description: "A second practice for building trust, pending from the owner.",
      },
    ],
    experienceTagline: "Placeholder — pending.",
    experienceParagraph:
      "Placeholder — a story from experience illustrating how trust was built or lost is " +
      "pending from the owner.",
    ideasThatShaped: [
      {
        type: "Pending",
        title: "Placeholder",
        description: "A resource that shaped this principle, pending from the owner.",
      },
    ],
    learnedTagline: "Placeholder — pending.",
    learnedParagraph: "Placeholder — a lesson learned about trust, pending from the owner.",
  },
  {
    number: "03",
    id: "create-alignment",
    title: "Create Alignment",
    tagline: "Shared understanding moves faster than top-down direction.",
    icon: CompassIcon,
    tile: "violet",
    whatIBelieve: [
      "Placeholder — the owner's core belief about creating alignment hasn't been " +
        "written yet. Will expand on connecting where a team is going to why it matters " +
        "and how each person contributes.",
    ],
    howIPractice: [
      {
        title: "Placeholder",
        description: "A specific practice for creating alignment, pending from the owner.",
      },
      {
        title: "Placeholder",
        description: "A second practice for creating alignment, pending from the owner.",
      },
    ],
    experienceTagline: "Placeholder — pending.",
    experienceParagraph:
      "Placeholder — a story from experience illustrating how alignment was created is " +
      "pending from the owner.",
    ideasThatShaped: [
      {
        type: "Pending",
        title: "Placeholder",
        description: "A resource that shaped this principle, pending from the owner.",
      },
    ],
    learnedTagline: "Placeholder — pending.",
    learnedParagraph: "Placeholder — a lesson learned about alignment, pending from the owner.",
  },
  {
    number: "04",
    id: "create-clarity",
    title: "Create Clarity",
    tagline: "Clear priorities let teams decide with confidence.",
    icon: ChecklistIcon,
    tile: "amber",
    whatIBelieve: [
      "Placeholder — the owner's core belief about creating clarity hasn't been written " +
        "yet. Will expand on how clear priorities, ownership, and expectations enable " +
        "better decisions.",
    ],
    howIPractice: [
      {
        title: "Placeholder",
        description: "A specific practice for creating clarity, pending from the owner.",
      },
      {
        title: "Placeholder",
        description: "A second practice for creating clarity, pending from the owner.",
      },
    ],
    experienceTagline: "Placeholder — pending.",
    experienceParagraph:
      "Placeholder — a story from experience illustrating how clarity changed an outcome " +
      "is pending from the owner.",
    ideasThatShaped: [
      {
        type: "Pending",
        title: "Placeholder",
        description: "A resource that shaped this principle, pending from the owner.",
      },
    ],
    learnedTagline: "Placeholder — pending.",
    learnedParagraph: "Placeholder — a lesson learned about clarity, pending from the owner.",
  },
  {
    number: "05",
    id: "think-in-systems",
    title: "Think in Systems",
    tagline: "Fix the environment, not just the symptom.",
    icon: GearsIcon,
    tile: "teal",
    whatIBelieve: [
      "Placeholder — the owner's core belief about thinking in systems hasn't been " +
        "written yet. Will expand on improving the environment, processes, and feedback " +
        "loops rather than asking people to work around broken systems.",
    ],
    howIPractice: [
      {
        title: "Placeholder",
        description: "A specific practice for thinking in systems, pending from the owner.",
      },
      {
        title: "Placeholder",
        description: "A second practice for thinking in systems, pending from the owner.",
      },
    ],
    experienceTagline: "Placeholder — pending.",
    experienceParagraph:
      "Placeholder — a story from experience illustrating a systemic fix is pending from " +
      "the owner.",
    ideasThatShaped: [
      {
        type: "Pending",
        title: "Placeholder",
        description: "A resource that shaped this principle, pending from the owner.",
      },
    ],
    learnedTagline: "Placeholder — pending.",
    learnedParagraph:
      "Placeholder — a lesson learned about systems thinking, pending from the owner.",
  },
] as const;
