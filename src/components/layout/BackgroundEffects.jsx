import React, { useEffect, useRef } from 'react';

export default function BackgroundEffects({ isGodMode, themeMode = 'dark' }) {
  const canvasRef = useRef(null);
  const isDark = isGodMode || themeMode === 'dark';

  // Matrix Rain Canvas for Architect Mode
  useEffect(() => {
    if (!isGodMode) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const fps = 24;
    const interval = 1000 / fps;
    let lastTime = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resize);
    resize();

    const fontSize = 15;
    const columns = Math.ceil(canvas.width / fontSize);
    const drops = new Array(columns).fill(1).map(() => Math.floor(Math.random() * -50));
    const chars = "01010101XYZΩλπ∑µ∆√∂∇∫≈≠≤≥10101";

    const draw = (currentTime) => {
      animationFrameId = requestAnimationFrame(draw);

      const delta = currentTime - lastTime;
      if (delta < interval) return;
      lastTime = currentTime - (delta % interval);

      // Low-opacity clearing for cyber phosphor trail
      ctx.fillStyle = 'rgba(5, 7, 6, 0.12)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        // Subtle variable green glow
        const isLeading = Math.random() > 0.85;
        ctx.fillStyle = isLeading ? '#86efac' : 'rgba(34, 197, 94, 0.55)';
        
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    animationFrameId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isGodMode]);

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden transition-all duration-1000">
      
      {/* 1. EXECUTIVE MODE: LUXURY MESH & AMBIENT GLOW */}
      <div 
        className={`absolute inset-0 transition-opacity duration-1000 ${
          !isGodMode ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Canvas Background: Midnight Obsidian or Crisp Porcelain */}
        <div className={`absolute inset-0 transition-colors duration-700 ${
          isDark ? "bg-[#070a12]" : "bg-[#f8fafc]"
        }`} />

        {/* Ambient Precision Dot Matrix */}
        <div 
          className={`absolute inset-0 transition-opacity duration-700 ${isDark ? "opacity-30" : "opacity-40"}`}
          style={{
            backgroundImage: isDark 
              ? 'radial-gradient(#334155 1.2px, transparent 1.2px)' 
              : 'radial-gradient(#94a3b8 1.2px, transparent 1.2px)',
            backgroundSize: '28px 28px',
          }}
        />

        {/* Luminous Gradient Orbs */}
        <div className={`absolute top-[-10%] left-[15%] w-[600px] h-[600px] rounded-full blur-[140px] animate-pulse-slow transition-all duration-700 ${
          isDark 
            ? "bg-gradient-to-tr from-blue-600/20 via-indigo-600/15 to-transparent" 
            : "bg-gradient-to-tr from-blue-500/12 via-indigo-400/10 to-transparent"
        }`} />
        <div className={`absolute top-[35%] right-[10%] w-[650px] h-[650px] rounded-full blur-[150px] animate-float transition-all duration-700 ${
          isDark 
            ? "bg-gradient-to-bl from-cyan-500/15 via-blue-600/15 to-transparent" 
            : "bg-gradient-to-bl from-cyan-400/12 via-blue-400/10 to-transparent"
        }`} />
        <div className={`absolute bottom-[5%] left-[20%] w-[550px] h-[550px] rounded-full blur-[130px] transition-all duration-700 ${
          isDark 
            ? "bg-gradient-to-r from-indigo-700/15 to-blue-500/10" 
            : "bg-gradient-to-r from-indigo-400/10 to-blue-300/10"
        }`} />
      </div>

      {/* 2. ARCHITECT MODE: CYBER HUD MATRIX RAIN & BLUEPRINT GRID */}
      <div 
        className={`absolute inset-0 transition-opacity duration-1000 ${
          isGodMode ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Deep Cyber Base */}
        <div className="absolute inset-0 bg-[#050706]" />

        {/* Digital Blueprint Technical Grid */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(34, 197, 94, 0.15) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(34, 197, 94, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: '48px 48px'
          }}
        />

        {/* The Matrix Rain Canvas with Vignette Mask */}
        <div className="absolute inset-0 opacity-40 matrix-mask-vignette">
          <canvas ref={canvasRef} className="w-full h-full" />
        </div>

        {/* CRT Scanline & Phosphor Overlay */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.035]"
          style={{
            background: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.4) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.05), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.05))',
            backgroundSize: '100% 4px, 4px 100%'
          }}
        />

        {/* Radial Ambient Glows for Architect mode */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-green-500/[0.04] blur-[150px]" />
      </div>

    </div>
  );
}