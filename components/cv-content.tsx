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
          <p>📍 Jakarta, Indonesia</p>
        </div>
      </div>

      {/* Professional Summary */}
      <section>
        <h2 className="mb-4 text-2xl font-semibold">Professional Summary</h2>
        <p className="text-muted-foreground text-justify">
          I am a self-taught Software Engineer based in Indonesia who focuses on
          JavaScript using React.js and Next.js libraries/frameworks. With 4+
          years of experience in web development, I specialize in
          JavaScript/TypeScript, React.js, Next.js, and Node.js.
          <br />
          <br />I am passionate about creating efficient and scalable solutions
          while maintaining clean code practices. I enjoy being challenged and
          engaging with projects that require me to work outside my comfort and
          knowledge set, as learning new languages and development techniques is
          important to me. I am always open to learning new things and
          continually strive to improve my skills and deliver high-quality work.
        </p>
      </section>

      {/* Skills */}
      <section>
        <h2 className="mb-4 text-2xl font-semibold">Technical Skills</h2>
        <div className="space-y-6">
          {/* Frontend Skills */}
          <div>
            <h3 className="mb-2 text-md font-medium">Frontend Development</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "React.js",
                "Next.js",
                "TypeScript",
                "JavaScript",
                "HTML",
                "CSS",
                "Tailwind CSS",
                "React Native",
                "Sass",
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

          {/* Backend Skills */}
          <div>
            <h3 className="mb-2 text-md font-medium">Backend Development</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Node.js",
                "Express.js",
                "PostgreSQL",
                "MongoDB",
                "Firebase",
                "MySQL",
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

          {/* Tools & Others */}
          <div>
            <h3 className="mb-2 text-md font-medium">Tools & Other Skills</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Git",
                "Figma",
                "Adobe Photoshop",
                "Adobe Illustrator",
                "WordPress",
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
                <p className="mt-4 text-sm text-muted-foreground whitespace-pre-line">
                  {experience.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
