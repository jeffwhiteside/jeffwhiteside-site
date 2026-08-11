import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@/components/ui/button";
import { SparkIcon } from "@/components/ui/icons";
import { HERO_QUOTE } from "@/content/impact";
import {
  PRINCIPLE_DETAILS,
  PRINCIPLE_EXPLORES,
  TILE_BORDER_CLASSES,
  TILE_CLASSES,
} from "@/content/leadership";
import { getSection } from "@/content/sections";
import { resolvePublicImage } from "@/lib/assets";

const section = getSection("leadership");

export const metadata: Metadata = {
  title: section.title,
  description: section.description,
};

const [BELIEVE_STEP, PRACTICE_STEP, EXPERIENCE_STEP, IDEAS_STEP, LEARNED_STEP] =
  PRINCIPLE_EXPLORES;

/**
 * The leadership page: an intro, a "what I've come to believe" callout, then all five
 * principles in full — each with the same five sub-sections (What I Believe / How I Put It
 * Into Practice / What Experience Taught Me / Ideas That Shaped My Thinking / What I've
 * Learned Along the Way) — stacked on this one page rather than split across five routes, so
 * the sidebar's "On This Page" links are same-page anchors, not separate navigations.
 *
 * Only "Elevate People" has real content, transcribed from the owner's mockup. The other four
 * carry the same structure with clearly-labeled placeholder copy — see content/leadership.ts.
 *
 * Each principle is its own bordered block (not just vertical spacing) with a solid top
 * accent in its own tile colour, so adjacent principles read as clearly separate sections
 * when scrolling through five of them in a row.
 */
