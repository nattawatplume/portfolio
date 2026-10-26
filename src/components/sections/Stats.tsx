import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { TECH_STACK } from "@/constants/techstack";
import { PROJECTS } from "@/constants/projects";

function Count({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const c = animate(0, to, { duration: 1.4, ease: "easeOut", onUpdate: (l) => setV(Math.round(l)) });
    return () => c.stop();
  }, [inView, to]);
  return <span ref={ref}>{v}</span>;
}

const STATS = [
  { n: 6, label: "Public repos" },
  { n: PROJECTS.length, label: "Flagship projects" },
  { n: 30, label: "Medicines in VisMedS DB" },
  { n: TECH_STACK.length, label: "Tools & technologies" },
];

export function Stats() {
  return (
    <Section id="stats" aria-label="Stats" className="!py-10">
      <Reveal>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="glass rounded-2xl p-6 text-center">
              <div className="text-gradient font-mono text-4xl font-semibold">
                <Count to={s.n} />
              </div>
              <div className="mt-2 text-xs uppercase tracking-wide text-muted">{s.label}</div>
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
