import Image from "next/image";
import { resolvePublicImage } from "@/lib/assets";

const WIDTH = 640;
const HEIGHT = 800;

type Variant = "standalone" | "card-top" | "card-middle";

interface ProjectImageProps {
  /** Project slug, used to locate `/projects/<slug>.jpg` or `/projects/<slug>.png`. */
  slug: string;
  /** Describes what the screenshot shows. Required — a screenshot is not decorative. */
  alt: string;
  /**
   * "standalone" (default): framed with its own border and rounded on all sides, for use on
   * its own. "card-top": sits flush at the top of a `card`-styled container, which already
   * supplies the border — only the top corners round, and there's no border of its own to
   * double up with the card's. "card-middle": sandwiched between other padded content inside
   * a card (e.g. a header above it) — flush left/right, no rounding, no border, since it
   * doesn't touch any of the card's own corners.
   */
  variant?: Variant;
}

const IMAGE_CLASSES: Record<Variant, string> = {
  standalone:
    "aspect-16/20 w-full rounded-[2px] border border-line bg-elevated object-contain object-top",
  "card-top": "aspect-16/20 w-full rounded-t-xl bg-elevated object-contain object-top",
  "card-middle": "aspect-16/20 w-full bg-elevated object-contain object-top",
};

const PLACEHOLDER_CLASSES: Record<Variant, string> = {
  standalone: "relative aspect-16/20 w-full rounded-[2px] border border-line bg-elevated",
  "card-top": "relative aspect-16/20 w-full rounded-t-xl bg-elevated",
  "card-middle": "relative aspect-16/20 w-full bg-elevated",
};

/**
 * Screenshot for a project entry.
 *
 * Resolves the real screenshot first, then the gitignored local stock placeholder, then a
 * drawn outline. All render in the same 16:20 box at the same width, so every card's image is
 * the same size regardless of what any individual screenshot's own dimensions are.
 *
 * `object-contain` scales the whole screenshot to fit entirely inside that box — no cropping
 * on any edge, at the cost of letterboxing (filled by the box's own `bg-elevated`) on whichever
 * axis has slack. A crop-based fit (cover, or fit-height-crop-width) always cuts some edge for
 * a source that doesn't match the box's aspect ratio exactly; contain is the only mode that
 * guarantees nothing is ever clipped. `object-top` anchors the scaled image to the top of the
 * box rather than centering it, so any letterboxing collects at the bottom — screenshots of
 * different shapes then still start at the same height across cards, instead of each one
 * floating at whatever vertical centre its own letterboxing happens to produce.
 */
export function ProjectImage({ slug, alt, variant = "standalone" }: ProjectImageProps) {
  const src = resolvePublicImage([
    `/projects/${slug}.jpg`,
    `/projects/${slug}.png`,
    `/placeholder/${slug}.jpg`,
  ]);

  if (!src) {
    return (
      <div aria-hidden="true" className={PLACEHOLDER_CLASSES[variant]}>
        <span className="absolute bottom-3 left-3 text-xs tracking-widest text-muted uppercase">
          Screenshot
        </span>
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
      className={IMAGE_CLASSES[variant]}
    />
  );
}
