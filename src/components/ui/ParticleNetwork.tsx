import { useEffect, useRef } from "react";

interface P { x: number; y: number; vx: number; vy: number }

export function ParticleNetwork() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const c = ref.current;
    const ctx = c?.getContext("2d");
    if (!c || !ctx) return;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mouse = { x: -999, y: -999 };
    let w = 0, h = 0, raf = 0, visible = true, ps: P[] = [];

    const resize = () => {
      const r = c.getBoundingClientRect();
      const d = Math.min(devicePixelRatio || 1, 2);
      w = r.width; h = r.height;
      c.width = w * d; c.height = h * d;
      ctx.setTransform(d, 0, 0, d, 0, 0);
      const n = Math.min(90, Math.floor((w * h) / 14000));
      ps = Array.from({ length: n }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35,
      }));
    };

    const line = (a: P, b: P, max: number, rgb: string) => {
      const d = Math.hypot(a.x - b.x, a.y - b.y);
      if (d > max) return;
      ctx.strokeStyle = `rgba(${rgb},${0.4 * (1 - d / max)})`;
      ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const m: P = { x: mouse.x, y: mouse.y, vx: 0, vy: 0 };
      for (const p of ps) {
        if (!reduce) {
          p.x += p.vx; p.y += p.vy;
          if (p.x < 0 || p.x > w) p.vx *= -1;
          if (p.y < 0 || p.y > h) p.vy *= -1;
        }
        ctx.fillStyle = "rgba(46,230,255,.7)";
        ctx.beginPath(); ctx.arc(p.x, p.y, 1.4, 0, Math.PI * 2); ctx.fill();
        line(p, m, 170, "46,230,255");
      }
      for (let i = 0; i < ps.length; i++)
        for (let j = i + 1; j < ps.length; j++) line(ps[i], ps[j], 130, "0,102,255");
      raf = visible && !reduce ? requestAnimationFrame(draw) : 0;
    };

    const move = (e: PointerEvent) => {
      const r = c.getBoundingClientRect();
      mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top;
    };
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      if (visible && !raf) raf = requestAnimationFrame(draw);
    });

    resize(); draw(); io.observe(c);
    addEventListener("resize", resize);
    addEventListener("pointermove", move);
    return () => {
      cancelAnimationFrame(raf); io.disconnect();
      removeEventListener("resize", resize);
      removeEventListener("pointermove", move);
    };
  }, []);

  return <canvas ref={ref} aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 h-full w-full opacity-70" />;
}
