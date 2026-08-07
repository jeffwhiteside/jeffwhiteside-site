import { existsSync } from "node:fs";
import path from "node:path";

/**
 * Resolves an image to the first candidate that actually exists in `public/`.
 *
 * Runs at build time inside Server Components, so it costs nothing at runtime and the result
 * is baked into the static output.
 *
 * This exists because the stock placeholders under `public/placeholder/` are gitignored: they
 * let the layout be reviewed locally with real photography, but the site must never ship
 * stock imagery. Rather than referencing a file that is absent from the repository — which
 * would render a broken image on every deployment — callers fall back to a drawn placeholder
 * when nothing resolves.
 *
 * @param candidates Public-relative paths, most preferred first.
 * @returns The first path that exists, or null if none do.
 */
export function resolvePublicImage(
  candidates: readonly string[],
): string | null {
  for (const candidate of candidates) {
    const absolute = path.join(process.cwd(), "public", candidate);
    if (existsSync(absolute)) {
      return candidate;
    }
  }
  return null;
}
