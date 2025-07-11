// Skill type definition
export interface Skill {
  name: string;
  icon: string;
  proficiency?: number; // Optional proficiency level (1-5)
}

// Project type definition
export interface Project {
  id: string;
  title: string;
  image: string;
  tagline: string;
  description: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
}

// Experience type definition
export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
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
