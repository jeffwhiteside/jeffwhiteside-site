import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { getSection } from "@/content/sections";
import { PUBLICATIONS } from "@/content/writing";

const section = getSection("writing");

export const metadata: Metadata = {
  title: section.title,
  description: section.description,
};

export default function WritingPage() {
  return (
    <PageShell title={section.title}>
      <ul className="space-y-8">
        {PUBLICATIONS.map((publication) => (
          <li key={publication.title}>
            <h2 className="text-xl">{publication.title}</h2>
            <p className="mt-1 text-sm text-muted">{publication.venue}</p>
            <p className="measure-prose mt-3 text-muted">{publication.summary}</p>
            <p className="measure-prose mt-3 text-sm text-muted italic">
              {publication.citation}
            </p>
            {publication.url ? (
              <a href={publication.url} className="link mt-3 inline-block text-sm">
                Read the publication
              </a>
            ) : (
              <p className="mt-3 text-xs tracking-widest text-muted uppercase">
                Publication link pending
              </p>
            )}
          </li>
        ))}
      </ul>
    </PageShell>
  );
}
