import {
  type Icon,
  ChartUpIcon,
  CloudIcon,
  GaugeIcon,
  GlobeIcon,
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
    location: "Tampa, FL (and Remote)",
    title: "Senior Engineer, Architect, Director of Engineering",
    period: "June 2004 – January 2013",
    summary:
      "Grew from engineer to director while building mobile workforce and field service " +
      "software. Led distributed teams across countries and time zones through rapid product " +
      "and customer growth.",
    metrics: [
      {
        icon: TrendingUpIcon,
        tile: "green",
        label: "Career Growth",
        stat: "Engineer → Director",
        description:
          "Advanced through engineering and leadership roles, taking on increasing ownership " +
          "of people, products, and outcomes.",
      },
      {
        icon: GlobeIcon,
        tile: "violet",
        label: "Distributed Leadership",
        stat: "Global Teams",
        description:
          "Led teams across US, India, Belarus, and other regions. Built trust, communication, " +
          "and alignment across distance and cultures.",
      },
      {
        icon: PhoneIcon,
        tile: "amber",
        label: "Product Impact",
        stat: "Mobile First",
        description:
          "Built mobile workforce platforms before smartphones were mainstream, delivering " +
          "real value to field teams.",
      },
    ],
    whatILearned:
      "Strong relationships, shared purpose, and clear communication are the foundation for " +
      "high-performing distributed teams.",
    isFeatured: true,
  },
  {
    company: "RxHub",
    location: "St. Paul, MN",
    title: "Software Engineer",
    period: "October 2001 – June 2004",
    summary:
      "Built Java-based, secure, real-time integration software connecting hospitals, " +
      "clinics, pharmacies, PBMs, and insurers for eligibility, formulary, patient history, " +
      "and electronic prescribing workflows.",
    isFeatured: false,
  },
] as const satisfies readonly Role[];

export const FEATURED_ROLES = ROLES.filter((role) => role.isFeatured);
