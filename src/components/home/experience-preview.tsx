import { ArrowRight, ButtonLink } from "@/components/ui/button";
import { FEATURED_ROLES } from "@/content/experience";

const DOT_CLASSES = [
  "bg-tile-blue",
  "bg-tile-teal",
  "bg-tile-violet",
  "bg-tile-amber",
] as const;

/**
 * Career timeline, set on a light band.
 *
 * The branding mockup placed company logos above each entry. Those are third-party marks
 * requiring licensing and are the visual language of a logo wall; the company name set in
 * bold does the same job. Coloured dots carry the visual rhythm instead.
 *
 * The connecting rule is drawn only at `lg`, where the entries sit in a row. Below that the
 * timeline stacks and the rule would be meaningless.
 */
export function ExperiencePreview() {
  return (
    <section
      aria-labelledby="experience-heading"
      className="bg-band py-16 text-band-ink sm:py-24"
    >
      <div className="page-container">
        <div className="text-center">

          <h2 id="experience-heading" className="text-section mt-3 scroll-mt-24">
            My Journey So Far
          </h2>
            <p className="eyebrow">Four Chapters that shaped how I build, lead, and think</p>
        </div>

        <ol className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {FEATURED_ROLES.map((role, index) => (
            <li key={role.company} className="relative">
              <h3 className="text-base">{role.company}</h3>
              <p className="mt-1 text-sm text-band-muted">{role.title}</p>
              <p className="mt-1 text-sm text-band-muted">{role.period}</p>

              <div className="relative mt-5 mb-5 flex items-center">
                {/* Connecting rule, drawn behind the marker at wide widths only. */}
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 hidden h-px bg-band-line lg:block"
                />
                <span
                  aria-hidden="true"
                  className={`relative size-3 rounded-full ring-4 ring-band ${
                    DOT_CLASSES[index % DOT_CLASSES.length]
                  }`}
                />
              </div>

              <p className="text-sm text-band-muted">{role.summary}</p>
            </li>
          ))}
        </ol>

        {/* <div className="mt-12 flex justify-center">
          <ButtonLink href="/experience">
            View Full Experience
            <ArrowRight />
          </ButtonLink>
        </div> */}
      </div>
    </section>
  );
}
