export function GlowOrb() {
  return (
    <div className="relative w-[400px] h-[400px] flex items-center justify-center">
      <div className="absolute inset-0 animate-[spin_20s_linear_infinite]">
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: 'radial-gradient(circle at 30% 30%, rgba(74, 123, 255, 0.6), rgba(139, 92, 246, 0.4), rgba(255, 107, 157, 0.5))',
            filter: 'blur(40px)',
          }}
        />
      </div>

      <div
        className="relative w-[280px] h-[280px] rounded-full border border-[var(--border)]"
        style={{
          background: 'radial-gradient(circle at 35% 35%, rgba(74, 123, 255, 0.3), rgba(139, 92, 246, 0.2), transparent 70%)',
          boxShadow: `
            0 0 60px rgba(74, 123, 255, 0.4),
            inset 0 0 60px rgba(255, 107, 157, 0.2)
          `,
        }}
      >
        <div
          className="absolute inset-8 rounded-full border border-[var(--border)]"
          style={{
            background: 'radial-gradient(circle at 40% 40%, transparent 40%, rgba(10, 14, 26, 0.8) 80%)',
          }}
        />
      </div>

      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: 'radial-gradient(circle at 50% 50%, transparent 60%, rgba(74, 123, 255, 0.1) 100%)',
          filter: 'blur(2px)',
        }}
      />
    </div>
  );
}
