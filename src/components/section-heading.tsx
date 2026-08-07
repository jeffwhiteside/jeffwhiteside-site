interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  /** Element id so the surrounding <section> can be a labelled landmark. */
  id: string;
}

/**
 * Centred eyebrow-and-heading pair used above each home page section.
 *
 * The eyebrow is a <p>, not a heading: it is a label for the section below it, and promoting
 * it to a heading would insert a level into the document outline that carries no content.
 */
export function SectionHeading({ eyebrow, title, id }: SectionHeadingProps) {
  return (
    <div className="text-center">
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id} className="text-section mt-3">
        {title}
      </h2>
    </div>
  );
}
