import { existsSync, readFileSync } from "node:fs";
import path from "node:path";

/**
 * Reads an article's body from `src/content/articles/<slug>.html`.
 *
 * That file is a plain HTML fragment — no `<html>`/`<body>` wrapper, just the article's own
 * markup (`<p>`, `<h2>`, `<a>`, `<em>`, `<strong>`, `<blockquote>`, `<ul>`) — so an article can
 * be written or edited directly in a text editor with no build step and no code change. The
 * article page renders it with `dangerouslySetInnerHTML`, which is safe here only because
 * this file is authored by the site owner and checked into the repo, never user-submitted.
 *
 * Runs at build time inside Server Components, same as resolvePublicImage. A missing file
 * returns null rather than throwing, so a new article's metadata can land before its body
 * does without breaking the build.
 */
export function readArticleBody(slug: string): string | null {
  const absolute = path.join(process.cwd(), "src", "content", "articles", `${slug}.html`);

  if (!existsSync(absolute)) {
    return null;
  }

  return readFileSync(absolute, "utf-8");
}
