"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { CloseIcon, MenuIcon } from "@/components/ui/icons";
import { NAV_SECTIONS } from "@/content/sections";

/**
 * The mobile nav: a toggle button plus a dropdown panel anchored to the header, shown only
 * below `lg` (where the header's own `<nav>` is hidden). A `<button>`, not a link — it toggles
 * local UI state rather than navigating, matching how the rest of the site reserves `<a>`/
 * `next/link` for actual navigation (see ButtonLink's own comment on the same distinction).
 *
 * Closes on Escape and on selecting a link; does not lock body scroll, since the panel is a
 * compact dropdown rather than a full-screen overlay.
 */
export function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-nav-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((current) => !current)}
        className="flex size-10 items-center justify-center rounded-lg border border-line text-ink transition-colors hover:border-ink"
      >
        {open ? <CloseIcon /> : <MenuIcon />}
      </button>

      {open ? (
        <nav
          id="mobile-nav-menu"
          aria-label="Sections"
          className="absolute inset-x-0 top-full border-b border-line bg-canvas px-[clamp(1.25rem,5vw,2.5rem)] py-4"
        >
          <ul className="space-y-1">
            {NAV_SECTIONS.map((section) => (
              <li key={section.id}>
                <Link
                  href={section.navHref ?? section.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2.5 text-sm text-muted transition-colors hover:bg-elevated hover:text-ink"
                >
                  {section.navLabel}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </div>
  );
}
