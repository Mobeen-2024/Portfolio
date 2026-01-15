import React from 'react';
import { Fingerprint } from 'lucide-react'; // Or any fingerprint icon

export default function BiometricScanner({ isScanning, isGodMode, onScan }) {
  return (
    <button
      onClick={onScan}
      disabled={isScanning}
      className={`relative group flex items-center gap-3 p-3 md:px-5 md:py-3 rounded-full border active:scale-95 transition-all duration-500 overflow-hidden ${
        isGodMode 
          ? "bg-green-950/20 border-green-500/50 text-green-500 shadow-[0_0_15px_rgba(34,197,94,0.2)]" 
          : "bg-white/40 backdrop-blur-md border-white/20 text-slate-700 shadow-xl"
      }`}
    >
      {/* Scanning Pulse Effect */}
      {isScanning && (
        <div className="absolute inset-0 bg-red-500/20 animate-pulse" />
      )}
      
      <Fingerprint className={`w-5 h-5 ${isScanning ? "animate-bounce text-red-500" : ""}`} />
      
      <span className="text-xs font-bold tracking-widest uppercase">
        {isScanning ? "Authenticating..." : isGodMode ? "System: Secure" : "Identify Personnel"}
      </span>

      {/* Glassmorphism Shine */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
    </button>
  );
}