export default function LeadershipPage() {
  const portraitSrc = resolvePublicImage([
    "/jeff-whiteside.jpg",
    "/jeff-whiteside.png",
    "/placeholder/portrait.jpg",
  ]);
  const isPlaceholderPortrait = portraitSrc?.startsWith("/placeholder/") ?? false;

  return (
    <article className="page-container py-12 sm:py-16">
      <div id="introduction" className="grid grid-cols-1 items-start gap-10 scroll-mt-24 lg:grid-cols-[1.1fr_1fr] lg:gap-12">
        <div>
          <p className="eyebrow">My Leadership Philosophy</p>
          <h1 className="text-hero mt-3">
            Leadership Is About Creating the Conditions for People to{" "}
            <span className="text-accent">Thrive.</span>
          </h1>
          <p className="measure-prose mt-4 text-muted">
            My approach to leadership didn&rsquo;t come from a single book or framework. It
            evolved over more than two decades of successes, mistakes, difficult
            conversations, rapid growth, distributed teams, acquisitions, and periods of
            significant change.
          </p>
          <p className="measure-prose mt-4 text-muted">
            These five principles represent what I&rsquo;ve come to believe about building
            high-performing engineering organizations where people do meaningful work and
            deliver extraordinary results.
          </p>
        </div>

        <div>
          {portraitSrc ? (
            <Image
              src={portraitSrc}
              alt={isPlaceholderPortrait ? "" : "Jeff Whiteside"}
              width={480}
              height={360}
              className="aspect-4/3 w-full rounded-xl border border-line object-cover"
            />
          ) : (
            <div
              aria-hidden="true"
              className="flex aspect-4/3 w-full items-end rounded-xl border border-line bg-elevated p-4"
            >
              <span className="text-xs tracking-widest text-muted uppercase">Portrait</span>
            </div>
          )}

          <figure className="card mt-4 p-5">
            <blockquote className="flex gap-3">
              <span aria-hidden="true" className="font-serif text-3xl leading-none text-accent">
                &ldquo;
              </span>
              <p className="text-sm text-ink">{HERO_QUOTE}</p>
            </blockquote>
            <figcaption className="mt-3 text-right font-serif text-sm text-accent italic">
              — Jeff Whiteside
            </figcaption>
          </figure>
        </div>
      </div>

      <div className="card mt-12 flex flex-col gap-4 p-6 sm:flex-row sm:items-start sm:gap-6 sm:p-8">
        <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-accent text-accent">
          <SparkIcon />
        </span>
        <div>
          <p className="eyebrow">What I&rsquo;ve Come to Believe</p>
          <p className="mt-2 text-muted">
            These aren&rsquo;t rules I&rsquo;ve mastered. They&rsquo;re principles I try to
            practice every day. Each one has been shaped by experience, mistakes, people
            I&rsquo;ve worked with, and ideas I&rsquo;ve encountered along the way.
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted">
            <span className="font-medium text-ink">Each principle explores:</span>
            {PRINCIPLE_EXPLORES.map(({ label, icon: Icon }) => (
              <span key={label} className="inline-flex items-center gap-1.5">
                <Icon className="size-4 text-accent" />
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[16rem_1fr] lg:gap-12">
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <p className="eyebrow">On This Page</p>
          <ol className="mt-4 space-y-1">
            {PRINCIPLE_DETAILS.map((principle) => (
              <li key={principle.id}>
                <a
                  href={`#${principle.id}`}
                  className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-muted transition-colors hover:bg-elevated hover:text-ink"
                >
                  <span
                    className={`flex size-7 shrink-0 items-center justify-center rounded-md text-white ${
                      TILE_CLASSES[principle.tile]
                    }`}
                  >
                    <principle.icon className="size-3.5" />
                  </span>
                  {principle.title}
                </a>
              </li>
            ))}
          </ol>

          <div className="card mt-6 p-5">
            <span className="flex size-9 items-center justify-center rounded-full border border-accent text-accent">
              <IDEAS_STEP.icon />
            </span>
            <h2 className="mt-3 text-sm font-semibold text-ink">
              Ideas that shaped my thinking
            </h2>
            <p className="mt-2 text-sm text-muted">
              Books, research, articles, and experiences that continue to influence how I lead.
            </p>
          </div>
        </aside>

        <div className="space-y-10">
          {PRINCIPLE_DETAILS.map((principle) => {
            return (
              <section
                key={principle.id}
                id={principle.id}
                className={`scroll-mt-24 rounded-2xl border border-line border-t-4 p-6 sm:p-10 ${
                  TILE_BORDER_CLASSES[principle.tile]
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`flex size-10 shrink-0 items-center justify-center rounded-lg text-sm font-semibold text-white ${
                      TILE_CLASSES[principle.tile]
                    }`}
                  >
                    {principle.number}
                  </span>
                  <p className="eyebrow">Principle</p>
                </div>
                <h2 className="text-section mt-3">{principle.title}</h2>
                <p className="mt-1 text-accent">{principle.tagline}</p>

                <hr className="mt-6 border-line" />

                <div className="mt-8">
                  <div className="flex items-center gap-3">
                    <span
                      className={`flex size-9 shrink-0 items-center justify-center rounded-full text-white ${
                        TILE_CLASSES[principle.tile]
                      }`}
                    >
                      <BELIEVE_STEP.icon />
                    </span>
                    <h3 className="text-lg">{BELIEVE_STEP.label}</h3>
                  </div>
                  <div className="mt-3 space-y-3">
                    {principle.whatIBelieve.map((paragraph) => (
                      <p key={paragraph} className="text-muted">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="mt-8">
                  <div className="flex items-center gap-3">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-line text-accent">
                      <PRACTICE_STEP.icon />
                    </span>
                    <h3 className="text-lg">{PRACTICE_STEP.label}</h3>
                  </div>
                  <ul className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {principle.howIPractice.map((item) => (
                      <li key={item.title} className="card p-4">
                        <p className="font-semibold text-ink">{item.title}</p>
                        <p className="mt-1 text-sm text-muted">{item.description}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8">
                  <div className="flex items-center gap-3">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-line text-accent">
                      <EXPERIENCE_STEP.icon />
                    </span>
                    <h3 className="text-lg">{EXPERIENCE_STEP.label}</h3>
                  </div>
                  <p className="mt-3 text-accent">{principle.experienceTagline}</p>
                  <p className="mt-2 text-muted">{principle.experienceParagraph}</p>
                  {principle.experienceLinkHref ? (
                    <Link
                      href={principle.experienceLinkHref}
                      className="link mt-3 inline-flex items-center gap-2 text-sm"
                    >
                      {principle.experienceLinkLabel}
                      <ArrowRight />
                    </Link>
                  ) : null}
                </div>

                <div className="mt-8">
                  <div className="flex items-center gap-3">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-line text-accent">
                      <IDEAS_STEP.icon />
                    </span>
                    <h3 className="text-lg">{IDEAS_STEP.label}</h3>
                  </div>
                  <ul className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {principle.ideasThatShaped.map((idea) => (
                      <li key={idea.title} className="card p-4">
                        <span className="tag">{idea.type}</span>
                        <p className="mt-2 font-semibold text-ink">{idea.title}</p>
                        {idea.author ? (
                          <p className="text-sm text-muted">{idea.author}</p>
                        ) : null}
                        <p className="mt-2 text-sm text-muted">{idea.description}</p>
                        {idea.linkHref ? (
                          <a
                            href={idea.linkHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link mt-2 inline-flex items-center gap-1 text-sm"
                          >
                            {idea.linkLabel}
                            <ArrowRight />
                          </a>
                        ) : null}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8">
                  <div className="flex items-center gap-3">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-line text-accent">
                      <LEARNED_STEP.icon />
                    </span>
                    <h3 className="text-lg">{LEARNED_STEP.label}</h3>
                  </div>
                  <p className="mt-3 text-accent">{principle.learnedTagline}</p>
                  <p className="mt-2 text-muted">{principle.learnedParagraph}</p>
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </article>
  );
}
