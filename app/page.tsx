"use client";

import { useMaintenanceMode } from "@/hooks/use-maintenance-mode";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import { RetroNavbar } from "@/components/retro-navbar";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { PortfolioSection } from "@/components/portfolio-section";
import { ExperienceSection } from "@/components/experience-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { useTheme } from "next-themes";

const MaintenanceMode = dynamic(() => import("@/components/maintenance"), {
  ssr: false,
});

export default function Home() {
  const { isMaintenance, isClient } = useMaintenanceMode();
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  // This effect ensures hydration is complete before rendering
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!isClient) {
    return null;
  }

  if (isMaintenance) {
    return <MaintenanceMode />;
  }

  // Add CRT effect to the entire page
  return (
    <div className={`crt min-h-screen bg-background text-foreground ${theme === 'light' ? 'light-theme' : 'dark-theme'}`}>
      <RetroNavbar />

      <main>
        <HeroSection />
        <AboutSection />
        <PortfolioSection />
        <ExperienceSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
