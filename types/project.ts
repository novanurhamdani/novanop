export interface Project {
  id: string;
  title: string;
  type: string;
  logo: string;
  summary: string;
  description: string;
  techStack: {
    name: string;
    icon: string;
  }[];
  demoVideo?: string;
  liveDemo?: string;
  githubRepo?: string;
  images: string[];
}
