import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@/components/ui/button";
import { ProjectIcon } from "@/components/project-icon";
import { ProjectImage } from "@/components/project-image";
import { PROJECTS } from "@/content/projects";
import { getSection } from "@/content/sections";

const section = getSection("projects");

export const metadata: Metadata = {
  title: section.title,
  description: section.description,
};

/**
 * Projects index: a card per project, each linking to its own detail page at
 * `/projects/<slug>`. Those detail pages don't exist yet — added in a later iteration — so
 * these links 404 for now.
 */
export default function ProjectsPage() {
  return (
    <article className="page-container py-12 sm:py-16">
      <p className="eyebrow">Personal Projects</p>
      <h1 className="text-hero mt-3">{section.title}</h1>
      <p className="mt-4 text-muted">
        Technology is a tool to solve problems in our lives. When I see an opportunity to make
        something better, I jump into action. Where it makes sense I build my own tools and systems.
        I also love exploring new technologies, tools and techniques. Even though I focus my value on 
        helping teams be successful through leadership, staying close to the technologies my teams use
        is also important and really fun.
      </p>

      <p className="mt-4 text-muted">
        Here are a few example projects I built for myself that I use daily.
      </p>

      <ul className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
        {PROJECTS.map((project) => (
          <li key={project.slug} className="card flex flex-col overflow-hidden">
            <div className="flex items-center gap-3 p-6 pb-4">
              <ProjectIcon slug={project.slug} icon={project.icon} tile={project.tile} />
              <h2 className="text-lg">{project.name}</h2>
            </div>

            <ProjectImage
              slug={project.slug}
              alt={`${project.name} screenshot`}
              variant="card-middle"
            />

            <div className="flex flex-1 flex-col p-6">
              <p className="text-sm text-muted">{project.description}</p>

              {project.technologies.length > 0 ? (
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <li key={technology} className="tag">
                      {technology}
                    </li>
                  ))}
                </ul>
              ) : null}

              {project.isPlaceholder ? (
                <p className="mt-4 text-xs tracking-widest text-muted uppercase">
                  Details pending
                </p>
              ) : null}

              {/* <Link
                href={`/projects/${project.slug}`}
                className="link mt-auto inline-flex items-center gap-2 pt-6 text-sm font-medium"
              >
                Explore {project.name}
                <ArrowRight />
              </Link> */}
            </div>
          </li>
        ))}
      </ul>
    </article>
  );
}
