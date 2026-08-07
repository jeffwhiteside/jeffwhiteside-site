import { SectionHeading } from "@/components/section-heading";
import { ProjectImage } from "@/components/project-image";
import { ArrowRight, ButtonLink } from "@/components/ui/button";
import { PROJECTS } from "@/content/projects";

/**
 * Featured projects as a three-card row.
 *
 * Each card links to the projects page rather than to an external repository, because no
 * repository or live URL has been confirmed yet. Technology tags render only when real
 * technologies exist — an empty list produces no tag row rather than invented badges.
 */
export function ProjectsPreview() {
  return (
    <section aria-labelledby="projects-heading" className="bg-surface py-16 sm:py-24">
      <div className="page-container">
        <SectionHeading
          id="projects-heading"
          eyebrow="Featured Projects"
          title="Personal projects that keep me curious."
        />

        <ul className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {PROJECTS.map((project) => (
            <li key={project.slug} className="card flex flex-col overflow-hidden">
              <ProjectImage slug={project.slug} alt={`${project.name} screenshot`} />

              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg">{project.name}</h3>
                <p className="mt-2 text-sm text-muted">{project.description}</p>

                {project.technologies.length > 0 ? (
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <li key={technology} className="tag">
                        {technology}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-4 text-xs tracking-widest text-muted uppercase">
                    Details pending
                  </p>
                )}
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex justify-center">
          <ButtonLink href="/projects" variant="secondary">
            See More Projects
            <ArrowRight />
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
