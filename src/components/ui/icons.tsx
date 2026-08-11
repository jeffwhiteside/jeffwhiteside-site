import type { ComponentType } from "react";

/*
 * The site's complete icon set: marks for the operating principles, the leadership detail
 * page, the personal projects, published writing, the mobile nav toggle, and the three
 * contact marks. All are inline stroke SVGs inheriting currentColor — no icon library, no
 * icon font, no network request. Each is aria-hidden and always accompanied by a text label,
 * so nothing depends on an icon being understood.
 */

interface IconProps {
  className?: string;
}

export type Icon = ComponentType<IconProps>;

const BASE = "size-5 shrink-0";

function svgProps(className?: string) {
  return {
    "aria-hidden": true,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: className ? `${BASE} ${className}` : BASE,
  };
}

/** Develop leaders. */
export function PeopleIcon({ className }: IconProps) {
  return (
    <svg {...svgProps(className)}>
      <path d="M15.5 20v-1.5a3.5 3.5 0 0 0-3.5-3.5H6a3.5 3.5 0 0 0-3.5 3.5V20" />
      <circle cx="9" cy="7.5" r="3.5" />
      <path d="M21.5 20v-1.5a3.5 3.5 0 0 0-2.6-3.4M16 4.2a3.5 3.5 0 0 1 0 6.6" />
    </svg>
  );
}

/** Modernize platforms. */
export function LayersIcon({ className }: IconProps) {
  return (
    <svg {...svgProps(className)}>
      <path d="M12 3 3 7.5l9 4.5 9-4.5L12 3Z" />
      <path d="M3 12.5 12 17l9-4.5M3 17 12 21.5 21 17" />
    </svg>
  );
}

