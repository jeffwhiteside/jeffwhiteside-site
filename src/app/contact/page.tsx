import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { getSection } from "@/content/sections";

const section = getSection("contact");

export const metadata: Metadata = {
  title: section.title,
  description: section.description,
};

export default function ContactPage() {
  return (
    <PageShell title={section.title}>
      <p className="measure-prose text-muted">
        Placeholder — the contact copy and links are written in {section.plannedIn}.
      </p>
    </PageShell>
  );
}
