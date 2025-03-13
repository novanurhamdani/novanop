"use client";

import Image from "next/image";
import Link from "next/link";
import { projects } from "@/constants/projects";
import StackIcon from "tech-stack-icons";
import { useTheme } from "next-themes";

export function PortfolioSection() {
  const { theme } = useTheme();

  return (
    <section id="portfolio" className="py-20 relative overflow-hidden">
      {/* Retro grid background with different color */}
      <div className="absolute inset-0 z-0 portfolio-grid-bg"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2
            className={`text-2xl md:text-3xl font-bold mb-4 ${
              theme === "dark" ? "neon-text-yellow" : "text-primary"
            }`}
          >
            Portfolio
          </h2>
          <div
            className={`w-24 h-1 ${
              theme === "dark" ? "bg-bright-yellow" : "bg-primary"
            } mx-auto mb-8`}
          ></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative border-2 bg-background/50 p-6 transition-all duration-300 ${
                theme === "dark"
                  ? "border-bright-yellow hover:neon-border-yellow"
                  : "border-primary hover:border-electric-blue"
              }`}
            >
              {/* Project header */}
              <div className="flex items-center gap-4 mb-4">
                <div
                  className={`relative h-12 w-12 overflow-hidden border ${
                    theme === "dark" ? "border-bright-yellow" : "border-primary"
                  }`}
                >
                  <Image
                    src={project.logo}
                    alt={`${project.title} logo`}
                    fill
                    className="object-contain p-1"
                  />
                </div>
                <div>
                  <h3
                    className={`text-lg font-bold transition-all duration-300 hover:cursor-pointer ${
                      theme === "dark"
                        ? "group-hover:text-bright-yellow"
                        : "group-hover:text-electric-blue"
                    }`}
                  >
                    {project.title}
                  </h3>
                  <p className="text-xs text-bright-yellow/70">
                    {project.type}
                  </p>
                </div>
              </div>

              {/* Project summary */}
              <p className="text-sm mb-4 text-foreground line-clamp-3">
                {project.summary}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.slice(0, 4).map((tech) => (
                  <div
                    key={tech.name}
                    className={`flex items-center gap-1 border ${
                      theme === "dark"
                        ? "border-bright-yellow"
                        : "border-electric-blue"
                    } px-2 py-1 text-xs`}
                  >
                    {tech.icon && (
                      <StackIcon
                        name={tech.icon}
                        style={{ height: 12, width: 12 }}
                      />
                    )}
                    <span>{tech.name}</span>
                  </div>
                ))}
                {project.techStack.length > 4 && (
                  <div
                    className={`border ${
                      theme === "dark"
                        ? "border-bright-yellow"
                        : "border-electric-blue"
                    } px-2 py-1 text-xs`}
                  >
                    +{project.techStack.length - 4} more
                  </div>
                )}
              </div>

              {/* Links */}
              <div className="flex gap-3 mt-4">
                {project.liveDemo && (
                  <Link
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-xs px-3 py-1 ${
                      theme === "dark" ? "retro-btn-yellow" : "retro-btn"
                    }`}
                  >
                    Live Demo
                  </Link>
                )}
                {project.githubRepo && (
                  <Link
                    href={project.githubRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-xs px-3 py-1 ${
                      theme === "dark" ? "retro-btn-yellow" : "retro-btn"
                    }`}
                  >
                    GitHub
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
