import React from 'react';
import { Award, CheckCircle2, TrendingUp, Shield, Cpu } from 'lucide-react';
import { playClick } from '../../utils/audio';

export default function About({ title, bio, metrics, isGodMode, label }) {
  const handleCardHover = () => {
    playClick(720, 0.02);
  };

  return (
    <section id="about" className="py-12 md:py-20 px-4 sm:px-6 max-w-6xl mx-auto scroll-mt-28 w-full">
      <div className="grid md:grid-cols-12 gap-10 lg:gap-16 items-center w-full">
        
        {/* Left Column: Narrative */}
        <div className="md:col-span-7 text-left space-y-6">
          <div className="inline-flex items-center gap-2">
            <span className={`h-2 w-2 rounded-full ${isGodMode ? "bg-green-400 animate-ping" : "bg-blue-600"}`} />
            <h3 className={`text-xs tracking-[0.3em] uppercase font-bold ${
              isGodMode ? "text-green-500/80 font-mono" : "text-blue-600 font-sans"
            }`}>
              {label}
            </h3>
          </div>

          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-black tracking-tight ${
            isGodMode ? "text-green-400 font-mono text-glow-green" : "text-slate-900 font-sans"
          }`}>
            {title}
          </h2>

          <div className={`p-6 sm:p-7 rounded-2xl border transition-all duration-500 ${
            isGodMode 
              ? "bg-[#070b09]/90 border-green-500/30 backdrop-blur-xl shadow-[0_0_30px_rgba(0,0,0,0.8)]" 
              : "bg-white/80 border-slate-200/90 backdrop-blur-xl shadow-xl shadow-slate-200/40"
          }`}>
            <p className={`text-base sm:text-lg leading-relaxed ${
              isGodMode ? "text-green-400/90 font-mono" : "text-slate-700 font-normal"
            }`}>
              {bio}
            </p>

            <div className={`mt-6 pt-5 border-t flex flex-wrap gap-2 ${
              isGodMode ? "border-green-500/20" : "border-slate-100"
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
                      : "bg-slate-100 border-slate-200 text-slate-700 font-sans"
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
              : "bg-white/90 border-slate-200/90 backdrop-blur-2xl shadow-2xl shadow-slate-200/50"
          }`}>
            {metrics.map((item, idx) => (
              <div 
                key={idx} 
                onMouseEnter={handleCardHover}
                className={`p-5 rounded-2xl transition-all duration-300 border flex flex-col justify-between group hover:-translate-y-1 ${
                  isGodMode 
                    ? "bg-black/60 border-green-500/20 hover:border-green-500/60 hover:shadow-[0_0_20px_rgba(34,197,94,0.2)]" 
                    : "bg-slate-50/80 border-slate-200/60 hover:bg-white hover:border-blue-300 hover:shadow-lg hover:shadow-blue-100"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-[10px] uppercase tracking-wider font-bold ${
                    isGodMode ? "text-green-500/60 font-mono" : "text-slate-400 font-sans"
                  }`}>
                    {item.label}
                  </span>
                  {isGodMode ? (
                    <Cpu className="w-3.5 h-3.5 text-green-400 opacity-60 group-hover:opacity-100 transition-opacity" />
                  ) : (
                    <TrendingUp className="w-3.5 h-3.5 text-blue-600 opacity-60 group-hover:opacity-100 transition-opacity" />
                  )}
                </div>
                <p className={`text-2xl sm:text-3xl font-black transition-transform duration-300 group-hover:scale-105 ${
                  isGodMode ? "text-green-400 font-mono" : "text-slate-900 font-sans"
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