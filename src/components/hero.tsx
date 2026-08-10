import { Portrait } from "@/components/portrait";
import { ArrowRight, ButtonLink } from "@/components/ui/button";
import { ResumeButton } from "@/components/ui/resume-button";
import { HERO_QUOTE } from "@/content/impact";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="page-container relative pt-12 pb-1 sm:pt-16 sm:pb-1">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
          <div className="order-2 lg:order-1">

            <h1 className="text-hero">
               Elevating People.
              <br />
               Inspiring Trust.
              <br />
                 <span className="text-accent">Delivering Results.</span>
            </h1>

            <p className="measure-prose mt-6 text-muted">
              I believe great engineering organizations don't happen by accident. 
              They are built by investing in people, creating environments where 
              trust and accountability thrive, and empowering teams to solve 
              meaningful problems. When people grow, customers benefit, and
              businesses succeed.
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

            <div className="mt-8 flex flex-wrap items-center gap-3">
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

          <div className="order-1 lg:order-2">
            <div className="relative mx-auto max-w-md">
              <Portrait />

              {/*
                Flush overlay on the portrait's faded lower edge, not a separate card below it.
                Full width so it reads as a caption on the photo rather than a floating box.
              */}
              <figure className="absolute inset-x-0 bottom-0 p-5">
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
          </div>
        </div>
      </div>
    </section>
  );
}
