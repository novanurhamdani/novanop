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
    proficiency: 4,
  },
  {
    name: "PHP",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    proficiency: 3,
  },

  // Frameworks
  {
    name: "React.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    proficiency: 5,
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    proficiency: 4,
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
    name: "Tailwind",
    icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    proficiency: 5,
  },
  {
    name: "Mantine UI",
    icon: "https://mantine.dev/favicon.svg",
    proficiency: 4,
  },
  {
    name: "Zustand",
    icon: "https://user-images.githubusercontent.com/958486/218346783-72be5ae3-b953-4dd7-b239-788a882fdad6.svg",
    proficiency: 4,
  },
  {
    name: "XState",
    icon: "https://xstate.js.org/logo-white.svg",
    proficiency: 3,
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
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    proficiency: 3,
  },

  // Software
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
    company: "Orbit Tech Solution",
    period: "Apr 2025 - Jul 2025",
    description: `<ul>
    <li>Focused on building and implementing the frontend for the RWA platform using Next.js. Responsible for slicing and developing responsive dashboard interfaces with interactive charts and analytics. Integrated document signing capabilities using Zoho Sign, ensuring seamless user experience and contract workflows. Collaborated closely with backend and Web3 teams to deliver a secure, intuitive UI aligned with the platform's decentralized features.</li>
    <li>
    Developed a comprehensive Golf Fairway System Web App designed to streamline golf course operations and elevate player experiences. The platform includes robust features for player tracking, real-time gameplay monitoring, tournament organization, and dynamic scoreboard management. Engineered with scalability and usability in mind, the system supports seamless interaction between players, administrators, and event organizers, offering a modern digital solution for golf course management.
    </li>
    </ul>`,
  },
  {
    role: "Frontend Engineer",
    company: "Hijra Bank",
    period: "May 2022 - Feb 2025",
    description: `<ol>
      <li>As a Frontend Engineer at Hijra Bank, I focused on enhancing our financing processes:
        <ul>
          <li>Financing Originate System (FOS) for MUAP Generator and Risk Review Generator</li>
          <li>MUAP Generator: This tool assists RM staff in generating essential documents for data collection during the financing process.</li>
          <li>Risk Review Generator: This tool supports Risk Analyst staff by streamlining the risk review process for MUAP documents.</li>
        </ul>
      </li>
      <li>With these tools, we significantly improved the documentation process for prospective and existing customers, making it more streamlined, accurate, and efficient.</li>
      <li>Additional completed projects:
        <ul>
          <li>House Financing with our Financing Originate System: I played a key role in developing a cutting-edge system that transformed the house financing process.</li>
          <li>Hijra Home Feature on Mobile Apps: I worked on the Hijra Home feature for our mobile apps, designed to provide an enhanced and personalized home-buying experience.</li>
        </ul>
      </li>
    </ol>`,
  },
  {
    role: "Junior Web Developer",
    company: "Cindrum",
    period: "Jun 2021 - Apr 2022",
    description: `<ul>
      <li>Part of team to develop cryptocurrency webs, such as exchange web and wallet</li>
      <li>Specialized in front-end in the project</li>
      <li>Help the team to design UI/UX and convert it to the Vue project</li>
    </ul>`,
  },
  {
    role: "Internal Audit Manager",
    company: "KSP Mitra Dhuafa",
    period: "Jun 2016 - Jan 2020",
    description: `<ul>
      <li>Working on and manage a big team (35 Internal Audit Staff)</li>
      <li>Conducted strategic, technical reviews to verify compliance with quality control standards, schedule constraints, and budget parameters</li>
      <li>Gathered and analyzed financial data to determine increased fraud detection</li>
    </ul>`,
  },
  {
    role: "Management Information System Staff",
    company: "KSP Mitra Dhuafa",
    period: "May 2010 - Jun 2016",
    description: `Handled day-to-day running of Company Information System, ensuring high levels of productivity and progression. Adding some report features and fix some bugs in the system. Conducted research, gathered information from multiple sources, and presented results.

Having experience in HTML, CSS, ASP.Net

I also maintained and repaired facilities, equipment, and tools to achieve operational readiness, safety, and cleanliness. Sometimes I prepared a variety of different written communications, reports, and documents to ensure smooths operations.`,
  },
  {
    role: "Junior Programmer (Intern)",
    company: "Worxcode Imagineering Indonesia",
    period: "Jun 2009 - Dec 2009",
    description: `Be part of a big project from the company. The company's clients are several government companies, such as Pos Indonesia, the Ministry of Finance (Kementrian Keuangan), National Agency of Drug and Food Control of Indonesia (Badan POM).

Give an assist to the Senior Programmer to add some features to the project. Learn about HTML, CSS, PHP, JavaScript, and AJAX in this intern opportunity.`,
  },
];

// Education data
export const educationData: Education[] = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "University of the People",
    graduationDate: "Expected Graduation: 2028",
    description: "Currently pursuing a degree in Computer Science.",
    gpa: "3.84",
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
