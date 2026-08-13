import type { Metadata } from "next";
import Image from "next/image";
import { PrincipleNav } from "@/components/leadership-principle-nav";
import { ArrowRight } from "@/components/ui/button";
import {
  PRINCIPLE_DETAILS,
  PRINCIPLE_EXPLORES,
  TILE_BG_CLASSES,
  TILE_BORDER_CLASSES,
  TILE_CLASSES,
  TILE_TEXT_CLASSES,
} from "@/content/leadership";
import { getSection } from "@/content/sections";

const section = getSection("leadership");

export const metadata: Metadata = {
  title: section.title,
  description: section.description,
};

const [BELIEVE_STEP, PRACTICE_STEP, , IDEAS_STEP] = PRINCIPLE_EXPLORES;

/** Pale, neutral treatment for a card sitting on the light band — the dark `card` utility
 * (bg-elevated) is tuned for the dark canvas and reads as a bug here, not a design choice. */
const PRACTICE_CARD_CLASSES = "rounded-lg border border-band-line bg-accent/5 p-4";
const IDEA_CARD_CLASSES = "rounded-lg border border-band-line p-4";

/**
 * The leadership page: a compact dark hero, then a white long-form section holding the
 * "what I've come to believe" intro and all five principles — mirroring the homepage's own
 * dark-hero-into-white-band transition (see Hero + LeadershipPreview) rather than inventing a
 * new visual language for this one page.
 *
 * Content (titles, taglines, paragraphs, practice items, sources, reflections) lives in
 * content/leadership.ts and is untouched here — this file only changes presentation. Only
 * "Elevate People" has real content; the other four carry the same structure with
 * clearly-labeled placeholder copy.
 *
 * The desktop "Principles" index is a sticky sidebar with scroll-spy highlighting
 * (components/leadership-principle-nav.tsx, the one client-side piece on this page). Below
 * `lg` it's replaced by a native <details>/<summary> disclosure — no JS needed for that one,
 * and it costs far less vertical space than the sidebar would if simply stacked above the
 * content.
 */
