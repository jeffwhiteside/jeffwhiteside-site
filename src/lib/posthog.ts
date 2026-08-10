import posthog from "posthog-js";

/**
 * PostHog project API key. Safe to expose client-side — it can only write events, not read
 * project data. Kept as a plain constant rather than an environment variable since this repo
 * doesn't otherwise use env vars, matching how other public identifiers (EMAIL, LINKEDIN_URL)
 * are defined in content/contact.ts.
 */
const POSTHOG_KEY = "phc_u3mEhKqdbmTuevj7TFgkQHLbytAfz7NcQijRs9X5d3YK";
const POSTHOG_HOST = "https://us.i.posthog.com";

/**
 * Off outside production, so a developer's own local/preview browsing never pollutes real
 * visitor data.
 */
export const ANALYTICS_ENABLED = process.env.NODE_ENV === "production";

let initialized = false;

/**
 * Initializes PostHog once, client-side. Deliberately minimal: autocapture and session
 * recording are both off, and persistence is localStorage only — not cookies — so no
 * cookie-consent banner is required. Pageviews are captured manually (see
 * components/analytics/posthog-pageview.tsx) rather than relying on posthog-js's own
 * SPA-navigation detection, which the App Router's client-side routing doesn't reliably
 * trigger.
 */
export function initAnalytics() {
  if (!ANALYTICS_ENABLED || initialized) {
    return;
  }

  posthog.init(POSTHOG_KEY, {
    api_host: POSTHOG_HOST,
    autocapture: false,
    capture_pageview: false,
    disable_session_recording: true,
    persistence: "localStorage",
  });
  initialized = true;
}

export { posthog };
