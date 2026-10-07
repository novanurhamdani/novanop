"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { useCanAnimate } from "../../../../hooks/useMediaQuery";

/**
 * The Code Alchemist mascot with a single subtle interaction:
 * a gentle pointer-follow tilt plus drifting sparkles on hover.
 * Fully static (and still good-looking) for touch / reduced-motion users.
 */
export default function HeroMascot() {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const interactive = useCanAnimate();

  const handleMove = (e: React.PointerEvent) => {
    if (!interactive || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: px * 10, y: py * -8 });
  };

  const handleLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <div
      ref={ref}
      className="mascot-stage relative mx-auto w-56 outline-none sm:w-64 lg:w-80"
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      tabIndex={0}
      aria-label="Interactive neon portrait of Nova Nurhamdani"
    >
      {/* Cobalt diamond behind the artifact */}
      {/* <div
        className="absolute -inset-6 flex items-center justify-center sm:-inset-10"
        aria-hidden="true"
      >
        <div className="aspect-square h-full rotate-45 bg-primary" />
      </div> */}
      <span
        className="absolute -right-1 top-8 h-9 w-9 rotate-12 bg-secondary sm:-right-3"
        aria-hidden="true"
      />
      <span
        className="absolute -left-2 bottom-8 z-10 bg-black px-1.5 py-0.5 font-mono text-[9px] tracking-[0.2em] text-secondary sm:-left-4"
        aria-hidden="true"
      >
        NOV-A · 001
      </span>

      {/* Sparkles - pure decoration, appear on hover */}
      <span
        className="mascot-sparkle left-[12%] top-[18%]"
        aria-hidden="true"
      />
      <span
        className="mascot-sparkle right-[10%] top-[30%]"
        aria-hidden="true"
      />
      <span
        className="mascot-sparkle left-[24%] bottom-[12%]"
        aria-hidden="true"
      />

      {/* Technical artifact frame */}
      <div className="border-2 border-border-light bg-surface text-foreground">
        <div className="flex items-center justify-between border-b border-border px-3 py-2 font-mono text-[10px] uppercase tracking-[0.2em]">
          <span>Code Alchemist</span>
          <span className="flex items-center gap-1.5">
            <span
              className="inline-block h-2 w-2 rounded-full bg-secondary"
              aria-hidden="true"
            />
            Building
          </span>
        </div>

        <div
          className="floating-hero-image transition-transform duration-200 ease-out will-change-transform"
          style={{
            transform: interactive
              ? `perspective(900px) rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`
              : undefined,
          }}
        >
          <Image
            src="/images/neon-hero.webp"
            alt="Neon illustration of Nova Nurhamdani framed by cobalt and lime brush strokes"
            width={942}
            height={1670}
            sizes="(max-width: 640px) 14rem, (max-width: 1024px) 16rem, 20rem"
            className="h-auto w-full"
            unoptimized
            priority
          />
        </div>

        <p className="border-t border-border px-3 py-2 text-center font-mono text-[11px] tracking-[0.2em] text-foreground/70 uppercase">
          the code alchemist · est. 2010
        </p>
      </div>
    </div>
  );
}
