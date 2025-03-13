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
    keyFeatures: [
      "AI-powered PDF analysis and question answering",
      "Natural language conversation with documents",
      "Secure document storage with AWS S3 integration",
      "Multi-document support for comprehensive research",
      "Responsive design for desktop and mobile use",
    ],
    challenges: [
      {
        challenge:
          "Processing large PDF files efficiently while maintaining performance",
        solution:
          "Implemented chunking strategies to break documents into manageable segments and utilized worker threads for background processing",
      },
      {
        challenge: "Ensuring accurate AI responses based on document content",
        solution:
          "Developed a custom context retrieval system that provides the most relevant document sections to the AI model",
      },
      {
        challenge:
          "Creating a seamless user experience across different devices",
        solution:
          "Designed a responsive UI with Tailwind CSS and optimized loading states to provide feedback during processing",
      },
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

1. Pre-Order & Flexible Payment Terms
- Allowing customers to reserve products in advance with tailored payment options
- Custom payment scheduling for agents with different credit terms
- Automated reminders for payment due dates

2. Automated Reward Points System
- Automatically calculates reward points based on total purchases
- Tiered rewards system for different customer levels
- Points redemption for discounts on future purchases

3. Advanced Order Management
- Streamlined order processing workflow for administrators
- Batch processing capabilities for high-volume order periods
- Custom status tracking for pre-orders, partial payments, and shipments

This web app has significantly improved accessibility and usability, simplifying the customer journey for agents and resellers while providing powerful management tools for the store administrators.`,
    techStack: [
      {
        name: "PHP",
        icon: "php",
      },
      {
        name: "WordPress",
        icon: "wordpress",
      },
      {
        name: "Elementor",
        icon: "",
      },
      {
        name: "MySQL",
        icon: "mysql",
      },
      {
        name: "WooCommerce",
        icon: "woocommerce",
      },
      {
        name: "jQuery",
        icon: "jquery",
      },
    ],
    demoVideo: "",
    liveDemo: "https://nadhirastore.com",
    githubRepo: "",
    images: [
      "/projects/nadhira/nadhira-1.png",
      "/projects/nadhira/nadhira-2.png",
      "/projects/nadhira/nadhira-3.png",
    ],
    keyFeatures: [
      "Custom pre-order system with flexible payment terms",
      "Automated reward points calculation and redemption",
      "Advanced order management for administrators",
      "Mobile-responsive design for on-the-go purchasing",
      "Integration with multiple payment gateways",
      "Custom reporting dashboard for sales analytics",
    ],
    challenges: [
      {
        challenge:
          "Implementing a flexible pre-order system within WooCommerce's constraints",
        solution:
          "Developed custom plugins that extend WooCommerce's core functionality to support pre-orders with partial payments and scheduled installments",
      },
      {
        challenge:
          "Creating a reward system that automatically calculates points based on complex business rules",
        solution:
          "Built a custom points calculation engine that integrates with the order processing workflow and applies business-specific rules for different customer tiers",
      },
      {
        challenge:
          "Optimizing site performance while maintaining rich functionality",
        solution:
          "Implemented caching strategies, optimized database queries, and minimized plugin dependencies to ensure fast page load times even during high traffic periods",
      },
    ],
  },
];
