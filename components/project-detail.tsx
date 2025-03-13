"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/types/project";
import { useTheme } from "next-themes";
import StackIcon from "tech-stack-icons";
import { ArrowLeft, ArrowRight, Github, Globe, Code } from "lucide-react";

interface ProjectDetailProps {
  project: Project;
  nextProject: Project | null;
}

export function ProjectDetail({ project, nextProject }: ProjectDetailProps) {
  const { theme } = useTheme();
  const [activeImage, setActiveImage] = useState<string | null>(
    project.images && project.images.length > 0 ? project.images[0] : null
  );
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <div className="min-h-screen pt-20 pb-16 relative">
      {/* Retro grid background */}
      <div className="absolute inset-0 z-0 portfolio-grid-bg"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Navigation */}
        <div className="mb-8">
          <Link
            href="/#portfolio"
            className={`inline-flex items-center px-4 py-2 ${
              theme === "dark" ? "retro-btn-yellow" : "retro-btn"
            }`}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Link>
        </div>

        {/* Project Header */}
        <div className="mb-12">
          <div className="flex items-center gap-6 mb-4">
            <div
              className={`relative h-20 w-20 overflow-hidden border-4 ${
                theme === "dark" ? "border-bright-yellow" : "border-primary"
              }`}
            >
              <Image
                src={project.logo}
                alt={`${project.title} logo`}
                fill
                className="object-contain p-2"
              />
            </div>
            <div>
              <h1
                className={`text-4xl font-bold mb-2 ${
                  theme === "dark" ? "neon-text-yellow" : "text-primary"
                }`}
              >
                {project.title}
              </h1>
              <p className="text-lg text-bright-yellow/70">{project.type}</p>
            </div>
          </div>

          <p className="text-xl mb-6">{project.summary}</p>

          <div className="flex flex-wrap gap-3">
            {project.liveDemo && (
              <Link
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center px-4 py-2 ${
                  theme === "dark" ? "retro-btn-yellow" : "retro-btn"
                }`}
              >
                <Globe className="mr-2 h-4 w-4" />
                Live Demo
              </Link>
            )}
            {project.githubRepo && (
              <Link
                href={project.githubRepo}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center px-4 py-2 ${
                  theme === "dark" ? "retro-btn-yellow" : "retro-btn"
                }`}
              >
                <Github className="mr-2 h-4 w-4" />
                GitHub Repository
              </Link>
            )}
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Image Gallery */}
          <div className="lg:col-span-2">
            {/* Hero Image */}
            {activeImage && (
              <div
                className={`relative aspect-video mb-4 border-4 overflow-hidden cursor-pointer ${
                  theme === "dark"
                    ? "border-bright-yellow neon-border-yellow"
                    : "border-primary"
                }`}
                onClick={() => setLightboxOpen(true)}
              >
                <Image
                  src={activeImage}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            {/* Thumbnail Gallery */}
            {project.images && project.images.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {project.images.map((img, index) => (
                  <div
                    key={index}
                    className={`relative aspect-video border-2 overflow-hidden cursor-pointer transition-all ${
                      activeImage === img
                        ? theme === "dark"
                          ? "border-bright-yellow neon-border-yellow"
                          : "border-electric-blue"
                        : theme === "dark"
                        ? "border-bright-yellow/50"
                        : "border-primary/50"
                    }`}
                    onClick={() => setActiveImage(img)}
                  >
                    <Image
                      src={img}
                      alt={`${project.title} screenshot ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Description */}
            <div
              className={`mt-8 p-6 border-2 ${
                theme === "dark" ? "border-bright-yellow" : "border-primary"
              }`}
            >
              <h2
                className={`text-2xl font-bold mb-4 ${
                  theme === "dark" ? "text-bright-yellow" : "text-primary"
                }`}
              >
                Project Description
              </h2>
              <div className="prose prose-sm max-w-none">
                {project.description.split("\n\n").map((paragraph, idx) => {
                  if (paragraph.includes(":")) {
                    const [title, content] = paragraph.split(":");
                    return (
                      <div key={idx} className="mb-4">
                        <h3 className="font-bold">{title}:</h3>
                        <p>{content}</p>
                      </div>
                    );
                  }

                  if (paragraph.match(/^\d+\./)) {
                    return (
                      <div key={idx} className="mb-4">
                        <p className="font-bold">{paragraph.split("\n")[0]}</p>
                        <ul className="list-disc pl-5 mt-2">
                          {paragraph
                            .split("\n")
                            .slice(1)
                            .map((item, i) => (
                              <li key={i}>{item.replace(/^- /, "")}</li>
                            ))}
                        </ul>
                      </div>
                    );
                  }

                  return (
                    <p key={idx} className="mb-4">
                      {paragraph}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column - Project Details */}
          <div className="space-y-8">
            {/* Technologies Used */}
            <div
              className={`p-6 border-2 ${
                theme === "dark" ? "border-bright-yellow" : "border-primary"
              }`}
            >
              <h2
                className={`text-xl font-bold mb-4 ${
                  theme === "dark" ? "text-bright-yellow" : "text-primary"
                }`}
              >
                Technologies Used
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {project.techStack.map((tech) => (
                  <div
                    key={tech.name}
                    className={`flex items-center gap-2 p-3 border ${
                      theme === "dark"
                        ? "border-bright-yellow/50"
                        : "border-primary/50"
                    }`}
                  >
                    {tech.icon && (
                      <StackIcon
                        name={tech.icon}
                        style={{ height: 20, width: 20 }}
                      />
                    )}
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Features */}
            {project.keyFeatures && (
              <div
                className={`p-6 border-2 ${
                  theme === "dark" ? "border-bright-yellow" : "border-primary"
                }`}
              >
                <h2
                  className={`text-xl font-bold mb-4 ${
                    theme === "dark" ? "text-bright-yellow" : "text-primary"
                  }`}
                >
                  Key Features
                </h2>
                <ul className="space-y-2">
                  {project.keyFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span
                        className={`inline-block h-5 w-5 flex-shrink-0 ${
                          theme === "dark"
                            ? "text-bright-yellow"
                            : "text-primary"
                        }`}
                      >
                        •
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Challenges and Solutions */}
            {project.challenges && (
              <div
                className={`p-6 border-2 ${
                  theme === "dark" ? "border-bright-yellow" : "border-primary"
                }`}
              >
                <h2
                  className={`text-xl font-bold mb-4 ${
                    theme === "dark" ? "text-bright-yellow" : "text-primary"
                  }`}
                >
                  Challenges & Solutions
                </h2>
                <div className="space-y-4">
                  {project.challenges.map((item, index) => (
                    <div key={index}>
                      <h3 className="font-bold mb-1">Challenge:</h3>
                      <p className="mb-2 text-sm">{item.challenge}</p>
                      <h3 className="font-bold mb-1">Solution:</h3>
                      <p className="text-sm">{item.solution}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Next Project Navigation */}
        {nextProject && (
          <div className="mt-16 text-center">
            <h2 className="text-xl mb-4">Next Project</h2>
            <Link
              href={`/portfolio/${nextProject.id}`}
              className={`inline-flex items-center px-6 py-3 ${
                theme === "dark" ? "retro-btn-yellow" : "retro-btn"
              }`}
            >
              View {nextProject.title}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxOpen && activeImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setLightboxOpen(false)}
        >
          <div className="relative max-w-5xl max-h-[90vh]">
            <Image
              src={activeImage}
              alt={project.title}
              width={1200}
              height={800}
              className="object-contain max-h-[90vh]"
            />
            <button
              className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxOpen(false);
              }}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
