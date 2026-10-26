import { useEffect, useRef } from "react";

export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    let x = 0, y = 0, tx = 0, ty = 0, raf = 0;
    const move = (e: PointerEvent) => { tx = e.clientX; ty = e.clientY; el.style.opacity = "1"; };
    const loop = () => {
      x += (tx - x) * 0.15; y += (ty - y) * 0.15;
      el.style.transform = `translate3d(${x - 200}px,${y - 200}px,0)`;
      raf = requestAnimationFrame(loop);
    };
    addEventListener("pointermove", move);
    raf = requestAnimationFrame(loop);
    return () => { removeEventListener("pointermove", move); cancelAnimationFrame(raf); };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-30 h-[400px] w-[400px] rounded-full opacity-0 mix-blend-screen transition-opacity duration-500"
      style={{ background: "radial-gradient(circle, rgba(0,200,255,.14), transparent 65%)" }}
    />
  );
}
