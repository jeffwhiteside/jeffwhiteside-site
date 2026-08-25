import type { Metadata } from "next";
import Link from "next/link";
import { ResourceLibrary } from "@/components/resources/resource-library";
import { RESOURCE_GROUPS } from "@/content/resources";
import { resolveResourceCover } from "@/lib/resource-covers";

export const metadata: Metadata = {
  title: "Resource Library",
  description:
    "The complete list of books, research, and reading behind the Resources page, with room " +
    "for notes on each one.",
};

/**
 * The full resource library: every category and resource in full (not the resources index's
 * brief two-item preview), searchable, with room for personal notes on each entry. A book's
 * cover/title or a category's heading on the index links straight to its anchor here.
 *
 * Cover resolution touches the filesystem, so it happens here on the server —
 * ResourceLibrary is a Client Component (for the live search) and can't call
 * resolvePublicImage itself.
 */
export default function ResourceLibraryPage() {
  const covers: Record<string, string | null> = {};
  for (const group of RESOURCE_GROUPS) {
    for (const category of group.categories) {
      for (const resource of category.resources) {
        covers[resource.slug] = resolveResourceCover(resource);
      }
    }
  }

  return (
    <article className="page-container py-12 sm:py-16">
      <Link href="/resources" className="link inline-flex items-center gap-2 text-sm">
        ← Back to Resources
      </Link>

      <h1 className="mt-4 text-hero">Resource Library</h1>
      <span aria-hidden="true" className="mt-4 block h-1 w-12 rounded-full bg-accent" />
      <p className="measure-prose mt-4 text-muted">
        The complete list, in one place — search, jump to a category, or add notes over time
        as I revisit a book.
      </p>

      <ResourceLibrary groups={RESOURCE_GROUPS} covers={covers} />
    </article>
  );
}
