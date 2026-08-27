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
    </article>
  );
}
