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
      className="mascot-stage relative mx-auto w-56 sm:w-72 lg:w-full lg:max-w-md outline-none"
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      tabIndex={0}
      aria-label="The Code Alchemist mascot - a small wizard who lives in the terminal"
    >
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

      <div
        className="floating-hero-image transition-transform duration-200 ease-out will-change-transform"
        style={{
          transform: interactive
            ? `perspective(900px) rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`
            : undefined,
        }}
      >
        <Image
          src="/images/dark-hero.png"
          alt="Illustration of the Code Alchemist - Nova's wizard mascot"
          width={480}
          height={480}
          className="w-full h-auto"
          priority
        />
      </div>

      <p className="mt-4 text-center font-mono text-[11px] tracking-[0.2em] text-muted/70 uppercase">
        the code alchemist · est. 2010
      </p>
    </div>
  );
}
