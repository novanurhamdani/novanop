import { Skill, Project, Experience, Badge } from '../types';

// Skills data
export const skillsData: Skill[] = [
  { 
    name: 'JavaScript', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    proficiency: 5
  },
  { 
    name: 'TypeScript', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    proficiency: 4
  },
  { 
    name: 'React', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    proficiency: 5
  },
  { 
    name: 'Next.js', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    proficiency: 4
  },
  { 
    name: 'Node.js', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    proficiency: 4
  },
  { 
    name: 'TailwindCSS', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
    proficiency: 5
  },
  {
    name: 'MongoDB',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    proficiency: 3
  },
  {
    name: 'GraphQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg',
    proficiency: 3
  },
  {
    name: 'Docker',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    proficiency: 3
  },
];

// Projects data
export const projectsData: Project[] = [
  { 
    id: 1, 
    title: 'Project Nova', 
    image: 'https://placehold.co/600x400/1A0A33/A855F7?text=Project+Nova', 
    tagline: 'A collaborative project management tool.', 
    description: 'Project Nova is a full-stack web application designed to streamline team workflows. It features real-time updates, task boards, and user authentication, built with the MERN stack.', 
    tech: ['React', 'Node.js', 'MongoDB', 'Socket.IO'], 
    liveUrl: '#', 
    githubUrl: '#' 
  },
  { 
    id: 2, 
    title: 'E-commerce Elixir', 
    image: 'https://placehold.co/600x400/1A0A33/A855F7?text=E-commerce+Elixir', 
    tagline: 'A magical online shopping experience.', 
    description: 'This is a headless e-commerce site built with Next.js for the frontend and Shopify as the backend. It offers a fast, seamless user experience with a fully customized design.', 
    tech: ['Next.js', 'Shopify', 'GraphQL', 'TailwindCSS'], 
    liveUrl: '#', 
    githubUrl: '#' 
  },
  { 
    id: 3, 
    title: 'Data Viz Potion', 
    image: 'https://placehold.co/600x400/1A0A33/A855F7?text=Data+Viz+Potion', 
    tagline: 'Visualizing complex data with clarity.', 
    description: 'An interactive data visualization dashboard that uses D3.js to render complex datasets into understandable charts and graphs. Users can filter and explore data in real-time.', 
    tech: ['D3.js', 'React', 'Python', 'Flask'], 
    liveUrl: '#', 
    githubUrl: '#' 
  },
];

// Experience data
export const experienceData: Experience[] = [
  { 
    role: 'Senior Software Engineer', 
    company: 'Innovatech Solutions', 
    period: '2021 - Present', 
    description: 'Led the development of a new SaaS platform, mentored junior developers, and implemented a CI/CD pipeline, reducing deployment time by 40%.' 
  },
  { 
    role: 'Software Engineer', 
    company: 'CodeCrafters Inc.', 
    period: '2018 - 2021', 
    description: 'Developed and maintained features for a high-traffic web application using React and Node.js. Contributed to a major architectural redesign.' 
  },
  { 
    role: 'Junior Web Developer', 
    company: 'Digital Starters LLC', 
    period: '2016 - 2018', 
    description: 'Assisted in building client websites using HTML, CSS, and JavaScript. Gained foundational experience in web development and agile methodologies.' 
  },
];

// Badges data
export const badgesData: Record<string, Badge> = {
  'Apprentice Alchemist': { 
    icon: '🔮', 
    description: 'Awarded on the first visit.', 
    unlocked: false,
    name: 'Apprentice Alchemist'
  },
  'Curious Explorer': { 
    icon: '🗺️', 
    description: 'Visit all main sections of the portfolio.', 
    unlocked: false,
    name: 'Curious Explorer'
  },
  'Project Inspector': { 
    icon: '📜', 
    description: 'View details for at least 3 projects.', 
    unlocked: false,
    name: 'Project Inspector'
  },
  'Code Cartographer': { 
    icon: '🧭', 
    description: 'Click on at least 2 external GitHub links.', 
    unlocked: false,
    name: 'Code Cartographer'
  },
  'Master of Arts': { 
    icon: '🧪', 
    description: 'View all available projects.', 
    unlocked: false,
    name: 'Master of Arts'
  },
  'The Messenger': { 
    icon: '🕊️', 
    description: 'Successfully send a message via the contact form.', 
    unlocked: false,
    name: 'The Messenger'
  },
  'Secret Seeker': { 
    icon: '💎', 
    description: 'Found a hidden easter egg.', 
    unlocked: false,
    name: 'Secret Seeker'
  },
};
