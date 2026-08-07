# Design Brief

Status: **Approved direction, pending implementation.** Written 2026-08-06 after a review of
21 comparable personal sites; updated the same day with the owner's decisions.

## Revision — 2026-08-07: mockup-led direction

The owner supplied a visual mockup and asked that the design follow it. That mockup supersedes
the direction described in the next section, which is retained below for the record because it
explains choices still visible in the typography.

**What the mockup changes:**

| Aspect      | Previous                              | Now                                            |
| ----------- | ------------------------------------- | ---------------------------------------------- |
| Accent      | Deep clay `#8a4b2a`                    | Royal blue `#2f4fd8` + deep navy `#16244d`      |
| Canvas      | Warm off-white `#fbfaf8`               | White, with `#f7f8fa` bands to separate sections |
| Structure   | Margin annotation column               | Centred section headings, full-width sections   |
| Components  | Rules and space, no cards              | Cards for parallel items; buttons; tags         |
| Icons       | Effectively none                       | A small fixed set, always with a text label     |
| Home page   | Cover and contents index               | Full overview: hero, focus, experience, projects |
| Measure     | 64rem page                             | 72rem page                                      |

**What the mockup does not change:** serif headings with a sans body, one accent used
sparingly, generous whitespace, honest placeholders, no stock photography in the shipped site,
and every accessibility goal.

**Content the mockup showed that was not implemented.** The mockup was a visual study and its
copy was invented. It displayed GitLab, SentinelOne, and Riversoft as employers with
quantified outcomes; OpsDash, RecipeBox, and PromptFlow as projects with technology tags; and
two dated blog posts. None are real. The layout was built; the content is CommandLink, Ritchie
Bros. / Xcira, the two named personal projects plus a confirmed third slot, and the single
real publication. **No metric appears anywhere on the site.**

Also not implemented, pending a decision: the **Download Résumé** button, which the roadmap
defers, and which has no file to link to.

---

## Superseded direction — "Editorial Executive with Operating Notes"

A combination of two of the three researched directions:

- **Editorial Executive** provides the base: serif-led, narrow measure, prose over bullets,
  no chrome. This is the register the credible peer group uses (Bosworth, Larson, Mod).
- **Operating Notes** contributes one structural device: a **visible margin column** carrying
  dates, scope numerals, and short annotations alongside the main text.

The margin column is the site's **one deliberate move**. It is what stops the page reading as
a default template, and it dramatizes the positioning — an engineering leader who thinks in
systems, scope, and measurable operating facts.

The owner asked for "slightly more design aesthetic feel" than pure minimalism. In this brief
that means, specifically:

- A wider type scale — a genuinely large hero statement against quiet body copy, rather than
  a timid, uniform scale.
- The margin column treated as a visible design element, with rules and mono labels, not as
  invisible metadata.
- Numerals given typographic presence, since they are the evidence.
- Warmth in the palette, reinforced by the accent choice.

It does **not** mean decorative effects, illustration, or motion. Everything in *Things we
explicitly will NOT do* still applies.

### Owner decisions recorded

| Question              | Decision                                                       |
| --------------------- | -------------------------------------------------------------- |
| Creative direction    | A + C — Editorial Executive with the Operating Notes margin      |
| Portrait              | Will be supplied. A placeholder slot is built now                |
| Projects section      | **Kept.** At least three projects; details to be supplied        |
| Accent color          | Deep clay recommended below; owner undecided, easily reversed    |
| Section order         | **Leadership focus before Selected experience** — owner's call   |

## Design philosophy

The site is a **document, not a landing page.**

A landing page persuades a stranger to convert. This site does something different: it gives a
senior, skeptical, time-poor reader enough evidence to conclude *this person operates at the
level we are hiring for*. That is a credibility problem, not a marketing problem.

Three commitments follow:

1. **Evidence before adjectives.** Scope, systems, and outcomes are more persuasive than
   descriptors. "Seven SaaS products, engineering and QA" outperforms "proven leader."
2. **The artifact is part of the argument.** Restraint, hierarchy, and craft demonstrate
   judgment. A site that is quietly excellent says something an adjective cannot.
3. **One deliberate move.** Restraint without a point of view is indistinguishable from a
   default template. The design needs exactly one memorable decision — and only one.

## Color direction

A warm paper canvas, near-black warm ink, and a **single** accent.

