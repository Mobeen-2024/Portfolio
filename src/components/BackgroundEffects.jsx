import React from 'react';
import BinaryRain from './BinaryRain';

export default function BackgroundEffects({ isGodMode }) {
  return (
    <div className={`fixed inset-0 z-0 pointer-events-none transition-opacity duration-1000 ${
      isGodMode ? "opacity-100" : "opacity-0"
    }`}>
      {isGodMode && <BinaryRain color="#22c55e" />}
    </div>
  );
}