export default function LeadershipPage() {
  return (
    <>
      {/*
        Compact and editorial, not a second homepage hero: no CTAs, no quote (it's already on
        the homepage), and the portrait is capped to a modest width so it reads as an author
        photo alongside the text rather than a co-equal visual.
      */}
      <section id="introduction" className="relative scroll-mt-24 overflow-hidden">
        <div className="page-container relative pt-8 pb-4 sm:pt-10 sm:pb-6">
          <p className="eyebrow">My Leadership Philosophy</p>
          <h1 className="text-hero mt-3">
            Leadership Is About Creating the Conditions for People to{" "}
            <span className="text-accent">Thrive.</span>
          </h1>
          <p className="mt-4 text-muted">
            My approach to leadership didn&rsquo;t come from a single book or framework. It
            evolved over more than two decades of successes, mistakes, difficult conversations,
            rapid growth, distributed teams, acquisitions, and periods of significant change.
          </p>
          <p className="mt-4 text-muted">
            These five principles represent what I&rsquo;ve come to believe about building
            high-performing engineering organizations where people do meaningful work and
            deliver extraordinary results.
          </p>

            <p className="mt-4 text-muted">
              These aren&rsquo;t rules I&rsquo;ve mastered. They&rsquo;re principles I try to
              practice every day. Each one has been shaped by experience, mistakes, people
              I&rsquo;ve worked with, and ideas I&rsquo;ve encountered along the way. They
              are also continiously evolving as I learn and grow myself.
            </p>          

        </div>
        
      </section>

      <section className="bg-band pt-6 pb-12 text-band-ink sm:pt-8 sm:pb-16">
        <div className="page-container">

          {/* Mobile / tablet: a compact, JS-free jump-to-principle disclosure, replacing the
              sidebar rather than stacking it above the content. */}
          <div className="mt-6 lg:hidden">
            <details className="rounded-lg border border-band-line p-3">
              <summary className="cursor-pointer text-sm font-medium text-band-ink">
                Jump to principle
              </summary>
              <ol className="mt-3 space-y-1">
                {PRINCIPLE_DETAILS.map((principle) => (
                  <li key={principle.id}>
                    <a
                      href={`#${principle.id}`}
                      className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm text-band-muted"
                    >
                      <span
                        className={`flex size-6 shrink-0 items-center justify-center rounded text-xs font-semibold text-white ${
                          TILE_CLASSES[principle.tile]
                        }`}
                      >
                        {principle.number}
                      </span>
                      {principle.title}
                    </a>
                  </li>
                ))}
              </ol>
            </details>
          </div>

          <div className="mx-auto grid max-w-[65.5rem] grid-cols-1 gap-10 lg:grid-cols-[12.5rem_50rem] lg:gap-12">
            {/* Nudged down to align with "Elevate People" (below the 01/Principle badge row)
                rather than the top of that badge. */}
            <aside className="hidden lg:sticky lg:top-24 lg:block lg:self-start lg:pt-14">
              <p className="eyebrow">Principles</p>
              <PrincipleNav
                principles={PRINCIPLE_DETAILS.map(({ id, number, title, tile }) => ({
                  id,
                  number,
                  title,
                  tile,
                }))}
              />
            </aside>

            <div>
              {PRINCIPLE_DETAILS.map((principle, index) => {
                return (
                  <div key={principle.id} className={index > 0 ? "mt-12" : undefined}>
                    <section
                      id={principle.id}
                      className={`scroll-mt-24 rounded-2xl border border-band-line border-t-4 p-6 sm:p-10 ${
                        TILE_BORDER_CLASSES[principle.tile]
                      } ${TILE_BG_CLASSES[principle.tile]}`}
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
                      <p className={`mt-1 text-lg ${TILE_TEXT_CLASSES[principle.tile]}`}>
                        {principle.tagline}
                      </p>

                      <hr className="mt-6 border-band-line" />

                      {principle.comingSoon ? (
                        <p className="mt-8 text-band-muted">
                          This principle&rsquo;s full write-up is coming soon.
                        </p>
                      ) : (
                        <>
                          {/* A. What I Believe — plain editorial prose, no card, no icon. */}
                          <div className="mt-8">
                            <h3 className="text-lg">{BELIEVE_STEP.label}</h3>
                            <div className="mt-3 space-y-3">
                              {principle.whatIBelieve?.map((paragraph) => (
                                <p key={paragraph} className="text-band-muted">
                                  {paragraph}
                                </p>
                              ))}
                            </div>
                          </div>

                          {/* B. How I Put It Into Practice — pale cards, visual relief. */}
                          <div className="mt-10">
                            <h3 className="text-lg">{PRACTICE_STEP.label}</h3>
                            <ul className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                              {principle.howIPractice?.map((item) => (
                                <li key={item.title} className={PRACTICE_CARD_CLASSES}>
                                  <p className="font-semibold text-band-ink">{item.title}</p>
                                  <p className="mt-1 text-sm text-band-muted">
                                    {item.description}
                                  </p>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* C. What Experience Taught Me — blue left border, grounded in a
                              specific story rather than generic advice. */}
                          <div className="mt-10 rounded-r-lg border-l-4 border-accent bg-accent/5 p-5">
                            <p className="eyebrow">From Experience</p>
                            <p className="mt-2 text-lg text-band-ink">
                              {principle.experienceTagline}
                            </p>
                            <div className="mt-2 space-y-3">
                              {principle.experienceParagraph?.map((paragraph) => (
                                <p key={paragraph} className="text-band-muted">
                                  {paragraph}
                                </p>
                              ))}
                            </div>
                          </div>

                          {/* D. Ideas That Shaped My Thinking — compact source cards, title
                              leads, with a small cover image when one is available. */}
                          <div className="mt-10">
                            <h3 className="text-lg">{IDEAS_STEP.label}</h3>
                            <ul className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                              {principle.ideasThatShaped?.map((idea) => (
                                <li key={idea.title} className={IDEA_CARD_CLASSES}>
                                  <div className="flex gap-3">
                                    {idea.coverImage ? (
                                      <Image
                                        src={idea.coverImage}
                                        alt=""
                                        width={55}
                                        height={70}
                                        className="h-[70px] w-[55px] shrink-0 rounded border border-band-line object-cover"
                                      />
                                    ) : null}
                                    <div className="min-w-0">
                                      <span className="inline-block rounded border border-band-line px-2 py-0.5 text-xs font-medium tracking-wide text-band-muted uppercase">
                                        {idea.type}
                                      </span>
                                      <p className="mt-2 text-base font-semibold text-band-ink">
                                        {idea.title}
                                      </p>
                                      {idea.author ? (
                                        <p className="text-sm text-band-muted">{idea.author}</p>
                                      ) : null}
                                    </div>
                                  </div>
                                  <p className="mt-2 text-sm text-band-muted">
                                    {idea.description}
                                  </p>
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

                          {/* E. What I've Learned Along the Way — the reflective close, given
                              more room and a pull-quote treatment (same serif-italic voice as
                              the hero and footer quotes elsewhere on the site). */}
                          <div className="mt-16">
                            <p className="eyebrow">Something I&rsquo;ve Learned</p>
                            <p className="mt-3 font-serif text-2xl text-band-ink italic">
                              {principle.learnedTagline}
                            </p>
                            <div className="mt-4 space-y-3">
                              {principle.learnedParagraph?.map((paragraph) => (
                                <p key={paragraph} className="text-band-muted">
                                  {paragraph}
                                </p>
                              ))}
                            </div>
                          </div>
                        </>
                      )}
                    </section>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
