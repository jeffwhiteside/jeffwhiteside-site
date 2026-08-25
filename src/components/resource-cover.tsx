import Image from "next/image";
import { BookOpenIcon } from "@/components/ui/icons";

interface ResourceCoverProps {
  /** Result of resolveResourceCover (src/lib/resource-covers.ts), or null for the drawn
   * placeholder. Takes the resolved value rather than the resource itself so this stays safe
   * to render from a Client Component (see ResourceLibrary) — resolving touches the
   * filesystem and must happen server-side. */
  cover: string | null;
  /** Larger size for the resource detail page; the compact 55x70 default matches the
   * Leadership page's idea-source covers, for one consistent "book thumbnail" size sitewide. */
  size?: "sm" | "lg";
}

/** A resource's cover if one was resolved, else a plain book-icon placeholder — the same
 * real-asset-first pattern as the portrait, project icons, and Leadership page's book covers. */
export function ResourceCover({ cover, size = "sm" }: ResourceCoverProps) {
  const dimensions = size === "lg" ? { width: 72, height: 92 } : { width: 55, height: 70 };
  const boxClassName =
    size === "lg" ? "h-[92px] w-[72px] shrink-0" : "h-[70px] w-[55px] shrink-0";

  if (cover) {
    return (
      <Image
        src={cover}
        alt=""
        width={dimensions.width}
        height={dimensions.height}
        className={`${boxClassName} rounded border border-line object-cover`}
      />
    );
  }

  return (
    <span
      className={`${boxClassName} flex items-center justify-center rounded border border-line text-muted`}
    >
      <BookOpenIcon className="size-5" />
    </span>
  );
}
