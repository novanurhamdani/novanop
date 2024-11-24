"use client";

import { CVContent } from "@/components/cv-content";
import { ProjectCard } from "@/components/project-card";
import { TopNav } from "@/components/top-nav";
import { useMaintenanceMode } from "@/hooks/use-maintenance-mode";
import { projects } from "@/constants/projects";
import { useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

const MaintenanceMode = dynamic(() => import("@/components/maintenance"), {
  ssr: false,
});

export default function Home() {
  const { isMaintenance, isClient } = useMaintenanceMode();
  const searchParams = useSearchParams();
  const [activeSection, setActiveSection] = useState("cv");

  useEffect(() => {
    const section = searchParams.get("section");
    if (section) {
      setActiveSection(section);
    }
  }, [searchParams]);

  if (!isClient) {
    return null;
  }

  if (isMaintenance) {
    return <MaintenanceMode />;
  }

  return (
    <div className="min-h-screen bg-background">
      <TopNav
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <main className="container mx-auto px-4 py-6 pt-24 sm:px-6 lg:px-8">
        {activeSection === "projects" ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        ) : (
          <CVContent />
        )}
      </main>
    </div>
  );
}