| Role         | Value     | Use                                        |
| ------------ | --------- | ------------------------------------------ |
| Canvas       | `#fbfaf8` | Page background — warm off-white, not white |
| Surface      | `#ffffff` | Rare raised surfaces                        |
| Ink          | `#1c1b19` | Primary text                                |
| Muted        | `#5c5a54` | Secondary text, metadata                    |
| Line         | `#e4e0d9` | Rules and separators                        |
| Accent       | `#8a4b2a` | Links, emphasis, one CTA — deep clay          |
| Accent hover | `#6f3c21` | Hover and active states                       |

**Accent: deep clay `#8a4b2a`**, contrast 6.5:1 against the canvas — passes WCAG AA for
normal text.

Chosen over the alternatives because it is the only one that reinforces the rest of the
system. The canvas is a warm off-white and the page will carry a portrait; a warm earth accent
holds that together, where a cool teal or blue fights it. It is also uncommon in technology
sites, which does real work against the "generic template" failure mode.

Candidates considered, all verified at **≥ 6.5:1**:

- **Deep clay** `#8a4b2a` — *selected*. Warm, human, editorial, uncommon in tech.
- **Deep teal** `#12655c` — the Iteration 1 choice. Safe and credible, but very common and
  cool against a warm canvas.
- **Ink-blue** `#1e3a5f` — conservative and executive, but the least distinctive of the three.

This is a two-token change in `globals.css`. If the clay reads as too warm once seen against
real content, reverting costs nothing.

Rules:

- **One accent only.** No secondary accent, no success/warning palette. There is no UI state
  to communicate.
- Color never carries meaning alone.
- No gradients, glows, or tinted shadows.

## Typography

Two families: a **serif for headings**, a **neutral sans for body**.

This is the highest-leverage decision on the page. A single geometric sans is the default of
every SaaS site and every generated template; a serif heading is the cheapest reliable signal
of deliberate design. It is also what the actual peer group uses — Andrew Bosworth (EB
Garamond + Lato), Craig Mod (FF Meta Serif + FF Meta), Paco Coursey (Newsreader + Inter),
Gergely Orosz (Merriweather + Open Sans).

| Role            | Family              | Notes                                    |
| --------------- | ------------------- | ---------------------------------------- |
| Headings        | Source Serif 4      | 600 weight, `-0.015em`, line-height 1.2  |
| Body and UI     | Inter               | 400/500, line-height 1.6–1.65            |
| Metadata labels | Inter, small caps or uppercase | `0.08em` tracking, muted       |
| Code            | System mono stack   | Only if code ever appears                |

- Fonts load via `next/font` at build time and are served from our own origin.
- Heading styles are set at the element level, never per component.
- `text-wrap: balance` on headings, `pretty` on paragraphs.
- Body size 17–18px on desktop, never below 16px.

### Type scale

The scale is deliberately **wide**. A timid scale — where the hero is only slightly larger
than a section heading — is a main reason a page reads as templated. The gap between the hero
statement and everything else is what creates confidence.

| Role                  | Size (desktop)               | Family | Weight | Notes                    |
| --------------------- | ---------------------------- | ------ | ------ | ------------------------ |
| Hero statement        | `clamp(2.5rem, 6vw, 4rem)`   | Serif  | 600    | 3 lines max, tight 1.1   |
| Section heading (h2)  | `1.5rem`                     | Serif  | 600    | Quiet, subordinate       |
| Sub-heading (h3)      | `1.125rem`                   | Serif  | 600    |                          |
| Hero supporting copy  | `1.25rem`                    | Sans   | 400    | Muted ink                |
| Body                  | `1.0625rem` (17px)           | Sans   | 400    | Line height 1.65         |
| Margin / metadata     | `0.8125rem` (13px)           | Mono   | 400    | Uppercase, `0.08em`      |

The hero is roughly **2.7× the size of a section heading**. That ratio is the point.

## Grid system

**One asymmetric split: a narrow margin column and a main column.**

| Measure       | Value    | Applies to                                     |
| ------------- | -------- | ----------------------------------------------- |
| Margin column | 8–10rem  | Dates, scope numerals, short annotations         |
| Prose         | 34–38rem | Running paragraphs — roughly 65–75 characters    |
| Content       | 48rem    | Headings, lists, structured blocks               |
| Page          | 64rem    | Outer bound including the margin column          |
| Gutter        | `clamp(1.25rem, 5vw, 2.5rem)` | All widths                      |

