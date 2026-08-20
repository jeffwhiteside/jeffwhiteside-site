import { Portrait } from "@/components/portrait";
import { ArrowRight, ButtonLink } from "@/components/ui/button";
import { ResumeButton } from "@/components/ui/resume-button";
import { HERO_QUOTE } from "@/content/impact";

const SCOPE_FACTS = [
  "Scaling Engineering Organizations",
  "Developing Engineering Leaders",
  "SaaS & Platform Modernization",
  "AI-Enabled Engineering",
];

/**
 * The hero.
 *
 * Mobile (below `sm`) order is portrait → headline → philosophy → scope facts → CTAs — the
 * owner's explicit call, overriding an earlier "headline first" pass. Because the portrait now
 * comes before the text column at every breakpoint (`order-1 lg:order-2` / `order-2
 * lg:order-1`, i.e. the original ordering), the CTA row no longer needs two renderings the way
 * it did under the headline-first layout — it's already naturally the last thing in the text
 * column at both breakpoints, so only its *styling* (stacked/ghost vs inline/primary) still
 * needs the two versions, both live in the same spot.
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="page-container relative pt-12 pb-1 sm:pt-16 sm:pb-1">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
          <div className="order-2 lg:order-1">
            {/*
              A fixed mobile size (1.75rem) still wrapped "Delivering Results." on a real
              phone — the estimate was wrong, and a single flat size is a guess either way.
              Scaling with vw instead means it tracks the viewport rather than betting on one
              width: it gets proportionally smaller on narrower phones instead of staying put
              until it suddenly doesn't fit. Deliberately conservative after the last miss —
              if it now reads too small, raise the clamp's middle (preferred) value.
            */}
           <h1 className="text-[clamp(1.75rem,7vw,2.5rem)] leading-[1.15] tracking-tight text-balance sm:text-hero">
  Great engineering organizations{' '}
  <span className="text-accent">don&rsquo;t happen by accident.</span>
</h1>

<p className="measure-prose mt-6 text-muted">
  They&rsquo;re built by investing in people, creating environments where
  trust and accountability thrive, and empowering teams to solve meaningful
  problems.{' '}
  <span className="hidden sm:inline">
    When people grow, customers benefit, and businesses succeed.
  </span>
</p>

            <div className="mt-6">
              <p className="eyebrow">20+ Years of Engineering Leadership</p>

              {/* Mobile: a real stacked list, one fact per line with a leading bullet. */}
              <ul className="mt-1 space-y-1 text-sm text-ink sm:hidden">
                {SCOPE_FACTS.map((fact) => (
                  <li key={fact} className="flex items-baseline gap-2">
                    <span aria-hidden="true" className="text-accent">
                      •
                    </span>
                    {fact}
                  </li>
                ))}
              </ul>

              {/* Desktop: two wrapping lines (forced break after the 2nd fact), separated by bullets. */}
              <p className="mt-1 hidden text-sm text-ink sm:block">
                {SCOPE_FACTS.map((fact, index) => (
                  <span key={fact} className="whitespace-nowrap">
                    {fact}
                    {index < SCOPE_FACTS.length - 1 && index !== 1 ? (
                      <>
                        {" "}
                        <span aria-hidden="true" className="text-accent">
                          •
                        </span>{" "}
                      </>
                    ) : null}
                    {index === 1 ? <br /> : null}
                  </span>
                ))}
              </p>
            </div>

            {/* Mobile: stacked, full-width, second action de-emphasized to ghost so it
                doesn't compete with the first. Desktop keeps the original inline row below. */}
            <div className="mt-8 flex flex-col items-stretch gap-2.5 sm:hidden">
              <ButtonLink href="/leadership" variant="secondary" className="w-full">
                Explore How I Lead
                <ArrowRight />
              </ButtonLink>
              <ButtonLink href="/experience" variant="ghost" className="w-full">
                Explore My Journey
                <ArrowRight />
              </ButtonLink>
              <ResumeButton className="w-full" />
            </div>

            <div className="mt-8 hidden flex-wrap items-center gap-3 sm:flex">
              <ButtonLink href="/leadership" >
                Explore How I Lead
                <ArrowRight />
              </ButtonLink>
              <ButtonLink href="/experience" variant="secondary">
                Explore My Journey
                <ArrowRight />
              </ButtonLink>
              <ResumeButton />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative mx-auto max-w-md">
              <Portrait />

              {/*
                Flush overlay on the portrait's faded lower edge, not a separate card below it.
                Full width so it reads as a caption on the photo rather than a floating box.
                Hidden below `sm`: on the compact mobile portrait it would crowd a photo that's
                already reduced to ~240px, and the paragraph below already carries the same
                idea — nothing is lost by dropping it there.
              */}
              <figure className="absolute inset-x-0 bottom-0 hidden p-5 sm:block">
                <blockquote>
                  <p className="text-right text-sm text-ink">

                    {HERO_QUOTE}

                  </p>
                </blockquote>
              </figure>
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
