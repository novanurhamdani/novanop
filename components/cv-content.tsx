"use client";

export function CVContent() {
  return (
    <div className="mx-auto max-w-4xl space-y-8">
      {/* Header Section */}
      <div className="border-b pb-8">
        <h1 className="mb-4 text-4xl font-bold">John Doe</h1>
        <p className="text-xl text-muted-foreground">Full Stack Developer</p>
        <div className="mt-4 flex flex-wrap gap-4 text-sm text-muted-foreground">
          <p>📧 john.doe@example.com</p>
          <p>📱 +1 234 567 890</p>
          <p>📍 New York, USA</p>
        </div>
      </div>

      {/* Professional Summary */}
      <section>
        <h2 className="mb-4 text-2xl font-semibold">Professional Summary</h2>
        <p className="text-muted-foreground">
          Experienced Full Stack Developer with 5+ years of expertise in
          building scalable web applications. Proficient in modern JavaScript
          frameworks and cloud technologies.
        </p>
      </section>

      {/* Experience */}
      <section>
        <h2 className="mb-4 text-2xl font-semibold">Work Experience</h2>
        <div className="space-y-6">
          <div className="border-l-2 border-primary pl-4">
            <h3 className="text-xl font-medium">Senior Full Stack Developer</h3>
            <p className="text-muted-foreground">
              Tech Corp Inc. • 2020 - Present
            </p>
            <ul className="mt-2 list-inside list-disc text-muted-foreground">
              <li>Led development of microservices architecture</li>
              <li>
                Implemented CI/CD pipelines reducing deployment time by 40%
              </li>
              <li>Mentored junior developers and conducted code reviews</li>
            </ul>
          </div>
          <div className="border-l-2 border-primary pl-4">
            <h3 className="text-xl font-medium">Full Stack Developer</h3>
            <p className="text-muted-foreground">
              StartUp Solutions • 2018 - 2020
            </p>
            <ul className="mt-2 list-inside list-disc text-muted-foreground">
              <li>Developed and maintained multiple client projects</li>
              <li>Optimized database queries improving performance by 50%</li>
              <li>Implemented responsive designs and accessibility features</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section>
        <h2 className="mb-4 text-2xl font-semibold">Technical Skills</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <h3 className="mb-2 font-medium">Frontend</h3>
            <div className="flex flex-wrap gap-2">
              {["React", "Next.js", "TypeScript", "Tailwind CSS"].map(
                (skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-secondary px-3 py-1 text-sm"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </div>
          <div>
            <h3 className="mb-2 font-medium">Backend</h3>
            <div className="flex flex-wrap gap-2">
              {["Node.js", "Python", "PostgreSQL", "AWS"].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-secondary px-3 py-1 text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section>
        <h2 className="mb-4 text-2xl font-semibold">Education</h2>
        <div className="border-l-2 border-primary pl-4">
          <h3 className="text-xl font-medium">
            Bachelor of Science in Computer Science
          </h3>
          <p className="text-muted-foreground">
            University of Technology • 2014 - 2018
          </p>
          <p className="mt-2 text-muted-foreground">
            Graduated with Honors. Specialized in Software Engineering.
          </p>
        </div>
      </section>
    </div>
  );
}
