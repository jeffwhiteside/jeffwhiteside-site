import {
  BookOpenIcon,
  ChartUpIcon,
  CodeIcon,
  DocumentIcon,
  GearsIcon,
  HeartIcon,
  HistoryIcon,
  LightbulbIcon,
  PeopleIcon,
  SparkIcon,
} from "@/components/ui/icons";

export type ResourceIconName =
  | "lightbulb"
  | "heart"
  | "people"
  | "gears"
  | "code"
  | "chart-up"
  | "document"
  | "book-open"
  | "history"
  | "spark";

const ICONS_BY_NAME: Record<ResourceIconName, typeof LightbulbIcon> = {
  lightbulb: LightbulbIcon,
  heart: HeartIcon,
  people: PeopleIcon,
  gears: GearsIcon,
  code: CodeIcon,
  "chart-up": ChartUpIcon,
  document: DocumentIcon,
  "book-open": BookOpenIcon,
  history: HistoryIcon,
  spark: SparkIcon,
};

/**
 * Resolves a group's or category's icon by name rather than storing the icon component
 * directly on the data. RESOURCE_GROUPS crosses from the server page into the client
 * ResourceLibrary component as a prop, and React component references can't be serialized
 * across that boundary — a plain string name can. This file is imported independently by
 * both sides, so the lookup itself never has to cross the boundary either.
 */
export function ResourceIcon({
  name,
  className,
}: {
  name: ResourceIconName;
  className?: string;
}) {
  const Icon = ICONS_BY_NAME[name];
  return <Icon className={className} />;
}
