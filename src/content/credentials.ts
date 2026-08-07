/**
 * Education and certifications, taken verbatim from the owner's résumé.
 */

export interface Credential {
  readonly title: string;
  readonly detail: string;
}

export const EDUCATION = [
  { title: "MBA", detail: "University of Tampa" },
  { title: "BS, Computer Science", detail: "University of Wisconsin–Eau Claire" },
] as const satisfies readonly Credential[];

export const CERTIFICATIONS = [
  { title: "SAFe Program Consultant (SPC)", detail: "2014" },
  { title: "PMI-ACP", detail: "Project Management Institute" },
  { title: "Certified ScrumMaster", detail: "Scrum Alliance" },
  { title: "AWS Certified Cloud Practitioner", detail: "Amazon Web Services" },
] as const satisfies readonly Credential[];

/**
 * Scope facts used in the hero and About page.
 *
 * Every figure is drawn from the résumé's executive summary and role detail. These are the
 * most-read statements on the site, so nothing here is rounded or embellished.
 */
export const SCOPE_FACTS = [
  { value: "20+", label: "years leading engineering" },
  { value: "60+", label: "person organization" },
  { value: "7", label: "B2B SaaS platforms" },
  { value: "99.8%+", label: "platform stability" },
] as const;
