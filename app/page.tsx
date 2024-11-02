"use client";

import MaintenanceMode from "@/components/maintenance";
import { ProjectCard } from "@/components/project-card";
import { Sidebar } from "@/components/sidebar";
import { useState } from "react";

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
  const [maintenanceMode, setMaintenanceMode] = useState(true);

  return maintenanceMode ? (
    <MaintenanceMode />
  ) : (
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
