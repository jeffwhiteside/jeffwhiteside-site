import {
  type Icon,
  ChartUpIcon,
  CloudIcon,
  GaugeIcon,
  GlobeIcon,
  GraduationCapIcon,
  HeartPulseIcon,
  InstitutionIcon,
  MonitorIcon,
  PeopleIcon,
  PhoneIcon,
  RefreshIcon,
  RobotIcon,
  ShieldCheckIcon,
  TrendingUpIcon,
} from "@/components/ui/icons";
import { type TileColor } from "@/content/leadership";

export interface Metric {
  readonly icon: Icon;
  readonly tile: TileColor;
  readonly label: string;
  readonly stat: string;
  readonly description: string;
}

export interface Role {
  readonly company: string;
  readonly location: string;
  readonly title: string;
  readonly period: string;
  readonly summary: string;
  /** Three headline figures shown as stat tiles. Only the featured roles carry these. */
  readonly metrics?: readonly Metric[];
  /** The one-line reflection closing out the role. Only the featured roles carry this. */
  readonly whatILearned?: string;
  /** Shown in the home page timeline and on the experience page. Older roles are covered by
   * the résumé download instead of a full write-up here. */
  readonly isFeatured: boolean;
}

/**
 * Professional experience.
 *
 * Every company, title, date, claim, and figure here is taken from the owner's own résumé
 * (Director, Software Development Engineering, 2026-08-07). Nothing is inferred or rounded,
 * and the résumé's hedging — "approximately", "+" — is preserved rather than tightened, since
 * these are the numbers he would be asked to defend in an interview.
 */
