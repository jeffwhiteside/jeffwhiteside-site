import { PRINCIPLE_DETAILS } from "@/content/leadership";

export interface BackLinkTarget {
  readonly label: string;
  readonly href: string;
}

type SectionResolver = (section: string | null) => BackLinkTarget | null;

/**
 * Known pages that can deep-link into a Resources card with `?resource=<slug>&from=<page>
 * &section=<id>`, and how to turn their `section` value into a human-readable "Back to X"
 * label and a real destination. Each resolver reads from that page's own content (never a
 * second, hand-maintained list of labels) and returns null for anything it doesn't recognize —
 * the `section`/`from` query values are never trusted directly to build a destination.
 */
const SOURCES: Readonly<Record<string, SectionResolver>> = {
  leadership: (section) => {
    const principle = section ? PRINCIPLE_DETAILS.find((p) => p.id === section) : null;
    if (principle) {
      return { label: principle.title, href: `/leadership#${principle.id}` };
    }
    return { label: "Leadership", href: "/leadership" };
  },
};

/**
 * Resolves a `from`/`section` query pair (as read from the Resources page's URL) into a back
 * link, or null if `from` isn't a page this site knows how to link back to. Add an entry to
 * SOURCES here — not a one-off in the Resources page component — when a new page starts
 * linking into Resources (Experience, Writing, etc.).
 */
export function resolveBackLinkTarget(
  from: string | null,
  section: string | null,
): BackLinkTarget | null {
  if (!from) {
    return null;
  }
  const resolve = SOURCES[from];
  return resolve ? resolve(section) : null;
}
