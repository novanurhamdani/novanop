"use client";

import { createContext, useContext, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { useGamification } from "../../../hooks/useGamification";
import { useAnalytics } from "../../../hooks/useAnalytics";
import { GamificationState, Badge } from "../../../types";
import BadgeNotification from "../features/gamification/BadgeNotification";

interface GamificationContextValue {
  state: GamificationState;
  addXp: (points: number, actionId: string) => void;
  unlockBadge: (badgeName: string) => void;
  visitSection: (sectionId: string) => void;
  viewProject: (projectId: string) => void;
  clickGithub: (projectId: string) => void;
  clickLogo: () => void;
  submitContactForm: () => void;
  showBadgeNotification: Badge | null;
}

const GamificationContext = createContext<GamificationContextValue | null>(
  null,
);

export function useGamificationContext() {
  return useContext(GamificationContext);
}

/**
 * Quiet gamification layer: XP and badges still accrue in the background,
 * section visits are tracked via a single IntersectionObserver, and badge
 * notifications surface as small toasts. Also drives the progressive-
   enhancement reveal animations for any element marked [data-reveal].
 */
export default function GamificationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const gamification = useGamification();
  const { trackPageView } = useAnalytics();
  const pathname = usePathname();
  const visitedRef = useRef<Set<string>>(new Set());

  // Track page views on route change
  useEffect(() => {
    trackPageView(pathname, document.title);
  }, [pathname, trackPageView]);

  // Reveal-on-scroll + section visit tracking
  useEffect(() => {
    const revealEls = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );
    const sectionEls = Array.from(
      document.querySelectorAll<HTMLElement>("section[data-section]"),
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          el.classList.add("visible");
          const sectionId = el.dataset.section;
          if (sectionId && !visitedRef.current.has(sectionId)) {
            visitedRef.current.add(sectionId);
            gamification.visitSection(sectionId);
          }
          observer.unobserve(el);
        });
      },
      { threshold: 0.12 },
    );

    revealEls.forEach((el) => observer.observe(el));
    sectionEls.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <GamificationContext.Provider value={gamification}>
      {children}
      {gamification.showBadgeNotification && (
        <BadgeNotification badge={gamification.showBadgeNotification} />
      )}
    </GamificationContext.Provider>
  );
}
