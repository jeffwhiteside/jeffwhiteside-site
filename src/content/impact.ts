export interface ImpactStatement {
  /** Figure highlighted in the accent or positive colour. */
  readonly figure: string;
  /** Text before the figure. */
  readonly before: string;
  /** Text after the figure. */
  readonly after: string;
  readonly tile: "blue" | "teal" | "violet" | "amber";
}

/**
 * Successes and impact.
 *
 * Every figure is drawn from the owner's own résumé, with its hedging preserved. Two figures
 * combine ranges that appear across separate roles — the uptime band and the org growth — and
 * are phrased to make that explicit rather than implying a single achievement.
 */
export const IMPACT = [
  {
    before: "Scaled engineering organizations from",
    figure: "15 to 60+ people",
    after: "across two companies while improving delivery velocity and quality.",
    tile: "teal",
  },
  {
    before: "Reduced infrastructure costs by approximately",
    figure: "30%",
    after: "through AWS migration and platform modernization.",
    tile: "blue",
  },
  {
    before: "Sustained",
    figure: "99.8% – 99.95%",
    after: "uptime for mission-critical SaaS and marketplace platforms.",
    tile: "violet",
  },
  {
    before: "Improved engineering productivity by approximately",
    figure: "40%",
    after: "through agentic coding and AI-enabled SDLC adoption.",
    tile: "amber",
  },
] as const satisfies readonly ImpactStatement[];

/** Pull quote used in the hero. Owner's wording, from the branding mockup. */
export const HERO_QUOTE =
  "My role is to build an environment where talented people can do the best work of their careers. That leads to extraordinary results we can all be proud of.";
