// Skill type definition (legacy, kept for gamification compatibility)
export interface Skill {
  name: string;
  icon: string;
  proficiency?: number; // Optional proficiency level (1-5)
}

// Project status - drives wiring for future mini-projects
export type ProjectStatus = "live" | "building" | "experiment" | "planned";

// A named block of case-study content (challenge, decision, etc.)
export interface CaseStudyBlock {
  heading: string;
  body: string;
}

// One layer in an architecture diagram
export interface ArchitectureLayer {
  label: string;
  description?: string;
  items?: string[]; // module/subsystem chips
}

// A surface area of the product (storefront, admin, api, ...)
export interface ProductSurface {
  title: string;
  items: string[];
}

// Full engineering case study - the numbered detail-page narrative
export interface CaseStudy {
  problem: string[];
  built: { intro: string; points: string[] };
  challenges: CaseStudyBlock[];
  architecture: ArchitectureLayer[];
  decisions: CaseStudyBlock[];
  surface: ProductSurface[];
  currentState: string[];
  learnings: string[];
}

// Project type definition
export interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  status: ProjectStatus;
  role: string[];
  stack: string[];
  featured?: boolean;
  /** Real screenshot/asset path - when absent an abstract visual is used */
  thumbnail?: string;
  demoUrl?: string;
  sourceUrl?: string;
  caseStudyUrl?: string;
  /** Extra real product surfaces (app, backoffice, docs) with real URLs only */
  links?: { label: string; url: string }[];
  caseStudy?: CaseStudy;
  /**
   * Compact profile for shipped projects - evidence of what Nova built
   * without a full case study. Description answers "what is it".
   */
  profile?: {
    built: string[];
  };
}

// Real-world professional experience
export interface Experience {
  company: string;
  role: string;
  period?: string;
  description: string;
  areas?: string[];
  stack?: string[];
}

// Engineering lab item
export interface LabItem {
  slug: string;
  title: string;
  subtitle: string;
  status: ProjectStatus;
  stack?: string[];
  href?: string;
  focus?: string[]; // what the experiment sets out to explore
}

// Journey timeline milestone
export interface JourneyMilestone {
  year?: string;
  label: string;
  description?: string;
}

// "How I Build" capability group
export interface CapabilityGroup {
  title: string;
  items: string[];
}

// Education type definition (legacy)
export interface Education {
  degree: string;
  institution: string;
  graduationDate: string;
  description: string;
  gpa?: string; // Optional GPA
}

// Badge type definition
export interface Badge {
  name: string;
  icon: string;
  description: string;
  unlocked: boolean;
}

// Gamification state type
export interface GamificationState {
  xp: number;
  level: number;
  xpForNextLevel: number;
  actionsTaken: Record<string, boolean>;
  unlockedBadges: string[];
  visitedSections: string[];
  viewedProjects: string[];
  clickedGithubs: string[];
  logoClicks: number;
}
