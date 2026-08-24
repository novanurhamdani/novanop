import { Skill, Project, Experience, Education, Badge } from "../types";

// Skills data
export const skillsData: Skill[] = [
  // Programming Languages
  {
    name: "HTML",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    proficiency: 5,
  },
  {
    name: "CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    proficiency: 5,
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    proficiency: 5,
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    proficiency: 5,
  },
  {
    name: "Go",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
    proficiency: 2,
  },
  {
    name: "PHP",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    proficiency: 3,
  },

  // Frameworks & Libraries
  {
    name: "React.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    proficiency: 5,
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    proficiency: 5,
  },
  {
    name: "React Native",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    proficiency: 4,
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    proficiency: 4,
  },
  {
    name: "Express.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    proficiency: 4,
  },
  {
    name: "Flutter",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
    proficiency: 2,
  },
  {
    name: "Tailwind CSS",
    icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    proficiency: 5,
  },
  {
    name: "Mantine UI",
    icon: "https://mantine.dev/favicon.svg",
    proficiency: 4,
  },
  {
    name: "Redux",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    proficiency: 4,
  },
  {
    name: "Zustand",
    icon: "https://user-images.githubusercontent.com/958486/218346783-72be5ae3-b953-4dd7-b239-788a882fdad6.svg",
    proficiency: 4,
  },
  {
    name: "Jotai",
    icon: "https://avatars.githubusercontent.com/u/68865377?s=200&v=4",
    proficiency: 4,
  },
  {
    name: "XState",
    icon: "https://xstate.js.org/logo-white.svg",
    proficiency: 3,
  },

  // Data & Databases
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    proficiency: 3,
  },
  {
    name: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    proficiency: 3,
  },
  {
    name: "Prisma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
    proficiency: 4,
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    proficiency: 3,
  },
  {
    name: "React Query",
    icon: "https://cdn.simpleicons.org/reactquery",
    proficiency: 4,
  },

  // Developer Tools
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    proficiency: 4,
  },
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    proficiency: 3,
  },
  {
    name: "AWS",
    icon: "https://download.logo.wine/logo/Amazon_Web_Services/Amazon_Web_Services-Logo.wine.png",
    proficiency: 3,
  },
  {
    name: "Playwright",
    icon: "https://raw.githubusercontent.com/microsoft/playwright.dev/7e85d5577406528e01d222c8d4de4b3256b859f4/static/img/playwright-logo.svg",
    proficiency: 3,
  },
  {
    name: "Storybook",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/storybook/storybook-original.svg",
    proficiency: 4,
  },

  // Software & Platforms
  {
    name: "Jira",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
    proficiency: 4,
  },
  {
    name: "Confluence",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/confluence/confluence-original.svg",
    proficiency: 4,
  },
  {
    name: "Figma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    proficiency: 3,
  },
  {
    name: "WordPress",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
    proficiency: 4,
  },

  // Web3 Technologies
  {
    name: "Solidity",
    icon: "https://docs.soliditylang.org/en/latest/_images/solidity_logo.svg",
    proficiency: 1,
  },
  {
    name: "HardHat",
    icon: "https://cdn.worldvectorlogo.com/logos/hardhat-seeklogo-com.svg",
    proficiency: 1,
  },
  {
    name: "Wagmi",
    icon: "https://wagmi.sh/logo-light.svg",
    proficiency: 1,
  },
];

