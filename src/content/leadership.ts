import {
  BookOpenIcon,
  CompassIcon,
  GearsIcon,
  LayersIcon,
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
    tagline: "Trust makes courage and collaboration possible.",
    icon: ShieldCheckIcon,
    tile: "green",
    whatIBelieve: [
      "Without trust, the vacuum gets filled by fear and self-protection. People " +
      "become more careful about what they say, less willing to take risks, slower " +
      "to surface problems, and more likely to protect themselves when something " +
      "goes wrong. Over time, that stifles innovation, weakens collaboration, " +
      "erodes morale, and breeds cynicism.",
      "Trust changes that dynamic. When people believe their leaders and teammates " +
      "are competent, honest, and genuinely invested in one another, they can spend " +
      "less energy protecting themselves and more energy doing the work. They can " +
      "disagree, experiment, admit mistakes, ask for help, and challenge one another " +
      "without questioning whether doing so will be used against them.",
      "I don't see trust as the absence of accountability. The strongest teams I've " +
      "worked with combine high trust with high standards. People tell each other the " +
      "truth, keep their commitments, own mistakes, and hold one another accountable " +
      "because they know everyone is working toward the same outcome.",
      "Trustworthiness requires competence and authenticity. Good intentions are not " +
      "enough; people need confidence in your judgment and need to know they are " +
      "dealing with the real person—not a managed version of the leader. That means " +
      "being honest about what you know, what you don’t know, what you believe, and " +
      "where you’ve made mistakes.",
      "Leaders have to go first. Trust is earned through consistency, transparency, " +
      "vulnerability, and doing what you say you'll do—but it also has to be extended. " +
      "If I expect people to take ownership, make decisions, and bring me the truth, " +
      "I have to demonstrate that I trust them enough to do it."
    ],
    howIPractice: [
      {
        title: "Extend Trust First",
        description:
          "Don't make people endlessly prove they are worthy of responsibility. Give " +
          "trust, ownership, and autonomy first, then let their behavior strengthen " +
          "or weaken that trust.",
      },
      {
        title: "Earn It Daily",
        description:
          "Trust is built through repeated actions over time. Keep commitments, follow " +
          "through, apply standards fairly, admit mistakes, and show up consistently. " +
          "Small successes accumulate into confidence that people can rely on you.",
      },
      {
        title: "Be Vulnerable",
        description:
          "Admit mistakes. Say “I don’t know.” Ask for help. Own your part when " +
          "things go wrong. Leaders who pretend to have every answer teach everyone " +
          "else to hide uncertainty too.",
      },
      {
        title: "Tell The Truth",
        description:
          "Have the difficult conversation. Surface bad news early. Give honest feedback " +
          "with respect. Trust doesn't mean avoiding discomfort; it means people believe " +
          "you will be candid with them rather than talk around them or behind them.",
      },
      {
        title: "Make Failure Safe",
        description:
          "Create room to experiment, take reasonable risks, and make mistakes without " +
          "fear of humiliation or blame. Learn from failure, own it, and improve the " +
          "system. Safety doesn’t mean lowering standards.",
      },      
      {
        title: "Stand With Your People",
        description:
          "People need to believe that you care about their interests—not just their output. " +
          "Protect people from unnecessary politics and blame, support them when things " +
          "get difficult, give credit generously, and take responsibility as their leader.",
      },
    ],
    experienceTagline: "The feedback I most need is often the hardest to give me.",
    experienceParagraph: [
      "Over the years, people I've led have told me when they thought I made the wrong " +
      "decision, disagreed with an architecture I supported, or pointed out something " +
      "I was doing that made their job harder.",
      "Earlier in my career, feedback like that could be difficult. My first instinct " +
      "might be to defend the decision or take the criticism personally. Over time, I " +
      "learned that while the reaction may be natural, acting on it is rarely productive.",
      "Now my response is always the same: thank you for trusting me enough to tell me. " +
      "It doesn't mean I'll always agree, but I never want someone wondering whether " +
      "it's safe to challenge me.",
      "I've learned that how I respond in those moments matters far beyond that " +
      "conversation. If I become defensive, I may win the argument—but teach someone " +
      "not to bring me the truth next time. If I listen, stay curious, and own it " +
      "when I'm wrong, I make the next honest conversation easier and build a stronger " +
      "relationship."
    ],
    ideasThatShaped: [
      {
        type: "Book",
        title: "Trust & Inspire",
        coverImage: "/books/trustandinspire.jpg",
        author: "Stephen M. R. Covey",
        description:
          "Reinforced that trust has to be extended, not just earned. Leaders demonstrate " +
          "trust by giving people real responsibility, autonomy, and the freedom to " +
          "exercise judgment. Trusting people first creates the opportunity for them to " +
          "rise to that trust.",
        linkLabel: "View on Amazon",
        linkHref: "https://www.amazon.com/Trust-Inspire-Leaders-Unleash-Greatness/dp/1982143754/ref=sr_1_1?crid=2QHVN4Z2OIKW4&dib=eyJ2IjoiMSJ9.K_6CtKt3x-qJYhX7oAcqLVaqaLzp6Yvj2XLHQptpShke6Ire7f1DOlN_vrkVNLxVcPk8ZHGAJdGzYBogte2Slt52Jpno399cc_1XcF9HCjP5Y8W16nAPmmkW0H7wiJjbuvFfAu8sM9LlIz1UBlpfVCABuaRfOsv_M0Kd5pEZqdE6_DBbYW7Ba5fXkaQhv-ONv5GEIy1U6h-RTpZxRA6dkr3O8s-35cD_NJvAlOH1Z1o.45saHg8DYwCZKdJnwqHFtQzU0e5gce4PvjbBMVX8nUc&dib_tag=se&keywords=Trust+and+inspire&qid=1786559667&sprefix=trust+and+inspire%2Caps%2C173&sr=8-1",
      },
      {
        type: "Book",
        title: "Culture code",
        coverImage: "/books/culturecode.jpg",
        author: "Daniel Coyle",
        description:
          "Helped me see trust as something built through everyday interactions. " +
          "Belonging, vulnerability, and repeated signals of safety create an environment " +
          "where people are willing to speak honestly, take risks, and rely on one another.",
        linkLabel: "View on Amazon",
        linkHref: "https://www.amazon.com/Culture-Code-Secrets-Highly-Successful/dp/0804176981/ref=sr_1_1?crid=14VZQM3AWE86W&dib=eyJ2IjoiMSJ9.l4LRxcquvBuu74AHnRbaz50Kb4cenEqdMZzn2ClrBFf9bLSnoNuWQCtPrR6MgZw87h8nOBRULm-FVEtpWN-Ltf7wyhfjKSQa7TjJvFN7FJPbl5pdwR2Lbdt0d8MvSYXUSL7K_EXCN4njGLR4NNOxjw.VBNNiYwHXScAMxlVs_XNxvHCfM6S2ciGPFW8Mv9e5eM&dib_tag=se&keywords=culturecode&qid=1786559886&sprefix=culturecode%2Caps%2C173&sr=8-1",
      },
      {
        type: "Book",
        title: "Team of Teams",
        coverImage: "/books/teamofteams.jpg",
        author: "Gen. Stanley McChrystal",
        description:
          "Showed me how trust becomes an organizational advantage. When people share " +
          "information freely and trust one another to act, decisions can move closer " +
          "to the work and teams can collaborate without depending on the hierarchy " +
          "for every answer.",
        linkLabel: "View on Amazon",
        linkHref: "https://www.amazon.com/Team-Teams-Rules-Engagement-Complex/dp/1591847486/ref=sr_1_1?crid=1U9C8WMNS6TDV&dib=eyJ2IjoiMSJ9.tTUYP9et1Ikm6AavQGxm2w2HR-z2N_kFLih1JE7MgqzmeD-lW9FSBpDalzH0aNl8he-GMCRsGxqrgoawRiS0HG9bS0vsjP71bCXcB3xHwY-rcUH0QVLKHakXf9sBnjxmVYjcimp1rSSoazIB7n23hd8hP5hTG7O3jJQCQPkfTX68zT3-rFgtCX2tHHE3izcrsXUgPXUBGsfoMZPY5Q_T1_EfbIK37epDyaJhEXJrBKE.sapzEHUTba55P1Zz99eduXq8JZIJk8g4_5-ucpwCtPM&dib_tag=se&keywords=team+of+teams&qid=1786560044&sprefix=team+of+team%2Caps%2C182&sr=8-1",
      },
      {
        type: "Research",
        title: "An Integrated Model of Organizational Trust",
        coverImage: "/books/research.jpg",
        author: "Mayer, Davis & Schoorman",
        description:
          "Gave me a research-based framework for understanding why we trust people. " +
          "Trustworthiness is shaped by ability, benevolence, and integrity: whether " +
          "someone is capable, genuinely cares about others, and behaves according to " +
          "principles people can rely on.",
        linkLabel: "Foundational Research",
        linkHref: "https://www.makinggood.ac.nz/media/1270/mayeretal_1995_organizationaltrust.pdf?utm_source=chatgpt.com",
      },      
    ],
    learnedTagline: "Trust is earned—but someone has to go first.",
    learnedParagraph: [
      "I used to think trust was something people earned over time.  That may be true, " +
      "but, I've come to believe leadership requires going first. Give people meaningful " +
      "responsibility, share information openly, assume positive intent, and give them " +
      "room to exercise judgment.",
      "That doesn't mean trust is unconditional. What happens next either strengthens " +
      "or weakens it. But if I ask people to trust me while withholding trust from them, " +
      "I'm creating the very environment of caution and self-protection I'm trying to avoid.",
    ]
  },
  {
    number: "03",
    id: "connect-to-purpose",
    title: "Connect to Purpose",
    tagline: "People commit more fully when they understand why the work matters.",
    icon: CompassIcon,
    tile: "violet",
    comingSoon: true,
  },
  {
    number: "04",
    id: "build-great-teams",
    title: "Build Great Teams",
    tagline: "Great teams accomplish what no individual can alone.",
    icon: LayersIcon,
    tile: "amber",
    comingSoon: true,
  },
  {
    number: "05",
    id: "improve-the-system",
    title: "Improve the System",
    tagline: "Fix the environment, not just the symptom.",
    icon: GearsIcon,
    tile: "teal",
    comingSoon: true,
  },
] as const;