/** Build reliable systems. */
export function ShieldCheckIcon({ className }: IconProps) {
  return (
    <svg {...svgProps(className)}>
      <path d="M12 2.5 4.5 5.5v6c0 4.5 3.1 8.4 7.5 9.9 4.4-1.5 7.5-5.4 7.5-9.9v-6L12 2.5Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

/** Apply AI practically. */
export function SparkIcon({ className }: IconProps) {
  return (
    <svg {...svgProps(className)}>
      <path d="M12 3l1.8 4.7L18.5 9.5l-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8L12 3Z" />
      <path d="M18 15.5l.9 2.3 2.3.9-2.3.9-.9 2.3-.9-2.3-2.3-.9 2.3-.9.9-2.3Z" />
    </svg>
  );
}

/** Set direction. */
export function CompassIcon({ className }: IconProps) {
  return (
    <svg {...svgProps(className)}>
      <circle cx="12" cy="12" r="9" />
      <path d="m14.8 9.2-1.9 4.7-4.7 1.9 1.9-4.7 4.7-1.9Z" />
    </svg>
  );
}

/** Create clarity. */
export function ChecklistIcon({ className }: IconProps) {
  return (
    <svg {...svgProps(className)}>
      <rect x="4.5" y="3" width="15" height="18" rx="2" />
      <path d="m8.5 9 1.5 1.5L12.5 8M8.5 15h7M8.5 15l1.5 1.5 2.5-2.5" />
    </svg>
  );
}

/** Think in systems. */
export function GearsIcon({ className }: IconProps) {
  return (
    <svg {...svgProps(className)}>
      <circle cx="9" cy="9" r="3" />
      <path d="M9 3.5v1.4M9 12.6V14M14.4 9h-1.4M3.6 9H2.5M13 5l-1 1M6 12l-1 1M13 13l-1-1M6 6 5 5" />
      <circle cx="17" cy="17" r="2.2" />
      <path d="M17 13.3v1M17 18.7v1M20.7 17h-1M14.3 17h-1M19.3 14.7l-.7.7M14.7 19.3l.7-.7M19.3 19.3l-.7-.7M14.7 14.7l.7.7" />
    </svg>
  );
}

/** The result of leading well. */
export function TargetIcon({ className }: IconProps) {
  return (
    <svg {...svgProps(className)}>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="0.6" fill="currentColor" />
    </svg>
  );
}

/** Outcomes as a summit reached. */
export function SummitIcon({ className }: IconProps) {
  return (
    <svg {...svgProps(className)}>
      <path d="m3 18 6.5-10L13 13l2-2.5L21 18H3Z" />
      <path d="M13 5.5h5.5M15.2 3.3 18 5.5l-2.8 2.2" />
    </svg>
  );
}

/** Small inline check, used for compact list items. */
export function CheckIcon({ className }: IconProps) {
  return (
    <svg {...svgProps(className)}>
      <path d="m4 12 5.5 5.5L20 6" />
    </svg>
  );
}

/** A content hub gathering scattered sources into one feed. */
export function BroadcastIcon({ className }: IconProps) {
  return (
    <svg {...svgProps(className)}>
      <circle cx="6" cy="18" r="1.4" fill="currentColor" stroke="none" />
      <path d="M5 12a7 7 0 0 1 7 7M5 6.5a12.5 12.5 0 0 1 12.5 12.5" />
    </svg>
  );
}

/** Time tracked and spent well. */
export function ClockIcon({ className }: IconProps) {
  return (
    <svg {...svgProps(className)}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5.5l3.5 2" />
    </svg>
  );
}

/** A site, live on the web. */
export function GlobeIcon({ className }: IconProps) {
  return (
    <svg {...svgProps(className)}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.6 2.5 4 5.7 4 9s-1.4 6.5-4 9c-2.6-2.5-4-5.7-4-9s1.4-6.5 4-9Z" />
    </svg>
  );
}

/** A publication, at a glance. */
export function DocumentIcon({ className }: IconProps) {
  return (
    <svg {...svgProps(className)}>
      <path d="M7 3.5h6.5L18 8v12a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4.5a1 1 0 0 1 1-1Z" />
      <path d="M13.5 3.5V8H18M9 12.5h6M9 16h6" />
    </svg>
  );
}

/** Read a publication in full. */
export function BookOpenIcon({ className }: IconProps) {
  return (
    <svg {...svgProps(className)}>
      <path d="M12 6.2c-1.8-1.2-4-1.9-6-1.9A1.5 1.5 0 0 0 4.5 5.8v11.4c2.2 0 4.6.6 6.5 1.8 1.9-1.2 4.3-1.8 6.5-1.8V5.8A1.5 1.5 0 0 0 16 4.3c-2 0-4.2.7-6 1.9Z" />
      <path d="M12 6.2V19" />
    </svg>
  );
}

/** Save a file locally. */
export function DownloadIcon({ className }: IconProps) {
  return (
    <svg {...svgProps(className)}>
      <path d="M12 3.5v11M7.5 10l4.5 4.5 4.5-4.5" />
      <path d="M4.5 17.5v2a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1v-2" />
    </svg>
  );
}

/** Opens the mobile nav menu. */
export function MenuIcon({ className }: IconProps) {
  return (
    <svg {...svgProps(className)}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

/** Closes the mobile nav menu. */
export function CloseIcon({ className }: IconProps) {
  return (
    <svg {...svgProps(className)}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

/** How a principle gets put into practice. */
export function WrenchIcon({ className }: IconProps) {
  return (
    <svg {...svgProps(className)}>
      <path d="M14.7 6.3a4 4 0 0 0-5.4 4.6l-6 6a1.8 1.8 0 0 0 2.5 2.5l6-6a4 4 0 0 0 4.6-5.4l-2.6 2.6-2-2 2.6-2.6Z" />
    </svg>
  );
}

/** What experience taught, in hindsight. */
export function LightbulbIcon({ className }: IconProps) {
  return (
    <svg {...svgProps(className)}>
      <path d="M9 18h6M10 21h4" />
      <path d="M12 3a6 6 0 0 0-3.5 10.9c.6.45.9 1.05.9 1.6H14.6c0-.55.3-1.15.9-1.6A6 6 0 0 0 12 3Z" />
    </svg>
  );
}

export function LinkedInIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className ? `${BASE} ${className}` : BASE}
    >
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.5h4v11H3v-11ZM9.5 9.5h3.8v1.5h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.76v5.69h-4v-5.05c0-1.2-.02-2.75-1.75-2.75-1.75 0-2.02 1.3-2.02 2.66v5.14h-4v-11Z" />
    </svg>
  );
}

export function GitHubIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className ? `${BASE} ${className}` : BASE}
    >
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03a9.5 9.5 0 0 1 5 0c1.91-1.3 2.75-1.03 2.75-1.03.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
    </svg>
  );
}

export function MailIcon({ className }: IconProps) {
  return (
    <svg {...svgProps(className)}>
      <rect x="2.5" y="5" width="19" height="14" rx="2" />
      <path d="m3 6.5 9 6 9-6" />
    </svg>
  );
}
