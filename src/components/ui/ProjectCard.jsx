import React from 'react';
import { ArrowUpRight, Cpu } from 'lucide-react';

export default function ProjectCard({ project, isGodMode, onSelect }) {
  const content = isGodMode ? project.architect : project.executive;

  return (
    <div 
      onClick={() => onSelect && onSelect(project)}
      className={`group relative p-8 rounded-2xl transition-all duration-500 border flex flex-col justify-between h-full cursor-pointer
        ${isGodMode 
          ? "bg-black/40 backdrop-blur-xl border-green-500/20 shadow-[0_0_30px_rgba(34,197,94,0.05)] hover:border-green-500/60 hover:shadow-[0_0_35px_rgba(34,197,94,0.15)] hover:-translate-y-1" 
          : "bg-white/80 backdrop-blur-md border-slate-200/80 shadow-lg shadow-slate-200/40 hover:shadow-2xl hover:shadow-blue-100 hover:border-blue-200 hover:-translate-y-1"}`}
    >
      <div>
        {/* Category & Quick Action */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className={`text-[10px] font-bold tracking-widest uppercase ${
            isGodMode ? "text-green-500/60 font-mono" : "text-blue-600/70 font-semibold"
          }`}>
            {project.category}
          </span>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
            isGodMode 
              ? "bg-green-500/10 text-green-400 group-hover:bg-green-500 group-hover:text-black" 
              : "bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white"
          }`}>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {content.techStack.map((tech, index) => (
            <span key={index} className={`px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md transition-all duration-300
              ${isGodMode 
                ? "bg-green-500/10 text-green-400 border border-green-500/20" 
                : "bg-slate-100 text-slate-700 border border-slate-200"}`}>
              {tech}
            </span>
          ))}
        </div>

        <h3 className={`text-xl font-bold mb-3 transition-all duration-300 leading-snug
          ${isGodMode ? "text-green-400 font-mono group-hover:text-green-300" : "text-slate-900 font-sans group-hover:text-blue-600"}`}>
          {content.title}
        </h3>

        <p className={`text-sm leading-relaxed mb-6 line-clamp-3 transition-colors duration-300
          ${isGodMode ? "text-green-500/70 font-mono" : "text-slate-600 font-normal"}`}>
          {content.description}
        </p>
      </div>

      <div className={`pt-4 border-t flex items-center justify-between
        ${isGodMode ? "border-green-500/15" : "border-slate-100"}`}>
        <div className="flex items-center gap-1.5">
          {isGodMode && <Cpu className="w-3.5 h-3.5 text-green-500/60" />}
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-50">
            {isGodMode ? "THROUGHPUT:" : "IMPACT:"}
          </span>
        </div>
        <span className={`text-base font-black ${isGodMode ? "text-green-400 font-mono" : "text-blue-600 font-sans"}`}>
          {content.impact}
        </span>
      </div>
    </div>
  );
}