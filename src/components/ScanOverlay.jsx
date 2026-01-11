import React from 'react';

export default function ScanOverlay({ isScanning }) {
  if (!isScanning) return null;

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none">
      {/* The Red Laser Line */}
      <div className="absolute w-full h-[2px] bg-red-500 shadow-[0_0_20px_5px_rgba(239,68,68,0.8)] animate-scan-line" />
      
      {/* The Glitch Tint */}
      <div className="absolute inset-0 bg-red-500/5 animate-pulse" />
    </div>
  );
}