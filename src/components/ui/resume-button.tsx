import { resolvePublicImage } from "@/lib/assets";

export const RESUME_PATH = "/jeff-whiteside-resume.pdf";

interface ResumeButtonProps {
  /** Appended after the base classes — for layout concerns like a stacked mobile `w-full`. */
  className?: string;
}

/**
 * Download Résumé action.
 *
 * Renders nothing unless the PDF actually exists in `public/`, so the site never offers a
 * download that 404s. Drop the file at `public/jeff-whiteside-resume.pdf` and the button
 * appears on the next build.
 *
 * The résumé the owner supplied carries a phone number, which the site deliberately does not
 * publish. A public download would publish it, so the file placed here must be a version with
 * the phone number removed. Tracked in PROJECT_NOTES.md.
 */
export function ResumeButton({ className }: ResumeButtonProps = {}) {
  const resume = resolvePublicImage([RESUME_PATH]);

  if (!resume) {
    return null;
  }

  const base =
    "inline-flex items-center gap-2 rounded-md border border-line px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-ink";

  return (
    <a href={resume} download className={className ? `${base} ${className}` : base}>
      Download Résumé
      <svg
        aria-hidden="true"
        viewBox="0 0 16 16"
        className="size-3.5 shrink-0"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M8 2.5v8M4.5 7.5 8 11l3.5-3.5M2.5 13.5h11" />
      </svg>
    </a>
  );
}