export const ROLES = [
  {
    company: "CommandLink",
    location: "Remote",
    title: "Vice President, Software Engineering & Products",
    period: "May 2024 – June 2026",
    summary:
      "Scaled an engineering organization from 25 to 60+ while growing seven SaaS products. " +
      "Modernized the platform, strengthened engineering practices, and introduced AI-enabled " +
      "workflows that improved productivity and quality.",
    metrics: [
      {
        icon: PeopleIcon,
        tile: "blue",
        label: "Scale & Organization",
        stat: "25 → 60+",
        description:
          "Scaled engineering and product from 25 to 60+ across seven SaaS products while modernizing the platform, " +
          "strengthening delivery and reliability practices, and expanding AI across both engineering workflows " +
          "and customer-facing products.",
      },
      {
        icon: RobotIcon,
        tile: "teal",
        label: "AI Enablement",
        stat: "Engineering + Product",
        description:
          "Led practical AI adoption across both engineering workflows and customer-facing products. " +
          "Introduced AI-assisted development and code review while building shared service capabilities " +
          "to support features such as summarization, routing, content generation, and voice workflows",
      },
      {
        icon: GaugeIcon,
        tile: "violet",
        label: "Platform Modernization",
        stat: "Legacy → Modern",
        description:
          "Modernized a legacy MVC/PHP platform toward React-based experiences, a Data API layer, " +
          "and independently deployable microservices. Reduced coupling and created a more scalable " +
          "foundation for new products and AI-enabled capabilities.",
      },
    ],
    whatILearned:
      "Scale changes the job of the leader. What works at 30 people will not work at 60, and what works " +
      "at 60 will not work at 100. Operational rigor, clear standards and playbooks, strong leaders, and consistent " +
      "follow-through have to be built before growth makes them urgent. The biggest lesson for me was " +
      "learning to evolve my own leadership as quickly as the organization was evolving.",
    isFeatured: true,
  },
  {
    company: "Ritchie Bros. / Xcira",
    location: "Tampa, FL",
    title: "Vice President, Software Development & Infrastructure",
    period: "August 2015 – May 2024",
    summary:
      "Led technology for a global, multi-industry auction platform spanning automotive, livestock, " +
      "bloodstock, heavy construction, and fine art. Supported both live and timed auctions, including " +
      "high-profile events such as the Elton John Estate auction, while modernizing the platform, scaling " +
      "distributed teams, and navigating acquisition-driven growth.",
    metrics: [
      {
        icon: CloudIcon,
        tile: "green",
        label: "Marketplace & Product Scale",
        stat: "Multi-Industry Platform",
        description:
          "Expanded a shared auction platform across automotive, livestock, bloodstock, heavy construction, " +
          "and fine art. Supported live weekly auctions, timed auctions, and major global events across multiple " +
          "customer segments and operating models.",
      },
      {
        icon: ShieldCheckIcon,
        tile: "violet",
        label: "Platform Modernization",
        stat: "On-Prem → AWS",
        description:
          "Modernized the platform from on-prem infrastructure and legacy PHP front ends toward AWS, React, " +
          "and Java-based services. Built a new automotive Auction Management System to replace the legacy " +
          "desktop product and supported broader platform modernization across web and backend systems.",
      },
      {
        icon: ChartUpIcon,
        tile: "amber",
        label: "Organization & Scale",
        stat: "15 → 30+",
        description:
          "Scaled the engineering organization while building teams across North America and India, managing " +
          "project-based contractor partners, and maintaining delivery continuity through acquisition, distributed " +
          "growth, and the shift from co-located work to remote during COVID.",
      },
    ],
    whatILearned:
      "Complex platforms can evolve without losing customer trust. The key is understanding which parts must remain " +
      "stable, which can change, and how to sequence modernization so the business can keep operating while the " +
      "technology underneath it evolves.",
    isFeatured: true,
  },
  {
    company: "Wolters Kluwer TeamMate",
    location: "Bolivia (Remote)",
    title: "Enterprise Agile Coach & Release Manager",
    period: "January 2013 – August 2015",
    summary:
      "Stepped outside traditional engineering leadership to focus on how large organizations " +
      "build and deliver software. Evolved SDLC using Agile practices across client-server and " +
      "modern SaaS products in regulated environments.",
    metrics: [
      {
        icon: RefreshIcon,
        tile: "blue",
        label: "Delivery Improvement",
        stat: "2x",
        description:
          "Improved release cadence from monthly to bi-weekly and increased predictability " +
          "through Agile and lean flow practices.",
      },
      {
        icon: ShieldCheckIcon,
        tile: "teal",
        label: "Quality & Compliance",
        stat: "Stronger",
        description:
          "Built QA, automation, and release gates that improved quality, compliance, and " +
          "audit readiness across enterprise products.",
      },
      {
        icon: PeopleIcon,
        tile: "violet",
        label: "Agile Leadership",
        stat: "Teams",
        description:
          "Coached teams and leaders in Agile, change management, and continuous improvement " +
          "across distributed organizations.",
      },
    ],
    whatILearned:
      "Process change only works when people understand the why and have support to adopt " +
      "new ways of working.",
    isFeatured: true,
  },
  {
    company: "Gearworks / Xora",
    location: "St. Paul, MN",
    title: "Senior Engineer, Architect, Director of Engineering",
    period: "June 2004 – January 2013",
    summary:
      "Grew from senior backend Java engineer and architect into my first people-leadership role while " +
      "helping build mobile workforce SaaS before smartphones were mainstream. I worked primarily on the " +
      "backend services that powered location tracking, data capture, routing, alerts, and field operations, " +
      "while also contributing to Java MIDP mobile development. I was later promoted to Director of Software " +
      " Development, built our first offshore team in Belarus, and helped lead the company through acquisition, " +
      "growth, modernization, and a zero-downtime database migration.",
    metrics: [
      {
        icon: PhoneIcon,
        tile: "green",
        label: "Product & Technology",
        stat: "Early Mobile SaaS",
        description:
          "Helped build an early mobile workforce SaaS platform before smartphones were mainstream. I was primarily a " +
          "backend Java engineer, building services for location tracking, data capture, routing, alerts, and field " +
          "operations, while also contributing to Java MIDP mobile development. The platform also supported BREW " +
          "clients and was white-labeled for major wireless carriers.",
      },
      {
        icon: GlobeIcon,
        tile: "violet",
        label: "Leadership Growth",
        stat: "Engineer → Director",
        description:
          "Progressed from key hands-on engineer and architect into Director of Software Development, taking on " +
          "increasing responsibility for people, architecture, delivery, and product outcomes.",
      },
      {
        icon: TrendingUpIcon,
        tile: "amber",
        label: "Scale & Transformation",
        stat: "Built & Modernized",
        description:
          "Established the company’s first offshore engineering team in Belarus, navigated acquisition and growth, " +
          "and led major platform modernization and database migration work with zero downtime.",
      },
    ],
    whatILearned:
       "Leadership changes when the work stops being only about what you can build yourself. My transition from " +
          "engineer to leader taught me that technical judgment still matters, but the bigger impact comes from building " +
          "capable teams, creating trust across distance, and helping people succeed through change.",
    isFeatured: true,
  },
] as const satisfies readonly Role[];

