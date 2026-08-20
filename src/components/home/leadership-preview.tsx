import Link from "next/link";
import { CheckIcon, SummitIcon, TargetIcon } from "@/components/ui/icons";
import { ArrowRight, ButtonLink } from "@/components/ui/button";
import {
  PRINCIPLE_DETAILS,
  TILE_CLASSES,
  TILE_SOFT_CLASSES,
  type TileColor,
} from "@/content/leadership";

/**
 * The five operating principles, in the numbered order shown on the page. The short teaser
 * copy is local to this component — nothing else uses it, so keeping it here means editing
 * it doesn't require jumping to another file. The number and anchor id, though, come from
 * content/leadership.ts's PRINCIPLE_DETAILS (matched by title below) rather than being
 * hand-typed here too, so this row's number badge and its link target can't drift out of
 * sync with the leadership page's own numbering and section ids.
 */
const PRINCIPLES: ReadonlyArray<{
  title: string;
  description: string;
  tile: TileColor;
}> = [
  {
    title: "Elevate People",
    description:
      "Invest in people first. Coach, challenge, and empower others to grow. Give people " +
      "meaningful ownership, set high standards, and hold one another accountable.",
    tile: "blue",
  },
  {
    title: "Build Trust",
    description:
      "Trust is earned through integrity, accountability, and honest conversations. " +
      "Strong teams move faster because they know where they stand.",
    tile: "green",
  },
  {
    title: "Connect to Purpose",
    description:
      "Help people see why the work matters and how their contribution connects to the " +
      "mission. People commit more fully when the purpose is clear.",
    tile: "violet",
  },
  {
    title: "Build Great Teams",
    description:
      "Put the right people together, give them shared purpose and clear ownership, and " +
      "help them combine their strengths into something no individual could do alone.",
    tile: "amber",
  },
  {
    title: "Improve the System",
    description:
      "The best leaders don't ask people to overcome broken systems. They continuously " +
      "improve the environment, processes, and feedback loops that enable teams to succeed.",
    tile: "teal",
  },
];

const RESULT_ITEMS = [
  "High-performing teams",
  "Meaningful products",
  "Strong businesses",
  "Sustainable impact",
];

/**
 * Homepage "operating principles" section, set directly below the hero.
 *
 * A second light band, by request — the site's general rule is one light section, but the
 * owner asked for this one to match their mockup instead. The
 * numbered principle rows use a translucent tint of their tile colour (`TILE_SOFT_CLASSES`)
 * rather than a flat pastel, so they stay correct if the tile hues ever change. The result
 * banner is the one part that stays dark on purpose, for contrast, matching the mockup.
 */
export function LeadershipPreview() {
  return (
    <section
      aria-labelledby="principles-heading"
      className="bg-band pt-1 pb-16 text-band-ink sm:pt-1 sm:pb-24"
    >
      <div className="page-container">
        <div className="mt-1 text-center">
          <h2 id="principles-heading" className="text-section mt-3 scroll-mt-24">
            My Leadership Principles
          </h2>

        </div>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-10">
          <div className="space-y-8">
            <div>
              {/* <ShieldCheckIcon className="text-accent" /> */}
              <h3 className="mt-3 text-lg">Leadership begins with authenticity.</h3>
              <p className="mt-2 text-sm text-band-muted">
                I lead as my authentic self - honest, transparent, and human. Everything else
                builds from that foundation.
              </p>
            </div>

            <hr className="border-band-line" />

            <div>
              {/* <TargetIcon className="text-accent" /> */}
              <h3 className="mt-3 text-lg">The Result</h3>
              <ul className="mt-3 space-y-2">
                {RESULT_ITEMS.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-band-muted">
                    <CheckIcon className="size-4 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>


    <div className="mt-12 grid grid-cols-1 gap-6 rounded-xl bg-elevated p-8">
          <div className="flex items-center gap-4">
            {/* <SummitIcon className="size-8 shrink-0 text-accent" /> */}
            <p className="text-lg text-ink">
              Outcomes aren&apos;t a hope. They&apos;re the result of how we lead.
            </p>
          </div>
          
          <p className="text-sm text-muted">
            When these principles become part of an organization&apos;s culture, teams thrive,
            customers win, and the business grows.
          </p>
        </div>


          </div>

          <ol className="space-y-4">
            {PRINCIPLES.map((principle) => {
              const detail = PRINCIPLE_DETAILS.find((item) => item.title === principle.title);

              return (
                <li key={principle.title}>
                  <Link
                    href={detail ? `/leadership#${detail.id}` : "/leadership"}
                    className={`group flex items-center gap-4 rounded-xl border p-4 transition-colors ${
                      TILE_SOFT_CLASSES[principle.tile]
                    }`}
                  >
                    {/* Same shape and zero-padded number as the leadership page's own
                        per-principle badge, so the two pages read as the same numbering. */}
                    <span
                      className={`flex size-11 shrink-0 items-center justify-center rounded-lg text-sm font-semibold text-white ${
                        TILE_CLASSES[principle.tile]
                      }`}
                    >
                      {detail?.number}
                    </span>
                    <span className="flex-1">
                      <span className="block text-base text-band-ink">{principle.title}</span>
                      <span className="mt-1 block text-sm text-band-muted">
                        {principle.description}
                      </span>
                    </span>
                    <span className="text-band-muted transition-colors group-hover:text-accent">
                      <ArrowRight />
                    </span>
                  </Link>
                </li>
              );
            })}
          </ol>
        </div>

        <div className="mt-12 flex justify-center">
          <ButtonLink href="/leadership">
            Explore My Leadership Philosophy
            <ArrowRight />
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
