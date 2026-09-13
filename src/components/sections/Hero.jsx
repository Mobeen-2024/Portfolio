import React from 'react';
import { ArrowRight, Terminal, Sparkles, ShieldCheck, ChevronRight, Zap } from 'lucide-react';
import { playClick } from '../../utils/audio';

export default function Hero({ title, subtitle, isGodMode, onOpenAgentConsole }) {
  const scrollToProjects = () => {
    playClick(480, 0.04);
    const el = document.getElementById("projects");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleConsoleClick = () => {
    playClick(640, 0.05);
    onOpenAgentConsole();
  };

  const kpis = isGodMode ? [
    { label: "THROUGHPUT", value: "1.2M Rec/Batch" },
    { label: "P99 LATENCY", value: "< 3.8ms" },
    { label: "AGENT NODES", value: "4 Swarm DAGs" },
    { label: "UPTIME", value: "99.999% SLA" }
  ] : [
    { label: "INCREMENTAL ARR", value: "+$2.4M Lift" },
    { label: "LEADERSHIP TENURE", value: "20+ Years" },
    { label: "ATTRIBUTION FIDELITY", value: "100% Precise" },
    { label: "PRODUCTION ARCHITECTURES", value: "5 Case Studies" }
  ];

  return (
    <section className="relative min-h-[80vh] flex flex-col justify-center items-center px-4 sm:px-6 pt-12 md:pt-8 w-full">
      <div className="w-full max-w-5xl text-center space-y-7 md:space-y-9">
        
        {/* Top Status Badge */}
        <div className="inline-flex items-center justify-center">
          <div className={`inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border text-xs font-semibold backdrop-blur-md transition-all duration-500 ${
            isGodMode 
              ? "bg-green-950/40 border-green-500/40 text-green-400 font-mono shadow-[0_0_15px_rgba(34,197,94,0.2)]" 
              : "bg-white/90 border-slate-200 text-slate-700 shadow-sm font-sans"
          }`}>
            <span className={`w-2 h-2 rounded-full ${
              isGodMode ? "bg-green-400 animate-pulse" : "bg-blue-600"
            }`} />
            <span>
              {isGodMode 
                ? "root@cluster-01: active_pipeline_telemetry" 
                : "Available for Strategic Advisory & Architecture Leadership"}
            </span>
            <ChevronRight className="w-3.5 h-3.5 opacity-50" />
          </div>
        </div>

        {/* Dynamic High-Impact Headline */}
        <div className="space-y-4">
          <h1 
            key={title} 
            className={`text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.12] transition-all duration-700 ${
              isGodMode 
                ? "text-green-400 font-mono drop-shadow-[0_0_25px_rgba(34,197,94,0.45)] text-glow-green" 
                : "text-slate-900 font-sans tracking-tight"
            }`}
          >
            {title}
          </h1>
          
          <p 
            key={subtitle}
            className={`text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed transition-all duration-700 ${
              isGodMode ? "text-green-400/80 font-mono" : "text-slate-600 font-normal"
            }`}
          >
            {subtitle}
          </p>
        </div>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <button
            onClick={scrollToProjects}
            className={`px-8 py-4 rounded-xl font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 flex items-center gap-2.5 group shadow-xl active:scale-95 cursor-pointer ${
              isGodMode
                ? "bg-green-500 text-black hover:bg-green-400 hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] font-mono"
                : "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 hover:shadow-blue-300"
            }`}
          >
            <span>{isGodMode ? "Inspect Systems Architecture" : "Explore Strategic Outcomes"}</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          <button
            onClick={handleConsoleClick}
            className={`px-7 py-4 rounded-xl font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 flex items-center gap-2.5 border active:scale-95 cursor-pointer ${
              isGodMode
                ? "bg-black/60 border-green-500/50 text-green-400 hover:bg-green-500/15 hover:border-green-400 shadow-[0_0_20px_rgba(34,197,94,0.15)] font-mono"
                : "bg-white/80 border-slate-300 text-slate-800 hover:bg-white hover:border-slate-400 shadow-sm"
            }`}
          >
            {isGodMode ? <Terminal className="w-4 h-4 text-green-400" /> : <Sparkles className="w-4 h-4 text-blue-600" />}
            <span>{isGodMode ? "Launch Terminal Co-Pilot" : "Consult Executive AI"}</span>
          </button>
        </div>

        {/* Quick Credentials & KPI Ribbon */}
        <div className="pt-8 sm:pt-10 w-full max-w-4xl mx-auto">
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-3 p-4 sm:p-5 rounded-2xl border transition-all duration-500 ${
            isGodMode 
              ? "bg-[#050806]/80 border-green-500/25 backdrop-blur-xl shadow-[0_0_25px_rgba(0,0,0,0.8)]" 
              : "bg-white/70 border-slate-200/80 backdrop-blur-xl shadow-lg shadow-slate-200/30"
          }`}>
            {kpis.map((kpi, index) => (
              <div key={index} className="text-center px-2 py-1.5">
                <p className={`text-base sm:text-lg md:text-xl font-black ${
                  isGodMode ? "text-green-400 font-mono" : "text-slate-900 font-sans"
                }`}>
                  {kpi.value}
                </p>
                <p className={`text-[10px] uppercase font-bold tracking-wider pt-0.5 ${
                  isGodMode ? "text-green-500/60 font-mono" : "text-slate-500 font-sans"
                }`}>
                  {kpi.label}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}