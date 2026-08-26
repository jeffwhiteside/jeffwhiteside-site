import type { Metadata } from "next";
import Image from "next/image";
import { TrackedLink } from "@/components/analytics/tracked-link";
import { ArrowRight } from "@/components/ui/button";
import {
  BookOpenIcon,
  CalendarIcon,
  DocumentIcon,
  DownloadIcon,
  TagIcon,
} from "@/components/ui/icons";
import { getSection } from "@/content/sections";
import { WRITING_ITEMS } from "@/content/writing";
import { resolvePublicImage } from "@/lib/assets";

const section = getSection("writing");

export const metadata: Metadata = {
  title: section.title,
  description: section.description,
};

/** Small pill labeling a card as an Article or a Publication. */
function TypeChip({ children }: { children: string }) {
  return (
    <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold tracking-wide text-accent uppercase">
      {children}
    </span>
  );
}

/**
 * Writing index: one card per item, articles and the one academic publication together in a
 * single "Latest Writing" feed, most recent first (see WRITING_ITEMS's ordering note).
 *
 * Each type resolves its own cover art and body file independently at build time — an
 * article's `/writing/<slug>-cover.jpg|png` and, on its own page, nothing further; a
 * publication's cover plus its `/writing/<slug>.pdf` — and each quietly degrades (a plain
 * panel instead of a broken image, "PDF pending" instead of a dead download) rather than ever
 * link to something that doesn't exist yet. Same real-asset-first pattern as the portrait,
 * project screenshots, and résumé download.
 */
export default function WritingPage() {
  return (
    <article className="page-container py-12 sm:py-16">
      <p className="eyebrow">Ideas &amp; Writing</p>
      <h1 className="text-hero mt-3">Ideas Worth Exploring</h1>
      <span aria-hidden="true" className="mt-4 block h-0.5 w-12 rounded-full bg-accent" />
      <p className="mt-4 text-muted">
        Throughout my career, I&rsquo;ve learned as much from asking questions as answering
        them. This is where I share ideas I&rsquo;m exploring around leadership, engineering
        culture, distributed teams, technology, and the changing way we build software.
      </p>

      <p className="eyebrow mt-12">Latest Writing</p>
      <span aria-hidden="true" className="mt-2 block h-0.5 w-12 rounded-full bg-accent" />

      <ul className="mt-6 space-y-8">
        {WRITING_ITEMS.map((item) =>
          item.kind === "article" ? (
            <li
              key={item.slug}
              id={item.slug}
              className="card relative scroll-mt-24 grid grid-cols-1 gap-8 p-8 sm:grid-cols-[16rem_1fr]"
            >
              <div className="absolute top-[5px] right-[5px]">
                <TypeChip>Article</TypeChip>
              </div>

              {(() => {
                const cover = resolvePublicImage([
                  `/writing/${item.slug}-cover.jpg`,
                  `/writing/${item.slug}-cover.png`,
                ]);

                return cover ? (
                  <Image
                    src={cover}
                    alt=""
                    width={320}
                    height={200}
                    className="h-full min-h-48 w-full rounded-lg border border-line object-cover"
                  />
                ) : (
                  <div className="flex h-full min-h-48 w-full flex-col items-center justify-center gap-2 rounded-lg border border-line bg-elevated p-5">
                    <DocumentIcon className="size-8 text-muted" />
                    <p className="text-xs tracking-widest text-muted uppercase">Article</p>
                  </div>
                );
              })()}

              <div className="flex h-full flex-col">
                <h2 className="pr-20 text-xl">{item.title}</h2>

                <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted">
                  <span className="flex items-center gap-1.5">
                    <CalendarIcon className="size-4" />
                    {item.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <TagIcon className="size-4" />
                    {item.category.join(", ")}
                  </span>
                </div>

                <p className="mt-4 text-muted">{item.summary}</p>

                <div className="mt-6">
                  <TrackedLink
                    href={`/writing/${item.slug}`}
                    event="article_read"
                    properties={{ slug: item.slug, title: item.title }}
                  >
                    Read article
                    <ArrowRight />
                  </TrackedLink>
                </div>
              </div>
            </li>
          ) : (
            (() => {
              const publication = item;
              const cover = resolvePublicImage([
                `/writing/${publication.slug}-cover.jpg`,
                `/writing/${publication.slug}-cover.png`,
              ]);
              const pdf = resolvePublicImage([`/writing/${publication.slug}.pdf`]);

              return (
                <li
                  key={publication.slug}
                  id={publication.slug}
                  className="card relative scroll-mt-24 grid grid-cols-1 gap-8 p-8 sm:grid-cols-[16rem_1fr]"
                >
                  <div className="absolute top-[5px] right-[5px]">
                    <TypeChip>Publication</TypeChip>
                  </div>

                  {cover ? (
                    <Image
                      src={cover}
                      alt={`${publication.venue} cover`}
                      width={320}
                      height={416}
                      className="h-full min-h-48 w-full rounded-lg border border-line object-cover"
                    />
                  ) : (
                    <div className="flex h-full min-h-48 w-full flex-col justify-between rounded-lg border border-line bg-elevated p-5">
                      <p className="text-xs tracking-widest text-muted uppercase">
                        {publication.venue}
                      </p>
                      <div>
                        <p className="text-sm text-ink">
                          Volume {publication.volume}, Number {publication.issue}
                        </p>
                        <p className="text-sm text-muted">{publication.year}</p>
                      </div>
                    </div>
                  )}

                  <div className="flex h-full flex-col">
                    <h2 className="pr-20 text-xl">{publication.title}</h2>

                    <p className="mt-1 text-sm">
                      <span className="text-accent">{publication.venue}</span>
                      <span className="text-muted">
                        {" "}
                        · Volume {publication.volume}, Issue {publication.issue}
                      </span>
                    </p>

                    <div className="mt-4 space-y-3">
                      {publication.summary.map((paragraph) => (
                        <p key={paragraph} className="text-muted">
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    <p className="mt-4 text-sm text-muted italic">{publication.citation}</p>

                    <div className="mt-6 flex flex-wrap items-center gap-3">
                      {pdf ? (
                        <>
                          <TrackedLink
                            href={pdf}
                            external
                            event="publication_read"
                            properties={{ slug: publication.slug, title: publication.title }}
                          >
                            <BookOpenIcon className="size-4" />
                            Read the Case Study
                            <ArrowRight />
                          </TrackedLink>
                          <TrackedLink
                            href={pdf}
                            variant="secondary"
                            download
                            event="publication_download"
                            properties={{ slug: publication.slug, title: publication.title }}
                          >
                            <DownloadIcon className="size-4" />
                            Download PDF
                          </TrackedLink>
                        </>
                      ) : (
                        <p className="text-xs tracking-widest text-muted uppercase">
                          PDF pending
                        </p>
                      )}
                    </div>
                  </div>
                </li>
              );
            })()
          ),
        )}
      </ul>
    </article>
  );
}
