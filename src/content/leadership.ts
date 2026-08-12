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

/** Text colour matching a tile hue, for small accents on the light band (e.g. a principle's
 * thesis line or its active state in navigation) — never for body text. */
export const TILE_TEXT_CLASSES: Record<TileColor, string> = {
  blue: "text-tile-blue",
  teal: "text-tile-teal",
  violet: "text-tile-violet",
  amber: "text-tile-amber",
  green: "text-tile-green",
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

/** Same background tint as TILE_SOFT_CLASSES, without its border — for filling a whole block
 * (e.g. one principle's section) that already gets its edge from TILE_BORDER_CLASSES. */
export const TILE_BG_CLASSES: Record<TileColor, string> = {
  blue: "bg-tile-blue/8",
  teal: "bg-tile-teal/8",
  violet: "bg-tile-violet/8",
  amber: "bg-tile-amber/8",
  green: "bg-tile-green/8",
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
  /** Public-relative path to a small cover image (e.g. "/books/dare-to-lead.jpg"), shown at
   * 55x70 beside the title. Omit when no cover art is available for this source. */
  readonly coverImage?: string;
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
  /**
   * True for a principle whose full write-up isn't ready yet. The page renders its header
   * (number, title, tagline) plus a "coming soon" notice instead of the five sub-sections
   * below, so all the sub-section fields are optional rather than filled with placeholder copy.
   */
  readonly comingSoon?: boolean;
  readonly whatIBelieve?: readonly string[];
  readonly howIPractice?: readonly PracticeItem[];
  readonly experienceTagline?: string;
  /** One or more paragraphs, each rendered as its own `<p>`. */
  readonly experienceParagraph?: readonly string[];
  readonly ideasThatShaped?: readonly IdeaSource[];
  readonly learnedTagline?: string;
  /** One or more paragraphs, each rendered as its own `<p>`. */
  readonly learnedParagraph?: readonly string[];
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
      "My first responsibility as a leader is to understand the people I lead " +
      "and help them become more capable, confident, and effective over time. " +
      "That starts with knowing who they are; their strengths, aspirations, " +
      "motivations, working styles, and the areas where they still need to grow.",
      "I believe people do their best work when they have a clear sense of purpose, " +
      "meaningful ownership, room to exercise judgment, and opportunities to build " +
      "mastery. My role is to create those conditions, set high standards, and believe " +
      "in people enough to challenge them beyond what they think is possible.",
      "Elevating people also means being present when the work gets hard. Give honest " +
      "feedback when someone is off track. Encourage them when confidence drops. " +
      "Recognize and celebrate real progress. Create opportunities for collaboration " +
      "and contribution. People should know that their leader is invested in their " +
      "success; but also that growth comes with responsibility and accountability.",
      "If I am doing my job well, people should leave my organization stronger than " +
      "when they entered it: better at their craft, more confident in their judgment, " +
      "more prepared to lead others, and proud of what they accomplished together."
    ],
    howIPractice: [
      {
        title: "Know them",
        description:
          "Understand their strengths, motivations, aspirations, working style, and " +
          "where they want to grow. Ask good questions, listen carefully, and look " + 
          "for opportunities that stretch them in ways that matter.",
      },
      {
        title: "Coach them",
        description:
          "I ask questions first. My goal is to build judgment and confidence, not " +
          "dependence. One of the hardest parts of leadership is resisting the urge " +
          "to step in and solve the problem yourself.",
      },
      {
        title: "Trust Them",
        description:
          "People grow when they own problems that matter and have room to solve them " +
          "their way. They may solve it differently than you would. Embrace and encourage " +
          "that. Ensure both autonomy and accountability",
      },
      {
        title: "Challenge them",
        description:
          "I’m clear about what good looks like and hold myself and others accountable " +
          "to it. High standards are a form of belief: I challenge people because I " + 
          "know what they’re capable of. People often rise to the expectations placed " + 
          "on them.",
      },
      {
        title: "Recognize them",
        description:
          "Celebrate real progress, reinforce what is working, and help people regain " +
          "confidence when the work gets difficult. Small wins matter. Recognition helps " +
          "people see their own growth and build momentum.",
      },      
      {
        title: "Develop them",
        description:
          "My impact multiplies through leaders who develop the people they lead. " +
          "I coach managers to create clarity, give meaningful ownership, provide " + 
          "direct feedback, and help others grow into greater responsibility.",
      },
    ],
    experienceTagline: "Some of the best engineers I’ve worked with didn’t start out as engineers.",
    experienceParagraph: [
      "At Xcira, we partnered with LaunchCode to bring people into technology from " +
      "very different careers, including former teachers and retail employees; many " +
      "without traditional computer science backgrounds or college degrees.",
      "We focused on potential: learning what people were good at, giving them " +
      "meaningful work, coaching them, and challenging them to grow. Not every " +
      "placement worked out, but several became some of the strongest developers " +
      "and team members I’ve had the opportunity to lead.",
      "That experience reinforced something I still believe: talent doesn’t always " +
      "arrive with the expected résumé. A leader’s job is to recognize potential, " +
      "create opportunity, and help people discover what they’re capable of.",
    ],
    ideasThatShaped: [
      {
        type: "Book",
        title: "Multipliers",
        coverImage: "/books/multipliers.jpg",
        author: "Liz Wiseman",
        description:
          "Helped change how I thought about my role as a leader. My job isn't to have " +
          "all the answers; it's to draw out the intelligence and capability of the " +
          "people around me, give them room to lead, and help them become better than " +
          "they thought they could be",
        linkLabel: "View on Amazon",
        linkHref: "https://www.amazon.com/Multipliers-Revised-Updated-Leaders-Everyone-ebook/dp/B01KT18416/ref=sr_1_1?crid=2RAJP4JC2FL38&dib=eyJ2IjoiMSJ9.OThPxUt9yF3tkHb44wZb0DlEBYjGqoKcnJ4KDlpsW4bLZDfCt5E7dXf2G7U7bcSbkI3xOw225fIqyY1UsShy_-i01IoGgIF-Kfjuv5RT94Lt-RxR66OMNxb1NqR94vSaANqyyUXoIauAEqa_OuRpdDzFPgxgiVAkPFdF7lGLwYzDdpApq_-ICJ0P6sXBo0lE0tjaNrUsklBP8_MFfECEjqKFvlcQ2rHFS4NkDdRtJbM.i7FQyIZMyIiJFxfaQ0Kbq5pseOdMzGgvBChIDGqMUBk&dib_tag=se&keywords=multipliers&qid=1786504212&sprefix=multiplier%2Caps%2C255&sr=8-1",
      },
      {
        type: "Book",
        title: "First Break All The Rules",
        coverImage: "/books/firstbreakalltherules.jpg",
        author: "Marcus Buckingham & Curt Coffman",
        description:
          "Reinforced that great leadership isn't about treating everyone the same. " +
          "People have different strengths, motivations, aspirations, and ways of " + 
          "working. My responsibility is to understand those differences, help people " +
          "build on what they do best, and create opportunities where they can contribute, " +
          "grow, and succeed.",
        linkLabel: "View on Amazon",
        linkHref: "https://www.amazon.com/First-Break-All-Rules-Differently/dp/1595621113/ref=sr_1_1?crid=1UZV95L0X7LIP&dib=eyJ2IjoiMSJ9.z16oCMdycf7bEf4Synq2a4oMRSZGQ2ISAabdAGh7DwNHnoc-zGSLaRbYMCHd9Y2UN2LUNQ6YfBz75OaIxhuOQAUS6iNZ8kAGGvsDjvfBheVJJrDvqOB69a1Km1A5QrHDy94ff6nqSROCHu9M2ibWjp9Yfp2yntA-noEF_zMCFm0etD3dJRKIlZVG2PvhMD9tTrvJy9T7VFOe3dK5OCLqxRLAzsNIV5LDKmtE3t2Sbjc.x3upRVlUo1F9UBhRSMdp31etaQ6P-_6mzkjkBRFLR-o&dib_tag=se&keywords=first+break+all+the+rules&qid=1786507442&sprefix=first+break+a%2Caps%2C200&sr=8-1",
      },
      {
        type: "Book",
        title: "Dare to Lead",
        coverImage: "/books/daretolead.jpg",
        author: "Brené Brown",
        description:
          "Reinforced that helping people grow requires both courage and vulnerability. " +
          "Leaders need to set clear expectations, give honest feedback, admit when " +
          "they don't have the answer, and create an environment where people can " +
          "do the same",
        linkLabel: "View on Amazon",
        linkHref: "https://www.amazon.com/s?k=Dare+to+Lead+Brene+Brown",
      },
      {
        type: "Research",
        title: "Self-Dermination Theory",
        coverImage: "/books/research.jpg",
        author: "Edward Deci & Richard Ryan",
        description:
          "Gave me a deeper framework for understanding motivation. People are more " +
          "likely to thrive when their needs for autonomy, competence, and connection " +
          "to others are supported. It reinforced my belief that leaders don't " +
          "create motivation through control; they create conditions where motivation " +
          "and growth can flourish.",
        linkLabel: "Foundational Research",
        linkHref: "https://selfdeterminationtheory.org/wp-content/uploads/2020/10/2000_DeciRyan_PIWhatWhy.pdf",
      },      
    ],
    learnedTagline: "Great teams amplify talent",
    learnedParagraph: [
      "Hiring talented people is only the beginning. Put the right people together, " +
      "give them clear purpose, useful systems, good tools, and room to exercise " +
      "judgment—and their collective capability grows beyond what any one person " +
      "can achieve alone.",
      "Collaboration is a force multiplier. My job isn't to orchestrate every move, " +
      "but to create the conditions where people can learn from one another, " +
      "challenge one another, combine their strengths, and do work none of them " +
      "could have done as well individually.",
    ]
  },
  {
    number: "02",
    id: "build-trust",
    title: "Build Trust",
    tagline: "Trust is earned through integrity, not authority.",
    icon: ShieldCheckIcon,
    tile: "green",
    comingSoon: true,
  },
  {
    number: "03",
    id: "create-alignment",
    title: "Create Alignment",
    tagline: "Shared understanding moves faster than top-down direction.",
    icon: CompassIcon,
    tile: "violet",
    comingSoon: true,
  },
  {
    number: "04",
    id: "create-clarity",
    title: "Create Clarity",
    tagline: "Clear priorities let teams decide with confidence.",
    icon: ChecklistIcon,
    tile: "amber",
    comingSoon: true,
  },
  {
    number: "05",
    id: "think-in-systems",
    title: "Think in Systems",
    tagline: "Fix the environment, not just the symptom.",
    icon: GearsIcon,
    tile: "teal",
    comingSoon: true,
  },
] as const;
