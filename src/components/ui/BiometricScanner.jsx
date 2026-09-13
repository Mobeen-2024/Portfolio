import React from 'react';
import { Fingerprint, ShieldAlert, Zap } from 'lucide-react';
import { playLaserScan, playClick } from '../../utils/audio';

export default function BiometricScanner({ isScanning, isGodMode, onScan }) {
  const handleClick = (e) => {
    if (isScanning) return;
    playLaserScan();
    onScan(e);
  };

  return (
    <button
      onClick={handleClick}
      disabled={isScanning}
      title={isGodMode ? "Switch to Executive Boardroom Mode (Ctrl+G)" : "Authenticate to Cyber Architect Mode (Ctrl+G)"}
      className={`relative group flex items-center gap-2.5 px-3.5 py-2 md:px-5 md:py-2.5 rounded-full border active:scale-95 transition-all duration-500 overflow-hidden select-none cursor-pointer ${
        isGodMode 
          ? "bg-green-950/40 border-green-500/60 text-green-400 shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:border-green-400 hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] font-mono" 
          : "bg-white/80 backdrop-blur-md border-slate-200 text-slate-700 shadow-lg shadow-slate-200/50 hover:border-blue-300 hover:shadow-blue-200/50 hover:text-blue-600 font-sans"
      }`}
    >
      {/* Scanning Laser Sweep Effect */}
      {isScanning && (
        <div className="absolute inset-0 bg-red-500/20 animate-pulse flex items-center justify-center">
          <div className="w-full h-0.5 bg-red-400 shadow-[0_0_10px_#f87171] animate-scan-line" />
        </div>
      )}
      
      <div className="relative">
        <Fingerprint className={`w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 ${
          isScanning 
            ? "animate-pulse text-red-500 scale-110" 
            : isGodMode 
              ? "text-green-400 group-hover:scale-110" 
              : "text-blue-600 group-hover:scale-110"
        }`} />
      </div>
      
      <span className="text-[11px] md:text-xs font-bold tracking-wider uppercase">
        {isScanning ? "Authenticating..." : isGodMode ? "Reality: Architect" : "Reality: Executive"}
      </span>

      {/* Shine Bar */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
    </button>
  );
}