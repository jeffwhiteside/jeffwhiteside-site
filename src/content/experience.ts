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
      "Led engineering, product, QA, platform reliability, and AI enablement across seven " +
      "B2B SaaS platforms. Managed a distributed 60+ person organization through five " +
      "engineering managers and seven product managers.",
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
      "Owned software development, infrastructure, QA/SRE, architecture, and modernization " +
      "for global, high-volume, real-time transactional marketplace platforms. Directed six " +
      "cross-functional teams under strict transaction accuracy and release discipline.",
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
    title: "Agile Coach & Release Manager",
    period: "January 2013 – August 2015",
    summary:
      "Led Agile delivery, QA/SRE, and enterprise release governance for regulated audit, " +
      "tax, risk, and compliance software.",
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
      "Progressed from hands-on Java engineer and architect to Director of Engineering, " +
      "leading distributed teams building SaaS and mobile workforce platforms through " +
      "growth, acquisition integration, and platform consolidation.",
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
