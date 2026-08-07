import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { ProjectImage } from "@/components/project-image";
import { PROJECTS } from "@/content/projects";
import { getSection } from "@/content/sections";

const section = getSection("projects");

export const metadata: Metadata = {
  title: section.title,
  description: section.description,
};

export default function ProjectsPage() {
  return (
    <PageShell
      title={section.title}
      intro="Applications I build for my own use, to stay close to the craft."
    >
      <ul className="space-y-10">
        {PROJECTS.map((project) => (
          <li
            key={project.slug}
            className="grid grid-cols-1 gap-6 sm:grid-cols-[1fr_20rem] sm:items-start"
          >
            <div>
              <h2 className="text-xl">{project.name}</h2>
              <p className="measure-prose mt-2 text-muted">{project.description}</p>

              {project.isPlaceholder ? (
                <p className="mt-4 text-xs tracking-widest text-muted uppercase">
                  Problem, technologies, architecture, status, and links pending —
                  added in {section.plannedIn}
                </p>
              ) : null}
            </div>

            <ProjectImage slug={project.slug} alt={`${project.name} screenshot`} />
          </li>
        ))}
      </ul>
    </PageShell>
  );
}
