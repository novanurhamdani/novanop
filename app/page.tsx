"use client";

import { ProjectCard } from "@/components/project-card";
import { Sidebar } from "@/components/sidebar";
import { useMaintenanceMode } from "@/hooks/use-maintenance-mode";
import dynamic from "next/dynamic";

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

  if (!isClient) {
    return null;
  }

  if (isMaintenance) {
    return <MaintenanceMode />;
  }

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="ml-64 flex-1 p-8">
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </main>
    </div>
  );
}
