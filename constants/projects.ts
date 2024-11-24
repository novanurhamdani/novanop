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
    demoVideo: "https://www.youtube.com/embed/demo-video-id",
    liveDemo: "https://cumentor.novanop.com",
    githubRepo: "https://github.com/novanurhamdani/cumentor",
    images: [
      "/projects/fos/dashboard.png",
      "/projects/fos/muap-form.png",
      "/projects/fos/risk-review.png",
      "/projects/fos/documents.png",
    ],
  },
  {
    id: "hijra-home",
    title: "Hijra Home",
    type: "Mobile Application",
    logo: "/projects/hijra-home.png",
    summary:
      "A mobile app feature for streamlined house financing and property search.",
    description: `Hijra Home is a comprehensive mobile app feature designed to revolutionize the house financing experience. Key features include:

1. Property Search
- Advanced search filters
- Virtual property tours
- Saved searches and favorites

2. Financing Calculator
- Real-time payment calculations
- Various financing schemes
- Customizable down payment options

3. Document Upload
- Digital document submission
- Progress tracking
- Secure storage

The app has successfully simplified the home-buying journey for our customers, making it more accessible and user-friendly.`,
    techStack: [
      {
        name: "React Native",
        icon: "/tech/react-native.svg",
      },
      {
        name: "TypeScript",
        icon: "/tech/typescript.svg",
      },
      {
        name: "Firebase",
        icon: "/tech/firebase.svg",
      },
      {
        name: "Node.js",
        icon: "/tech/nodejs.svg",
      },
    ],
    demoVideo: "https://www.youtube.com/embed/demo-video-id-2",
    liveDemo: "https://cumentor.novanop.com",
    githubRepo: "https://github.com/novanurhamdani/cumentor",
    images: [
      "/projects/hijra-home/home.png",
      "/projects/hijra-home/search.png",
      "/projects/hijra-home/calculator.png",
      "/projects/hijra-home/documents.png",
    ],
  },
  {
    id: "crypto-exchange",
    title: "Cindrum Exchange",
    type: "Web Platform",
    logo: "/projects/cindrum.png",
    summary:
      "A cryptocurrency exchange platform with integrated wallet functionality.",
    description: `Cindrum Exchange is a comprehensive cryptocurrency trading platform that combines advanced trading features with a secure wallet system. Key features include:

1. Trading Interface
- Real-time price charts
- Multiple order types
- Advanced trading tools

2. Wallet Integration
- Multi-currency support
- Secure storage
- Easy transfers

3. Security Features
- Two-factor authentication
- Cold storage
- Regular security audits

The platform provides a seamless trading experience while maintaining high security standards for users' assets.`,
    techStack: [
      {
        name: "Vue.js",
        icon: "/tech/vue.svg",
      },
      {
        name: "JavaScript",
        icon: "/tech/javascript.svg",
      },
      {
        name: "Node.js",
        icon: "/tech/nodejs.svg",
      },
      {
        name: "MongoDB",
        icon: "/tech/mongodb.svg",
      },
    ],
    demoVideo: "https://www.youtube.com/embed/demo-video-id-3",
    liveDemo: "https://exchange.cindrum.com",
    githubRepo: "https://github.com/cindrum/exchange",
    images: [
      "/projects/cindrum/trading.png",
      "/projects/cindrum/wallet.png",
      "/projects/cindrum/dashboard.png",
      "/projects/cindrum/settings.png",
    ],
  },
];
