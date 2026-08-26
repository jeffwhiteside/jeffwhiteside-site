import type { Resource } from "@/content/resources";
import { resolvePublicImage } from "@/lib/assets";

/**
 * Resolves a resource's cover to a real file, if one exists. Server-only (uses node:fs via
 * resolvePublicImage) — kept in its own module, separate from the ResourceCover component, so
 * that importing ResourceCover from a Client Component (ResourceExplorer) never pulls node:fs
 * into the browser bundle.
 */
export function resolveResourceCover(resource: Resource): string | null {
  return resolvePublicImage(resource.coverCandidates);
}
