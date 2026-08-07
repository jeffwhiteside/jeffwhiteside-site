/**
 * Personal content for the About page and the footer's "Beyond Work" column.
 *
 * The interests below are confirmed by the owner. The family paragraph is a placeholder:
 * the owner asked for it but has not supplied details, and nothing about a person's family
 * is invented here.
 */

export interface Interest {
  readonly title: string;
  readonly description: string;
}

export const INTERESTS = [
  {
    title: "Playing guitar",
    description:
      "A long-running habit that has nothing to do with software, which is most of the point.",
  },
  {
    title: "Cooking for family and friends",
    description:
      "Cooking for people is the fastest way I know to slow a week down.",
  },
  {
    title: "Building small applications",
    description:
      "Small tools that solve problems in my own life, and a way to stay close to the craft.",
  },
] as const satisfies readonly Interest[];

/** Short summary used in the footer, where there is only room for a sentence. */
export const BEYOND_WORK_SUMMARY =
  "Outside of engineering, I play guitar, cook for family and friends, and build small " +
  "applications that solve problems in my own life.";

/**
 * Placeholder. The owner asked for family content but has not supplied it. Rendered as an
 * explicit placeholder rather than filled with invented detail.
 */
export const FAMILY_PLACEHOLDER =
  "Placeholder — a short paragraph about family and what we like to do together, " +
  "pending details from the owner.";
