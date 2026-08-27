"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { CloseIcon } from "@/components/ui/icons";

interface LightboxImageProps {
  readonly src: string;
  readonly alt: string;
  /** Sets the thumbnail's size/shape/position — same contract as PhotoBox's className: expects
   * `relative` plus an explicit aspect ratio or height. */
  readonly className: string;
}

/**
 * A photo that opens full-size on click/tap — the thumbnail everywhere else on the About page
 * is deliberately small (a grid of many), so this is the only way to actually see one clearly,
 * especially on a phone where nothing is bigger than a thumb anyway.
 *
 * Client-only for the open/close state; PhotoBox (server, resolves the file) renders this in
 * place of a plain `<Image>` whenever a real photo exists.
 */
export function LightboxImage({ src, alt, className }: LightboxImageProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) {
      return;
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`View larger image${alt ? `: ${alt}` : ""}`}
        className={`block cursor-zoom-in overflow-hidden rounded-xl border border-line ${className}`}
      >
        <Image src={src} alt={alt} fill className="object-cover" />
      </button>

      {open ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 sm:p-8"
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close"
            className="absolute top-4 right-4 text-white/80 transition-colors hover:text-white"
          >
            <CloseIcon className="size-8" />
          </button>
          <div
            onClick={(event) => event.stopPropagation()}
            className="relative h-full max-h-[90vh] w-full max-w-4xl"
          >
            <Image
              src={src}
              alt={alt}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
