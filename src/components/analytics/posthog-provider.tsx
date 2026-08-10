"use client";

import { useEffect } from "react";
import { initAnalytics } from "@/lib/posthog";

/** Initializes PostHog once on mount. Renders nothing. */
export function PostHogProvider() {
  useEffect(() => {
    initAnalytics();
  }, []);

  return null;
}
