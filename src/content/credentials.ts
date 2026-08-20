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
 * The richer "Education, Credentials & Research" section on the Experience page.
 *
 * Logos are optional. Each entry lists public-relative candidate paths (most preferred first,
 * same pattern as the portrait and project icons in lib/assets.ts) — drop a file at one of
 * those paths under public/logos/ and it appears on the next build; until then the card shows
 * a drawn fallback instead of a broken image. To swap in a real logo, add the image file and,
 * if needed, adjust the candidate path here to match its filename.
 */
export interface EducationEntry {
  readonly institution: string;
  readonly logoCandidates: readonly string[];
  readonly degree: string;
  /** Second line under the degree, e.g. the major. */
  readonly detail?: string;
  readonly honor?: { readonly role: string; readonly org: string };
}

export const EDUCATION_ENTRIES: readonly EducationEntry[] = [
  {
    institution: "University of Tampa",
    logoCandidates: [
      "/logos/university-of-tampa.png",
      "/logos/university-of-tampa.jpg",
      "/logos/university-of-tampa.svg",
    ],
    degree: "Master of Business Administration",
  },
  {
    institution: "University of Wisconsin–Eau Claire",
    logoCandidates: ["/logos/uwec.png", "/logos/uwec.jpg", "/logos/uwec.svg"],
    degree: "Bachelor of Science",
    detail: "Computer Science & Management Information Systems",
    honor: {
      role: "President",
      org: "Association for Computing Machinery (ACM) Student Chapter",
    },
  },
];

export interface CredentialBadge {
  readonly title: string;
  readonly issuer: string;
  readonly logoCandidates: readonly string[];
  /** "Expired" or a year, e.g. "2001". Omitted for current, unlabeled credentials. */
  readonly status?: string;
}

export const CURRENT_CREDENTIALS: readonly CredentialBadge[] = [
  {
    title: "PMI Agile Certified Practitioner",
    issuer: "Project Management Institute",
    logoCandidates: ["/logos/pmiacp.png", "/logos/pmiacp.jpg"],
    status: "2024",
  },
  {
    title: "Certified ScrumMaster® (CSM®)",
    issuer: "Scrum Alliance",
    logoCandidates: ["/logos/csm.png", "/logos/csm.jpg", "/logos/sa-csm-600.png"],
    status: "2007 - Renewed/Current"
  },
];

export const EARLIER_CREDENTIALS: readonly CredentialBadge[] = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    logoCandidates: ["/logos/aws-cloud-practitioner.png", "/logos/aws-cloud-practitioner.jpg"],
    status: "2022-2025",
  },
  {
    title: "SAFe® Program Consultant (SPC)",
    issuer: "Scaled Agile",
    logoCandidates: ["/logos/safe-spc.png", "/logos/safe-spc.jpg"],
    status: "2013",
  },
  {
    title: "Sun Certified Java Developer",
    issuer: "Sun Microsystems",
    logoCandidates: ["/logos/sun-java.png", "/logos/sun-java.jpg"],
    status: "2001",
  },
];

export const CREDENTIALS_AS_OF = "May 2026";

export const EDUCATION_INTRO =
  "The education, credentials, and research that helped shape how I think about " +
  "technology, leadership, and continuous improvement.";

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
