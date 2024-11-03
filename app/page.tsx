"use client";

import { CVContent } from "@/components/cv-content";
import { ProjectCard } from "@/components/project-card";
import { TopNav } from "@/components/top-nav";
import { useMaintenanceMode } from "@/hooks/use-maintenance-mode";
import dynamic from "next/dynamic";
import { useState } from "react";

const MaintenanceMode = dynamic(() => import("@/components/maintenance"), {
  ssr: false,
});

const projects = [
  {
    title: "E-Commerce Platform",
    type: "Full Stack E-commerce",
    techStack: ["Next.js", "Node.js", "MongoDB", "Stripe"],
  },
  {
    title: "Portfolio Website",
    type: "Landing Page",
    techStack: ["React", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Task Management App",
    type: "Web Application",
    techStack: ["Vue.js", "Firebase", "Tailwind CSS"],
  },
];

export default function Home() {
  const { isMaintenance, isClient } = useMaintenanceMode();
  const [activeSection, setActiveSection] = useState("projects");

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
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        ) : (
          <CVContent />
        )}
      </main>
    </div>
  );
}
