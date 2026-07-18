import { Mail } from "lucide-react";
import { SOCIAL_LINKS } from "@/constants/nav";
import { Container } from "@/components/ui/Container";
import {
  GithubMark,
  LinkedinMark,
  InstagramMark,
  FacebookMark,
} from "@/components/ui/BrandIcons";

const iconMap = {
  github: GithubMark,
  linkedin: LinkedinMark,
  mail: Mail,
  resume: Mail,
  instagram: InstagramMark,
  facebook: FacebookMark,
};

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <Container className="flex flex-col items-center justify-between gap-6 py-10 md:flex-row">
        <p className="text-sm text-muted">
          © {year} Nattawat. Built with React &amp; Tailwind CSS.
        </p>

        <ul className="flex items-center gap-5">
          {SOCIAL_LINKS.map((link) => {
            const Icon = iconMap[link.icon];
            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  aria-label={link.label}
                  className="text-muted transition-colors duration-150 hover:text-foreground"
                >
                  <Icon size={18} />
                </a>
              </li>
            );
          })}
        </ul>
      </Container>
    </footer>
  );
}
