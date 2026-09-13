import React from 'react';
import { Award, CheckCircle2, TrendingUp, Shield, Cpu } from 'lucide-react';
import { playClick } from '../../utils/audio';

export default function About({ title, bio, metrics, isGodMode, themeMode = 'dark', label }) {
  const handleCardHover = () => {
    playClick(720, 0.02);
  };

  return (
    <section id="about" className="py-12 md:py-20 px-4 sm:px-6 max-w-6xl mx-auto scroll-mt-28 w-full">
      <div className="grid md:grid-cols-12 gap-10 lg:gap-16 items-center w-full">
        
        {/* Left Column: Narrative */}
        <div className="md:col-span-7 text-left space-y-6">
          <div className="inline-flex items-center gap-2">
            <span className={`h-2 w-2 rounded-full ${isGodMode ? "bg-green-400 animate-ping" : themeMode === "light" ? "bg-blue-600" : "bg-cyan-400"}`} />
            <h3 className={`text-xs tracking-[0.3em] uppercase font-bold ${
              isGodMode ? "text-green-500/80 font-mono" : themeMode === "light" ? "text-blue-600 font-sans" : "text-cyan-400 font-sans"
            }`}>
              {label}
            </h3>
          </div>

          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-black tracking-tight ${
            isGodMode ? "text-green-400 font-mono text-glow-green" : themeMode === "light" ? "text-slate-900 font-sans" : "text-white font-sans"
          }`}>
            {title}
          </h2>

          <div className={`p-6 sm:p-7 rounded-2xl border transition-all duration-500 ${
            isGodMode 
              ? "bg-[#070b09]/90 border-green-500/30 backdrop-blur-xl shadow-[0_0_30px_rgba(0,0,0,0.8)]" 
              : themeMode === "light"
              ? "bg-white/95 border-slate-200 backdrop-blur-xl shadow-xl shadow-slate-200/50"
              : "bg-[#0c1222]/80 border-slate-800/80 backdrop-blur-xl shadow-[0_15px_35px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.06)]"
          }`}>
            <p className={`text-base sm:text-lg leading-relaxed ${
              isGodMode ? "text-green-400/90 font-mono" : themeMode === "light" ? "text-slate-700 font-normal" : "text-slate-300 font-normal"
            }`}>
              {bio}
            </p>

            <div className={`mt-6 pt-5 border-t flex flex-wrap gap-2 ${
              isGodMode ? "border-green-500/20" : themeMode === "light" ? "border-slate-200" : "border-slate-800/80"
            }`}>
              {(isGodMode 
                ? ["Distributed Consensus", "Lock-Free Systems", "Vector RAG", "Event Sourcing"] 
                : ["Boardroom Presentation", "Enterprise CAC Optimization", "M&A Technical Diligence", "Cross-Functional Squads"]
              ).map((tag, idx) => (
                <span 
                  key={idx} 
                  className={`text-[11px] font-bold px-3 py-1 rounded-lg border ${
                    isGodMode 
                      ? "bg-green-500/10 border-green-500/30 text-green-400 font-mono" 
                      : themeMode === "light"
                      ? "bg-slate-100 border-slate-200 text-slate-700 font-sans"
                      : "bg-[#101728] border-slate-800 text-slate-300 font-sans"
                  }`}
                >
                  ✓ {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        {/* Right Column: Metrics 2x2 Grid */}
        <div className="md:col-span-5 w-full">
          <div className={`grid grid-cols-2 gap-4 p-5 sm:p-6 rounded-3xl transition-all duration-500 border ${
            isGodMode 
              ? "bg-[#060907]/90 border-green-500/30 backdrop-blur-2xl shadow-[0_0_35px_rgba(34,197,94,0.12)]" 
              : themeMode === "light"
              ? "bg-white/95 border-slate-200 backdrop-blur-2xl shadow-xl shadow-slate-200/50"
              : "bg-[#0c1222]/80 border-slate-800/80 backdrop-blur-2xl shadow-[0_15px_35px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.06)]"
          }`}>
            {metrics.map((item, idx) => (
              <div 
                key={idx} 
                onMouseEnter={handleCardHover}
                className={`p-5 rounded-2xl transition-all duration-300 border flex flex-col justify-between group hover:-translate-y-1 ${
                  isGodMode 
                    ? "bg-black/60 border-green-500/20 hover:border-green-500/60 hover:shadow-[0_0_20px_rgba(34,197,94,0.2)]" 
                    : themeMode === "light"
                    ? "bg-slate-50 border-slate-200 hover:bg-blue-50/50 hover:border-blue-400 hover:shadow-md"
                    : "bg-[#101728]/70 border-slate-800/70 hover:bg-[#141f38] hover:border-blue-500/50 hover:shadow-[0_0_25px_rgba(37,99,235,0.2)]"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-[10px] uppercase tracking-wider font-bold ${
                    isGodMode ? "text-green-500/60 font-mono" : themeMode === "light" ? "text-slate-500 font-sans" : "text-slate-400 font-sans"
                  }`}>
                    {item.label}
                  </span>
                  {isGodMode ? (
                    <Cpu className="w-3.5 h-3.5 text-green-400 opacity-60 group-hover:opacity-100 transition-opacity" />
                  ) : (
                    <TrendingUp className={`w-3.5 h-3.5 ${themeMode === "light" ? "text-blue-600" : "text-cyan-400"} opacity-80 group-hover:opacity-100 transition-opacity`} />
                  )}
                </div>
                <p className={`text-2xl sm:text-3xl font-black transition-transform duration-300 group-hover:scale-105 ${
                  isGodMode ? "text-green-400 font-mono" : themeMode === "light" ? "text-slate-900 font-sans" : "text-white font-sans"
                }`}>
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}