export const FEATURED_ROLES = ROLES.filter((role) => role.isFeatured);

export interface EarlyRole {
  readonly company: string;
  /** Shown as a small colored eyebrow above the company name, e.g. "Enterprise Software". */
  readonly category: string;
  readonly title: string;
  readonly period: string;
  readonly icon: Icon;
  readonly tile: TileColor;
  readonly description: string;
  /** Short keywords shown at the bottom of the card, joined with "•". */
  readonly tags: readonly string[];
}

/**
 * The "Building the Foundation" section: earlier, pre-leadership roles condensed into compact
 * cards rather than full write-ups, since the résumé download already covers them in detail.
 */
export const EARLY_ROLES: readonly EarlyRole[] = [
  {
    company: "GE Capital / Cargill",
    category: "Enterprise Software",
    title: "Consultant – Support Engineer",
    period: "1998 – 2000",
    icon: InstitutionIcon,
    tile: "green",
    description:
      "My first professional software engineering role. Worked directly with Cargill grain " +
      "elevator operators to understand software issues, resolve problems, and incorporate " +
      "fixes back into the platform. Working in Smalltalk gave me a strong foundation in " +
      "object-oriented design, patterns, and engineering practices I still use today.",
    tags: ["Smalltalk", "Customer Support", "Software Design", "Enterprise Patterns"],
  },
  {
    company: "Thomson Prometric",
    category: "Testing & Assessment Technology",
    title: "Software Engineer",
    period: "1996 – 1998",
    icon: MonitorIcon,
    tile: "violet",
    description:
      "Built software for internet-based, high-stakes testing before cloud infrastructure was " +
      "commonplace. Used a combination of UDP and HTTP to support real-time testing for exams " +
      "like FAA private pilot. Gained deep insight into networks, reliability, requirements " +
      "management, and the psychometrics behind testing and assessment.",
    tags: ["Distributed Systems", "Testing", "Requirements"],
  },
  {
    company: "RxHub",
    category: "Healthcare Technology",
    title: "Software Engineer",
    period: "2001 – 2004",
    icon: HeartPulseIcon,
    tile: "blue",
    description:
      "Built Java-based healthcare integration software connecting hospitals, clinics, " +
      "pharmacies, and pharmacy benefit managers. Worked on real-time eligibility, formulary, " +
      "patient history, and electronic prescribing workflows where interoperability, " +
      "reliability, and accurate information mattered.",
    tags: ["Java", "Healthcare", "Integrations"],
  },
  {
    company: "Coherent Solutions / HealthNexis",
    category: "Consulting & Collaboration",
    title: "Software Engineer / Consultant",
    period: "2000 – 2001",
    icon: PeopleIcon,
    tile: "amber",
    description:
      "Worked on healthcare supply-chain software, contributing to requirements analysis, use " +
      "cases, software design, and delivery. The experience reinforced the importance of " +
      "understanding the business problem, collaborating across disciplines, and translating " +
      "customer needs into software.",
    tags: ["Requirements", "Design", "Collaboration"],
  },
  {
    company: "Programix",
    category: "Teaching",
    title: "Java Instructor",
    period: "Early 2000s (Evenings)",
    icon: GraduationCapIcon,
    tile: "green",
    description:
      "Taught Java programming at the community-college level while working as a software " +
      "engineer. Teaching strengthened my ability to break down complex ideas, communicate " +
      "clearly, and help others develop their own understanding.",
    tags: ["Java", "Teaching", "Communication"],
  },
];

export const FOUNDATION_INTRO =
  "Before moving into engineering leadership, I spent several years building enterprise, education testing, " +
  "and healthcare software—and teaching Java. Those roles put me close to users, production systems, " +
  "requirements, and the day-to-day realities of software engineering. They gave me the technical " +
  "foundation and customer-centered mindset that still shape how I lead today.";

export const FOUNDATION_REFLECTION = {
  heading: "Software engineering starts with understanding.",
  paragraphs: [
    "Those early roles taught me that strong engineering is about much more than writing " +
    "code. It starts with understanding the customer, the user, the requirements, and the " +
    "environment in which the software has to work.",
    "They also gave me a foundation in software design, patterns, distributed systems, " +
    "integrations, and disciplined engineering practices. Most importantly, they taught me " +
    "to expect change, to learn from users and production systems, collaborate closely, and " +
    "adapt the software as our understanding of the problem improves.",
  ],
} as const;
