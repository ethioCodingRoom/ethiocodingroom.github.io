import React from 'react';

export const ParticlesBG: React.FC = () => {
  React.useEffect(() => {
    // Respect OS accessibility preference by disabling animated particles.
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;

    const container = document.getElementById('particles-bg');
    if (!container) return;

    const colors = [
      'rgba(99,102,241,0.18)',
      'rgba(236,72,153,0.13)',
      'rgba(16,185,129,0.10)',
      'rgba(245,158,11,0.10)',
    ];
    const count = 28;

    // Generate blurred floating blobs for a lightweight animated background.
    for (let i = 0; i < count; i++) {
      const d = document.createElement('div');
      const size = Math.random() * 70 + 40;
      d.style.cssText = `
        position:absolute;border-radius:999px;filter:blur(50px);opacity:.7;
        width:${size}px;height:${size}px;
        left:${Math.random()*100}vw;top:${Math.random()*100}vh;
        background: radial-gradient(circle, ${colors[i%colors.length]} 0%, transparent 70%);
        animation: floaty ${Math.random()*12+14}s infinite ease-in-out;
      `;
      container.appendChild(d);
    }

    // Remove generated nodes when component unmounts to avoid DOM buildup.
    return () => { container.innerHTML = ''; };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div id="particles-bg" />
      <div
        className="absolute inset-0
          bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)]
          dark:bg-[linear-gradient(rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.012)_1px,transparent_1px)]"
        style={{ backgroundSize: '64px 64px' }}
      />
      <style>{`
        @keyframes floaty {
          0%   { transform: translate3d(0,0,0) scale(1); }
          25%  { transform: translate3d(30px,-40px,0) scale(1.08); }
          50%  { transform: translate3d(-36px,20px,0) scale(0.96); }
          75%  { transform: translate3d(22px,10px,0) scale(1.03); }
          100% { transform: translate3d(0,0,0) scale(1); }
        }
      `}</style>
    </div>
  );
};