Reference measures found in the research: Craig Mod 720px, Paco Coursey 688px, Dan Abramov
42rem, Jim Nielsen 46rem, Patrick Collison 500px. **All are narrower than a typical Tailwind
default.** The Iteration 2 measure of 56rem is wider than every editorial site examined and
narrows to the values above.

### Margin column behavior

The margin column is the one structural device carrying the design's personality.

- **≥ 1024px** — margin column sits to the left of the main column, right-aligned against it,
  set in mono or tracked small caps at a smaller size and in muted ink.
- **640–1024px** — margin content moves above its related block as a single inline metadata
  line.
- **< 640px** — same as above, condensed. The margin column never causes horizontal scroll and
  never truncates.

Content that belongs in the margin: role dates, scope numerals (`7 SaaS products`,
`20 years`), publication years, project status. Content that does **not**: prose, navigation,
calls to action, or anything a reader must see to understand the page. **The margin column is
always supplementary — the page must read correctly with it removed.**

**The margin carries only true, useful information — never decoration.** An earlier
implementation put two-digit section indices (`01`–`05`) there. They were removed: they
conveyed nothing a visible heading did not already say, they were marked `aria-hidden` (an
admission they carried no information), and they undermined the device's premise by making
half of it factual and half of it ornament.

The grid is applied to every block whether or not a note is present, so the whole page shares
one left edge. A section with nothing true to annotate simply has an empty margin.

No multi-column card grids. Multi-column layouts appear only where content is genuinely
tabular, such as a role timeline.

Reference measures found in the research: Craig Mod 720px, Paco Coursey 688px, Dan Abramov
42rem, Jim Nielsen 46rem, Patrick Collison 500px. **All are narrower than a typical Tailwind
default.** Our current 56rem is wider than every editorial site examined and should narrow.

No multi-column card grids. Multi-column layouts appear only where content is genuinely
tabular, such as a role timeline.

## Component philosophy

**Cards where items are parallel; space everywhere else.**

- A card is justified when items are genuinely parallel, comparable, and independently
  scannable. Two groups qualify: the four leadership focus areas and the three project
  entries.
- Cards are a 1px border and a `0.5rem` radius on white. **No shadows, no nested panels, no
  gradient fills.**
- Sections alternate between the white canvas and the `#f7f8fa` band. That alternation, not a
  border, is what separates them.
- Buttons come in exactly two forms: filled navy (primary) and outlined (secondary). They are
  always links — nothing on the site submits or mutates, so a `<button>` element would
  misrepresent the action.
- Components stay small, presentational, and Server-rendered.
- Every component must survive the question: *does this earn its visual weight?*

## Spacing principles

Vertical rhythm is the main structural device, since there are no boxes.

- Base unit **4px**; use **8 / 12 / 16 / 24 / 32 / 48 / 64 / 96** only. No other values.
- Section padding: `48px` top and bottom, giving **96px between adjacent sections**. Specify
  the gap *between* blocks, not the padding on each — it is the gap a reader perceives, and
  quoting padding alone caused a 192px rhythm in the first implementation.
- Heading to body: `24px`. Paragraph to paragraph: `16px`.
- Margin column gutter: `32px`.
- Related items sit closer than the gap to unrelated items — proximity carries grouping.
- **Whitespace is not emptiness.** Generous space around a short statement is what makes it
  read as confident rather than sparse.

### Radii

**Exactly one radius: `2px`.** Applied to the portrait, focus outlines, and the skip link.
Nothing is fully rounded — circular shapes read as avatars and chips, which is the visual
language of social products, not of an editorial page.

## Photography guidance

**One real portrait of Jeff. Approved by the owner; image to be supplied.**

This reverses the initial "no headshot" position. An executive hiring decision is a judgment
about a person, every comparable channel shows a face, and omitting it worked against the
"human" quality the site is aiming for.

- One portrait only, in the hero.
- Real photography of Jeff — never stock, never illustration, never an avatar.
- Natural light, uncluttered background, professional but not corporate-formal.
- Rendered at a modest size — **128px** displayed — treated as a byline portrait, not a hero
  image. **Square, `2px` radius. Never circular** — a circular crop reads as a social profile
  picture; a square reads as an editorial byline. No shadow, no ring.
