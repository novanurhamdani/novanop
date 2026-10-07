import { Experience } from "../types";

/**
 * Real-world professional experience. Evidence only - no invented metrics,
 * no confidential details, no fabricated UI representations.
 * Ordered most-recent-first. Includes non-engineering roles that are part
 * of the verified career history - they are labelled by their actual role.
 */
export const experience: Experience[] = [
  {
    company: "Quickbill Indonesia",
    role: "Frontend Developer",
    period: "Nov 2025 - Aug 2026",
    description:
      "Frontend development on production payment infrastructure - payment history, bulk invoicing, backoffice and internal UI systems.",
    areas: [
      "Payment History",
      "Bulk Invoice",
      "Backoffice",
      "Internal UI components",
      "Product UI revamp",
      "Frontend workflows",
    ],
    stack: [
      "Next.js",
      "React",
      "React Query",
      "Jotai",
      "Tailwind CSS",
      "Flutter",
    ],
  },
  {
    company: "Hijra",
    role: "Frontend Developer",
    period: "May 2022 - Feb 2025",
    description:
      "Worked on financial workflows, internal tools, and mobile applications across web and React Native.",
    areas: [
      "MUAP Generator",
      "Risk Review Generator",
      "React Native apps",
      "Storybook",
      "WordPress integration",
      "Mentoring",
    ],
  },
  {
    company: "Cindrum",
    role: "Junior Vue Developer",
    period: "Jun 2021 - Apr 2022",
    description:
      "Developed frontend experiences for cryptocurrency exchange and wallet platforms using Vue, translating UI/UX designs into production interfaces.",
    areas: [
      "Exchange & wallet frontends",
      "UI/UX to Vue implementation",
      "Usability improvements",
    ],
  },
  {
    company: "KSP Mitra Dhuafa (Komida)",
    role: "Internal Audit Manager",
    period: "Jun 2016 - Jan 2020",
    description:
      "Managed a 35-person internal audit team, conducting strategic and technical reviews across financial operations, quality controls, schedules, and budgets.",
    areas: [
      "Team management (35 staff)",
      "Financial data analysis",
      "Fraud detection support",
      "Process & policy improvements",
      "Staff training & mentoring",
    ],
  },
  {
    company: "KSP Mitra Dhuafa (Komida)",
    role: "Management Information System Officer",
    period: "May 2010 - Jun 2016",
    description:
      "Managed day-to-day operations of the company information system, including system maintenance, bug fixes, reporting features, research, and data-driven reporting.",
    areas: [
      "Information system operations",
      "Reporting features",
      "Bug fixes & maintenance",
      "Research & reporting",
    ],
    stack: ["HTML", "CSS", "ASP.NET"],
  },
  {
    company: "Worxcode Imagineering Indonesia",
    role: "Junior Programmer (Internship)",
    period: "Jun 2009 - Dec 2009",
    description:
      "Assisted senior programmers in developing features for large client projects, gaining hands-on experience with PHP, JavaScript, AJAX, HTML and CSS.",
    stack: ["HTML", "CSS", "PHP", "JavaScript", "AJAX"],
  },
];
