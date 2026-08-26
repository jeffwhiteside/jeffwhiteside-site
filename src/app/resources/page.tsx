import type { Metadata } from "next";
import { ResourceExplorer } from "@/components/resources/resource-explorer";
import { RESOURCE_GROUPS, RESOURCES_INTRO } from "@/content/resources";
import { getSection } from "@/content/sections";
import { resolveResourceCover } from "@/lib/resource-covers";

const section = getSection("resources");

export const metadata: Metadata = {
  title: section.title,
  description: section.description,
};

/** Every category across both groups, flattened — the page organizes and filters by category
 * directly rather than by the group they're nested under in the data file. */
const CATEGORIES = RESOURCE_GROUPS.flatMap((group) => group.categories);

/**
 * The single Resources page: search, a category filter, and every category listed in full as
 * its own full-width section — replacing the old split between a brief /resources index and a
 * separate, more functional /resources/library page. One page, one dataset (RESOURCE_GROUPS),
 * no duplicated UI or copy between two routes.
 */
export default function ResourcesPage() {
  const covers: Record<string, string | null> = {};
  for (const category of CATEGORIES) {
    for (const resource of category.resources) {
      covers[resource.slug] = resolveResourceCover(resource);
    }
  }

  return (
    <article className="page-container pt-4 pb-8 sm:pt-6 sm:pb-10">
      <h1 className="text-hero">Resources &amp; Influences</h1>
      <span aria-hidden="true" className="mt-2 block h-1 w-12 rounded-full bg-accent" />
      <p className="mt-2 text-muted">{RESOURCES_INTRO}</p>

      <ResourceExplorer categories={CATEGORIES} covers={covers} />
    </article>
  );
}
