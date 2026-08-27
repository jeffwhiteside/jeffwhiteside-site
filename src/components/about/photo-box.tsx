import Image from "next/image";
import type { Icon } from "@/components/ui/icons";
import { resolvePublicImage } from "@/lib/assets";

interface PhotoBoxProps {
  readonly candidates: readonly string[];
  readonly alt: string;
  /** Drawn in place of a photo that hasn't been added yet. */
  readonly icon?: Icon;
  /** Sets the box's size/shape/position — expects `relative` plus an explicit aspect ratio
   * or height, since the real photo fills the box with `fill`. */
  readonly className: string;
}

/**
 * A photo slot for the About page: the real photograph if one exists at `candidates`, else a
 * soft bordered placeholder with a drawn icon — same real-asset-first pattern as the portrait,
 * project screenshots, and every book cover on the Resources page. Server-only (resolving a
 * cover touches the filesystem), so this can't be used from a Client Component.
 */
export function PhotoBox({ candidates, alt, icon: FallbackIcon, className }: PhotoBoxProps) {
  const src = resolvePublicImage(candidates);

  if (src) {
    return (
      <div className={`overflow-hidden rounded-xl border border-line ${className}`}>
        <Image src={src} alt={alt} fill className="object-cover" />
      </div>
    );
  }

  return (
    <div
      className={`flex items-center justify-center rounded-xl border border-line bg-elevated text-muted ${className}`}
    >
      {FallbackIcon ? <FallbackIcon className="size-6" /> : null}
    </div>
  );
}
