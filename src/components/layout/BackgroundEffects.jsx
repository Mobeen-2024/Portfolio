import React, { useEffect, useRef } from 'react';

export default function BackgroundEffects({ isGodMode }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Only run this logic if we are in God Mode
    if (!isGodMode) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resize);
    resize();

    const fontSize = 16;
    const columns = Math.ceil(canvas.width / fontSize);
    const drops = new Array(columns).fill(1);
    const chars = "010101"; 

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#22c55e'; // Architect Green
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
      // Optional: Clear the canvas context on unmount
      if (ctx) ctx.clearRect(0, 0, canvas.width, canvas.height);
    };
  }, [isGodMode]);

  return (
    <div className={`fixed inset-0 z-[-1] transition-opacity duration-1000 ${isGodMode ? "opacity-100" : "opacity-0"}`}>
      {/* This Canvas REPLACES the <BinaryRain /> tag that was causing the error */}
      {isGodMode && (
        <canvas 
          ref={canvasRef} 
          className="fixed inset-0 pointer-events-none opacity-40"
        />
      )}
      
      {/* Background Glow */}
      {isGodMode && (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.1)_0%,transparent_70%)] pointer-events-none" />
      )}
    </div>
  );
}