"use client";

import { useState } from "react";
import { experiences } from "@/constants/experience";

export function ExperienceSection() {
  const [activeExperience, setActiveExperience] = useState<number>(0);

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Retro grid background with different color */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-[#1E1E1E] bg-[linear-gradient(to_right,rgba(0,255,0,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,255,0,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 neon-text">
            Experience
          </h2>
          <div className="w-24 h-1 bg-electric-blue mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Timeline navigation */}
          <div className="md:col-span-4 lg:col-span-3">
            <div className="sticky top-24 space-y-1">
              {experiences.map((experience, index) => (
                <button
                  key={index}
                  onClick={() => setActiveExperience(index)}
                  className={`w-full text-left p-4 transition-all duration-300 border-l-4 ${
                    activeExperience === index
                      ? "border-l-electric-blue neon-text bg-background/50"
                      : "border-l-muted hover:border-l-electric-blue"
                  }`}
                >
                  <div className="text-sm font-bold">{experience.title}</div>
                  <div className="text-xs text-muted-foreground">
                    {experience.company}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Experience details */}
          <div className="md:col-span-8 lg:col-span-9">
            <div className="relative border-2 border-electric-blue p-6 neon-border bg-background/50">
              {/* Retro terminal header */}
              <div className="absolute top-0 left-0 right-0 bg-electric-blue text-background px-4 py-1 flex items-center">
                <div className="w-3 h-3 rounded-full bg-bright-yellow mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-hot-pink mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-lime-green mr-2"></div>
                <div className="text-xs font-mono">career_history.exe</div>
              </div>

              <div className="pt-6">
                <h3 className="text-xl font-bold neon-text mb-1">
                  {experiences[activeExperience].title}
                </h3>
                <h4 className="text-lg text-electric-blue mb-2">
                  {experiences[activeExperience].company}
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  {experiences[activeExperience].period}
                </p>

                {/* Experience description with retro terminal styling */}
                <div className="font-mono text-sm space-y-2 text-foreground/90">
                  <div
                    className="[&_ul]:list-disc [&_ul]:ml-4 [&_ol]:list-decimal [&_ol]:ml-4 [&_li]:mt-1"
                    dangerouslySetInnerHTML={{
                      __html: experiences[activeExperience].description,
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Education section */}
            <div className="mt-8 border-2 border-electric-blue p-6 neon-border bg-background/50">
              <h3 className="text-xl font-bold neon-text mb-6">Education</h3>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg text-electric-blue mb-1">
                    Bachelor of Science in Computer Science
                  </h4>
                  <p className="text-base mb-1">University of the People</p>
                  <p className="text-sm text-muted-foreground mb-2">
                    Expected Graduation: 2028
                  </p>
                  <div className="text-sm space-y-1">
                    <p>Currently pursuing a degree in Computer Science.</p>
                    <p>Current GPA: 3.84</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
