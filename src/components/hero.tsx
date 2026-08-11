import { Portrait } from "@/components/portrait";
import { ArrowRight, ButtonLink } from "@/components/ui/button";
import { ResumeButton } from "@/components/ui/resume-button";
import { HERO_QUOTE } from "@/content/impact";

/**
 * The hero.
 *
 * Mobile (below `sm`) is a deliberately different reading order from desktop, not desktop
 * stacked vertically: headline → philosophy → scope facts → portrait → CTAs. That means the
 * portrait and the CTA row each need two renderings — one inside the text column for desktop's
 * side-by-side layout, one after the portrait for mobile's stacked order — toggled with
 * `hidden`/`sm:hidden` rather than reordered with CSS `order`, since the CTA row's desktop
 * position (inside the text column, left side) and mobile position (below the portrait, full
 * width) aren't reachable from the same grid placement. Duplicated markup, but predictable at
 * both breakpoints without gambling on grid auto-flow.
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="page-container relative pt-12 pb-1 sm:pt-16 sm:pb-1">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
          <div className="order-1">
            <h1 className="text-hero">
              Elevating People.
              <br />
              Inspiring Trust.
              <br />
              <span className="text-accent">Delivering Results.</span>
            </h1>

            {/* Mobile: shorter, to get the headline and CTAs above the fold. */}
            <p className="measure-prose mt-6 text-muted sm:hidden">
              Great engineering organizations don&rsquo;t happen by accident. They&rsquo;re
              built by investing in people, creating trust and accountability, and empowering
              teams to solve meaningful problems.
            </p>
            <p className="measure-prose mt-6 hidden text-muted sm:block">
              I believe great engineering organizations don&rsquo;t happen by accident. They
              are built by investing in people, creating environments where trust and
              accountability thrive, and empowering teams to solve meaningful problems. When
              people grow, customers benefit, and businesses succeed.
            </p>

            <div className="mt-6">
              <p className="eyebrow">20+ Years of Engineering Leadership</p>
              <p className="mt-1 text-sm text-ink">
                SaaS Platforms &amp; Organizations{" "}
                <span aria-hidden="true" className="text-accent">
                  •
                </span>{" "}
                Developing Leaders
                <br />
                Platform Modernization{" "}
                <span aria-hidden="true" className="text-accent">
                  •
                </span>{" "}
                AI-Enabled Engineering
              </p>
            </div>

            {/* Desktop position: inline row, unchanged from before. Hidden on mobile — see
                the mobile-position copy of this row after the portrait below. */}
            <div className="mt-8 hidden flex-wrap items-center gap-3 sm:flex">
              <ButtonLink href="#principles-heading" variant="secondary">
                Explore How I Lead
                <ArrowRight />
              </ButtonLink>
              <ButtonLink href="#experience-heading">
                Explore My Journey
                <ArrowRight />
              </ButtonLink>
              <ResumeButton />
            </div>
          </div>

          <div className="order-2">
            <div className="relative mx-auto max-w-md">
              <Portrait />

              {/*
                Flush overlay on the portrait's faded lower edge, not a separate card below it.
                Full width so it reads as a caption on the photo rather than a floating box.
                Hidden below `sm`: on the compact mobile portrait it would crowd a photo that's
                already reduced to ~240px, and the paragraph above already carries the same
                idea — nothing is lost by dropping it there.
              */}
              <figure className="absolute inset-x-0 bottom-0 hidden p-5 sm:block">
                <blockquote>
                  <p className="text-right text-sm text-ink">
                    <span aria-hidden="true" className="font-serif text-accent">
                      &ldquo;
                    </span>
                    {HERO_QUOTE}
                    <span aria-hidden="true" className="font-serif text-accent">
                      &rdquo;
                    </span>
                  </p>
                </blockquote>
                <figcaption className="mt-3 text-right font-serif text-sm text-accent italic">
                  — Jeff Whiteside
                </figcaption>
              </figure>
            </div>

            {/* Mobile position: stacked, full-width, second action de-emphasized to ghost so
                it doesn't compete with the first — see the desktop copy of this row above. */}
            <div className="mt-8 flex flex-col items-stretch gap-2.5 sm:hidden">
              <ButtonLink href="#principles-heading" variant="secondary" className="w-full">
                Explore How I Lead
                <ArrowRight />
              </ButtonLink>
              <ButtonLink href="#experience-heading" variant="ghost" className="w-full">
                Explore My Journey
                <ArrowRight />
              </ButtonLink>
              <ResumeButton className="w-full" />
            </div>
          </div>
        </div>

        {/* Subtle mobile-only cue before the light section that follows — the hero has almost
            no bottom padding (pb-1), so without this the transition from a long dark hero
            straight into a bright white section feels abrupt. */}
        <div aria-hidden="true" className="mt-10 h-0.5 w-full bg-accent/40 sm:hidden" />
      </div>
    </section>
  );
}
