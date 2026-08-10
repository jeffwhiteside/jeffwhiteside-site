export interface Role {
  readonly company: string;
  readonly location: string;
  readonly title: string;
  readonly period: string;
  readonly summary: string;
  readonly highlights: readonly string[];
  /** Shown in the home page timeline. Older roles appear only on the experience page. */
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
      "Scaled an engineering organization from 25 to 60+ while growing new SaaS products, " +
      "modernizing the platform, and strengthening how teams built and released software. " +
      "It was also a lesson in scale: what works at 30 people doesn’t work at 60, and great " + 
      "leaders have to evolve themselves, their systems, and their organizations as they grow.",
    highlights: [
      "Drove agentic coding and AI-enabled SDLC adoption using Cursor, Claude Code, AI-assisted code review, and spec-driven planning; improved engineering productivity by approximately 40% while preserving engineer ownership and release quality",
      "Established architecture, reliability, and secure-delivery standards across React front ends, APIs, AWS, CI/CD, observability, SLO/SLI practices, SOC 2 readiness, incident response, and RCA; sustained 99.8%+ stability",
      "Led legacy platform consolidation across three codebases, reducing service coupling and moving teams toward more independently deployable architecture",
      "Built engineering operating metrics across availability, cycle time, defect escape rate, deployment frequency, and sprint predictability; scaled the organization from approximately 25 to 60+",
    ],
    isFeatured: true,
  },
  {
    company: "Ritchie Bros. / Xcira",
    location: "Tampa, FL",
    title: "Vice President, Software Development & Infrastructure",
    period: "August 2015 – May 2024",
    summary:
      "Spent nearly a decade building technology for the complex world of live auctions " +
      "and marketplaces, while growing engineering teams and modernizing the platform from " +
      "legacy client-server systems toward cloud, web, mobile, and service-based architecture. " +
      "This chapter taught me how to modernize critical systems without losing sight of the customers " +
      "and businesses that depend on them every day.",
    highlights: [
      "Led multi-year modernization from on-premise systems to AWS and from legacy web applications to React/API-based platforms; decommissioned data centers and reduced infrastructure costs by approximately 30%",
      "Established architecture reviews, CI/CD pipelines, automated QA gates, on-call discipline, and incident response; reduced escaped defects by 45% while sustaining 99.95% uptime",
      "Led go/no-go decisions for revenue-critical releases and global live events under zero-failure expectations",
      "Scaled engineering from 15 to 30+ people while developing technical leaders and managing headcount, cloud spend, and vendor relationships",
    ],
    isFeatured: true,
  },
  {
    company: "Wolters Kluwer TeamMate",
    location: "Tampa, FL",
    title: "Enterprise Agile Coach & Release Manager",
    period: "January 2013 – August 2015",
    summary:
      "Stepped outside traditional engineering leadership to focus on how large " +
      "organizations build and deliver software. Helped evolve the SDLC using " + 
      "Agile practices across both legacy client-server and modern SaaS products " +
      "supporting mission-critical tax and audit work for major enterprises and " +
      "government agencies. This chapter shaped how I think about systems and processes, " + 
      "continuous improvement, and enabling teams to deliver effectively at scale.",
    highlights: [
      "Designed enterprise SDLC and release governance integrating Agile/SAFe delivery, automated testing, SOC/PCI controls, and compliance-sensitive release gates",
      "Served as Release Train Engineer across legacy and greenfield programs, facilitating PI Planning and quarterly roadmap alignment",
      "Coached Product Owners, Scrum Masters, engineers, and leaders on TDD and delivery discipline; delayed releases when quality, security, or reliability thresholds were not met",
    ],
    isFeatured: true,
  },
  {
    company: "Gearworks / Xora",
    location: "St. Paul, MN",
    title: "Senior Engineer, Architect, Director of Engineering",
    period: "June 2004 – January 2013",
    summary:
      "Grew from a hands-on software engineer into engineering leadership while building mobile " +
      "workforce technology before smartphones and GPS became commonplace. Experimenting with " +
      "distributed teams in Belarus taught me how to lead across distance, cultures, and time " +
      "zones—and that great teams are built through trust, communication, and shared purpose, " +
      "regardless of where people work.",
    highlights: [
      "Introduced Scrum/XP, TDD, CI/CD, and engineering metrics, improving release cadence from four-month production cycles to biweekly pre-production and monthly production releases",
      "Directed a zero-downtime data-center and platform migration without service interruption",
      "Led merger integration across onshore and offshore teams, aligning architecture, tooling, and engineering standards",
    ],
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
    highlights: [],
    isFeatured: false,
  },
] as const satisfies readonly Role[];

export const FEATURED_ROLES = ROLES.filter((role) => role.isFeatured);
