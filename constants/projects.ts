import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "cumentor-ai",
    title: "Cumentor AI",
    type: "Chat with PDF",
    logo: "/projects/cumentor/cumentor-logo.png",
    summary:
      "The AI-powered document assistant for students, researchers, and professionals. Scan, query, and explore PDFs effortlessly to uncover insights, streamline research, and boost productivity",
    description: `The AI-powered document assistant for students, researchers, and professionals. Scan, query, and explore PDFs effortlessly to uncover insights, streamline research, and boost productivity.

1. Document Upload and Scanning
- File Types Supported: PDF Document.
- Upload Methods: Local file upload, drag-and-drop, and integration with cloud storage (AWS S3).
- File Size Limit: Up to 10 MB.

2. AI-Driven Document Chat Interface
- Natural Language Processing (NLP): Allows users to ask questions in natural language.
- Contextual Memory: Retain context across conversations for continuity.`,
    techStack: [
      {
        name: "Next.js",
        icon: "nextjs",
      },
      {
        name: "Typescript",
        icon: "typescript",
      },
      {
        name: "PostgreSQL",
        icon: "postgresql",
      },
      {
        name: "AWS S3",
        icon: "aws",
      },
      {
        name: "Tailwind CSS",
        icon: "tailwindcss",
      },
      {
        name: "Gemini AI",
        icon: "",
      },
    ],
    demoVideo: "",
    liveDemo: "https://cumentor.novanop.com",
    githubRepo: "https://github.com/novanurhamdani/cumentor",
    images: [
      "/projects/cumentor/cumentor 1.png",
      "/projects/cumentor/cumentor 2.png",
      "/projects/cumentor/cumentor 3.png",
    ],
  },
  {
    id: "nadhira-store",
    title: "Nadhira Store",
    type: "WordPress Web Store",
    logo: "/projects/nadhira/nadhira-logo.png",
    summary:
      "A WordPress-powered Muslim fashion store with custom functionalities, including pre-orders and flexible payment terms.",
    description: `A feature-rich Muslim fashion store built on WordPress, designed to enhance the shopping experience for agents and resellers. Key functionalities include:

1. Pre-Order & Flexible Payment Terms – Allowing customers to reserve products in advance with tailored payment options.
2. Automated Reward Points System – Automatically calculates reward points based on total purchases, encouraging customer loyalty.
3. Advanced Order Management – Streamlining order processing for better efficiency and customer experience.


This web app has significantly improved accessibility and usability, simplifying the customer journey for agents and resellers.`,
    techStack: [
      {
        name: "PHP",
        icon: "/tech/react-native.svg",
      },
      {
        name: "WordPress",
        icon: "/tech/typescript.svg",
      },
      {
        name: "Elementor",
        icon: "/tech/firebase.svg",
      },
      {
        name: "MySQL",
        icon: "/tech/nodejs.svg",
      },
    ],
    demoVideo: "",
    liveDemo: "https://nadhirastore.com",
    githubRepo: "",
    images: [],
  },
];
