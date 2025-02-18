"use client";

import { experiences } from "@/constants/experience";

export function CVContent() {
  return (
    <div className="mx-auto max-w-4xl space-y-8">
      {/* Header Section */}
      <div className="border-b pb-8">
        <h1 className="mb-4 text-4xl font-bold">Nova Nurhamdani</h1>
        <p className="text-xl text-muted-foreground">Software Engineer</p>
        <div className="mt-4 flex flex-wrap gap-4 text-sm text-muted-foreground">
          <p>📧 nova.nurhamdani@gmail.com</p>
          <p>📱 +62 896 8311 6161</p>
          <p>📍 Bogor, Indonesia</p>
        </div>
      </div>

      {/* Professional Summary */}
      <section>
        <h2 className="mb-4 text-2xl font-semibold">Professional Summary</h2>
        <p className="text-muted-foreground text-justify">
          Enthusiastic Associate Frontend Engineer with 3+ years of experience,
          particularly in Javascript and Typescript. Passionate about clean code
          and best practices, I take pride in creating seamless, visually
          appealing, and highly functional digital experiences.
          <br />
          <br />I enjoy being challenged and engaging with projects that require
          me to work outside my comfort and knowledge set, as learning new
          languages and development techniques is important to me. I am always
          open to learning new things and continually strive to improve my
          skills and deliver high-quality work.
        </p>
      </section>

      {/* Skills */}
      <section>
        <h2 className="mb-4 text-2xl font-semibold">Technical Skills</h2>
        <div className="space-y-6">
          {/* Programming Languages */}
          <div>
            <h3 className="mb-2 text-md font-medium">Programming Languages</h3>
            <div className="flex flex-wrap gap-2">
              {["HTML", "CSS", "JavaScript", "TypeScript", "PHP"].map(
                (skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-primary px-3 py-1 text-xs text-primary-foreground"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Framework Skills */}
          <div>
            <h3 className="mb-2 text-md font-medium">Framework</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "React.js",
                "Next.js",
                "React Native",
                "Node.js",
                "Express.js",
                "Tailwind",
                "Mantine UI",
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-primary px-3 py-1 text-xs text-primary-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Developer Tools */}
          <div>
            <h3 className="mb-2 text-md font-medium">Developer Tools</h3>
            <div className="flex flex-wrap gap-2">
              {["Git", "Docker", "AWS", "Cypress", "MongoDB"].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-primary px-3 py-1 text-xs text-primary-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Software */}
          <div>
            <h3 className="mb-2 text-md font-medium">Software</h3>
            <div className="flex flex-wrap gap-2">
              {["Jira", "Confluence", "Figma", "WordPress"].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-primary px-3 py-1 text-xs text-primary-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section>
        <h2 className="mb-4 text-2xl font-semibold">Work Experience</h2>
        <div className="space-y-6">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl backdrop-blur-md bg-background/30 border border-muted/30 p-6 shadow-lg transition-all hover:shadow-xl hover:-translate-y-1 w-full"
            >
              {/* Glassmorphism effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-background/5 opacity-50" />

              {/* Content */}
              <div className="relative">
                <h3 className="text-xl font-medium text-primary">
                  {experience.title}
                </h3>
                <p className="text-muted-foreground mt-1 font-medium">
                  {experience.company}
                </p>
                <p className="text-sm text-muted-foreground/80 mt-1">
                  {experience.period}
                </p>
                <div
                  className="mt-4 text-sm text-muted-foreground [&_ul]:list-disc [&>ol]:list-decimal [&_ul]:ml-4 [&>ol]:ml-4 [&_li]:mt-1"
                  dangerouslySetInnerHTML={{ __html: experience.description }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section>
        <h2 className="mb-4 text-2xl font-semibold">Education</h2>
        <div className="space-y-6">
          <div className="group relative overflow-hidden rounded-xl backdrop-blur-md bg-background/30 border border-muted/30 p-6 shadow-lg transition-all hover:shadow-xl hover:-translate-y-1 w-full">
            {/* Glassmorphism effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-background/5 opacity-50" />

            {/* Content */}
            <div className="relative">
              <h3 className="text-xl font-medium text-primary">
                Bachelor of Science in Computer Science
              </h3>
              <p className="text-muted-foreground mt-1 font-medium">
                University of the People
              </p>
              <p className="text-sm text-muted-foreground/80 mt-1">
                Expected Graduation: 2028
              </p>
              <div className="mt-4 text-sm text-muted-foreground space-y-2">
                <p>Currently studying</p>
                <p>Current GPA: 3.84</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
