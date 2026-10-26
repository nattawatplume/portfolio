import { useRef, useState, type PointerEvent, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";
import { GithubMark } from "@/components/ui/BrandIcons";
import { PROJECTS } from "@/constants/projects";
import { cn } from "@/utils/cn";

const CATS = ["All", ...Array.from(new Set(PROJECTS.map((p) => p.category)))];
const linkCls = "inline-flex items-center gap-2 text-sm text-muted transition-colors duration-150 hover:text-accent-bright";

function Tilt({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const move = (e: PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const b = el.getBoundingClientRect();
    const px = (e.clientX - b.left) / b.width, py = (e.clientY - b.top) / b.height;
    el.style.transform = `perspective(900px) rotateX(${(0.5 - py) * 5}deg) rotateY(${(px - 0.5) * 7}deg)`;
    el.style.setProperty("--sx", `${px * 100}%`);
    el.style.setProperty("--sy", `${py * 100}%`);
  };
  return (
    <div
      ref={ref}
      onPointerMove={move}
      onPointerLeave={() => { if (ref.current) ref.current.style.transform = ""; }}
      className="glass group relative h-full overflow-hidden rounded-2xl p-6 transition-transform duration-200 ease-out will-change-transform"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: "radial-gradient(360px circle at var(--sx,50%) var(--sy,50%), rgba(46,230,255,.10), transparent 60%)" }}
      />
      <div className="relative flex h-full flex-col">{children}</div>
    </div>
  );
}

export function Projects() {
  const [cat, setCat] = useState("All");
  const list = PROJECTS.filter((p) => cat === "All" || p.category === cat);

  return (
    <Section id="projects" aria-label="Projects">
      <Reveal>
        <p className="mb-4 font-mono text-sm text-accent-bright">// ผลงาน</p>
        <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          โปรเจกต์ที่ลงมือทำจริง
        </h2>
        <div className="mt-6 flex flex-wrap gap-2">
          {CATS.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCat(c)}
              className={cn(
                "rounded-full border px-4 py-1.5 font-mono text-xs transition-colors duration-150",
                cat === c
                  ? "border-accent-bright/60 bg-accent-bright/10 text-accent-bright"
                  : "border-border text-muted hover:text-foreground",
              )}
            >
              {c}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {list.map((p) => (
            <motion.div
              key={p.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3 }}
              className={p.modules ? "md:col-span-2" : ""}
            >
              <Tilt>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    {p.logo && <img src={p.logo} alt="" aria-hidden="true" className="h-9 w-9 shrink-0 rounded-full" />}
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">{p.title}</h3>
                      <p className="font-mono text-xs text-muted">{p.category} · {p.year}</p>
                    </div>
                  </div>
                  <span className="shrink-0 rounded-full border border-accent-bright/30 bg-accent-bright/10 px-2.5 py-0.5 font-mono text-[11px] text-accent-bright">
                    {p.status}
                  </span>
                </div>

                <p className="mt-4 font-body text-sm leading-relaxed text-muted">{p.description}</p>

                {p.modules && (
                  <div className="mt-5 grid gap-3 sm:grid-cols-3">
                    {p.modules.map((m) => (
                      <a key={m.name} href={m.href} target="_blank" rel="noreferrer" className="rounded-xl border border-border bg-white/[0.03] p-3 transition-colors duration-150 hover:border-accent-bright/40">
                        <div className="text-sm font-medium text-foreground">{m.name}</div>
                        <div className="mt-0.5 font-mono text-xs text-muted">{m.desc}</div>
                      </a>
                    ))}
                  </div>
                )}

                <ul className="mt-5 flex-1 space-y-2 font-body text-sm text-foreground/90">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex gap-2"><span className="text-accent-bright">▹</span>{h}</li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => <Badge key={t}>{t}</Badge>)}
                </div>

                {p.links && (
                  <div className="mt-6 flex items-center gap-5 border-t border-border pt-5">
                    {p.links.github && (
                      <a href={p.links.github} target="_blank" rel="noreferrer" className={linkCls}>
                        <GithubMark size={16} /> Source
                      </a>
                    )}
                    {p.links.live && (
                      <a href={p.links.live} target="_blank" rel="noreferrer" className={linkCls}>
                        <ExternalLink size={16} /> Live
                      </a>
                    )}
                  </div>
                )}
              </Tilt>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </Section>
  );
}
