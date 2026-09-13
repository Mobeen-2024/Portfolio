import React from 'react';
import { ArrowUpRight, Cpu, Zap, Activity } from 'lucide-react';
import { playClick } from '../../utils/audio';

export default function ProjectCard({ project, isGodMode, onSelect }) {
  const content = isGodMode ? project.architect : project.executive;

  const handleClick = () => {
    playClick(620, 0.04);
    if (onSelect) onSelect(project);
  };

  return (
    <div 
      onClick={handleClick}
      className={`group relative p-7 sm:p-8 rounded-3xl transition-all duration-500 border flex flex-col justify-between h-full cursor-pointer select-none
        ${isGodMode 
          ? "bg-[#070b09]/92 backdrop-blur-2xl border-green-500/25 shadow-[0_4px_30px_rgba(0,0,0,0.8),0_0_20px_rgba(34,197,94,0.06)] hover:border-green-400/80 hover:shadow-[0_0_35px_rgba(34,197,94,0.22)] hover:-translate-y-1.5" 
          : "bg-white/90 backdrop-blur-2xl border-slate-200/90 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-blue-200/50 hover:border-blue-300 hover:-translate-y-1.5"}`}
    >
      <div>
        {/* Category & Action Arrow */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className={`text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full border ${
            isGodMode 
              ? "bg-green-500/10 border-green-500/30 text-green-400 font-mono" 
              : "bg-blue-50 border-blue-100 text-blue-700 font-semibold"
          }`}>
            {project.category}
          </span>
          
          <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 ${
            isGodMode 
              ? "bg-green-500/10 text-green-400 group-hover:bg-green-500 group-hover:text-black group-hover:shadow-[0_0_15px_rgba(34,197,94,0.6)]" 
              : "bg-slate-100 text-slate-600 group-hover:bg-blue-600 group-hover:text-white"
          }`}>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>

        {/* Tech Stack Chips */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {content.techStack.map((tech, index) => (
            <span 
              key={index} 
              className={`px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-lg transition-all duration-300
                ${isGodMode 
                  ? "bg-black/60 text-green-300/80 border border-green-500/20 group-hover:border-green-500/40" 
                  : "bg-slate-50 text-slate-700 border border-slate-200/80 group-hover:border-blue-100"}`}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className={`text-xl sm:text-2xl font-black mb-3 transition-all duration-300 leading-snug
          ${isGodMode ? "text-green-400 font-mono group-hover:text-green-300" : "text-slate-900 font-sans group-hover:text-blue-600"}`}>
          {content.title}
        </h3>

        {/* Description */}
        <p className={`text-sm leading-relaxed mb-6 line-clamp-3 transition-colors duration-300
          ${isGodMode ? "text-green-400/75 font-mono" : "text-slate-600 font-normal"}`}>
          {content.description}
        </p>
      </div>

      {/* Footer Impact Metric */}
      <div className={`pt-4 border-t flex items-center justify-between
        ${isGodMode ? "border-green-500/20" : "border-slate-100"}`}>
        <div className="flex items-center gap-1.5">
          {isGodMode ? (
            <Activity className="w-3.5 h-3.5 text-green-400" />
          ) : (
            <Zap className="w-3.5 h-3.5 text-blue-600" />
          )}
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-60">
            {isGodMode ? "BENCHMARK:" : "BUSINESS LIFT:"}
          </span>
        </div>
        <span className={`text-base font-black ${
          isGodMode ? "text-green-300 font-mono text-glow-green" : "text-blue-600 font-sans"
        }`}>
          {content.impact}
        </span>
      </div>
    </div>
  );
}