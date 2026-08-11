import Link from "next/link";
import { MobileNav } from "@/components/mobile-nav";
import { Monogram } from "@/components/ui/monogram";
import { NAV_SECTIONS } from "@/content/sections";

/**
 * Sticky site header: monogram, wordmark, and route navigation.
 *
 * The branding mockup included a light/dark toggle. Theme switching is an explicitly deferred
 * feature, and shipping a control that does nothing is worse than omitting it, so the toggle
 * is not implemented. The site is dark by design rather than by preference.
 *
 * There is no client-side active-page indicator: it would require a `"use client"` boundary
 * for a cue each page's own <h1> already provides.
 */
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-canvas/95 backdrop-blur">
      <div className="page-container relative flex h-16 items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3">
          <Monogram />
          <span className="text-sm font-bold tracking-[0.12em] uppercase">
            Jeff <span className="text-accent">Whiteside</span>
          </span>
        </Link>

        <nav aria-label="Sections" className="hidden lg:block">
          <ul className="flex items-center gap-8 text-sm">
            {NAV_SECTIONS.map((section) => (
              <li key={section.id}>
                <Link
                  href={section.navHref ?? section.href}
                  className="text-muted transition-colors hover:text-ink"
                >
                  {section.navLabel}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <MobileNav />
      </div>
    </header>
  );
}
