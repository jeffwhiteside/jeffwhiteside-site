import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { BookOpenIcon, CalendarIcon, DocumentIcon } from "@/components/ui/icons";
import { ArrowRight } from "@/components/ui/button";
import { RESUME_PATH } from "@/components/ui/resume-button";
import {
  EARLY_ROLES,
  FEATURED_ROLES,
  FOUNDATION_INTRO,
  FOUNDATION_REFLECTION,
} from "@/content/experience";
import { TILE_CLASSES, TILE_TEXT_CLASSES } from "@/content/leadership";
import { getSection } from "@/content/sections";
import { resolvePublicImage } from "@/lib/assets";

const section = getSection("experience");

export const metadata: Metadata = {
  title: section.title,
  description: section.description,
};

export default function ExperiencePage() {
  const resume = resolvePublicImage([RESUME_PATH]);

  return (
    <PageShell
      title="My Journey So Far"
      intro={
        <>
          I’ve spent more than twenty years leading engineering across SaaS, marketplace, and
          regulated platforms. Along the way, I’ve learned more than I ever expected—from hard work,
          missteps, great teams, strong mentors, and leaders who challenged me to grow.
          <br /> <br />
          What follows are a few of the chapters that shaped how I lead, build teams, and think
          about engineering today.
        </>
      }
      accentBar
      wideIntro
    >
      <ol className="space-y-10">
        {FEATURED_ROLES.map((role) => (
          <li key={`${role.company}-${role.period}`} className="card p-6 sm:p-8">
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
              <h2 className="text-lg font-bold text-ink">{role.company}</h2>
              <p className="text-sm text-muted">{role.period}</p>
            </div>

            <p className="mt-1 font-semibold text-accent">{role.title}</p>
            <p className="text-sm text-muted">{role.location}</p>

            <p className="mt-4 text-muted">{role.summary}</p>

            {role.metrics ? (
              <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {role.metrics.map((metric) => (
                  <div key={metric.label} className="rounded-lg border border-line p-4">
                    <div className="flex items-center gap-3">
                      <span
                        className={`flex size-9 shrink-0 items-center justify-center rounded-full text-white ${
                          TILE_CLASSES[metric.tile]
                        }`}
                      >
                        <metric.icon className="size-4" />
                      </span>
                      <span className={`text-sm font-medium ${TILE_TEXT_CLASSES[metric.tile]}`}>
                        {metric.label}
                      </span>
                    </div>
                    <p className="mt-3 text-2xl font-bold text-ink">{metric.stat}</p>
                    <p className="mt-2 text-sm text-muted">{metric.description}</p>
                  </div>
                ))}
              </div>
            ) : null}

            {role.whatILearned ? (
              <div className="mt-6 flex flex-wrap items-start gap-x-4 gap-y-2">
                <div className="flex shrink-0 items-center gap-2 text-sm font-semibold text-accent">
                  <BookOpenIcon className="size-4" />
                  What I Learned
                </div>
                <p className="min-w-[16rem] flex-1 border-l border-line pl-4 text-sm text-muted">
                  {role.whatILearned}
                </p>
              </div>
            ) : null}
          </li>
        ))}
      </ol>

      {/* Earlier, pre-leadership roles: compact cards rather than full write-ups, since the
          résumé download below already covers them in detail. */}
      <div className="mt-16">
        <p className="eyebrow">Earlier in My Career</p>
        <h2 className="text-section mt-3">Building the Foundation</h2>
        <p className="mt-4 text-muted">{FOUNDATION_INTRO}</p>
        <span aria-hidden="true" className="mt-5 block h-1 w-10 rounded-full bg-accent" />
      </div>

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {EARLY_ROLES.map((role) => (
          <div key={role.company} className="card p-5">
            <div className="flex items-start gap-3">
              <span
                className={`flex size-11 shrink-0 items-center justify-center rounded-full text-white ${
                  TILE_CLASSES[role.tile]
                }`}
              >
                <role.icon className="size-5" />
              </span>
              <div>
                <p
                  className={`text-xs font-semibold tracking-wide uppercase ${
                    TILE_TEXT_CLASSES[role.tile]
                  }`}
                >
                  {role.category}
                </p>
                <h3 className="mt-1 text-lg font-bold text-ink">{role.company}</h3>
              </div>
            </div>

            <p className="mt-2 font-medium text-accent">{role.title}</p>
            <p className="mt-1 flex items-center gap-1.5 text-sm text-muted">
              <CalendarIcon className="size-3.5" />
              {role.period}
            </p>

            <hr className="mt-4 border-line" />
            <p className="mt-4 text-sm text-muted">{role.description}</p>
            <hr className="mt-4 border-line" />

            <p className={`mt-4 text-sm font-medium ${TILE_TEXT_CLASSES[role.tile]}`}>
              {role.tags.join(" • ")}
            </p>
          </div>
        ))}
      </div>

      <div className="card mt-5 p-6 sm:p-8">
        <div className="flex flex-wrap items-start gap-4 sm:flex-nowrap">
          <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-tile-blue text-white">
            <BookOpenIcon className="size-5" />
          </span>
          <div>
            <p className="eyebrow">The Foundation That Stayed With Me</p>
            <h3 className="mt-1 text-xl font-bold text-ink">{FOUNDATION_REFLECTION.heading}</h3>
            <div className="mt-3 space-y-3">
              {FOUNDATION_REFLECTION.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-sm text-muted">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      {resume ? (
        <a
          href={resume}
          download
          className="mt-10 flex flex-wrap items-center justify-center gap-4 rounded-full border border-line px-6 py-4 text-center transition-colors hover:border-ink sm:justify-between"
        >
          <span className="flex items-center gap-3">
            <DocumentIcon className="size-5 text-accent" />
            <span className="font-semibold text-ink">View Full Resume (PDF)</span>
          </span>
          <span className="flex items-center gap-2 text-sm text-muted">
            For a complete overview of experience, skills, and education.
            <ArrowRight />
          </span>
        </a>
      ) : null}
    </PageShell>
  );
}
