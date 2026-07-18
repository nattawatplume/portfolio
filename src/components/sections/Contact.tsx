import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { AmbientGlow } from "@/components/ui/AmbientGlow";
import { SOCIAL_LINKS } from "@/constants/nav";
import {
  GithubMark,
  LinkedinMark,
  InstagramMark,
  FacebookMark,
} from "@/components/ui/BrandIcons";
import { Mail } from "lucide-react";

const iconMap = {
  github: GithubMark,
  linkedin: LinkedinMark,
  mail: Mail,
  resume: Mail,
  instagram: InstagramMark,
  facebook: FacebookMark,
};

export function Contact() {
  return (
    <Section id="contact" className="relative overflow-hidden" aria-label="Contact">
      <AmbientGlow />

      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="mb-4 text-sm text-muted">ติดต่อ</p>
        <h2 className="glow-text text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          สนใจร่วมงาน หรืออยากคุยเรื่องโปรเจกต์ไหม?
        </h2>
        <p className="mt-4 font-body leading-relaxed text-muted">
          เปิดรับโอกาสฝึกงานและงานด้าน software engineering ทักมาได้เลย
          ตอบกลับไว
        </p>

        <div className="mt-10 flex justify-center">
          <Button href="mailto:nattawatplume@gmail.com" className="glow-border">
            <Mail size={16} />
            nattawatplume@gmail.com
          </Button>
        </div>

        <div className="mt-10 flex justify-center gap-6">
          {SOCIAL_LINKS.filter((link) => link.icon !== "mail").map((link) => {
            const Icon = iconMap[link.icon];
            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={link.label}
                className="text-muted transition-colors duration-150 hover:text-foreground"
              >
                <Icon size={20} />
              </a>
            );
          })}
        </div>
      </Reveal>
    </Section>
  );
}
