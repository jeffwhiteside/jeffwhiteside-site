import type { Metadata } from "next";
import Image from "next/image";
import { TrackedLink } from "@/components/analytics/tracked-link";
import { ArrowRight } from "@/components/ui/button";
import { BookOpenIcon, DocumentIcon, DownloadIcon } from "@/components/ui/icons";
import { getSection } from "@/content/sections";
import { PUBLICATIONS } from "@/content/writing";
import { resolvePublicImage } from "@/lib/assets";

const section = getSection("writing");

export const metadata: Metadata = {
  title: section.title,
  description: section.description,
};

/**
 * Writing index: one card per publication, with a "Read" (opens the PDF in a new tab) and a
 * "Download" (forces a download) action, each firing its own PostHog event
 * (publication_read / publication_download) via TrackedLink so it's possible to tell the two
 * apart in analytics. Both resolve `/writing/<slug>.pdf` at build time and quietly disappear —
 * replaced by a "PDF pending" note — if that file doesn't exist yet, the same real-asset-first
 * pattern the portrait, project screenshots, and résumé download all use. The cover art works
 * the same way against `/writing/<slug>-cover.jpg` or `.png`, falling back to a plain citation
 * panel rather than a fabricated cover — the venue is a real academic journal with its own
 * real cover design, which nothing here should impersonate.
 */
export default function WritingPage() {
  return (
    <article className="page-container py-12 sm:py-16">
      <p className="eyebrow">Ideas &amp; Writing</p>
      <h1 className="text-hero mt-3">Ideas Worth Exploring</h1>
      <span aria-hidden="true" className="mt-4 block h-0.5 w-12 rounded-full bg-accent" />
      <p className="measure-prose mt-4 text-muted">
        Throughout my career, I&rsquo;ve learned as much from asking questions as answering
        them. This is where I share ideas I&rsquo;m exploring around leadership, engineering
        culture, distributed teams, technology, and the changing way we build software.
      </p>

      <p className="eyebrow mt-12">Published Work</p>
      <span aria-hidden="true" className="mt-2 block h-0.5 w-12 rounded-full bg-accent" />

      <ul className="mt-6 space-y-8">
        {PUBLICATIONS.map((publication) => {
          const cover = resolvePublicImage([
            `/writing/${publication.slug}-cover.jpg`,
            `/writing/${publication.slug}-cover.png`,
          ]);
          const pdf = resolvePublicImage([`/writing/${publication.slug}.pdf`]);

          return (
            <li
              key={publication.slug}
              className="card grid grid-cols-1 gap-8 p-8 sm:grid-cols-[16rem_1fr]"
            >
              {cover ? (
                <Image
                  src={cover}
                  alt={`${publication.venue} cover`}
                  width={320}
                  height={416}
                  className="aspect-[5/6.5] w-full rounded-lg border border-line object-cover"
                />
              ) : (
                <div className="flex aspect-[5/6.5] w-full flex-col justify-between rounded-lg border border-line bg-elevated p-5">
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

              <div>
                <span className="flex size-10 items-center justify-center rounded-full border border-accent text-accent">
                  <DocumentIcon />
                </span>

                <h2 className="mt-4 text-xl">{publication.title}</h2>
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
                    <p className="text-xs tracking-widest text-muted uppercase">PDF pending</p>
                  )}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </article>
  );
}
