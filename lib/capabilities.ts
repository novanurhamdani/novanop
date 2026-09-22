import { CapabilityGroup } from "../types";

/** "How I Build" pipeline: problem → product → interface → api → data → deployment */
export const buildFlow = [
  "Problem",
  "Product",
  "Interface",
  "API",
  "Data",
  "Deployment",
];

/** Tools in the workshop - grouped by discipline, typography over logo walls. */
export const capabilityGroups: CapabilityGroup[] = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "React Native", "TanStack Query"],
  },
  {
    title: "Backend",
    items: ["Go", "Node.js", "REST APIs"],
  },
  {
    title: "Data",
    items: ["PostgreSQL"],
  },
  {
    title: "Engineering",
    items: [
      "API Design",
      "Business Workflows",
      "Domain Modeling",
      "Modular Architecture",
      "Product Engineering",
    ],
  },
  {
    title: "Currently Exploring",
    items: ["Go", "System Design", "AI Engineering"],
  },
];
