import { ExternalLink } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { GithubMark } from "@/components/ui/BrandIcons";
import { PROJECTS } from "@/constants/projects";

export function Projects() {
  return (
    <Section id="projects" aria-label="Projects">
      <Reveal>
        <p className="mb-4 text-sm text-muted">ผลงาน</p>
        <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          โปรเจกต์ที่ลงมือทำจริง
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {PROJECTS.map((project, i) => (
          <Reveal key={project.id} delay={i * 0.1}>
            <Card className="glow-border flex h-full flex-col">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  {project.logo && (
                    <img
                      src={project.logo}
                      alt=""
                      aria-hidden="true"
                      className="h-9 w-9 shrink-0 rounded-full"
                    />
                  )}
                  <h3 className="text-xl font-semibold text-foreground">
                    {project.title}
                  </h3>
                </div>
                <span className="shrink-0 text-xs text-muted">
                  {project.year}
                </span>
              </div>

              <p className="mt-3 flex-1 font-body text-sm leading-relaxed text-muted">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>

              {project.links && (
                <div className="mt-6 flex items-center gap-5 border-t border-border pt-5">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-muted transition-colors duration-150 hover:text-foreground"
                    >
                      <GithubMark size={16} />
                      Source
                    </a>
                  )}
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-muted transition-colors duration-150 hover:text-foreground"
                    >
                      <ExternalLink size={16} />
                      Live
                    </a>
                  )}
                </div>
              )}
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
