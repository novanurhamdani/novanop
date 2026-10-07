"use client";

import { useSyncExternalStore } from "react";

/**
 * SSR-safe media query hook. Returns `false` on the server and during
 * hydration, then the real value on the client.
 */
export function useMediaQuery(query: string): boolean {
  return useSyncExternalStore(
    (onChange) => {
      const mq = window.matchMedia(query);
      mq.addEventListener("change", onChange);
      return () => mq.removeEventListener("change", onChange);
    },
    () => window.matchMedia(query).matches,
    () => false,
  );
}

/** True only for mouse/trackpad users who allow motion. */
export function useCanAnimate(): boolean {
  const finePointer = useMediaQuery("(pointer: fine)");
  const reducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  return finePointer && !reducedMotion;
}
