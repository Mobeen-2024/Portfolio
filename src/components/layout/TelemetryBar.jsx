import React, { useState, useEffect } from 'react';
import { Cpu, Activity, Shield, Zap } from 'lucide-react';

export default function TelemetryBar({ isGodMode }) {
  const [latency, setLatency] = useState(14);
  const [memUsage, setMemUsage] = useState(41.8);

  useEffect(() => {
    if (!isGodMode) return;
    const interval = setInterval(() => {
      // Simulate subtle realistic telemetry jitter
      setLatency(+(12 + Math.random() * 4).toFixed(1));
      setMemUsage(+(41.5 + Math.random() * 0.8).toFixed(1));
    }, 2500);
    return () => clearInterval(interval);
  }, [isGodMode]);

  if (!isGodMode) return null;

  return (
    <div className="w-full bg-black/90 border-b border-green-500/25 px-4 py-1.5 font-mono text-[10px] text-green-400/80 backdrop-blur-xl z-50 select-none flex items-center justify-between overflow-x-auto whitespace-nowrap shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1.5 text-green-400 font-bold">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          <span>SYS_KERNEL::ARCHITECT_MODE</span>
        </div>
        <span className="opacity-30">|</span>
        <div className="flex items-center gap-1">
          <Activity className="w-3 h-3 text-green-500/70" />
          <span>LATENCY: {latency}ms (P99)</span>
        </div>
        <span className="opacity-30 hidden sm:inline">|</span>
        <div className="hidden sm:flex items-center gap-1">
          <Cpu className="w-3 h-3 text-green-500/70" />
          <span>HEAP_RSS: {memUsage}MB</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center gap-1 text-green-500/70">
          <Zap className="w-3 h-3 text-green-400" />
          <span>NODES: 4 CLUSTERS ONLINE</span>
        </div>
        <span className="opacity-30 hidden md:inline">|</span>
        <div className="flex items-center gap-1">
          <Shield className="w-3 h-3 text-green-400" />
          <span className="text-green-300">SECURITY: ENCRYPTED (AES-256)</span>
        </div>
      </div>
    </div>
  );
}