- Served via `next/image` with explicit `width`/`height` so no layout shift occurs.
- No screenshots, mockups, device frames, or decorative imagery anywhere else.

### Asset specification

| Property   | Requirement                                                        |
| ---------- | ------------------------------------------------------------------ |
| Source     | Square crop, **at least 512×512**, head and shoulders               |
| Format     | JPEG or PNG source; Next.js emits WebP/AVIF automatically           |
| Location   | `public/jeff-whiteside.jpg`                                         |
| Alt text   | `"Jeff Whiteside"` — a portrait needs no description beyond a name  |

### Brand: the name leads

**The `<h1>` on the home page is "Jeff Whiteside", not the positioning statement.**

This revises the earlier hierarchy, which made a slogan the largest element and left the name
as small header text. On a personal brand site the person is the subject: a visitor who reads
one thing should read *who this is*. Every name-led site in the research — Bosworth, Collison,
Mod — leads with the person.

The lockup, in order:

1. **Name** — `text-hero`, serif. The largest element on the site.
2. **Role line** — mono, muted: `Engineering leadership · SaaS platforms · Delivery systems`.
3. **Rule** — a single hairline, the only one in the hero.
4. **Positioning statement** — serif, `2xl`–`3xl`. Still the second thing seen.
5. **Supporting paragraph**, then one accent call to action.

The footer repeats the name and role rather than carrying only a copyright line.

### Placeholder treatment until supplied

A neutral placeholder is built now so the layout is real and reviewable:

Images resolve through `resolvePublicImage()` in three tiers, all at identical dimensions so
the real asset drops in without layout shift:

1. **The real asset** — `public/jeff-whiteside.jpg`, `public/projects/<slug>.jpg`.
2. **A local stock placeholder** — `public/placeholder/…`, **gitignored**. Present only on the
   owner's machine so composition can be judged with real photography during review.
3. **A drawn outline** — an outlined block with a small mono label, `aria-hidden`.

**Stock imagery is never committed and never deployed.** The gitignore plus the third tier
means the repository and every deployment fall back to the outline rather than rendering a
broken image. Verified: with the placeholder directory removed, the build emits zero `<img>`
tags.

A stock portrait is captioned *"Placeholder image — not Jeff"* and given an empty `alt`, so it
cannot be mistaken for the real thing during review.

The final rule stands: **the shipped site contains no stock photography.**
- Tracked in `PROJECT_NOTES.md` as a known placeholder until the real portrait lands.

## Icon guidance

**A small fixed set, hand-drawn as inline SVG. No icon library.**

The complete set lives in `src/components/ui/icons.tsx`: four marks for the leadership cards,
three contact marks, and one arrow. That is the whole inventory.

- Inline SVG only — no icon font, no library, no network request.
- Stroke-based, `1.6` weight, inheriting `currentColor`.
- Every icon is `aria-hidden` and **always accompanied by a text label**. Nothing on the site
  depends on an icon being understood.
- Leadership icons sit in a `#eef2ff` rounded square, the only place a filled icon container
  appears.
- **No technology logos and no company logos.** The mockup showed employer logos beside each
  role; those are third-party marks requiring licensing, and they are the visual language of a
  logo wall. The company name set in the heading face does the same job.

## Motion guidelines

**Motion is for orientation only.**

- Permitted: smooth anchor scrolling; 120–180ms `ease-out` color transitions on hover/focus.
- Prohibited: scroll-triggered reveals, parallax, marquees, animated gradients, typewriter
  effects, counters, animation libraries.
- All motion respects `prefers-reduced-motion: reduce`.
- Nothing may animate on page load. The page arrives already composed.

## Accessibility goals

Target **WCAG 2.2 AA**, verified rather than assumed.

- Contrast ≥ 4.5:1 for body text, ≥ 3:1 for large text and UI boundaries.
- Semantic HTML first; ARIA only where semantics fall short.
- Visible focus on every interactive element via one global `:focus-visible` rule.
- Full keyboard operability; skip link as the first focusable element.
- Logical heading order with no skipped levels; one `h1`.
- Touch targets ≥ 44px.
- Meaningful `alt` text; decorative images marked `alt=""`.
- Zoom to 200% without loss of content or horizontal scrolling.

## Responsive behavior

Fluid by default; breakpoints only where layout genuinely changes.

