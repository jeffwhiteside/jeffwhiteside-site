"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { buttonClassName, type Variant } from "@/components/ui/button";
import { ANALYTICS_ENABLED, posthog } from "@/lib/posthog";

interface TrackedLinkProps {
  href: string;
  /** PostHog event name captured on click. */
  event: string;
  /** Extra properties attached to the event, e.g. which item was clicked. */
  properties?: Record<string, string>;
  variant?: Variant;
  /** Set for links leaving the site; adds target and rel. */
  external?: boolean;
  /** Forces a file download rather than a navigation. Implies a plain anchor, not next/link. */
  download?: boolean;
  children: ReactNode;
}

/**
 * Same visual treatment as ButtonLink, plus a PostHog click event. Kept as its own small
 * client component rather than adding tracking to ButtonLink itself, so the many untracked
 * uses of ButtonLink across the site stay server-rendered with no client JS.
 *
 * The click and the navigation both happen — this doesn't block or delay following the link,
 * and neither `external` (new tab) nor `download` (file save) unloads the current page, so
 * there's no risk of the capture call being cut off mid-flight the way there can be on a
 * same-tab navigation.
 */
export function TrackedLink({
  href,
  event,
  properties,
  variant = "primary",
  external = false,
  download = false,
  children,
}: TrackedLinkProps) {
  const className = buttonClassName(variant);

  function handleClick() {
    if (ANALYTICS_ENABLED) {
      posthog.capture(event, properties);
    }
  }

  if (download) {
    return (
      <a href={href} download onClick={handleClick} className={className}>
        {children}
      </a>
    );
  }

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className={className}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} onClick={handleClick} className={className}>
      {children}
    </Link>
  );
}
