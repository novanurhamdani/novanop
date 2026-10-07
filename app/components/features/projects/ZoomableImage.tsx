"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

interface ZoomableImageProps {
  src: string;
  alt: string;
  sizes?: string;
  priority?: boolean;
}

/**
 * Click-to-expand image - renders the fill image plus a zoom trigger.
 * Overlay: dark backdrop, cobalt-framed contain image, lime close button.
 * Closes on Escape, backdrop click, or the close button; restores focus
 * to the trigger.
 */
export default function ZoomableImage({
  src,
  alt,
  sizes,
  priority,
}: ZoomableImageProps) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const trigger = triggerRef.current;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      trigger?.focus();
    };
  }, [open]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Expand image - ${alt}`}
        className="group/zoom absolute inset-0 h-full w-full cursor-zoom-in"
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover object-top"
        />
        <span
          className="absolute bottom-2 right-2 bg-black px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.2em] text-secondary opacity-0 transition-opacity group-hover/zoom:opacity-100 group-focus-visible/zoom:opacity-100"
          aria-hidden="true"
        >
          ⤢ Expand
        </span>
      </button>

      {open &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label={alt}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 sm:p-10"
            onClick={() => setOpen(false)}
          >
            <button
              type="button"
              autoFocus
              onClick={() => setOpen(false)}
              className="btn-brutal absolute right-4 top-4 z-10 bg-secondary px-4 py-2 font-mono text-xs font-bold uppercase tracking-widest text-black"
            >
              Close ✕
            </button>
            <div
              className="relative h-full w-full max-w-6xl bg-black shadow-brutal"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={src}
                alt={alt}
                fill
                sizes="90vw"
                className="object-contain"
              />
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
