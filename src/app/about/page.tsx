import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { FAMILY_PLACEHOLDER, INTERESTS } from "@/content/about";
import { CERTIFICATIONS, EDUCATION } from "@/content/credentials";
import { getSection } from "@/content/sections";

const section = getSection("about");

export const metadata: Metadata = {
  title: section.title,
  description: section.description,
};

export default function AboutPage() {
  return (
    <PageShell
      title="About"
      intro="Engineering executive with 20+ years leading multi-team software organizations across high-availability SaaS, marketplace, and regulated platforms."
    >
      <div className="space-y-14">
        <section aria-labelledby="beyond-heading">
          <h2 id="beyond-heading" className="eyebrow">
            Beyond Work
          </h2>
          <ul className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {INTERESTS.map((interest) => (
              <li key={interest.title} className="card p-5">
                <h3 className="text-base">{interest.title}</h3>
                <p className="mt-2 text-sm text-muted">{interest.description}</p>
              </li>
            ))}
          </ul>
          <p className="measure-prose mt-5 text-sm text-muted">{FAMILY_PLACEHOLDER}</p>
        </section>

        <section aria-labelledby="education-heading">
          <h2 id="education-heading" className="eyebrow">
            Education
          </h2>
          <ul className="mt-5 space-y-3">
            {EDUCATION.map((item) => (
              <li key={item.title}>
                <p className="font-semibold text-ink">{item.title}</p>
                <p className="text-sm text-muted">{item.detail}</p>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="certifications-heading">
          <h2 id="certifications-heading" className="eyebrow">
            Certifications
          </h2>
          <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {CERTIFICATIONS.map((item) => (
              <li key={item.title} className="card p-4">
                <p className="text-sm font-semibold text-ink">{item.title}</p>
                <p className="text-sm text-muted">{item.detail}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </PageShell>
  );
}
