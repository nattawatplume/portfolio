import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { TECH_STACK, TECH_CATEGORY_LABELS } from "@/constants/techstack";
import type { TechStackItem } from "@/types";

const categoryOrder: TechStackItem["category"][] = [
  "language",
  "framework",
  "tool",
];

export function TechStack() {
  return (
    <Section id="stack" aria-label="Tech Stack">
      <Reveal>
        <p className="mb-4 text-sm text-muted">เครื่องมือ</p>
        <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Tech Stack
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-10 md:grid-cols-3">
        {categoryOrder.map((category, i) => (
          <Reveal key={category} delay={i * 0.1}>
            <h3 className="mb-5 text-xs font-medium uppercase tracking-wide text-muted">
              {TECH_CATEGORY_LABELS[category]}
            </h3>
            <ul className="space-y-3">
              {TECH_STACK.filter((item) => item.category === category).map(
                (item) => (
                  <li
                    key={item.name}
                    className="flex items-center gap-3 text-sm text-foreground"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent-bright" />
                    {item.name}
                  </li>
                ),
              )}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
