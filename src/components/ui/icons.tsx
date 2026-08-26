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

/** AI-driven productivity. */
export function RobotIcon({ className }: IconProps) {
  return (
    <svg {...svgProps(className)}>
      <rect x="5" y="8.5" width="14" height="10.5" rx="2.5" />
      <path d="M12 8.5V5.5M3 11.5v4M21 11.5v4" />
      <circle cx="12" cy="4.3" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="9" cy="13.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="15" cy="13.5" r="1" fill="currentColor" stroke="none" />
      <path d="M9 17h6" />
    </svg>
  );
}

/** Reliability, measured. */
export function GaugeIcon({ className }: IconProps) {
  return (
    <svg {...svgProps(className)}>
      <path d="M4.5 16a7.5 7.5 0 1 1 15 0" />
      <path d="M12 16 15.5 11" />
      <circle cx="12" cy="16" r="1.1" fill="currentColor" stroke="none" />
      <path d="M4.5 16H3M20 16h-1.5" />
    </svg>
  );
}

/** Migrated to the cloud. */
export function CloudIcon({ className }: IconProps) {
  return (
    <svg {...svgProps(className)}>
      <path d="M7.5 18a4 4 0 0 1-.5-7.97A5 5 0 0 1 16.6 8.2 4.5 4.5 0 0 1 16.5 18h-9Z" />
    </svg>
  );
}

/** Growth, measured over time. */
export function ChartUpIcon({ className }: IconProps) {
  return (
    <svg {...svgProps(className)}>
      <path d="M4.5 20V14M11 20V9.5M17.5 20V5" />
      <path d="M3 20h18" />
    </svg>
  );
}

/** Faster release cycles. */
export function RefreshIcon({ className }: IconProps) {
  return (
    <svg {...svgProps(className)}>
      <path d="M5 11a7 7 0 0 1 12-4.9L19 8" />
      <path d="M19 4v4h-4" />
      <path d="M19 13a7 7 0 0 1-12 4.9L5 16" />
      <path d="M5 20v-4h4" />
    </svg>
  );
}

/** Career growth. */
export function TrendingUpIcon({ className }: IconProps) {
  return (
    <svg {...svgProps(className)}>
      <path d="M3.5 16.5 10 10l4 4 6.5-6.5" />
      <path d="M15 7.5h5.5V13" />
    </svg>
  );
}

/** An institution: enterprise software, a bank, a foundation. */
export function InstitutionIcon({ className }: IconProps) {
  return (
    <svg {...svgProps(className)}>
      <path d="M3 9.5 12 4l9 5.5" />
      <path d="M4.5 9.5v10M19.5 9.5v10" />
      <path d="M8 9.5v10M12 9.5v10M16 9.5v10" />
      <path d="M3 21.5h18" />
    </svg>
  );
}

/** Testing and assessment software. */
export function MonitorIcon({ className }: IconProps) {
  return (
    <svg {...svgProps(className)}>
      <rect x="3" y="4.5" width="18" height="12" rx="1.5" />
      <path d="M8.5 20.5h7M12 16.5v4" />
    </svg>
  );
}

/** Healthcare technology. */
export function HeartPulseIcon({ className }: IconProps) {
  return (
    <svg {...svgProps(className)}>
      <path d="M12 20s-7.5-4.6-9.7-9.3C.9 7.4 2.6 4 6 4c2 0 3.5 1.2 4.2 2.4L12 8.8l1.8-2.4C14.5 5.2 16 4 18 4c3.4 0 5.1 3.4 3.7 6.7C19.5 15.4 12 20 12 20Z" />
      <path d="M4.5 11h3l1.5-3 2 5 1.5-3h4" />
    </svg>
  );
}

/** Teaching. */
export function GraduationCapIcon({ className }: IconProps) {
  return (
    <svg {...svgProps(className)}>
      <path d="M12 6 2.5 10.5 12 15l9.5-4.5L12 6Z" />
      <path d="M6.5 12.7v4c0 1 2.5 2.3 5.5 2.3s5.5-1.3 5.5-2.3v-4" />
      <path d="M21.5 10.5v5" />
    </svg>
  );
}

/** A date range. */
export function CalendarIcon({ className }: IconProps) {
  return (
    <svg {...svgProps(className)}>
      <rect x="3.5" y="5" width="17" height="15" rx="1.5" />
      <path d="M3.5 9.5h17M8 3v3.5M16 3v3.5" />
    </svg>
  );
}

/** A category or topic. */
export function TagIcon({ className }: IconProps) {
  return (
    <svg {...svgProps(className)}>
      <path d="M12.3 3.5H6a1 1 0 0 0-1 1v6.3c0 .27.1.52.3.7l8.2 8.2a1 1 0 0 0 1.4 0l6-6a1 1 0 0 0 0-1.4L13 3.8a1 1 0 0 0-.7-.3Z" />
      <circle cx="9" cy="8" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

/** A current credential. */
export function AwardIcon({ className }: IconProps) {
  return (
    <svg {...svgProps(className)}>
      <circle cx="12" cy="8" r="5" />
      <path d="M9 12.5 7 21l5-3 5 3-2-8.5" />
    </svg>
  );
}

/** A lapsed credential, kept for the record. */
export function HistoryIcon({ className }: IconProps) {
  return (
    <svg {...svgProps(className)}>
      <path d="M3.5 9a8.5 8.5 0 1 1 1.1 7" />
      <path d="M3.5 4v5h5" />
      <path d="M12 7.5v5l3.5 2" />
    </svg>
  );
}

/** Software and engineering craft. */
export function CodeIcon({ className }: IconProps) {
  return (
    <svg {...svgProps(className)}>
      <path d="m9 7-5 5 5 5M15 7l5 5-5 5" />
    </svg>
  );
}

/** Reading for its own sake, not for work. */
export function HeartIcon({ className }: IconProps) {
  return (
    <svg {...svgProps(className)}>
      <path d="M12 20s-7.5-4.6-9.7-9.3C.9 7.4 2.6 4 6 4c2 0 3.5 1.2 4.2 2.4L12 8.8l1.8-2.4C14.5 5.2 16 4 18 4c3.4 0 5.1 3.4 3.7 6.7C19.5 15.4 12 20 12 20Z" />
    </svg>
  );
}

/** Search the Resources page. */
export function SearchIcon({ className }: IconProps) {
  return (
    <svg {...svgProps(className)}>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="m20 20-4.8-4.8" />
    </svg>
  );
}

/** Opens an external link. */
export function LaunchIcon({ className }: IconProps) {
  return (
    <svg {...svgProps(className)}>
      <path d="M18 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6" />
      <path d="M15 3h6v6M10 14 20.5 3.5" />
    </svg>
  );
}

/** Expand/collapse a disclosure. Rotate 180deg for the collapsed/expanded state. */
export function ChevronDownIcon({ className }: IconProps) {
  return (
    <svg {...svgProps(className)}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

/** A footnote worth reading. */
export function InfoIcon({ className }: IconProps) {
  return (
    <svg {...svgProps(className)}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="8" r="0.75" fill="currentColor" stroke="none" />
      <path d="M12 11v6" />
    </svg>
  );
}

/** A mobile-first product. */
export function PhoneIcon({ className }: IconProps) {
  return (
    <svg {...svgProps(className)}>
      <rect x="7" y="2.5" width="10" height="19" rx="2" />
      <path d="M11 18.5h2" />
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
