import Image from "next/image";
import type { Icon } from "@/components/ui/icons";
import { TILE_CLASSES, type TileColor } from "@/content/leadership";
import { resolvePublicImage } from "@/lib/assets";

const SIZE = 36;

interface ProjectIconProps {
  slug: string;
  icon: Icon;
  tile: TileColor;
}

/**
 * Project icon: the real app icon if one exists at `/projects/<slug>-icon.png`, otherwise the
 * drawn line icon on a coloured tile. Same real-asset-first, drawn-fallback pattern as the
 * portrait and project screenshots — a missing icon degrades instead of breaking.
 */
export function ProjectIcon({ slug, icon: FallbackIcon, tile }: ProjectIconProps) {
  const src = resolvePublicImage([`/projects/${slug}-icon.png`, `/projects/${slug}-icon.jpg`]);

  if (src) {
    return (
      <Image src={src} alt="" width={SIZE} height={SIZE} className="size-9 shrink-0 rounded-lg" />
    );
  }

  return (
    <span
      className={`flex size-9 shrink-0 items-center justify-center rounded-lg text-white ${
        TILE_CLASSES[tile]
      }`}
    >
      <FallbackIcon />
    </span>
  );
}
