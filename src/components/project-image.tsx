import Image from "next/image";
import { resolvePublicImage } from "@/lib/assets";

const WIDTH = 640;
const HEIGHT = 400;

interface ProjectImageProps {
  /** Project slug, used to locate `/projects/<slug>.jpg`. */
  slug: string;
  /** Describes what the screenshot shows. Required — a screenshot is not decorative. */
  alt: string;
}

/**
 * Screenshot for a project entry.
 *
 * Resolves the real screenshot first, then the gitignored local stock placeholder, then a
 * drawn outline. All render at 16:10 and the same width, so a real screenshot drops in
 * without shifting the layout.
 */
export function ProjectImage({ slug, alt }: ProjectImageProps) {
  const src = resolvePublicImage([
    `/projects/${slug}.jpg`,
    `/placeholder/${slug}.jpg`,
  ]);

  if (!src) {
    return (
      <div
        aria-hidden="true"
        className="relative aspect-16/10 w-full rounded-[2px] border border-line bg-surface"
      >
        <span className="margin-note absolute bottom-3 left-3">Screenshot</span>
      </div>
    );
  }

  const isPlaceholder = src.startsWith("/placeholder/");

  return (
    <Image
      src={src}
      alt={isPlaceholder ? "" : alt}
      width={WIDTH}
      height={HEIGHT}
      className="aspect-16/10 w-full rounded-[2px] border border-line object-cover"
    />
  );
}
