"use client";

import { useEffect, useState } from "react";
import { TILE_CLASSES, TILE_TEXT_CLASSES, type TileColor } from "@/content/leadership";

interface PrincipleNavItem {
  readonly id: string;
  readonly number: string;
  readonly title: string;
  readonly tile: TileColor;
}

interface PrincipleNavProps {
  principles: readonly PrincipleNavItem[];
}

/**
 * The desktop "Principles" sidebar, with the currently-in-view principle highlighted as the
 * reader scrolls. This is the one part of the leadership page that needs client JS — everything
 * else (the links themselves, the mobile jump-to-principle control) works without it.
 *
 * The highlight is a colour + weight change only, no motion or layout shift, so there's
 * nothing here that prefers-reduced-motion would need to suppress.
 */
export function PrincipleNav({ principles }: PrincipleNavProps) {
  const [activeId, setActiveId] = useState<string>(principles[0]?.id ?? "");

  useEffect(() => {
    const sections = principles
      .map((principle) => document.getElementById(principle.id))
      .filter((element): element is HTMLElement => element !== null);

    if (sections.length === 0) {
      return;
    }

    // The "active" zone is the top of the viewport, below the sticky header — a section only
    // counts once it's reached that band, and stops counting once it's three-quarters scrolled
    // past, so whichever heading is nearest the top wins rather than whatever merely overlaps
    // the screen.
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length === 0) {
          return;
        }
        const topMost = visible.reduce((closest, entry) =>
          entry.boundingClientRect.top < closest.boundingClientRect.top ? entry : closest,
        );
        setActiveId(topMost.target.id);
      },
      { rootMargin: "-96px 0px -70% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [principles]);

  return (
    <ol className="mt-4 space-y-1">
      {principles.map((principle) => {
        const isActive = principle.id === activeId;

        return (
          <li key={principle.id}>
            <a
              href={`#${principle.id}`}
              aria-current={isActive ? "location" : undefined}
              className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors hover:bg-accent/5 ${
                isActive
                  ? `font-semibold ${TILE_TEXT_CLASSES[principle.tile]}`
                  : "text-band-muted hover:text-band-ink"
              }`}
            >
              <span
                className={`flex size-7 shrink-0 items-center justify-center rounded-md text-sm font-semibold text-white ${
                  TILE_CLASSES[principle.tile]
                }`}
              >
                {principle.number}
              </span>
              {principle.title}
            </a>
          </li>
        );
      })}
    </ol>
  );
}
