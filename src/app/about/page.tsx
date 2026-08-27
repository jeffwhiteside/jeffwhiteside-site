import type { Metadata } from "next";
import Image from "next/image";
import { Fragment } from "react";
import { PhotoBox } from "@/components/about/photo-box";
import {
  HERO_INTRO,
  HERO_GALLERY,
  HERO_PORTRAIT_CANDIDATES,
  OUTSIDE_OF_WORK,
  WELCOME_GRAPHIC_CANDIDATES,
} from "@/content/about";
import { getSection } from "@/content/sections";
import { resolvePublicImage } from "@/lib/assets";

const section = getSection("about");

export const metadata: Metadata = {
  title: section.title,
  description: section.description,
};

/**
 * The About page: a personal introduction rather than a resume — hero, why this work matters,
 * life outside work, a few beliefs, what's currently being learned, and a closing invitation
 * to connect. Career history and credentials live on the Experience page; this one is the
 * person behind it.
 *
 * Every photo slot uses PhotoBox (the site's real-asset-first pattern): a real photograph
 * once one exists at its candidate path, a drawn placeholder until then.
 */
export default function AboutPage() {
  const welcomeGraphic = resolvePublicImage(WELCOME_GRAPHIC_CANDIDATES);

  return (
    <article className="page-container pt-4 pb-16 sm:pt-6">
      {/* Hero */}
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
        <div>
          {welcomeGraphic ? (
            <h1>
              <Image
                src={welcomeGraphic}
                alt="Hi, I'm Jeff. Welcome."
                width={507}
                height={219}
                className="mx-auto block h-auto w-full max-w-[300px]"
                priority
              />
            </h1>
          ) : (
            <>
              <p className="font-serif text-3xl text-ink italic">Hi, I&rsquo;m Jeff.</p>
              <h1 className="text-hero mt-1 text-accent">Welcome.</h1>
              <span aria-hidden="true" className="mt-3 block h-1 w-12 rounded-full bg-accent" />
            </>
          )}
          <p className="mt-4 text-muted">
            {HERO_INTRO.map((line, index) => (
              <Fragment key={index}>
                {index > 0 ? <br /> : null}
                {line}
              </Fragment>
            ))}
          </p>
        </div>

        <PhotoBox
          candidates={HERO_PORTRAIT_CANDIDATES}
          alt="Jeff Whiteside"
          className="relative aspect-[4/3] w-full"
        />
      </div>

      <div className="mt-8 grid grid-cols-3 gap-3 sm:grid-cols-7">
        {HERO_GALLERY.map((candidates, index) => (
          <PhotoBox
            key={candidates[0]}
            candidates={candidates}
            alt={`Jeff Whiteside, photo ${index + 1}`}
            className={`relative aspect-square w-full ${index === 6 ? "hidden sm:block" : ""}`}
          />
        ))}
      </div>

      {/* Outside of Work */}
      <section className="mt-16">
        <h2 className="text-section">Outside of Work</h2>
        <p className="mt-4 text-muted">
          Some of the things I&rsquo;m usually learning, growing, reading, playing, or getting
          myself into.
        </p>
        <ul className="mt-5 grid grid-cols-2 items-stretch gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {OUTSIDE_OF_WORK.map((item) => (
            <li key={item.title} className="card flex h-full flex-col overflow-hidden">
              <div className="p-3">
                <p className="flex items-center gap-2 text-sm font-bold text-ink">
                  <item.icon className="size-5 shrink-0 text-accent" />
                  {item.title}
                </p>
                <p className="mt-1 text-xs text-muted">{item.description}</p>
              </div>
              <PhotoBox
                candidates={item.coverCandidates}
                alt={item.title}
                icon={item.icon}
                className="relative mt-auto aspect-square w-full"
              />
            </li>
          ))}
        </ul>
      </section>

      {/* A Few Things I Believe / What I'm Learning Lately */}
      {/* <section className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
        <div>
          <h2 className="text-section">A Few Things I Believe</h2>
          <ul className="mt-5 space-y-3">
            {BELIEFS.map((belief) => (
              <li key={belief} className="flex items-start gap-2 text-sm text-muted">
                <CheckIcon className="mt-0.5 size-4 shrink-0 text-accent" />
                {belief}
              </li>
            ))}
          </ul>
        </div>

        <div className="mx-auto w-full max-w-[220px] -rotate-2 rounded-md border border-line bg-elevated p-3 shadow-lg">
          <PhotoBox
            candidates={POLAROID_CANDIDATES}
            alt="A quiet moment outdoors"
            className="relative aspect-square w-full"
          />
          <p className="mt-3 pb-1 text-center font-serif text-xs text-muted italic">
            {POLAROID_CAPTION}
          </p>
        </div>

        <div>
          <h2 className="text-section">What I&rsquo;m Learning Lately</h2>
          <ul className="mt-5 space-y-3">
            {LEARNING_LATELY.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-muted">
                <SparkIcon className="mt-0.5 size-4 shrink-0 text-accent" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-4 flex items-center gap-2 font-serif text-sm text-accent italic">
            <LeafIcon className="size-4" />
            {LEARNING_TAGLINE}
          </p>
        </div>
      </section> */}

     
    </article>
  );
}
