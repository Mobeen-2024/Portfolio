import React, { useEffect, useRef } from 'react';

export default function BackgroundEffects({ isGodMode }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!isGodMode) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Make canvas full screen
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Characters to fall (using binary and math symbols for "Architect" feel)
    const characters = "010101011010101001011010101010010101010101010101010110101010100101101010101001";
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);

    const draw = () => {
      // Create a semi-transparent black trail effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#22c55e'; // Tailwind green-500
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 33);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [isGodMode]);

  return (
    <div className={`fixed inset-0 z-0 pointer-events-none transition-opacity duration-1000 ${
      isGodMode ? "opacity-100" : "opacity-0"
    }`}>
      {isGodMode && (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 bg-black"
        />
      )}
    </div>
  );
}