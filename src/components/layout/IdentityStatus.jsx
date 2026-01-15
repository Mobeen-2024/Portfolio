import React from 'react';

export default function IdentityStatus({ isScanning, isGodMode }) {
  if (!isScanning) return null;

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center pointer-events-none">
      <div className={`px-8 py-4 rounded-lg border-2 animate-pulse bg-black/90 ${
        isGodMode 
          ? "border-red-500 text-red-500 shadow-[0_0_30px_rgba(239,68,68,0.4)]" 
          : "border-green-500 text-green-500 shadow-[0_0_30px_rgba(34,197,94,0.4)]"
      }`}>
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs font-mono tracking-[0.5em] uppercase">Security Protocol</span>
          <span className="text-2xl font-black font-mono tracking-tighter">
            {isGodMode ? "REVOKING ACCESS..." : "IDENTITY VERIFIED"}
          </span>
          <span className="text-[10px] font-mono opacity-60">
            {isGodMode ? "> DECRYPTING_LOCAL_STORAGE" : "> ACCESS_GRANTED: WELCOME ARCHITECT"}
          </span>
        </div>
      </div>
    </div>
  );
}