| Width         | Behavior                                                        |
| ------------- | --------------------------------------------------------------- |
| < 640px       | Single column, 64px section rhythm, condensed header             |
| 640–1024px    | Single column at full measure, 96px rhythm                       |
| > 1024px      | Measure caps; any margin column appears *(direction-dependent)*  |

- Type scales with `clamp()` rather than stepping at breakpoints.
- Mobile is a first-class reading experience — recruiters open links on phones.
- No horizontal scrolling at any width.

## Content hierarchy

**Each section is its own route** (ADR 0006). Order is the owner's decision: **Leadership focus
precedes Selected experience.**

| Route         | Carries                                                        |
| ------------- | -------------------------------------------------------------- |
| `/`           | Identity, level, portrait, scope facts, one CTA, contents index |
| `/leadership` | How he leads, as outcomes rather than adjectives                |
| `/experience` | CommandLink, Ritchie Bros. / Xcira, with dates                  |
| `/projects`   | At least three. Kept at the owner's direction                   |
| `/writing`    | The teaching case                                               |
| `/contact`    | Email and LinkedIn                                              |

### The home page must carry the whole argument

Splitting across routes means most visitors will read **only the home page**. It therefore has
to work as a complete summary, not as a menu.

- The hero carries identity, scope, and the primary call to action.
- The contents index gives every section a **one-line summary**, so a reader who never clicks
  still learns what is on the site.
- Index entries are links, not buttons, and read as a table of contents rather than navigation
  chrome.

### Resolving the scan-order tension

Research recommended evidence before focus areas, because a sub-60-second reader trusts facts
over descriptors. The owner chose focus areas first. That order is settled and is not
revisited.

The scannability concern is instead solved **inside the hero**, where the margin column
carries the scope numerals — `20 years`, `7 SaaS products`, `Eng · QA · Product`. Hard
evidence therefore appears above the fold regardless of which section comes first, and the
leadership focus section is reached by a reader who has already seen the proof.

This is the primary functional justification for the margin column, beyond its visual role.

### Projects section

Kept, with at least three entries. Two risks from the research apply and are managed rather
than ignored:

- A personal-projects grid appeared on **none** of the 21 sites reviewed, and small utility
  apps can read as junior on an executive's site.
- The mitigation is framing: each entry leads with **the problem and the judgment call**, not
  with a feature list or a technology badge. One paragraph on why it was built and what
  tradeoff was made is worth more than a screenshot.

Entries with no real content are marked as placeholders rather than padded with invented
detail. Details for all three projects are still needed from the owner.

## Visual hierarchy

Calibrated to a **sub-60-second** read.

- Exactly **one** element is largest on the page: the positioning statement.
- Exactly **one** accent-colored call to action above the fold. Secondary links sit in muted
  ink with a `line`-colored underline. Two links of equal weight would mean the design has not
  chosen a primary action.
- The **portrait anchors the hero** but stays small — it establishes a person without
  competing with the statement.
- The **margin column carries the numerals**, so scope is legible before any prose is read.
- Company names and dates set at a scannable weight — the eye finds them without reading.
- Section headings are consistent and visually subordinate to the hero.
- Body copy is deliberately quiet; a skimmer should be able to skip all of it and still leave
  with an accurate impression.
- The fold carries identity, scope, and proof. Everything below is supporting detail.

**Fold test.** With everything below the first screen removed, a reader must still be able to
state Jeff's name, level, domain, and scope. If they cannot, the hero has failed regardless of
how good the rest of the page is.

## Things we explicitly will NOT do

- Stock photography in the shipped site, illustrations, or decorative imagery beyond the
  hero's CSS-drawn panel and dot field
- Technology logo walls, company logos, or skill percentage bars
- Cards for content that is not genuinely parallel
- Gradients, glows, glassmorphism, animated or patterned backgrounds
- Scroll-triggered animation, parallax, or load-in motion
- Icons without an accompanying text label
- Accent colors beyond the navy and blue pair
- Buzzwords: "visionary", "world-class", "thought leader", "10x", "passionate", "results-driven"
- Invented metrics, fabricated outcomes, or unverifiable claims
- Architecture diagrams on the public site
- Testimonials, logo bars of past employers, or social-proof widgets
- Dark mode in Version 1
- A design that could be mistaken for a generic SaaS or startup template
