import {
  ChecklistIcon,
  CheckIcon,
  CompassIcon,
  GearsIcon,
  PeopleIcon,
  ShieldCheckIcon,
  SummitIcon,
  TargetIcon,
} from "@/components/ui/icons";
import { TILE_CLASSES, TILE_SOFT_CLASSES, type TileColor } from "@/content/leadership";

/**
 * The five operating principles, in the numbered order shown on the page. Local to this
 * component rather than in content/leadership.ts — nothing else uses this text, so keeping it
 * here means editing the copy doesn't require jumping to another file. Each links to the
 * general /leadership page for now; none of these has its own dedicated page yet.
 */
const PRINCIPLES: ReadonlyArray<{
  title: string;
  description: string;
  icon: typeof PeopleIcon;
  tile: TileColor;
}> = [
  {
    title: "Elevate People",
    description:
      "Invest in people first. Coach, challenge, and empower others to grow. Give people " +
      "meaningful ownership, set high standards, and hold one another accountable.",
    icon: PeopleIcon,
    tile: "blue",
  },
  {
    title: "Build Trust",
    description:
      "Trust is earned through integrity, accountability, and honest conversations. " +
      "Strong teams move faster because they know where they stand.",
    icon: ShieldCheckIcon,
    tile: "green",
  },
  {
    title: "Create Alignment",
    description:
      "Create a shared understanding of where we're going, why it matters, and how every " +
      "team contributes to the mission.",
    icon: CompassIcon,
    tile: "violet",
  },
  {
    title: "Create Clarity",
    description:
      "Clear priorities, ownership, and expectations allow teams to make better decisions " +
      "with confidence and autonomy.",
    icon: ChecklistIcon,
    tile: "amber",
  },
  {
    title: "Think in Systems",
    description:
      "The best leaders don't ask people to overcome broken systems. They continuously " +
      "improve the environment, processes, and feedback loops that enable teams to succeed.",
    icon: GearsIcon,
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
 * A second light band, by request — the site's general rule is one light section (see
 * ExperiencePreview), but the owner asked for this one to match their mockup instead. The
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
            My Operating Principles
          </h2>
          <p className="eyebrow">guiding every decision I make</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-10">
          <div className="space-y-8">
            <div>
              {/* <ShieldCheckIcon className="text-accent" /> */}
              <h3 className="mt-3 text-lg">Leadership begins with authenticity.</h3>
              <p className="mt-2 text-sm text-band-muted">
                I lead as my authentic self — honest, transparent, and human. Everything else
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

          <div className="relative">
            {/* Connecting rule + arrowhead, drawn behind the numbered markers. */}
            <span
              aria-hidden="true"
              className="absolute top-4 bottom-4 left-4 w-px -translate-x-1/2 bg-band-line"
            />
            <span
              aria-hidden="true"
              className="absolute bottom-4 left-4 h-0 w-0 -translate-x-1/2 translate-y-full border-x-4 border-t-4 border-x-transparent border-t-band-line"
            />

            <ol className="space-y-4">
              {PRINCIPLES.map((principle, index) => (
                <li key={principle.title} className="flex items-start gap-4 sm:gap-5">
                  <span
                    className={`relative z-10 flex size-8 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-white ${
                      TILE_CLASSES[principle.tile]
                    }`}
                  >
                    {index + 1}
                  </span>

                  {/*
                    Not a link yet — none of these principles has its own detail page. A plain
                    div, not <Link href="/leadership">, so the whole row doesn't read as
                    clickable when it isn't going anywhere specific.
                  */}
                  <div
                    className={`flex flex-1 items-center gap-4 rounded-xl border p-4 ${
                      TILE_SOFT_CLASSES[principle.tile]
                    }`}
                  >
                    <span
                      className={`flex size-11 shrink-0 items-center justify-center rounded-lg text-white ${
                        TILE_CLASSES[principle.tile]
                      }`}
                    >
                      <principle.icon />
                    </span>
                    <span className="flex-1">
                      <span className="block text-base text-band-ink">{principle.title}</span>
                      <span className="mt-1 block text-sm text-band-muted">
                        {principle.description}
                      </span>
                    </span>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>

      </div>
    </section>
  );
}
