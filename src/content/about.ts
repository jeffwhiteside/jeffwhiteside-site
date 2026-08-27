import {
  BookOpenIcon,
  ClapperboardIcon,
  GuitarIcon,
  LeafIcon,
  TheaterMasksIcon,
  VinylIcon,
  type Icon,
} from "@/components/ui/icons";

/**
 * Personal content for the About page — hero, family, hobbies, beliefs, and the closing
 * connect section. Every line here is owner-supplied (transcribed from the page mockup), not
 * invented; the photo slots use the site's usual real-asset-first pattern (src/lib/assets.ts)
 * and render a drawn placeholder until a real photo lands at one of the candidate paths.
 */

export const HERO_INTRO = [
  "Most of this site is about things I think about professionally. This page is a little more personal.",
  " ",
  "I’m a husband, dad of three, lifelong learner, and caretaker of three cats and one very sweet dog. " +
  "I like learning new things, taking on projects I’m not very good at yet, and following whatever "  +
  "happens to catch my curiosity.",
  " ",
  "My family keeps me grounded, and I try to make room for the people, interests, and experiences that " +
  "make life interesting.",
] as const;

export const HERO_PORTRAIT_CANDIDATES = ["/about/portrait.jpg", "/about/portrait.png"] as const;

/** The hand-lettered "Hi, I'm Jeff. Welcome." wordmark graphic, in place of the plain-text
 * hero title. Falls back to the styled text until a file exists at one of these paths. */
export const WELCOME_GRAPHIC_CANDIDATES = ["/about/welcome.png", "/about/welcome.jpg"] as const;

/** Equally sized snapshots spanning the full page width below the hero — quick, casual
 * glimpses rather than posed photos. Add a file at any of a slot's candidate paths and it
 * replaces the placeholder. */
export const HERO_GALLERY: readonly (readonly [string, string])[] = [
  ["/about/gallery-1.jpg", "/about/gallery-1.png"],
  ["/about/gallery-2.jpg", "/about/gallery-2.png"],
  ["/about/gallery-3.jpg", "/about/gallery-3.png"],
  ["/about/gallery-4.jpg", "/about/gallery-4.png"],
  ["/about/gallery-5.jpg", "/about/gallery-5.png"],
  ["/about/gallery-6.jpg", "/about/gallery-6.png"],
  ["/about/gallery-7.jpg", "/about/gallery-7.png"],
] as const;

export interface OutsideOfWorkItem {
  readonly title: string;
  readonly description: string;
  readonly icon: Icon;
  readonly coverCandidates: readonly string[];
}

export const OUTSIDE_OF_WORK: readonly OutsideOfWorkItem[] = [
  {
    title: "Guitar",
    description: "Learning blues and chasing progress, one lick at a time.",
    icon: GuitarIcon,
    coverCandidates: ["/about/guitar.jpg", "/about/guitar.png"],
  },
  {
    title: "Vinyl & Music",
    description: "Collecting vinyls & hearing the music of every era.",
    icon: VinylIcon,
    coverCandidates: ["/about/vinyl-1.jpg"],
  },
  {
    title: "Plants",
    description: "Trying to keep my houseplants alive and happy.",
    icon: LeafIcon,
    coverCandidates: ["/about/plants.jpg", "/about/plants.png"],
  },
  {
    title: "Reading",
    description: "Always reading. From Stephen King to history.",
    icon: BookOpenIcon,
    coverCandidates: ["/about/reading.jpg", "/about/reading.png"],
  },
  {
    title: "Theater",
    description: "I love anything live, especially music theater.",
    icon: TheaterMasksIcon,
    coverCandidates: ["/about/theater.jpg", "/about/theater.png"],
  },
  {
    title: "Movies & TV",
    description: "We take family movie night a little too seriously. Exhibit A",
    icon: ClapperboardIcon,
    coverCandidates: ["/about/movies.jpg", "/about/movies.png"],
  },
] as const;

export const BELIEFS = [
  "Curiosity makes life richer.",
  "People are more capable than they think.",
  "Trust is earned by extending it first.",
  "Good systems create freedom.",
  "Kindness and high standards can absolutely coexist.",
  "There's always more to learn.",
] as const;

export const POLAROID_CAPTION = "Fresh air. Clear mind. Better perspective.";
export const POLAROID_CANDIDATES = ["/about/lake.jpg", "/about/lake.png"] as const;

export const LEARNING_LATELY = [
  "How AI will shape the future of engineering",
  "Better ways to coach and develop leaders",
  "The guitar (slowly but surely)",
  "Gardening (still a student)",
  "Patience, perspective, and letting go",
] as const;

export const LEARNING_TAGLINE = "Always learning. Always growing.";

export const FOOTER_NOTE =
  "Thanks for stopping by. I hope you find something here that's helpful—or simply " +
  "thought-provoking.";
