import { JourneyMilestone } from "../types";

/**
 * Compact evolution timeline - the real career story, not a straight-line
 * ladder. Software, then business/finance operations, then back to software.
 * Full career history lives on the resume.
 */
export const journey: JourneyMilestone[] = [
  {
    year: "2009",
    label: "Junior Programmer",
    description: "First professional programming experience.",
  },
  {
    year: "2010-2016",
    label: "Information Systems",
    description:
      "Working with business systems, reporting, data, and internal tools.",
  },
  {
    year: "2016-2020",
    label: "Audit & Operations",
    description:
      "Managing a 35-person internal audit team and working deeply with financial operations.",
  },
  {
    year: "2020",
    label: "Independent Business",
    description:
      "Exploring entrepreneurship through a small printing business.",
  },
  {
    year: "2021",
    label: "Return to Software",
    description:
      "Returning to the IT industry after a period of entrepreneurship.",
  },
  {
    year: "2021-2022",
    label: "Software Development",
    description: "Building cryptocurrency products with Vue.",
  },
  {
    year: "2022-2025",
    label: "Frontend Engineering",
    description: "Building financial products and production interfaces.",
  },
  {
    year: "2025-2026",
    label: "Production Software",
    description:
      "Working on payment infrastructure and complex business workflows.",
  },
  {
    year: "2026-Present",
    label: "Full-Stack Product Engineering",
    description:
      "Expanding from interfaces into APIs, data, architecture, and the systems behind products.",
  },
];
