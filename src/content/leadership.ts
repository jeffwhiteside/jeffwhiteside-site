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
  /** Slug of the canonical resource in RESOURCE_GROUPS (content/resources.ts). Title, author,
   * cover, and external link are looked up from there at render time — kept in one place
   * rather than duplicated between the Leadership and Resources pages. */
  readonly resourceSlug: string;
  /** Why this resource shaped THIS principle specifically — distinct from (and often more
   * specific than) that resource's general whyItMattersToMe on the Resources page. */
  readonly description: string;
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
        resourceSlug: "multipliers",
        description:
          "Helped change how I thought about my role as a leader. My job isn't to have " +
          "all the answers; it's to draw out the intelligence and capability of the " +
          "people around me, give them room to lead, and help them become better than " +
          "they thought they could be",
      },
      {
        resourceSlug: "first-break-all-the-rules",
        description:
          "Reinforced that great leadership isn't about treating everyone the same. " +
          "People have different strengths, motivations, aspirations, and ways of " +
          "working. My responsibility is to understand those differences, help people " +
          "build on what they do best, and create opportunities where they can contribute, " +
          "grow, and succeed.",
      },
      {
        resourceSlug: "dare-to-lead",
        description:
          "Reinforced that helping people grow requires both courage and vulnerability. " +
          "Leaders need to set clear expectations, give honest feedback, admit when " +
          "they don't have the answer, and create an environment where people can " +
          "do the same",
      },
      {
        resourceSlug: "self-determination-theory",
        description:
          "Gave me a deeper framework for understanding motivation. People are more " +
          "likely to thrive when their needs for autonomy, competence, and connection " +
          "to others are supported. It reinforced my belief that leaders don't " +
          "create motivation through control; they create conditions where motivation " +
          "and growth can flourish.",
      },
    ],
    learnedTagline: "People grow when leaders create the conditions for growth.",
    learnedParagraph: [
      "I've learned that developing people isn't about having all the answers for " +
      "them. Set clear expectations, give people meaningful ownership, coach before " +
      "solving, provide honest feedback, and create opportunities that stretch what " +
      "they believe they can do.",
      "Growth also requires belief. People are more willing to take on difficult " +
      "challenges when they know someone sees their potential, supports them when they " + 
      "struggle, and will give them the space to learn. The goal isn't dependence on the " +
      "leader—it's greater confidence, judgment, capability, and autonomy.",
      "The best measure of developing someone is that they need you less over time, not more."
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
      "I don't see trust as the absence of accountability. The strongest teams I've worked " +
      "with combine high trust with high standards. People tell each other the truth, make " +
      "clear commitments, follow through on them, own mistakes, and hold one another " +
      "accountable because they know everyone is working toward the same outcome. " +
      "Commitments have to mean something—leaders set that expectation by keeping their " +
      "own word and consistently following up on what others have agreed to do.",
      "Trustworthiness requires competence and authenticity. Good intentions are not " +
      "enough; people need confidence in your judgment and need to know they are " +
      "dealing with the real person—not a managed version of the leader. That means " +
      "being honest about what you know, what you don’t know, what you believe, and " +
      "where you’ve made mistakes.",
      "Leaders have to go first. Trust is strengthened through consistency, transparency, " +
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
        title: "Make Commitments Matter",
        description:
          "Be clear about what we’re committing to, who owns it, and what success looks like. " +
          "Then follow through. Leaders model this by keeping their word, following up on commitments, " +
          "and resetting expectations when circumstances change. Trust grows when people know that " +
          "commitments matter.",
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
        resourceSlug: "trust-and-inspire",
        description:
          "Reinforced that trust has to be extended, not just earned. Leaders demonstrate " +
          "trust by giving people real responsibility, autonomy, and the freedom to " +
          "exercise judgment. Trusting people first creates the opportunity for them to " +
          "rise to that trust.",
      },
      {
        resourceSlug: "the-culture-code",
        description:
          "Helped me see trust as something built through everyday interactions. " +
          "Belonging, vulnerability, and repeated signals of safety create an environment " +
          "where people are willing to speak honestly, take risks, and rely on one another.",
      },
      {
        resourceSlug: "team-of-teams",
        description:
          "Showed me how trust becomes an organizational advantage. When people share " +
          "information freely and trust one another to act, decisions can move closer " +
          "to the work and teams can collaborate without depending on the hierarchy " +
          "for every answer.",
      },
      {
        resourceSlug: "trust-in-a-manager",
        description:
          "Gave me a research-based framework for understanding why we trust people. " +
          "Trustworthiness is shaped by ability, benevolence, and integrity: whether " +
          "someone is capable, genuinely cares about others, and behaves according to " +
          "principles people can rely on.",
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
    whatIBelieve: [
      "Technology matters because of what it enables. Sometimes the impact is " +
      "significant and obvious. Other times it is a small improvement that saves " +
      "someone time, removes frustration, or makes their work easier. Either way, " + 
      "there are real people and real outcomes behind what we build. Part of my " +
      "job as a leader is to make that impact visible—to connect the work to the " +
      "people it serves and the business it helps succeed.",
      "I also believe people need a future worth building toward. A compelling " +
      "direction should help us imagine what could be better and stretch what we think " +
      "is possible today. It should be ambitious enough to inspire people, but clear " +
      "enough that everyone understands where we're going and why getting there matters.",
      "Vision without shared context, however, isn't enough. People make better " +
      "decisions when they understand the customer, the business, the strategy, the " +
      "constraints, and the tradeoffs behind our direction. I want teams to understand " +
      "the reasoning, not just receive the decisions. Shared context is what allows " +
      "alignment and autonomy to coexist.",
      "Ambition also needs a path. Shared goals and OKRs define what success looks like. " +
      "Roadmaps and milestones give us a way to get there. The path doesn't need to " +
      "be perfect or fully known upfront—meaningful progress is usually iterative and " +
      "incremental. We deliver, learn, measure, adjust, and keep moving toward the " +
      "outcome.",
      "Ultimately, everyone should be able to connect the work in front of them " +
      "to the larger purpose. Alignment isn't everyone doing the same thing; it's " +
      "everyone making decisions in service of the same purpose. When people " +
      "understand why the work matters, where we're going, and how their contribution " +
      "helps us get there, they can move together without needing every step prescribed " +
      "for them."
    ],
    howIPractice: [
      {
        title: "Make the Impact Visible",
        description:
          "People care more deeply about work when they understand who it helps and " +
          "why it matters. I connect the work to real people, customer outcomes, " +
          "and business impact so teams can see the difference their work makes" +
          "—even when that impact isn't immediately obvious.",
      },
      {
        title: "Paint an Ambitious Future",
        description:
          "People need something worth building toward. I create a clear picture of what " +
          "could be better and set a direction that stretches what seems possible today, " +
          "while making sure people understand why reaching it matters.",
      },
      {
        title: "Create a Shared Context",
        description:
          "Distributed teams need a shared frame of reference. I make the customer need, " +
          "business priorities, constraints, tradeoffs, and reasoning behind decisions " +
          "visible so people across teams, geographies, and cultures are interpreting the " +
          "work through the same lens and pulling in the same direction.",
      },
      {
        title: "Turn Vision Into Goals",
        description:
          "Vision becomes actionable when people know what success looks like. I use " +
          "shared goals and OKRs to translate direction into measurable outcomes, " +
          "create focus, and make progress visible. Incremental wins build confidence, " +
          "reinforce progress, and create momentum toward the larger goal.",
      },    
      {
        title: "Build a Path Together",
        description:
          "Ambitious goals rarely come with a perfect roadmap. I work with teams to turn " +
          "the destination into milestones and an adaptable roadmap, then make " + 
          "progress iteratively—deliver, learn, measure, adjust, and keep moving.",
      },
      {
        title: "Connect Strategy to the Work",
        description:
          "Alignment only works when people can connect the larger direction to the " +
          "decisions they make every day. I continually reinforce priorities, goals, " +
          "and context so teams understand what matters now, how their work contributes, " +
          "and where they have the autonomy to make decisions.",
      },        
    ],
    experienceTagline: "Big transformations need both a compelling future and a credible path to get there.",
    experienceParagraph: [
      "At Xcira, we were running on self-hosted infrastructure that required " +
      "significant capital investments every few years and could not scale elastically " +
      "when demand changed. Moving to the cloud was a massive shift, and not " +
      "everyone initially believed it was the right direction.",
      "Before we could execute, we had to create shared understanding around why the " +
      "change mattered: cost, scalability, resilience, and the limitations of " +
      "continuing with the existing model. Once we aligned on the destination, we " +
      "broke the transformation into a step-by-step roadmap that let us modernize " +
      "incrementally without disrupting the business.",
      "That experience reinforced something I still believe: ambitious change becomes " +
      "possible when people understand the reason for it, believe in the destination, " +
      "and can see a practical path from where they are today to where they need to go."
    ],
    ideasThatShaped: [
      {
        resourceSlug: "start-with-why",
        description:
          "Reinforced that people need more than a list of things to do—they need to " +
          "understand why the work matters. Connecting decisions and priorities to a " +
          "meaningful purpose creates context, helps people make better choices, " +
          "and gives them something larger than the task itself to work toward.",
      },
      {
        resourceSlug: "built-to-last",
        description:
          "The concept of BHAGs shaped how I think about ambition. A compelling future " +
          "should stretch beyond what seems easily achievable today, giving people " +
          "something meaningful to rally around while creating belief that together " +
          "we can accomplish more than we initially thought possible.",
      },
      {
        resourceSlug: "measure-what-matters",
        description:
          "Helped shape how I translate ambition into execution. OKRs connect a larger " +
          "purpose to clear, measurable outcomes, create alignment across teams, and " +
          "make progress visible without prescribing exactly how people should achieve " +
          "the goal.",
      },
      {
        resourceSlug: "the-progress-principle",
        description:
          "Reinforced the importance of making progress visible. Meaningful work becomes " +
          "more motivating when people can see that their effort is moving something " +
          "forward. Small wins build confidence and momentum, especially when the larger " +
          "destination is ambitious and still far away.",
      },
    ],
    learnedTagline: "Ambition needs a Path",
    learnedParagraph: [
      "I’ve learned that an inspiring vision can create energy, but without a credible " +
      "path it can just as easily create skepticism. People need to see how today’s " +
      "work connects to tomorrow’s ambition.",
      "Break the journey into meaningful goals, make progress visible, celebrate the " +
      "wins along the way, and adjust as you learn. Each step builds confidence " +
      "and momentum. What once seemed impossible starts to feel achievable.",
    ],
  },
  {
    number: "04",
    id: "build-great-teams",
    title: "Build Great Teams",
    tagline: "Great teams amplify talent",
    icon: LayersIcon,
    tile: "amber",
    whatIBelieve: [
      "The most meaningful work is rarely accomplished by one person. It takes people " +
      "with different strengths, experiences, perspectives, and expertise working toward " +
      "something they could not accomplish alone. Individual capability matters, and the " +
      "tools available to us can expand what one person can accomplish dramatically, " +
      "but great teams amplify that capability even further.",
      "Putting talented people together doesn't automatically create a great team. The " +
      "strongest team isn't always the one with the strongest individuals. People need " +
      "a shared purpose, clear ownership, and confidence that everyone is committed to the " +
      " same outcome. The strongest teams combine complementary strengths and value people " +
      "not only for what they contribute individually, but for how they make the people " +
      "around them better.",
      "Collaboration isn't about involving everyone in everything. It's about bringing " +
      "together the right perspectives when they matter. Knowledge, experience, and ideas " +
      "are distributed across people, disciplines, teams, and geographies. When those " +
      "perspectives combine well, teams generate better ideas, find more creative solutions, " +
      "challenge assumptions, innovate faster, and accomplish more than individuals working in isolation.",
      "That requires people to contribute what they really think. Great teams aren't teams that " +
      "always agree. People need to feel safe asking questions, admitting mistakes, offering " +
      "unconventional ideas, and saying, “I think we're wrong.” Productive disagreement " +
      "isn't dysfunction. Handled with trust and respect, it protects against groupthink " +
      "and makes the eventual solution stronger.",
      "I don't believe there is one ideal team structure. Stable, cross-functional teams are " +
      "powerful when they fit the work, but structure should serve the problem rather than " +
      "become an end in itself. Teams and their boundaries should be able to evolve as the " +
      "work changes. Fluid doesn't mean unclear: purpose, ownership, decision-making, " +
      "and accountability should remain clear while expertise can move across boundaries when needed."
    ],
    howIPractice: [
      {
        title: "Build for Collective Strengths",
        description:
          "Individual talent matters, but so does the effect someone has on everyone around them. " +
          "I look for complementary strengths and for people who are curious, collaborative, growth-oriented, " +
          "and invested in helping others succeed. The strongest team isn't always the one with the strongest " +
          "individuals; it's the one where people make the whole stronger.",
      },
      {
        title: "Amplify Each Other",
        description:
          "Real collaboration is more than dividing up work and completing pieces independently. Create " +
          "opportunities for people to combine expertise, build on one another's ideas, and solve problems " +
          "together so the team produces better ideas, more creativity, faster learning, and stronger " +
          "outcomes than anyone could produce alone.",
      },
      {
        title: "Create Psychological Safety",
        description:
          "People contribute more fully when they know they can ask questions, admit mistakes, " +
          "challenge assumptions, offer unconventional ideas, and say “I think we’re wrong” without " +
          "fear of embarrassment or retaliation. Safety doesn’t mean comfort or low standards; it " +
          "creates the conditions for candor, learning, and better performance.",
      },
      {
        title: "Encourage Productive Dissent",
        description:
          "Great teams need different perspectives and healthy disagreement. Actively seek input from people " +
          "who see the problem differently, debate ideas with curiosity and respect, resist premature consensus " +
          "and groupthink, then commit together once a decision is made.",
      },    
      {
        title: "Share Ownership of the Outcome",
        description:
          "Great teams win and lose together. Make individual responsibilities clear while keeping the " +
          "larger outcome collectively owned, so people help across boundaries, solve problems together, " +
          "and optimize for the team’s success rather than protecting their role, function, or personal credit.",
      },
      {
        title: "Design the Team for the Work",
        description:
          "There is no single team structure that works everywhere. I favor stable, cross-functional teams " +
          "when continuity and ownership matter, but teams, roles, and interactions should evolve with the " +
          "problem. Fluid doesn’t mean unclear: purpose, ownership, decision rights, and accountability " +
          "should remain explicit.",
      },        
    ],
    experienceTagline: "The right people in the wrong structure can still struggle.",
    experienceParagraph: [
      "Early in my leadership career at Gearworks, we were building distributed teams that " +
      "included engineers in Belarus. We were still learning how to work effectively " +
      "across geographies, and the way we had organized the work was creating unnecessary friction.",
      "When I visited the Belarus office, one thing became obvious: standups, planning, and other " +
      "working sessions were being held with large groups. Meetings took too long, many people " +
      "were only marginally involved, and real collaboration was difficult.",
      "We reorganized the work into smaller cross-functional teams, intentionally balancing technical " +
      "strengths, working styles, and the needs of each product area. People had clearer ownership, " +
      "more relevant conversations, and stronger relationships with the teammates they " +
      "depended on every day. Collaboration improved, meetings became more focused, and the " +
      "teams worked much more effectively.",
    ],
    ideasThatShaped: [
      {
        resourceSlug: "the-wisdom-of-teams",
        description:
          "Reinforced my belief that great teams are more than collections of talented individuals. " +
          "Complementary skills, shared purpose, common goals, and mutual accountability turn " +
          "individual capability into collective performance. The strength comes from how people " +
          "work together, not simply from the talent of each person.",
      },
      {
        resourceSlug: "the-five-dysfunctions-of-a-team",
        description:
          "Shaped how I think about trust and productive disagreement. Strong teams don't avoid conflict; " +
          "they create enough trust to challenge ideas, surface concerns, and debate alternatives without " +
          "making disagreement personal. Working through differences leads to stronger decisions and deeper commitment.",
      },
      {
        resourceSlug: "team-topologies",
        description:
          "Influenced how I think about designing teams around the work. Team boundaries, ownership, " +
          "cognitive load, and how teams interact all affect performance. There isn't one ideal " +
          "structure—the goal is to create clear ownership while allowing expertise and collaboration to " +
          "flow where the work requires it.",
      },
      {
        resourceSlug: "project-aristotle",
        description:
          "Reinforced that team effectiveness depends on more than individual talent. Google's research " +
          "highlighted psychological safety, dependability, structure and clarity, meaning, and " +
          "impact as important dynamics of effective teams. It strengthened my belief that leaders " +
          "need to create the conditions where people can contribute fully, take interpersonal risks, " +
          "and succeed together.",
      },
    ],
    learnedTagline: "Great teams don't happen by accident.",
    learnedParagraph: [
      "I've learned that great teams require intentional design. Who you bring together matters, " +
      "but so do the conditions around them: complementary strengths, shared purpose, " +
      "psychological safety, clear ownership, and the way the work itself is structured. ",
      "Psychological safety makes real collaboration possible. When people feel safe " +
      "contributing what they know, challenging ideas, admitting mistakes, and building on " +
      "one another's thinking, the team can generate ideas and solutions that no individual " +
      "perspective would have produced alone.",
      "Very little meaningful work happens in isolation. The best teams create something greater " +
      "than the sum of their individual contributions—better ideas, more creative solutions, " +
      "faster learning, and stronger outcomes. A leader's job is to intentionally create the " +
      "conditions that allow that to happen."
    ],
  },
  {
    number: "05",
    id: "improve-the-system",
    title: "Improve the System",
    tagline: "Build systems that make better outcomes repeatable.",
    icon: GearsIcon,
    tile: "teal",
    whatIBelieve: [
      "Organizations are systems. People, teams, processes, technology, architecture, incentives, " +
      "and information all interact to produce outcomes. When something goes wrong, it is easy to " +
      "focus on the person closest to the problem. Sometimes the person is the issue, but often " +
      "the system around them is making success harder than it should be.",
      "Good systems also have a shelf life. What works for one team, product, or stage of growth " +
      "may fail at another. As scale, technology, customers, and complexity change, the systems " +
      "around the work have to evolve with them. The goal isn't more process or structure—it's " +
      "the simplest system that works for the context.",
      "Improvement should focus on the outcome, not isolated efficiency. Making one part of " +
      "a system faster does not help if another part remains the constraint. I want to understand " +
      "the end-to-end flow of work, identify what is actually limiting performance, and focus " +
      "improvement where it will change the outcome. ",
      "That requires visibility and fast feedback. Metrics, observability, customer input, " +
      "delivery data, and financial results should help us understand how the system behaves, " +
      "test assumptions, and learn quickly. Measurement should create insight and guide " +
      "improvement—not become a tool for judging individuals.",
      "I believe in continuous improvement. Make a change, study the result, learn from it, " +
      "and adapt. There is no final operating model. The leader’s responsibility is to keep " +
      "improving the environment around the work so people and teams can succeed as the context changes.",
    ],
    howIPractice: [
      {
        title: "Start With the System",
        description:
          "When outcomes fall short, don't stop at the person closest to the problem. Trace " +
          "the inputs and conditions around the work—goals, requirements, context, processes, " +
          "tools, architecture, dependencies, skills, and incentives. Often the visible mistake " +
          "is the result of something that happened earlier in the system.",
      },
      {
        title: "Optimize for the Outcome",
        description:
          "Improving one part of a system doesn't necessarily improve the result. Look end to " +
          "end, understand what is actually limiting performance or is a bottleneck. Focus " +
          "improvement there. Local efficiency only matters when it improves the overall outcome. " +
          "In some cases, optimizing one part can actually make the system perform worse.",
      },
      {
        title: "Make It Visible",
        description:
          "You can't improve what you can't see. Use meaningful metrics, dashboards, observability, " +
          "and qualitative feedback to understand flow, quality, reliability, customer impact, " +
          "and business results. Measurement should create insight and guide decisions, not " +
          "become surveillance.",
      },
      {
        title: "Shorten the Feedback Loop",
        description:
          "Feedback is how systems learn. Reduce the time between action and understanding its " +
          "impact through small increments, automated testing, observability, frequent delivery, " +
          "and customer feedback. Learn sooner so teams can correct course before small problems " +
          "become large ones.",
      },    
      {
        title: "Evolve With Scale",
        description:
          "Systems have to fit their scale. What works for 10 people may break at 100, while " +
          "processes designed for 100 can unnecessarily burden a team of 10. Add structure as " +
          "teams, products, and complexity grow, but resist complexity that isn't needed. " +
          "Use the simplest system that works for the scale you're operating at.",
      },
      {
        title: "Learn and Adapt",
        description:
          "No system is ever finished. Experiment, study the results, learn from successes and " +
          "failures, and continuously improve. Keep what works, change what doesn't, and " +
          "challenge practices that no longer fit the people, product, technology, or business.",
      },        
    ],
    experienceTagline: "Sometimes speeding up one part of the system makes the whole system slower.",
    experienceParagraph: [
      "At Wolters Kluwer, releases were taking too long. Software frequently entered the release " +
      "process with behavioral or technical issues, and regression testing itself required " +
      "significant time. The initial assumption was that Development needed to move faster, " +
      "and there was pressure to add more development capacity.",
      "When we studied the end-to-end flow, however, Development wasn't the constraint. QA and " +
      "release verification were. Adding more developers would have simply created more work for " +
      "an already constrained part of the system.",
      "So we intentionally shifted development capacity toward improving the bottleneck. " +
      "Developers added more unit testing, helped automate regression testing, and worked with " +
      "QA earlier in the lifecycle. We also shortened the release cadence from monthly to biweekly, " +
      "which reduced the amount of change being validated at once and gave us faster feedback.",
      "The experience reinforced something that has stayed with me: improving the performance " +
      "of one part of a system doesn't matter if the overall outcome doesn't improve. Sometimes " +
      "the fastest way forward is to slow one part down so the whole system can move faster.",
    ],
    ideasThatShaped: [
      {
        resourceSlug: "thinking-in-systems",
        description:
          "Shaped how I think about organizations as interconnected systems rather than collections " +
          "of isolated problems. Feedback loops, delays, leverage points, and unintended consequences " +
          "reinforced the importance of understanding how the parts interact before trying to improve " +
          "them. Lasting improvement comes from changing the system, not simply treating the visible symptom.",
      },
      {
        resourceSlug: "out-of-the-crisis",
        description:
          "Deeply influenced how I think about management's responsibility for the environment " +
          "in which people work. Performance is often shaped by the system around people—processes, " +
          "information, incentives, tools, and constraints. Deming also reinforced my belief in " +
          "measurement as a tool for understanding, and in continuous learning and improvement " +
          "rather than simply demanding better results.",
      },
      {
        resourceSlug: "the-principles-of-product-development-flow",
        description:
          "Influenced how I think about flow, queues, batch size, feedback, and the economics " +
          "of product development. Improving individual activities doesn't necessarily improve " +
          "the overall outcome. The goal is to understand the end-to-end system, reduce delays " +
          "and unnecessary work, and focus improvement where it meaningfully improves flow and " +
          "business results.",
      },
      {
        resourceSlug: "accelerate",
        description:
          "Reinforced these ideas with research from modern software organizations. Fast feedback, " +
          "small changes, automation, continuous delivery, and strong technical practices can " +
          "improve both delivery performance and stability. It helped shape my belief that speed " +
          "and quality don't have to be opposing goals when the system is designed well.",
      },
    ],
    learnedTagline: "Look for the constraint, not the culprit.",
    learnedParagraph: [
      "I've learned that the place where a problem becomes visible is often not where it began. " +
      "Before adding people, pushing teams to work faster, or fixing the obvious symptom, " +
      "look at how work moves through the entire system. Follow the queues, handoffs, delays, " +
      "failures, and rework until you understand what is actually limiting the outcome.",
      "More work in progress rarely makes a constrained system faster. Smaller batches, earlier " +
      "feedback, and building quality into the process help problems surface sooner and keep " +
      "work flowing. Sometimes improving the whole system even means deliberately slowing " +
      "one part of it down.",
      "Most importantly, keep asking why. Treat problems as opportunities to learn about the " +
      "system, not just events to resolve. The goal isn't to keep people busy; it's to create " +
      "a system that consistently produces better outcomes."
    ],
  },
] as const;
