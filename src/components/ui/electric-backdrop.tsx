import React, { useEffect, useRef } from 'react';

export function ElectricBackdrop() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let frame = 0;
    const handleMove = (e: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        el.style.setProperty('--x', `${x}%`);
        el.style.setProperty('--y', `${y}%`);
      });
    };

    window.addEventListener('pointermove', handleMove);
    return () => {
      window.removeEventListener('pointermove', handleMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
      style={{ '--x': '50%', '--y': '30%' } as React.CSSProperties}
    >
      <div
        className="absolute inset-0 transition-[background] duration-300"
        style={{
          background:
            'radial-gradient(circle at var(--x) var(--y), rgba(139,92,246,0.28), transparent 45%)',
        }}
      />
      <div className="absolute -left-1/4 top-[-10%] size-[60%] rounded-full bg-teal-500/25 blur-3xl [animation:drift_22s_ease-in-out_infinite_reverse]" />
      <div className="absolute -right-1/4 bottom-[-15%] size-[55%] rounded-full bg-violet-500/20 blur-3xl [animation:drift_26s_ease-in-out_infinite]" />
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(15,118,110,0.35) 1px, transparent 1px)',
          backgroundSize: '22px 22px',
          maskImage: 'radial-gradient(circle at var(--x) var(--y), black, transparent 60%)',
          WebkitMaskImage:
            'radial-gradient(circle at var(--x) var(--y), black, transparent 60%)',
        }}
      />
    </div>
  );
}
