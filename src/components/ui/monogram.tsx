interface MonogramProps {
  className?: string;
}

/**
 * The JW mark: an outlined square holding the initials. Drawn as text rather than an image
 * file, so it stays crisp at any size and costs no request.
 */
export function Monogram({ className }: MonogramProps) {
  return (
    <span
      aria-hidden="true"
      className={
        className ??
        "inline-flex size-10 items-center justify-center rounded-lg border border-accent font-serif text-base font-semibold tracking-tight text-ink"
      }
    >
      JW
    </span>
  );
}
