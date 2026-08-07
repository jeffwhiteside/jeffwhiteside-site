import { ArrowRight, ButtonLink } from "@/components/ui/button";
import { LayersIcon, ShieldCheckIcon, SparkIcon, PeopleIcon } from "@/components/ui/icons";
import { IMPACT } from "@/content/impact";
import { PROJECTS } from "@/content/projects";
import { TILE_CLASSES } from "@/content/leadership";

const IMPACT_ICONS = [PeopleIcon, LayersIcon, ShieldCheckIcon, SparkIcon] as const;

/**
 * Two columns: verified impact figures on the left, personal projects on the right.
 *
 * Figures are highlighted in the positive colour, which is reserved for résumé-backed numbers
 * and used nowhere else — so colour here signals "this is a measured claim", not emphasis.
 */
export function ImpactAndProjects() {
  return (
    <section className="page-container py-16 sm:py-24">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-10">
        <div>
          <h2 id="impact-heading" className="eyebrow">
            Successes &amp; Impact
          </h2>

          <ul className="mt-6 space-y-4">
            {IMPACT.map((item, index) => {
              const Icon = IMPACT_ICONS[index % IMPACT_ICONS.length];
              return (
                <li key={item.figure} className="card flex gap-4 p-5">
                  <span
                    className={`flex size-10 shrink-0 items-center justify-center rounded-lg text-white ${
                      TILE_CLASSES[item.tile]
                    }`}
                  >
                    <Icon />
                  </span>
                  <p className="text-sm text-muted">
                    {item.before}{" "}
                    <strong className="font-semibold text-positive">{item.figure}</strong>{" "}
                    {item.after}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <h2 id="projects-heading" className="eyebrow">
            Personal Projects
          </h2>

          <ul className="mt-6 space-y-4">
            {PROJECTS.map((project) => (
              <li key={project.slug} className="card p-5">
                <h3 className="text-base">{project.name}</h3>
                <p className="mt-2 text-sm text-muted">{project.description}</p>

                {project.technologies.length > 0 ? (
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <li key={technology} className="tag">
                        {technology}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-3 text-xs tracking-widest text-muted uppercase">
                    Details pending
                  </p>
                )}
              </li>
            ))}
          </ul>

          <div className="mt-6">
            <ButtonLink href="/projects" variant="secondary">
              See More Projects
              <ArrowRight />
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
