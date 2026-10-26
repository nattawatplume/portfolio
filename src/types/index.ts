export interface NavItem {
  label: string;
  href: string;
  id: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "mail" | "resume" | "instagram" | "facebook";
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  year: string;
  role: string;
  logo?: string;
  links?: {
    github?: string;
    caseStudy?: string;
    live?: string;
  };
  featured?: boolean;
  category: string;
  status: string;
  highlights: string[];
  modules?: { name: string; desc: string; href: string }[];
}

export interface TechStackItem {
  name: string;
  category: "language" | "framework" | "tool" | "database";
}

export interface ExperienceItem {
  id: string;
  organization: string;
  role: string;
  period: string;
  description: string;
}

export interface Achievement {
  id: string;
  title: string;
  issuer: string;
  year: string;
  description: string;
}
