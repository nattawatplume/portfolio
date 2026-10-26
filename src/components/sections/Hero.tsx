import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { AmbientGlow } from "@/components/ui/AmbientGlow";
import { TerminalHero } from "./TerminalHero";
import { ParticleNetwork } from "@/components/ui/ParticleNetwork";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export function Hero() {
  return (
    <Section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
      aria-label="Introduction"
    >
      <ParticleNetwork />
      <AmbientGlow />

      <div className="grid w-full items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p variants={item} className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-mono text-xs text-muted">
            <span className="pulse-dot h-2 w-2 rounded-full bg-accent-bright" />
            Open for internships · CPE40 · KMUTT67
          </motion.p>

          <motion.h1
            variants={item}
            className="text-gradient text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl"
          >
            Nattawat builds software that thinks in systems.
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-balance font-body text-lg leading-relaxed text-muted"
          >
            A software engineer in training, focused on AI, computer vision,
            and full-stack development — turning research and coursework
            into products that actually ship.
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
            <Button href="#projects" className="glow-border">
              View projects
            </Button>
            <Button href="#contact" variant="secondary">
              Get in touch
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="hidden justify-self-end lg:flex"
        >
          <TerminalHero />
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted transition-colors duration-150 hover:text-foreground"
        aria-label="Scroll to About section"
      >
        <ArrowDown size={18} />
      </motion.a>
    </Section>
  );
}