// Projects data
export const projectsData: Project[] = [
  {
    id: "starter-crowd-chain",
    title: "Starter Crowd Chain",
    image: "/projects/startcrowd.png",
    tagline: "Decentralized Crowdfunding Platform",
    description:
      "A blockchain-based crowdfunding platform that allows creators to raise funds for their projects through milestone-based funding. Features include campaign creation with detailed milestones, wallet integration for secure transactions, interactive campaign details with milestone tracking, and a creator dashboard for managing campaigns and milestones. The platform leverages smart contracts for transparent fund management and distribution.",
    tech: [
      "Next.js 15",
      "Tailwind CSS 4",
      "Prisma",
      "Neon DB (PostgreSQL)",
      "Hardhat",
      "Solidity",
      "Wagmi",
      "RainbowKit",
      "Framer Motion",
      "shadcn/ui",
      "Polygon Amoy",
      "IPFS",
    ],
    liveUrl: "https://startercrowd.novanop.com/",
    githubUrl: "",
  },
  {
    id: "golf-fairway-system",
    title: "Golf Fairway System Web App",
    image: "/projects/fairway.png",
    tagline: "Golf Course Management Platform",
    description:
      "A full-featured web app for managing golf courses, including player tracking, tournament scheduling, gameplay monitoring, and dynamic scoreboards. Integrated with Google Maps API for location-based services and real-time course visualization.",
    tech: [
      "Next.js",
      "Zustand",
      "Tailwind CSS",
      "Recharts",
      "Zod",
      "React Query",
      "Axios",
      "shadcn/ui",
      "Google Maps API",
    ],
    liveUrl: "",
    githubUrl: "",
  },
  {
    id: "rwa-platform",
    title: "Real-World Asset (RWA) Investment Platform",
    image: "/projects/karpous.png",
    tagline: "Tokenized Asset Marketplace",
    description:
      "A modern web platform for investing in and managing tokenized real-world assets across sectors like agriculture, commodities, luxury goods, and IP. Built with advanced charting, Zoho Sign integration, and seamless crypto-wallet connectivity.",
    tech: [
      "Next.js",
      "Zustand",
      "Tailwind CSS",
      "Recharts",
      "Zod",
      "React Query",
      "Axios",
      "shadcn/ui",
    ],
    liveUrl: "",
    githubUrl: "",
  },
  {
    id: "cumentor-ai",
    title: "Cumentor AI",
    image: "/projects/cumentor.png",
    tagline: "Chat with PDF",
    description:
      "The AI-powered document assistant for students, researchers, and professionals. Scan, query, and explore PDFs effortlessly to uncover insights, streamline research, and boost productivity.",
    tech: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "AWS S3",
      "Tailwind CSS",
      "Gemini AI",
    ],
    liveUrl: "https://cumentor.novanop.com",
    githubUrl: "https://github.com/novanurhamdani/cumentor",
  },
  {
    id: "nadhira-store",
    title: "Nadhira Store",
    image: "/projects/nadhira.png",
    tagline: "WordPress Web Store",
    description:
      "A WordPress-powered Muslim fashion store with custom functionalities, including pre-orders and flexible payment terms.",
    tech: ["PHP", "WordPress", "Elementor", "MySQL", "WooCommerce", "jQuery"],
    liveUrl: "https://nadhirastore.com",
    githubUrl: "",
  },
];

