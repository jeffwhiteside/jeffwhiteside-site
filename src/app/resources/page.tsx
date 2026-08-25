import type { Metadata } from "next";
import Link from "next/link";
import { ResourceCover } from "@/components/resource-cover";
import { ResourceIcon } from "@/components/resources/resource-icon";
import { ArrowRight } from "@/components/ui/button";
import { RESOURCE_GROUPS } from "@/content/resources";
import { TILE_CLASSES, TILE_TEXT_CLASSES } from "@/content/leadership";
import { getSection } from "@/content/sections";
import { resolveResourceCover } from "@/lib/resource-covers";

const section = getSection("resources");

export const metadata: Metadata = {
  title: section.title,
  description: section.description,
};

/**
 * Resources index: a brief preview — every category, each showing up to two resources with
 * just title, subtitle, author, and the "why it matters to me" line. The full writeup (plus
 * description, ideas carried forward, and where it shows up in the work) lives on its own page
 * at /resources/library; a book's cover/title and a category's heading both link straight to
 * that resource's or category's anchor there, rather than to a page of their own.
 */
export default function ResourcesPage() {
  return (
    <article className="page-container py-12 sm:py-16">
      <h1 className="text-hero">Resources</h1>
      <span aria-hidden="true" className="mt-4 block h-1 w-12 rounded-full bg-accent" />
      <p className="mt-4 text-lg font-semibold text-accent">Ideas That Shape My Thinking</p>
      <p className="measure-prose mt-2 text-muted">
        I learn by borrowing ideas, testing them against experience, and keeping what works.
        These are the books, research, and frameworks that have shaped how I think about
        leadership, teams, systems, software, and life.
      </p>

      {RESOURCE_GROUPS.map((group, index) => (
        <section
          key={group.slug}
          id={group.slug}
          className={`scroll-mt-24 ${index === 0 ? "mt-8" : "mt-16"}`}
        >
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

          <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-3">
            {group.categories.map((category) => (
              <div key={category.slug} className="card p-5">
                <div className="flex items-center gap-3">
                  <span
                    className={`flex size-10 shrink-0 items-center justify-center rounded-full text-white ${
                      TILE_CLASSES[category.tile]
                    }`}
                  >
                    <ResourceIcon name={category.icon} className="size-4" />
                  </span>
                  <Link
                    href={`/resources/library#${category.slug}`}
                    className="font-bold text-ink hover:text-accent"
                  >
                    {category.title}
                  </Link>
                </div>

                <p className="mt-3 text-sm text-muted">{category.description}</p>
                <p className={`mt-1 text-xs font-semibold ${TILE_TEXT_CLASSES[category.tile]}`}>
                  {category.resources.length}{" "}
                  {category.resources.length === 1 ? "resource" : "resources"}
                </p>

                <div className="mt-4 space-y-3 border-t border-line pt-4">
                  {category.resources.slice(0, 2).map((resource) => (
                    <Link
                      key={resource.slug}
                      href={`/resources/library#${resource.slug}`}
                      className="flex items-start gap-3"
                    >
                      <ResourceCover cover={resolveResourceCover(resource)} />
                      <div className="min-w-0">
                        <p className="truncate text-sm font-bold text-ink hover:text-accent">
                          {resource.title}
                        </p>
                        {resource.subtitle ? (
                          <p className="truncate text-xs text-muted">{resource.subtitle}</p>
                        ) : null}
                        {resource.author ? (
                          <p className="text-xs text-muted">{resource.author}</p>
                        ) : null}
                        {resource.whyItMattersToMe ? (
                          <p className="mt-1 text-xs text-muted">{resource.whyItMattersToMe}</p>
                        ) : null}
                      </div>
                    </Link>
                  ))}
                </div>

                <Link
                  href={`/resources/library#${category.slug}`}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent-strong"
                >
                  View all {category.resources.length}{" "}
                  {category.resources.length === 1 ? "resource" : "resources"}
                  <ArrowRight />
                </Link>
              </div>
            ))}
          </div>
        </section>
      ))}
    </article>
  );
}
