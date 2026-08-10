"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";
import { ANALYTICS_ENABLED, posthog } from "@/lib/posthog";

function PageviewTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!ANALYTICS_ENABLED) {
      return;
    }

    const query = searchParams.toString();
    posthog.capture("$pageview", {
      $current_url: query ? `${pathname}?${query}` : pathname,
    });
  }, [pathname, searchParams]);

  return null;
}

/**
 * Captures a $pageview on every App Router navigation. Wrapped in Suspense because
 * `useSearchParams` requires a boundary here — without it, Next.js de-opts every page that
 * renders this into fully client-side rendering.
 */
export function PostHogPageview() {
  return (
    <Suspense fallback={null}>
      <PageviewTracker />
    </Suspense>
  );
}
