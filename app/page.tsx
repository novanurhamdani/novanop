"use client";

import { useState } from "react";
import Image from "next/image";
import { useGamification } from "../hooks/useGamification";
import {
  skillsData,
  projectsData,
  experienceData,
  badgesData,
} from "../lib/data";
import { Project } from "../types";

// Components
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Section from "./components/layout/Section";
import ProjectCard from "./components/features/projects/ProjectCard";
import ProjectModal from "./components/features/projects/ProjectModal";
import BadgeNotification from "./components/features/gamification/BadgeNotification";
import BadgeDisplay from "./components/features/gamification/BadgeDisplay";
import SkillCard from "./components/features/skills/SkillCard";
import ExperienceItem from "./components/features/experience/ExperienceItem";
import LevelUpNotification from "./components/features/gamification/LevelUpNotification";
import LoadingScreen from "./components/features/loading/LoadingScreen";

export default function Home() {
  // Loading state
  const [isLoading, setIsLoading] = useState(true);

  // Gamification hook
  const {
    state,
    addXp,
    visitSection,
    viewProject,
    clickGithub,
    clickLogo,
    submitContactForm,
    showBadgeNotification,
  } = useGamification();

  // State
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Track if we need to show level up notification
  const [showLevelUp, setShowLevelUp] = useState(false);
  const [currentLevel, setCurrentLevel] = useState(state.level);

  // Handle loading complete
  const handleLoadComplete = () => {
    setIsLoading(false);
    // Award XP for completing the loading process
    addXp(10, "complete-loading");
  };

  // Check for level up
  if (state.level > currentLevel) {
    setCurrentLevel(state.level);
    setShowLevelUp(true);
    setTimeout(() => setShowLevelUp(false), 3000);
  }

  // Handle project click
  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    viewProject(project.id);
  };

  // Handle contact form submission
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitContactForm();

    // In a real app, you'd send the form data to a server here
    const form = e.target as HTMLFormElement;
    form.innerHTML = `<div class="text-center p-8">
      <h3 class="font-bold text-2xl text-success mb-2">Message Dispatched!</h3>
      <p>Thank you for reaching out. The alchemist will reply shortly.</p>
    </div>`;
  };

  return (
    <>
      {isLoading ? (
        <LoadingScreen onLoadComplete={handleLoadComplete} />
      ) : (
        <>
          <Navbar state={state} clickLogo={clickLogo} />

          <main className="container mx-auto px-6">
            {/* Hero Section */}
            <Section
              id="hero"
              className="min-h-[calc(100vh-6rem)] relative reveal"
            >
              {/* Alchemist-themed background */}
              <div className="hero-background">
                <div className="magic-circle magic-circle-1"></div>
                <div className="magic-circle magic-circle-2"></div>
                <div className="magic-circle magic-circle-3"></div>
                <div className="magic-particles"></div>
                <div className="magic-runes"></div>
                <div className="alchemy-symbol alchemy-symbol-1"></div>
                <div className="alchemy-symbol alchemy-symbol-2"></div>
                <div className="alchemy-symbol alchemy-symbol-3"></div>
              </div>

              <div
                className="absolute w-full h-full overflow-visible pointer-events-none hidden xl:block mt-20"
                style={{ zIndex: 5 }}
              >
                {/* Top left snippet */}
                <div
                  className="floating-snippet float-1"
                  style={{ top: "2%", left: "5%", maxWidth: "220px" }}
                >
                  <div className="code-content">
                    <span className="keyword">import</span> React{" "}
                    <span className="keyword">from</span>{" "}
                    <span className="string">&apos;react&apos;</span>;
                  </div>
                </div>

                {/* Top right snippet */}
                <div
                  className="floating-snippet float-2"
                  style={{ top: "2%", right: "22%", maxWidth: "280px" }}
                >
                  <div className="code-content">
                    <span className="keyword">import</span> Image{" "}
                    <span className="keyword">from</span> {"'"}
                    <span className="string">@next/image</span>
                    {"'"};
                  </div>
                </div>

                {/* Bottom right snippet */}
                <div
                  className="floating-snippet float-3"
                  style={{ bottom: "45%", right: "37%", maxWidth: "300px" }}
                >
                  <div className="code-content">
                    <div>
                      <span className="comment">{"// Magic happens here"}</span>
                    </div>
                    <div>
                      <span className="keyword">export default</span>{" "}
                      <span className="keyword">function</span> Alchemist(){" "}
                      {"{"}
                    </div>
                    <div>
                      &nbsp;&nbsp;<span className="keyword">return</span> magic;
                    </div>
                    <div>{"}"}</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center justify-between relative z-10 mt-40">
                <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
                  <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-black uppercase">
                    <span className="text-primary">The Code</span>
                    <span className="block">Alchemist</span>
                  </h1>
                  <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto md:mx-0 text-foreground/80">
                    Transmuting ideas into powerful, interactive, and beautiful
                    software.
                  </p>
                  <a
                    href="#about"
                    className="mt-8 inline-block bg-primary text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-purple-600 transform hover:-translate-y-1 transition-all duration-300"
                  >
                    Begin The Experiment
                  </a>
                </div>

                {/* Hero image */}
                <div className="w-full md:w-1/2 flex justify-center">
                  <Image
                    src="/images/dark-hero.png"
                    alt="Code Alchemist hero illustration"
                    width={500}
                    height={500}
                    className="max-w-full h-auto"
                    priority
                  />
                </div>
              </div>
            </Section>

            {/* About Section */}
            <Section
              id="about"
              title="The Alchemist's Story"
              onVisible={visitSection}
            >
              <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-1 flex justify-center">
                  <div className="relative w-48 h-48 md:w-64 md:h-64 profile-image-container">
                    <div className="profile-image-inner">
                      <div className="profile-image-front">
                        <Image
                          src="/images/photo.png"
                          alt="The Code Alchemist"
                          fill
                          className="border-4 shadow-lg shadow-primary/20 object-cover scale-105"
                        />
                      </div>
                      <div className="profile-image-back">
                        <Image
                          src="/images/photo-real.png"
                          alt="The Real Me"
                          fill
                          className="border-4 shadow-lg shadow-primary/20 object-cover scale-105"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-2 text-foreground/90 space-y-4 text-lg">
                  <p>
                    Hello! I&apos;m a passionate Software Engineer who views
                    code as a form of modern-day alchemy. I thrive on
                    transforming complex problems and abstract ideas into
                    elegant, functional, and user-centric applications.
                  </p>
                  <p>
                    My &quot;laboratory&quot; is filled with the latest
                    technologies, from robust backend frameworks to dynamic
                    frontend libraries. I believe in writing clean, scalable
                    code and am always experimenting with new
                    &quot;potions&quot; and &quot;spells&quot; to push the
                    boundaries of what&apos;s possible on the web.
                  </p>
                  <p>
                    This portfolio is my interactive spellbook. Feel free to
                    explore my creations and discover the magic behind the code.
                  </p>
                </div>
              </div>
            </Section>

            {/* Skills Section */}
            <Section
              id="skills"
              title="The Potion Rack"
              onVisible={visitSection}
            >
              <div className="py-8">
                <div className="skills-ticker mb-8">
                  <div className="skills-row skills-row-1">
                    {[...skillsData, ...skillsData, ...skillsData].map(
                      (skill, index) => (
                        <div
                          key={`row1-${index}`}
                          className="flex-shrink-0"
                          onClick={() => addXp(5, `click-skill-${index}`)}
                        >
                          <SkillCard
                            skill={skill}
                            onClick={() => {}}
                            blackAndWhite={true}
                          />
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </Section>

            {/* Projects Section */}
            <Section
              id="projects"
              title="Successful Experiments"
              onVisible={visitSection}
            >
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projectsData.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    onClick={() => handleProjectClick(project)}
                  />
                ))}
              </div>
            </Section>

            {/* Experience Section */}
            <Section
              id="experience"
              title="The Alchemist's Journey"
              onVisible={visitSection}
            >
              <div className="relative max-w-2xl mx-auto border-l-2 border-border pl-8">
                {experienceData.map((exp, index) => (
                  <ExperienceItem key={index} experience={exp} />
                ))}
              </div>
            </Section>

            {/* Badges Section */}
            <Section id="badges" title="Trophy Case" onVisible={visitSection}>
              <div className="flex flex-wrap justify-center gap-6">
                {Object.values(badgesData).map((badge, index) => (
                  <BadgeDisplay
                    key={index}
                    badge={{
                      ...badge,
                      unlocked: state.unlockedBadges.includes(badge.name),
                    }}
                  />
                ))}
              </div>
            </Section>

            {/* Contact Section */}
            <Section id="contact" title="Send a Raven" onVisible={visitSection}>
              <form
                id="contact-form"
                className="max-w-xl mx-auto bg-card p-8 rounded-lg border border-border"
                onSubmit={handleContactSubmit}
              >
                <div className="mb-4">
                  <label htmlFor="name" className="block mb-2 font-bold">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full bg-background border border-border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block mb-2 font-bold">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-background border border-border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block mb-2 font-bold">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full bg-background border border-border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-purple-500 transform hover:-translate-y-1 transition-all duration-300"
                >
                  Dispatch Message
                </button>
              </form>
            </Section>
          </main>

          <Footer />

          {/* Project Modal */}
          {selectedProject && (
            <ProjectModal
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
              onGithubClick={clickGithub}
            />
          )}

          {/* Badge Notification */}
          {showBadgeNotification && (
            <BadgeNotification badge={showBadgeNotification} />
          )}

          {/* Level Up Notification */}
          {showLevelUp && <LevelUpNotification level={state.level} />}
        </>
      )}
    </>
  );
}