// Experience data
export const experienceData: Experience[] = [
  {
    role: "Frontend Developer",
    company: "Quickbill Indonesia",
    period: "Nov 2025 - Aug 2026",
    description: `<ul>
    <li>Develop and enhance the Quickbill platform (quickbill.id) by delivering scalable frontend features and improving the overall user experience.</li>
    <li>Built a comprehensive Payment History module covering Pay-In, Pay-Out, and Withdrawal transactions, enabling users to efficiently monitor financial activities.</li>
    <li>Developed Bulk Invoice Creation features for both Pay-In and Pay-Out workflows, significantly improving operational efficiency for business users.</li>
    <li>Led multiple UI revamp initiatives across both the customer-facing application and internal back-office system to improve usability, consistency, and visual design.</li>
    <li>Develop and maintain Quickbill UI, the company's internal component library, ensuring reusable, scalable, and consistent UI components across projects.</li>
    <li>Built and enhanced back-office features to simplify user onboarding, configuration, and system administration.</li>
    <li>Currently developing Quickbill's mobile application using Flutter, contributing to a unified cross-platform user experience.</li>
    </ul>
    <p><strong>Tech Stack:</strong> Next.js, React, React Query, Jotai, Tailwind CSS, Flutter, TypeScript.</p>`,
  },
  {
    role: "Frontend Developer",
    company: "Orbit Tech Solution",
    period: "Apr 2025 - Jul 2025",
    description: `<ul>
    <li>Developed a sophisticated dashboard using Next.js for a Real-World Asset (RWA) Investment Platform, integrated with tokenized asset data.</li>
    <li>Implemented data visualizations using Recharts for user asset performance and marketplace trends.</li>
    <li>Integrated Zoho Sign to enable secure digital document signing for asset agreements and contracts.</li>
    <li>Managed global state using Zustand, with form validation handled via Zod and data fetching through React Query and Axios.</li>
    <li>Applied shadcn/ui and Tailwind CSS to deliver a clean, responsive UI.</li>
    <li>Built an end-to-end Golf Fairway System Web App for player tracking, tournament organization, and real-time scoreboard updates.</li>
    <li>Used Google Maps API for live course visualization and location-aware features.</li>
    <li>Architected a modular dashboard with dynamic data views using Next.js, Zustand, and React Query.</li>
    </ul>
    <p><strong>Tech Stack:</strong> Next.js, Zustand, Tailwind CSS, Recharts, Zod, React Query, Axios, shadcn/ui, Google Maps API, MetaMask, Zoho Sign.</p>`,
  },
  {
    role: "Frontend Engineer",
    company: "Hijra Bank",
    period: "May 2022 - Feb 2025",
    description: `<ul>
    <li>Developed MUAP Generator and Risk Review Generator using Next.js, leveraging xState for state management and React JSON Schema Form for dynamic form generation.</li>
    <li>Streamlined document generation and risk review processes for RM and Risk Analyst staff.</li>
    <li>Contributed to the Hijra Home feature using React Native, enhancing the home-buying experience for users.</li>
    <li>Built the Sedekah Regular feature for Hijra mobile apps, enabling users to set up recurring donations seamlessly.</li>
    <li>Created and maintained internal tools (e.g., Salman) for admin management of the Sedekah feature, ensuring smooth data flow between backend and mobile apps.</li>
    <li>Utilized Storybook to manage and document reusable components and screens, improving development efficiency and consistency.</li>
    <li>Maintained the Hijra official website (built on WordPress) for the financing business.</li>
    <li>Designed and developed 3 landing pages for financing products, ensuring a seamless user experience.</li>
    <li>Developed a custom WordPress plugin to enable admins to edit and customize landing page content without developer intervention.</li>
    <li>Mentored Junior Frontend Engineer.</li>
    </ul>
    <p><strong>Tech Stack:</strong> Next.js, React Native, xState, React JSON Schema Form, JavaScript, TypeScript, HTML, CSS, Storybook, WordPress, PHP.</p>`,
  },
  {
    role: "Junior Web Developer",
    company: "Cindrum",
    period: "Jun 2021 - Apr 2022",
    description: `<ul>
      <li>Developed cryptocurrency platforms, including exchange and wallet websites, specializing in frontend development.</li>
      <li>Assisted in designing UI/UX and translating it into a Vue-based project.</li>
    </ul>
    <p><strong>Tech Stack:</strong> Vue.js, JavaScript, HTML, CSS.</p>`,
  },
];

// Education data
export const educationData: Education[] = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "University of the People",
    graduationDate: "Expected Graduation: 2028",
    description: "Currently pursuing a degree in Computer Science.",
  },
];

// Badges data
export const badgesData: Record<string, Badge> = {
  "Code Initiate": {
    icon: "🔮",
    description: "Awarded on the first visit.",
    unlocked: false,
    name: "Code Initiate",
  },
  "Full-Stack Navigator": {
    icon: "🗺️",
    description: "Visit all main sections of the portfolio.",
    unlocked: false,
    name: "Full-Stack Navigator",
  },
  "Code Reviewer": {
    icon: "📜",
    description: "View details for at least 3 projects.",
    unlocked: false,
    name: "Code Reviewer",
  },
  "Open Source Contributor": {
    icon: "🧭",
    description: "Click on at least 2 external GitHub links.",
    unlocked: false,
    name: "Open Source Contributor",
  },
  "Senior Developer": {
    icon: "🧪",
    description: "View all available projects.",
    unlocked: false,
    name: "Senior Developer",
  },
  "Pull Request Merged": {
    icon: "🕊️",
    description: "Successfully send a message via the contact form.",
    unlocked: false,
    name: "Pull Request Merged",
  },
  "Debug Master": {
    icon: "💎",
    description: "Found a hidden easter egg.",
    unlocked: false,
    name: "Debug Master",
  },
};
