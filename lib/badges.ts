import { Badge } from "../types";

// Badges data - secondary personality layer, driven by useGamification.
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
