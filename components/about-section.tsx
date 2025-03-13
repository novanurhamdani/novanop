"use client";

import { useState } from "react";
import Image from "next/image";

interface Skill {
  name: string;
  category: string;
}

export function AboutSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const skills: Skill[] = [
    // Programming Languages
    { name: "HTML", category: "languages" },
    { name: "CSS", category: "languages" },
    { name: "JavaScript", category: "languages" },
    { name: "TypeScript", category: "languages" },
    { name: "PHP", category: "languages" },

    // Frameworks
    { name: "React.js", category: "frameworks" },
    { name: "Next.js", category: "frameworks" },
    { name: "React Native", category: "frameworks" },
    { name: "Node.js", category: "frameworks" },
    { name: "Express.js", category: "frameworks" },
    { name: "Tailwind", category: "frameworks" },
    { name: "Mantine UI", category: "frameworks" },

    // Developer Tools
    { name: "Git", category: "tools" },
    { name: "Docker", category: "tools" },
    { name: "AWS", category: "tools" },
    { name: "Cypress", category: "tools" },
    { name: "MongoDB", category: "tools" },

    // Software
    { name: "Jira", category: "software" },
    { name: "Confluence", category: "software" },
    { name: "Figma", category: "software" },
    { name: "WordPress", category: "software" },
  ];

  const categories = [
    { id: "all", label: "All" },
    { id: "languages", label: "Languages" },
    { id: "frameworks", label: "Frameworks" },
    { id: "tools", label: "Tools" },
    { id: "software", label: "Software" },
  ];

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Retro grid background with different color */}
      <div className="absolute inset-0 z-0 about-grid-bg"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 neon-text-pink">
            About Me
          </h2>
          <div className="w-24 h-1 bg-hot-pink mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Photo with retro frame */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute inset-0 border-4 border-hot-pink neon-border-pink transform rotate-3"></div>
              <div className="relative w-64 h-64 overflow-hidden border-4 border-hot-pink transform -rotate-3">
                <Image
                  src="/profile-photo.jpg"
                  alt="Nova Nurhamdani"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* Bio */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-electric-blue">
              Frontend Engineer
            </h3>
            <div className="space-y-4 text-foreground">
              <p>
                Frontend Engineer with 3+ years of experience in JavaScript and
                TypeScript, specializing in React.js, Next.js, and React Native.
                Proven track record of building scalable, user-friendly web and
                mobile applications. Skilled in state management (xState, Redux,
                React Context), dynamic form generation (React JSON Schema
                Form), and WordPress development, including custom plugin
                creation for seamless content management. Passionate about clean
                code, best practices, and delivering seamless digital
                experiences.
              </p>
            </div>
          </div>
        </div>

        {/* Skills section */}
        <div className="mt-16">
          <h3 className="text-xl font-bold mb-6 text-center text-bright-yellow">
            Technical Skills
          </h3>

          {/* Skill categories */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 text-sm transition-all ${
                  activeCategory === category.id
                    ? "retro-btn"
                    : "text-foreground hover:text-primary"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Skills grid with retro styling */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {filteredSkills.map((skill, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-3 border-2 border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-background transition-all duration-300"
              >
                <span className="text-center">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
