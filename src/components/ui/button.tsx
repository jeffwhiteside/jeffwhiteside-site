import Link from "next/link";
import type { ReactNode } from "react";

export type Variant = "primary" | "secondary" | "ghost";

interface ButtonLinkProps {
  href: string;
  variant?: Variant;
  children: ReactNode;
  /** Set for links leaving the site; adds target and rel. */
  external?: boolean;
  /** Forces a file download rather than a navigation. Implies a plain anchor, not next/link. */
  download?: boolean;
  /**
   * Appended after the variant's own classes — for layout concerns (e.g. `w-full` for a
   * stacked mobile layout) that don't conflict with any variant, not for re-theming a variant.
   * Two utility classes that both set the same CSS property (e.g. layering a background
   * override onto `primary`) have an unpredictable winner, since Tailwind's cascade order
   * doesn't follow the order classes appear in this string — add a real variant instead.
   */
  className?: string;
}

const BASE =
  "inline-flex items-center gap-2 rounded-md px-5 py-2.5 text-sm font-medium transition-colors";

const VARIANTS: Record<Variant, string> = {
  primary: "bg-accent text-white hover:bg-accent-strong",
  secondary: "border border-line text-ink hover:border-ink",
  ghost: "text-ink hover:text-accent",
};

/** The button treatment's class list, exported so other link-shaped components (e.g. a
 * tracked link that needs its own "use client" boundary) can match it without duplicating it. */
export function buttonClassName(variant: Variant = "primary") {
  return `${BASE} ${VARIANTS[variant]}`;
}

/**
 * The site's only button treatment, always rendered as a link — nothing here submits or
 * mutates, so a <button> element would misrepresent the action to assistive technology.
 *
 * Internal links use next/link for prefetching; external links get noopener noreferrer.
 */
export function ButtonLink({
  href,
  variant = "primary",
  external = false,
  download = false,
  className: extraClassName,
  children,
}: ButtonLinkProps) {
  const className = extraClassName
    ? `${buttonClassName(variant)} ${extraClassName}`
    : buttonClassName(variant);

  if (download) {
    return (
      <a href={href} download className={className}>
        {children}
      </a>
    );
  }

  if (external) {
    return (
      <a href={href} className={className} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

/** Trailing arrow used inside buttons and inline calls to action. */
export function ArrowRight() {
  return (
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
      <path d="M2.5 8h11M9.5 4l4 4-4 4" />
    </svg>
  );
}
