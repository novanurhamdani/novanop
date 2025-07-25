"use client";

import { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useGamification } from "../hooks/useGamification";
import { useAnalytics } from "../hooks/useAnalytics";
import {
  skillsData,
  projectsData,
  experienceData,
  educationData,
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
import EducationItem from "./components/features/education/EducationItem";
import LevelUpNotification from "./components/features/gamification/LevelUpNotification";
import LoadingScreen from "./components/features/loading/LoadingScreen";

export default function Home() {
  // Loading state
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();
  const { trackPageView, trackEvent } = useAnalytics();

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
    // Track page view when site loads
    trackPageView(
      pathname,
      "The Code Alchemist - Novanop | Gamified Developer Portfolio"
    );
  };

  // Check for level up
  if (state.level > currentLevel) {
    setCurrentLevel(state.level);
    setShowLevelUp(true);
    setTimeout(() => setShowLevelUp(false), 3000);
    trackEvent("level_up", { level: state.level });
  }

  // Handle project click
  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    viewProject(project.id);
    trackEvent("view_project", {
      project_id: project.id,
      project_title: project.title,
    });
  };

  // Handle contact form submission
  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    submitContactForm();
    trackEvent("contact_form_submit", { source: "portfolio" });

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    // Show loading state
    form.innerHTML = `<div class="text-center p-8">
      <h3 class="font-bold text-xl mb-2">Sending message...</h3>
      <div class="loading-spinner mx-auto"></div>
    </div>`;

    try {
      // Send form data to our API route
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });

      if (response.ok) {
        // Success message
        form.innerHTML = `<div class="text-center p-8">
          <h3 class="font-bold text-2xl text-success mb-2">Message Dispatched!</h3>
          <p>Thank you for reaching out. The alchemist will reply shortly.</p>
        </div>`;
      } else {
        // Error message
        form.innerHTML = `<div class="text-center p-8">
          <h3 class="font-bold text-2xl text-error mb-2">Spell Failed!</h3>
          <p>There was an error sending your message. Please try again later.</p>
          <button class="mt-4 bg-primary text-white font-bold py-2 px-4 rounded-full" 
            onclick="window.location.reload()">Try Again</button>
        </div>`;
      }
    } catch {
      // Error message
      form.innerHTML = `<div class="text-center p-8">
        <h3 class="font-bold text-2xl text-error mb-2">Spell Failed!</h3>
        <p>There was an error sending your message. Please try again later.</p>
        <button class="mt-4 bg-primary text-white font-bold py-2 px-4 rounded-full" 
          onclick="window.location.reload()">Try Again</button>
      </div>`;
    }
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
                      <span className="keyword">function</span> HelloWorld(){" "}
                      {"{"}
                    </div>
                    <div>
                      &nbsp;&nbsp;<span className="keyword">return</span>{" "}
                      &apos;Hello, I am Nova&apos;;
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
                  <div className="flex flex-col sm:flex-row gap-4 mt-8">
                    <a
                      href="#about"
                      className="inline-block bg-primary text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-purple-600 transform hover:-translate-y-1 transition-all duration-300"
                    >
                      Ignite the Formula
                    </a>
                    <a
                      href="/Resume_Nova_Nurhamdani.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-card border-2 border-primary text-primary font-bold py-3 px-8 rounded-full text-lg hover:bg-primary hover:text-white transform hover:-translate-y-1 transition-all duration-300"
                    >
                      View My Resume
                    </a>
                  </div>
                </div>

                {/* Hero image */}
                <div className="w-full md:w-1/2 flex justify-center">
                  <div className="relative floating-hero-image">
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
              </div>
            </Section>

            {/* About Section */}
            <Section
              id="about"
              title="The Nova's Story"
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
                    Hello! I&apos;m{" "}
                    <span className="text-primary font-bold">
                      Nova Nurhamdani
                    </span>
                    , a passionate Software Engineer with{" "}
                    <span className="text-primary font-bold">
                      over 4 years of experience
                    </span>{" "}
                    as a Frontend Engineer, now expanding my craft into
                    Full-Stack development. Like an alchemist of old, I
                    transform complex problems and abstract ideas into elegant,
                    functional, and user-centric digital solutions.
                  </p>
                  <p>
                    My &quot;laboratory&quot; is filled with modern web
                    technologies—React, Next.js, TypeScript, and Node.js are my
                    primary elements. After mastering frontend transmutations,
                    I&apos;ve begun exploring the deeper backend realms,
                    combining both to create full-stack elixirs. I believe in
                    writing clean, scalable code and am constantly experimenting
                    with new &quot;potions&quot; and &quot;spells&quot; to push
                    the boundaries of what&apos;s possible on the web.
                  </p>
                  <p>
                    This portfolio is my interactive spellbook, showcasing the
                    magical results of combining technical expertise with
                    creative problem-solving. Feel free to explore my creations
                    and discover the alchemy behind the code.
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
              title="Completed Incantations"
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
              title="My Journey"
              onVisible={visitSection}
            >
              <div className="relative max-w-2xl mx-auto">
                <div className="experience-timeline">
                  <div className="experience-line"></div>
                  <div className="experience-fill-line"></div>
                </div>
                <div className="pl-8">
                  {experienceData.map((exp, index) => (
                    <div
                      key={index}
                      className="experience-item"
                      style={
                        {
                          "--index": index,
                        } as React.CSSProperties
                      }
                    >
                      <ExperienceItem
                        experience={exp}
                        isLast={index === experienceData.length - 1}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </Section>

            {/* Education Section */}
            <Section
              id="education"
              title="Academic Pursuits"
              onVisible={visitSection}
            >
              <div className="relative max-w-2xl mx-auto">
                <div className="education-timeline">
                  <div className="education-line"></div>
                  <div className="education-fill-line"></div>
                </div>
                <div className="pl-8">
                  {educationData.map((edu, index) => (
                    <EducationItem key={index} education={edu} />
                  ))}
                </div>
              </div>
            </Section>

            {/* Badges Section */}
            <Section
              id="badges"
              title="Visitor Achievement Unlocked"
              onVisible={visitSection}
            >
              <div className="text-center mb-6 max-w-2xl mx-auto">
                <p className="text-foreground/80">
                  As you explore this portfolio, you&apos;ll unlock various
                  achievements. Each badge represents a milestone in your
                  journey through my work. Collect them all to fully experience
                  The Code Alchemist&apos;s realm!
                </p>
              </div>
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
              <div className="text-center mt-6 text-sm text-foreground/60">
                <p>
                  Unlocked badges will glow with magical energy. Keep exploring
                  to unlock them all!
                </p>
              </div>
            </Section>

            {/* Contact Section */}
            <Section
              id="contact"
              title="Whisper a Spell"
              onVisible={visitSection}
            >
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
              onClose={() => {
                setSelectedProject(null);
                trackEvent("close_project_modal", {
                  project_id: selectedProject.id,
                });
              }}
              onGithubClick={(id) => {
                clickGithub(id);
                trackEvent("click_github", { project_id: id });
              }}
            />
          )}

          {/* Badge Notification */}
          {showBadgeNotification && (
            <BadgeNotification badge={showBadgeNotification} />
          )}

          {/* Social Network */}
          <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-40">
            <a
              href="https://github.com/novanurhamdani"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card hover:bg-card/80 p-3 rounded-full shadow-lg transition-all duration-300 hover:transform hover:scale-110"
              aria-label="GitHub Profile"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/nova-nurhamdani/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card hover:bg-card/80 p-3 rounded-full shadow-lg transition-all duration-300 hover:transform hover:scale-110"
              aria-label="LinkedIn Profile"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>

          {/* Level Up Notification */}
          {showLevelUp && <LevelUpNotification level={state.level} />}
        </>
      )}
    </>
  );
}
