import { Education } from "../types";
import { capabilityGroups } from "./capabilities";
import { experience } from "./experience";
import { projects } from "./projects";
import { site } from "./site";

/**
 * Resume data - composed from the same sources of truth as the rest of
 * the site. Experience, projects and capabilities are imported, not
 * duplicated. Only fields with no canonical home live here.
 */
export const resume = {
  name: site.name,
  title: site.title,
  location: site.location,
  url: site.url,

  summary: [
    "Frontend-heavy Full-Stack Software Engineer building products, interfaces, and the systems behind them.",
    "Strong frontend and product engineering experience with React, Next.js, TypeScript and React Native, with hands-on backend development using Go, Node.js and PostgreSQL.",
  ],

  /** Canonical professional experience - lib/experience.ts */
  experience,

  /**
   * Selected work for a recruiter audience - flagship builds plus
   * shipped legacy projects. Planned lab items stay off the resume.
   */
  selectedWork: ["loomoda", "repicode", "cumentor", "starter-crowd-chain"]
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter((p) => p !== undefined),

  /** Canonical capability groups - lib/capabilities.ts */
  engineering: capabilityGroups.filter(
    (g) => g.title !== "Currently Exploring",
  ),

  /** Canonical exploring list - lib/capabilities.ts */
  exploring:
    capabilityGroups.find((g) => g.title === "Currently Exploring")?.items ??
    [],

  /**
   * Education - verified from the repository's prior CV data
   * (lib/data.ts history). No other education records exist.
   */
  education: [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of the People",
      graduationDate: "Expected Graduation: 2028",
      description: "Currently pursuing a degree in Computer Science.",
    },
  ] satisfies Education[],

  closing: "Open to interesting software engineering opportunities.",
};
