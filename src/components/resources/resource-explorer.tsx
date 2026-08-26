"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { ResourceCover } from "@/components/resource-cover";
import { ResourceIcon } from "@/components/resources/resource-icon";
import { ChevronDownIcon, LaunchIcon, SearchIcon } from "@/components/ui/icons";
import type { ResourceCategory } from "@/content/resources";
import { TILE_CLASSES } from "@/content/leadership";

interface ResourceExplorerProps {
  categories: readonly ResourceCategory[];
  /** Resource slug -> resolved cover path (or null), computed server-side since resolving a
   * cover touches the filesystem. See resolveResourceCover in lib/resource-covers.ts. */
  covers: Readonly<Record<string, string | null>>;
}

/**
 * The single Resources page body: search, a category filter, and every category rendered as
 * its own full-width section (not the old narrow per-column layout), each resource collapsed
 * to a scannable card with a "More detail" accordion. Replaces the old two-page split between
 * a brief /resources index and a separate /resources/library — one page, one dataset.
 *
 * Reads/writes ?q= and ?category= via plain history APIs rather than useSearchParams, so the
 * page can stay statically prerendered (useSearchParams would force this subtree into a
 * client-rendered Suspense boundary on every static build).
 */
export function ResourceExplorer({ categories, covers }: ResourceExplorerProps) {
  const router = useRouter();
  const pathname = usePathname();

  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [expandedSlug, setExpandedSlug] = useState<string | null>(null);
  const [hydrated, setHydrated] = useState(false);

  // One-time sync from the URL (an external system) on mount — the query/category state has to
  // start empty during SSR since window isn't available there, so this necessarily runs once
  // after mount rather than during the initial render.
  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const q = params.get("q");
    const category = params.get("category");
    if (q) setQuery(q);
    if (category && categories.some((c) => c.slug === category)) {
      setActiveCategory(category);
    }
    setHydrated(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  /* eslint-enable react-hooks/set-state-in-effect */

  useEffect(() => {
    if (!hydrated) {
      return;
    }
    const params = new URLSearchParams();
    if (query) params.set("q", query);
    if (activeCategory) params.set("category", activeCategory);
    const search = params.toString();
    router.replace(search ? `${pathname}?${search}` : pathname, { scroll: false });
  }, [query, activeCategory, hydrated, pathname, router]);

  const normalizedQuery = query.trim().toLowerCase();

  const visibleCategories = useMemo(() => {
    const byCategory = activeCategory
      ? categories.filter((category) => category.slug === activeCategory)
      : categories;

    if (!normalizedQuery) {
      return byCategory;
    }

    return byCategory
      .map((category) => ({
        ...category,
        resources: category.resources.filter((resource) => {
          const haystack = [
            resource.title,
            resource.subtitle,
            resource.author,
            category.title,
            resource.description,
            resource.whyItMattersToMe,
            ...(resource.ideasCarriedForward ?? []),
          ]
            .filter(Boolean)
            .join(" ")
            .toLowerCase();
          return haystack.includes(normalizedQuery);
        }),
      }))
      .filter((category) => category.resources.length > 0);
  }, [categories, activeCategory, normalizedQuery]);

  const totalResults = visibleCategories.reduce(
    (sum, category) => sum + category.resources.length,
    0,
  );

  const resetFilters = () => {
    setQuery("");
    setActiveCategory(null);
  };

  return (
    <div>
      <div className="sticky top-16 z-30 mt-1.5 flex flex-wrap items-center gap-2 border-b border-line bg-canvas/95 py-3 backdrop-blur">
        <div className="relative w-full max-w-48">
          <SearchIcon className="absolute top-1/2 left-2.5 size-3.5 -translate-y-1/2 text-muted" />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search resources…"
            aria-label="Search resources"
            className="w-full rounded-md border border-line bg-elevated py-1.5 pr-3 pl-8 text-xs text-ink placeholder:text-muted focus:border-accent focus:outline-none"
          />
        </div>

        <select
          value={activeCategory ?? "all"}
          onChange={(event) =>
            setActiveCategory(event.target.value === "all" ? null : event.target.value)
          }
          aria-label="Filter by category"
          className="rounded-md border border-line bg-elevated py-1.5 pr-8 pl-2.5 text-xs text-ink focus:border-accent focus:outline-none"
        >
          <option value="all">All categories</option>
          {categories.map((category) => (
            <option key={category.slug} value={category.slug}>
              {category.title}
            </option>
          ))}
        </select>
      </div>

      {totalResults === 0 ? (
        <div className="mt-8">
          <p className="text-muted">No resources match that search.</p>
          <button type="button" onClick={resetFilters} className="link mt-2 text-sm">
            Reset search
          </button>
        </div>
      ) : (
        visibleCategories.map((category, index) => (
          <section
            key={category.slug}
            id={category.slug}
            className={`scroll-mt-24 ${index === 0 ? "mt-3" : "mt-5"}`}
          >
            <div className="flex items-center gap-3">
              <span
                className={`flex size-8 shrink-0 items-center justify-center rounded-full text-white ${
                  TILE_CLASSES[category.tile]
                }`}
              >
                <ResourceIcon name={category.icon} className="size-4" />
              </span>
              <div>
                <h2 className="text-section">{category.title}</h2>
                <p className="text-sm text-muted">{category.description}</p>
              </div>
            </div>

            <ul className="mt-3 grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {category.resources.map((resource) => {
                const isExpanded = expandedSlug === resource.slug;
                const hasMoreDetail = Boolean(
                  resource.description ||
                    resource.ideasCarriedForward?.length ||
                    resource.whereItShowsUpInMyWork,
                );
                const detailId = `${resource.slug}-detail`;

                return (
                  <li
                    key={resource.slug}
                    id={resource.slug}
                    className="card scroll-mt-24 relative flex h-full flex-col px-2 py-1"
                  >
                    {resource.url ? (
                      <a
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${resource.title}`}
                        className="absolute top-1 right-1 text-muted transition-colors hover:text-accent"
                      >
                        <LaunchIcon className="size-3.5" />
                      </a>
                    ) : null}
                    <div className="flex gap-3">
                      <ResourceCover cover={covers[resource.slug] ?? null} />
                      <div className="min-w-0 flex-1">
                        <p className="pr-5 text-sm font-bold text-ink">{resource.title}</p>
                        {resource.subtitle ? (
                          <p
                            title={resource.subtitle}
                            className="mt-0.5 truncate font-serif text-xs text-muted italic"
                          >
                            {resource.subtitle}
                          </p>
                        ) : null}
                        {resource.author ? (
                          <p
                            title={resource.author}
                            className="mt-1 truncate text-[10px] text-muted"
                          >
                            {resource.author}
                          </p>
                        ) : null}
                      </div>
                    </div>

                    {resource.whyItMattersToMe ? (
                      <div className="mt-1.5">
                        <p className="text-xs font-semibold tracking-wide text-ink uppercase">
                          Why It Matters to Me
                        </p>
                        <p
                          className={`mt-0.5 text-xs text-muted ${
                            isExpanded ? "" : "line-clamp-2"
                          }`}
                        >
                          {resource.whyItMattersToMe}
                        </p>
                      </div>
                    ) : null}

                    {hasMoreDetail ? (
                      <div className="mt-auto pt-1">
                        <div
                          id={detailId}
                          className="grid transition-[grid-template-rows] duration-200 ease-out"
                          style={{ gridTemplateRows: isExpanded ? "1fr" : "0fr" }}
                        >
                          <div className="overflow-hidden">
                            {resource.description ? (
                              <div className="mt-2">
                                <p className="text-xs font-semibold tracking-wide text-ink uppercase">
                                  Summary
                                </p>
                                <p className="mt-0.5 text-xs text-muted">
                                  {resource.description}
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
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={() =>
                            setExpandedSlug((prev) =>
                              prev === resource.slug ? null : resource.slug,
                            )
                          }
                          aria-expanded={isExpanded}
                          aria-controls={detailId}
                          className="mt-1 inline-flex items-center gap-1 text-xs font-medium text-accent transition-colors hover:text-accent-strong"
                        >
                          {isExpanded ? "Less detail" : "More detail"}
                          <ChevronDownIcon
                            className={`size-3.5 transition-transform duration-200 ${
                              isExpanded ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      </div>
                    ) : null}
                  </li>
                );
              })}
            </ul>
          </section>
        ))
      )}
    </div>
  );
}
