import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { FOCUS_AREAS, TILE_CLASSES } from "@/content/leadership";
import { getSection } from "@/content/sections";

const section = getSection("leadership");

export const metadata: Metadata = {
  title: section.title,
  description: section.description,
};

export default function LeadershipPage() {
  return (
    <PageShell
      title="Leadership"
      intro="How I build teams, set direction, and create the conditions for engineers to do their best work."
    >
      <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {FOCUS_AREAS.map(({ title, description, icon: Icon, tile }) => (
          <li key={title} className="card p-6">
            <span
              className={`flex size-11 items-center justify-center rounded-lg text-white ${TILE_CLASSES[tile]}`}
            >
              <Icon />
            </span>
            <h2 className="mt-4 text-lg">{title}</h2>
            <p className="mt-2 text-muted">{description}</p>
          </li>
        ))}
      </ul>
    </PageShell>
  );
}
