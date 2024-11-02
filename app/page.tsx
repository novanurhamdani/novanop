"use client";

import { CVContent } from "@/components/cv-content";
import { ProjectCard } from "@/components/project-card";
import { Sidebar } from "@/components/sidebar";
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
    <div className="flex min-h-screen bg-background">
      <Sidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <main className="ml-64 flex-1 p-8">
        {activeSection === "projects" ? (
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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
