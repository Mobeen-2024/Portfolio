import React, { useEffect, useRef } from 'react';

export default function BackgroundEffects({ isGodMode }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!isGodMode) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // 1. LIMITER SETTINGS
    const fps = 20; // Lower is slower/more cinematic
    const interval = 1000 / fps;
    let lastTime = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resize);
    resize();

    const fontSize = 16;
    const columns = Math.ceil(canvas.width / fontSize);
    const drops = new Array(columns).fill(1);

    const draw = (currentTime) => {
      animationFrameId = requestAnimationFrame(draw);

      // 2. ONLY DRAW IF ENOUGH TIME HAS PASSED
      const delta = currentTime - lastTime;
      if (delta < interval) return;
      lastTime = currentTime - (delta % interval);

      // Create trailing effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#22c55e'; // Architect Green
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = Math.random() > 0.5 ? "0" : "1";
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    // Start the loop
    animationFrameId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isGodMode]);

  return (
    <div 
      className={`fixed inset-0 z-[-1] pointer-events-none transition-opacity duration-1000 ${
        isGodMode ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* The Rain Canvas */}
      <canvas ref={canvasRef} className="w-full h-full bg-black" />

      {/* NEW: CRT Scanline Overlay */}
      {isGodMode && (
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            background: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))',
            backgroundSize: '100% 4px, 3px 100%'
          }}
        />
      )}
    </div>
  );
}