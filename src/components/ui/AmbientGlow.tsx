export function AmbientGlow() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <div
        className="animate-blob-1 absolute -top-40 left-1/4 h-[520px] w-[520px] rounded-full opacity-30 blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, var(--color-glow) 0%, transparent 70%)",
        }}
      />
      <div
        className="animate-blob-2 absolute top-1/3 right-0 h-[420px] w-[420px] rounded-full opacity-20 blur-[110px]"
        style={{
          background:
            "radial-gradient(circle, var(--color-accent-bright) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}
