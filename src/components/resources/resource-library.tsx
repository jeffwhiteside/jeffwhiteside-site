"use client";

import { useMemo, useState } from "react";
import { ResourceCover } from "@/components/resource-cover";
import { ResourceIcon } from "@/components/resources/resource-icon";
import { SearchIcon } from "@/components/ui/icons";
import type { ResourceGroup } from "@/content/resources";
import { TILE_CLASSES, TILE_TEXT_CLASSES } from "@/content/leadership";

interface ResourceLibraryProps {
  groups: readonly ResourceGroup[];
  /** Resource slug -> resolved cover path (or null), computed server-side since resolving a
   * cover touches the filesystem. See resolveResourceCover in lib/resource-covers.ts. */
  covers: Readonly<Record<string, string | null>>;
}

/**
 * The full resource library, rendered on its own page (/resources/library) separate from the
 * brief category-preview cards on the resources index: a live search box that filters by
 * title or author, group jump-links, and every category and resource listed in full — each
 * with a real anchor id, since the index links a book's cover/title or a category's heading
 * straight here (`#<resourceSlug>` / `#<categorySlug>`) rather than to a page of its own.
 *
 * Client-side because filtering as you type needs state — the one deliberate exception to the
 * site's otherwise server-rendered, JS-free page bodies (TrackedLink is the only other one).
 */
export function ResourceLibrary({ groups, covers }: ResourceLibraryProps) {
  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim().toLowerCase();

  const filteredGroups = useMemo(() => {
    if (!normalizedQuery) {
      return groups;
    }

    return groups
      .map((group) => ({
        ...group,
        categories: group.categories
          .map((category) => ({
            ...category,
            resources: category.resources.filter((resource) =>
              `${resource.title} ${resource.author ?? ""}`
                .toLowerCase()
                .includes(normalizedQuery),
            ),
          }))
          .filter((category) => category.resources.length > 0),
      }))
      .filter((group) => group.categories.length > 0);
  }, [groups, normalizedQuery]);

  return (
    <div>
      <div className="relative mt-8 max-w-md">
        <SearchIcon className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted" />
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search by title or author…"
          aria-label="Search resources"
          className="w-full rounded-md border border-line bg-elevated py-2.5 pr-4 pl-10 text-sm text-ink placeholder:text-muted focus:border-accent focus:outline-none"
        />
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        {groups.map((group) => (
          <a
            key={group.slug}
            href={`#${group.slug}`}
            className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-ink"
          >
            <ResourceIcon name={group.icon} className="size-4" />
            {group.title}
          </a>
        ))}
      </div>

      {filteredGroups.length === 0 ? (
        <p className="mt-12 text-muted">No resources match &ldquo;{query}&rdquo;.</p>
      ) : (
        filteredGroups.map((group) => (
          <section key={group.slug} id={group.slug} className="mt-16 scroll-mt-24">
            <div className="flex items-start gap-4">
              <span
                className={`flex size-11 shrink-0 items-center justify-center rounded-full text-white ${
                  TILE_CLASSES[group.tile]
                }`}
              >
                <ResourceIcon name={group.icon} className="size-5" />
              </span>
              <div>
                <h2 className="text-section">{group.title}</h2>
                <p className="mt-2 max-w-2xl text-muted">{group.description}</p>
              </div>
            </div>

            <div className="mt-10 space-y-10">
              {group.categories.map((category) => (
                <div key={category.slug} id={category.slug} className="scroll-mt-24">
                  <div className="flex items-center gap-3">
                    <span
                      className={`flex size-9 shrink-0 items-center justify-center rounded-full text-white ${
                        TILE_CLASSES[category.tile]
                      }`}
                    >
                      <ResourceIcon name={category.icon} className="size-4" />
                    </span>
                    <h3 className="font-bold text-ink">{category.title}</h3>
                    <span
                      className={`text-xs font-semibold ${TILE_TEXT_CLASSES[category.tile]}`}
                    >
                      {category.resources.length}{" "}
                      {category.resources.length === 1 ? "resource" : "resources"}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-muted">{category.description}</p>

                  <ul className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {category.resources.map((resource) => (
                      <li
                        key={resource.slug}
                        id={resource.slug}
                        className="card scroll-mt-24 flex gap-3 p-4"
                      >
                        <ResourceCover cover={covers[resource.slug] ?? null} />
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-bold text-ink">{resource.title}</p>
                          {resource.subtitle ? (
                            <p className="text-xs text-muted">{resource.subtitle}</p>
                          ) : null}
                          {resource.author ? (
                            <p className="text-xs text-muted">{resource.author}</p>
                          ) : null}

                          {resource.description ? (
                            <p className="mt-2 text-xs text-muted">{resource.description}</p>
                          ) : null}

                          {resource.whyItMattersToMe ? (
                            <div className="mt-2">
                              <p className="text-xs font-semibold tracking-wide text-ink uppercase">
                                Why It Matters to Me
                              </p>
                              <p className="mt-0.5 text-xs text-muted">
                                {resource.whyItMattersToMe}
                              </p>
                            </div>
                          ) : null}

                          {resource.ideasCarriedForward?.length ? (
                            <div className="mt-2">
                              <p className="text-xs font-semibold tracking-wide text-ink uppercase">
                                Ideas I Carried Forward
                              </p>
                              <ul className="mt-0.5 list-disc space-y-0.5 pl-4">
                                {resource.ideasCarriedForward.map((idea) => (
                                  <li key={idea} className="text-xs text-muted">
                                    {idea}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ) : null}

                          {resource.whereItShowsUpInMyWork ? (
                            <div className="mt-2">
                              <p className="text-xs font-semibold tracking-wide text-ink uppercase">
                                Where It Shows Up in My Work
                              </p>
                              <p className="mt-0.5 text-xs text-muted">
                                {resource.whereItShowsUpInMyWork}
                              </p>
                            </div>
                          ) : null}

                          {resource.url ? (
                            <a
                              href={resource.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="link mt-2 inline-block text-xs"
                            >
                              View →
                            </a>
                          ) : null}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        ))
      )}
    </div>
  );
}
