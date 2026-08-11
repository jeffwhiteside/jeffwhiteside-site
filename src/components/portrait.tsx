import Image from "next/image";
import { resolvePublicImage } from "@/lib/assets";

const WIDTH = 640;
const HEIGHT = 640;

/**
 * The hero portrait.
 *
 * Resolves, in order: the real photograph, then the gitignored local stock placeholder, then
 * a drawn outline if neither exists. All render in the same box, so swapping in the real
 * photograph causes no layout shift.
 *
 * The portrait carries its own dark blue background. Rather than framing it, the page canvas
 * is set to the mean of the photograph's corner colours (see globals.css) and all four edges
 * are faded with a mask, so the photograph dissolves into the page instead of sitting on it
 * as a rectangle. No border and no glow: both would re-draw the edge that the colour match
 * exists to remove.
 *
 * A single bottom-only fade isn't enough here: the photo's background glow reaches close to
 * the left/right/top edges too (it isn't flat like a studio backdrop), so those edges stayed
 * a hard rectangle even after the canvas colour matched the literal corner pixels. The two
 * gradients below fade all four sides independently and combine with mask-composite, kept
 * shallow on top/left/right so the subject (head/shoulders) is never touched, and deep on the
 * bottom to match the original design. Re-tune the stops if the portrait changes again.
 *
 * Below `sm` the box is a fixed ~240px tall rather than the natural square, so the hero's
 * headline reaches the first screen instead of being pushed down by a full-height portrait.
 * `object-cover` + `object-top` crop the same square image down to that wide strip — the
 * fade mask is percentage-based, so it re-fits the new shape with no separate tuning needed.
 */
const FADE_MASK_H = "linear-gradient(to right, transparent 0%, #000 16%, #000 84%, transparent 100%)";
const FADE_MASK_V = "linear-gradient(to bottom, transparent 0%, #000 10%, #000 76%, transparent 100%)";
export function Portrait() {
  const src = resolvePublicImage([
    "/jeff-whiteside.jpg",
    "/jeff-whiteside.png",
    "/placeholder/portrait.jpg",
  ]);

  const isPlaceholder = src?.startsWith("/placeholder/") ?? false;

  return (
    <figure className="relative mx-auto w-full max-w-md">
      {src ? (
        <Image
          src={src}
          alt={isPlaceholder ? "" : "Jeff Whiteside"}
          width={WIDTH}
          height={HEIGHT}
          priority
          sizes="(min-width: 1024px) 28rem, 100vw"
          className="h-60 w-full object-cover object-top sm:h-auto sm:aspect-square"
          style={{
            maskImage: `${FADE_MASK_H}, ${FADE_MASK_V}`,
            maskComposite: "intersect",
            WebkitMaskImage: `${FADE_MASK_H}, ${FADE_MASK_V}`,
            WebkitMaskComposite: "source-in",
          }}
        />
      ) : (
        <div
          aria-hidden="true"
          className="flex h-60 w-full items-end rounded-xl border border-line bg-elevated p-4 sm:aspect-square sm:h-auto"
        >
          <span className="text-xs tracking-widest text-muted uppercase">Portrait</span>
        </div>
      )}

      {isPlaceholder ? (
        <figcaption className="relative mt-2 text-xs tracking-widest text-muted uppercase">
          Placeholder image — not Jeff
        </figcaption>
      ) : null}
    </figure>
  );
}
