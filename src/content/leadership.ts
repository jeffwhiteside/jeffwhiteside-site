import { LayersIcon, PeopleIcon, ShieldCheckIcon, SparkIcon, type Icon } from "@/components/ui/icons";

/** Tile hue. The only place the palette uses more than one colour. */
export type TileColor = "blue" | "teal" | "violet" | "amber" | "green";

export interface FocusArea {
  readonly title: string;
  readonly description: string;
  readonly icon: Icon;
  readonly tile: TileColor;
}

/**
 * The four leadership focus areas.
 *
 * Statements of approach rather than claims of outcome — nothing here asserts a metric that
 * would need substantiating. Wording follows the owner's mockup.
 */
export const FOCUS_AREAS = [
  {
    title: "People First",
    description:
      "I lead with empathy, trust, and high expectations — helping teams grow, take " +
      "ownership, and do their best work.",
    icon: PeopleIcon,
    tile: "blue",
  },
  {
    title: "Purpose Driven",
    description:
      "I connect strategy to impact, aligning teams around clear outcomes that create real " +
      "value for our customers and business.",
    icon: LayersIcon,
    tile: "teal",
  },
  {
    title: "Build for Scale",
    description:
      "I design modern platforms and engineering practices that deliver reliability, " +
      "security, and performance at scale.",
    icon: ShieldCheckIcon,
    tile: "violet",
  },
  {
    title: "Relentless Improvement",
    description:
      "I foster a culture of learning, measurement, and continuous improvement to move " +
      "faster and deliver better every single day.",
    icon: SparkIcon,
    tile: "amber",
  },
] as const satisfies readonly FocusArea[];

export const TILE_CLASSES: Record<TileColor, string> = {
  blue: "bg-tile-blue",
  teal: "bg-tile-teal",
  violet: "bg-tile-violet",
  amber: "bg-tile-amber",
  green: "bg-tile-green",
};

/** Tinted border + background, for a card sitting on the light band rather than an icon tile. */
export const TILE_SOFT_CLASSES: Record<TileColor, string> = {
  blue: "border-tile-blue/25 bg-tile-blue/8",
  teal: "border-tile-teal/25 bg-tile-teal/8",
  violet: "border-tile-violet/25 bg-tile-violet/8",
  amber: "border-tile-amber/25 bg-tile-amber/8",
  green: "border-tile-green/25 bg-tile-green/8",
};
