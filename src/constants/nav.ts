import type { NavItem, SocialLink } from "@/types";

export const NAV_ITEMS: NavItem[] = [
  { label: "About", href: "#about", id: "about" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Stack", href: "#stack", id: "stack" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/nattawatplume", icon: "github" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/nattawat-kampilanon-716553421/",
    icon: "linkedin",
  },
  { label: "Email", href: "mailto:nattawatplume@gmail.com", icon: "mail" },
  {
    label: "Instagram",
    href: "https://www.instagram.com/plumeeezzz/",
    icon: "instagram",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/plume.plume.96558/",
    icon: "facebook",
  },
];
