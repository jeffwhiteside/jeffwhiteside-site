import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { ROLES } from "@/content/experience";
import { getSection } from "@/content/sections";

const section = getSection("experience");

export const metadata: Metadata = {
  title: section.title,
  description: section.description,
};

export default function ExperiencePage() {
  return (
    <PageShell
      title="Experience"
      intro="Twenty years leading engineering across SaaS, marketplace, and regulated platforms."
    >
      <ol className="space-y-10">
        {ROLES.map((role) => (
          <li key={`${role.company}-${role.period}`} className="card p-6">
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
              <h2 className="text-lg">{role.company}</h2>
              <p className="text-sm text-muted">{role.period}</p>
            </div>

            <p className="mt-1 font-semibold text-accent">{role.title}</p>
            <p className="text-sm text-muted">{role.location}</p>

            <p className="mt-4 text-muted">{role.summary}</p>

            {role.highlights.length > 0 ? (
              <ul className="mt-4 space-y-2">
                {role.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3 text-sm text-muted">
                    <span
                      aria-hidden="true"
                      className="mt-2 size-1.5 shrink-0 rounded-full bg-accent"
                    />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </li>
        ))}
      </ol>
    </PageShell>
  );
}
