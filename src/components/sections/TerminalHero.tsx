import { motion } from "framer-motion";
import { useTypewriter } from "@/hooks/useTypewriter";

const outputLines: { parts: { text: string; className: string }[] }[] = [
  {
    parts: [
      { text: "const", className: "text-accent-bright" },
      { text: " engineer = {", className: "text-foreground" },
    ],
  },
  {
    parts: [
      { text: "  name", className: "text-foreground" },
      { text: ": ", className: "text-muted" },
      { text: "'Nattawat'", className: "text-emerald-300" },
      { text: ",", className: "text-muted" },
    ],
  },
  {
    parts: [
      { text: "  role", className: "text-foreground" },
      { text: ": ", className: "text-muted" },
      { text: "'CPE Student @ KMUTT'", className: "text-emerald-300" },
      { text: ",", className: "text-muted" },
    ],
  },
  {
    parts: [
      { text: "  focus", className: "text-foreground" },
      { text: ": [", className: "text-muted" },
      { text: "'AI'", className: "text-emerald-300" },
      { text: ", ", className: "text-muted" },
      { text: "'Computer Vision'", className: "text-emerald-300" },
      { text: ", ", className: "text-muted" },
      { text: "'Full-stack'", className: "text-emerald-300" },
      { text: "],", className: "text-muted" },
    ],
  },
  {
    parts: [
      { text: "  status", className: "text-foreground" },
      { text: ": ", className: "text-muted" },
      { text: "'shipping'", className: "text-emerald-300" },
    ],
  },
  {
    parts: [{ text: "};", className: "text-foreground" }],
  },
];

const lineVariants = {
  hidden: { opacity: 0, x: -8 },
  show: { opacity: 1, x: 0, transition: { duration: 0.35, ease: "easeOut" as const } },
};

export function TerminalHero() {
  const { displayed, done } = useTypewriter("whoami", 70, 500);

  return (
    <div className="glow-border w-full max-w-lg overflow-hidden rounded-xl border border-border bg-surface/80 backdrop-blur-sm">
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#FF5F56]" />
        <span className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
        <span className="h-3 w-3 rounded-full bg-[#27C93F]" />
        <span className="ml-3 text-xs text-muted">nattawat — zsh</span>
      </div>

      <div className="px-5 py-5 font-mono text-[13px] leading-relaxed sm:text-sm">
        <div className="text-muted">
          <span className="text-accent-bright">➜</span>{" "}
          <span className="text-foreground">{displayed}</span>
          {!done && (
            <span className="animate-cursor ml-0.5 inline-block h-[1em] w-[7px] translate-y-[2px] bg-accent-bright align-middle" />
          )}
        </div>

        {done && (
          <motion.div
            initial="hidden"
            animate="show"
            transition={{ staggerChildren: 0.09, delayChildren: 0.15 }}
            className="mt-3 space-y-0.5"
          >
            {outputLines.map((line, i) => (
              <motion.div key={i} variants={lineVariants} className="whitespace-pre">
                {line.parts.map((part, j) => (
                  <span key={j} className={part.className}>
                    {part.text}
                  </span>
                ))}
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}
