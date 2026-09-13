import React from 'react';
import { ArrowUpRight, Zap, Activity, Image as ImageIcon, Layers, Cpu, Network, Wrench } from 'lucide-react';
import { playClick } from '../../utils/audio';

export default function ProjectCard({ project, isGodMode, onSelect }) {
  const content = isGodMode ? project.architect : project.executive;
  const hasImages = project.images && project.images.length > 0;
  const primaryImage = hasImages ? project.images[0] : null;

  const handleClick = () => {
    playClick(620, 0.04);
    if (onSelect) onSelect(project);
  };

  return (
    <div 
      onClick={handleClick}
      className={`group relative p-5 sm:p-6 rounded-3xl transition-all duration-500 border flex flex-col justify-between h-full cursor-pointer select-none
        ${isGodMode 
          ? "bg-[#060a08]/90 backdrop-blur-2xl border-green-500/25 shadow-[0_8px_32px_rgba(0,0,0,0.85),0_0_15px_rgba(34,197,94,0.08)] hover:border-green-400/80 hover:shadow-[0_0_35px_rgba(34,197,94,0.25)] hover:-translate-y-2" 
          : "bg-white/90 backdrop-blur-2xl border-slate-200/90 shadow-[0_10px_35px_-5px_rgba(15,23,42,0.06),0_0_1px_1px_rgba(226,232,240,0.8)] hover:shadow-2xl hover:shadow-blue-500/15 hover:border-blue-400/50 hover:-translate-y-2"}`}
    >
      <div>
        {/* Visual Media Header / Thumbnail Showcase */}
        <div className="relative w-full h-44 sm:h-48 rounded-2xl overflow-hidden mb-5 border border-inherit/20 bg-slate-950/20">
          {primaryImage ? (
            <>
              <img 
                src={primaryImage} 
                alt={`${content.title} preview`} 
                className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
              <div className={`absolute inset-0 transition-opacity duration-300 ${
                isGodMode 
                  ? "bg-gradient-to-t from-[#060a08] via-transparent to-black/20 opacity-80 group-hover:opacity-60" 
                  : "bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-60 group-hover:opacity-40"
              }`} />
              
              {/* Image Gallery Badge */}
              {project.images.length > 1 && (
                <div className="absolute top-3 right-3 px-2 py-0.5 rounded-md text-[10px] font-bold tracking-wider uppercase backdrop-blur-md bg-black/60 text-white flex items-center gap-1 border border-white/20">
                  <ImageIcon className="w-3 h-3" />
                  <span>{project.images.length} Shots</span>
                </div>
              )}
            </>
          ) : (
            <div className={`w-full h-full flex flex-col items-center justify-center p-6 text-center transition-colors duration-500 ${
              isGodMode 
                ? "bg-gradient-to-br from-green-950/30 via-black to-[#050906] text-green-400/60" 
                : "bg-gradient-to-br from-slate-100 via-blue-50/50 to-indigo-50/40 text-slate-400"
            }`}>
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-2 transition-transform duration-500 group-hover:scale-110 ${
                isGodMode ? "bg-green-500/10 border border-green-500/20 text-green-400" : "bg-white shadow-md text-blue-600 border border-slate-200/60"
              }`}>
                {project.category.includes("Hardware") ? (
                  <Wrench className="w-6 h-6" />
                ) : project.category.includes("Network") ? (
                  <Network className="w-6 h-6" />
                ) : project.category.includes("IoT") ? (
                  <Cpu className="w-6 h-6" />
                ) : (
                  <Layers className="w-6 h-6" />
                )}
              </div>
              <span className="text-[10px] font-bold tracking-widest uppercase opacity-70">
                {isGodMode ? "// HARDWARE_DIAGRAM" : "Field Telemetry & Deployments"}
              </span>
            </div>
          )}

          {/* Floating Category Pill on Media */}
          <div className="absolute bottom-3 left-3">
            <span className={`text-[10px] font-extrabold tracking-wider uppercase px-2.5 py-1 rounded-lg backdrop-blur-md border shadow-sm ${
              isGodMode 
                ? "bg-black/80 border-green-500/40 text-green-300 font-mono" 
                : "bg-white/90 border-slate-200 text-slate-800 font-sans"
            }`}>
              {project.category}
            </span>
          </div>

          {/* Floating Expand Arrow */}
          <div className={`absolute bottom-3 right-3 w-8 h-8 rounded-xl flex items-center justify-center backdrop-blur-md transition-all duration-300 ${
            isGodMode 
              ? "bg-black/80 border border-green-500/40 text-green-400 group-hover:bg-green-500 group-hover:text-black group-hover:shadow-[0_0_15px_rgba(34,197,94,0.6)]" 
              : "bg-white/90 border border-slate-200 text-slate-700 group-hover:bg-blue-600 group-hover:text-white shadow-sm"
          }`}>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>

        {/* Tech Stack Chips */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {content.techStack.slice(0, 4).map((tech, index) => (
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
          {content.techStack.length > 4 && (
            <span className={`px-2 py-1 text-[10px] font-bold rounded-lg border ${
              isGodMode ? "border-green-500/20 text-green-500/60" : "border-slate-200 text-slate-400"
            }`}>
              +{content.techStack.length - 4}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className={`text-lg sm:text-xl font-black mb-2.5 transition-all duration-300 leading-snug
          ${isGodMode ? "text-green-400 font-mono group-hover:text-green-300" : "text-slate-900 font-sans group-hover:text-blue-600"}`}>
          {content.title}
        </h3>

        {/* Tagline / Subtitle */}
        <p className={`text-xs font-semibold uppercase tracking-wider mb-3 ${
          isGodMode ? "text-green-500/60 font-mono" : "text-blue-600 font-sans"
        }`}>
          {content.tagline}
        </p>

        {/* Description */}
        <p className={`text-xs sm:text-sm leading-relaxed mb-5 line-clamp-3 transition-colors duration-300
          ${isGodMode ? "text-green-400/75 font-mono" : "text-slate-600 font-normal"}`}>
          {content.description}
        </p>
      </div>

      {/* Footer Impact Metric */}
      <div className={`pt-3.5 border-t flex items-center justify-between
        ${isGodMode ? "border-green-500/20" : "border-slate-100"}`}>
        <div className="flex items-center gap-1.5">
          {isGodMode ? (
            <Activity className="w-3.5 h-3.5 text-green-400" />
          ) : (
            <Zap className="w-3.5 h-3.5 text-blue-600" />
          )}
          <span className="text-[10px] font-bold uppercase tracking-[0.18em] opacity-60">
            {isGodMode ? "BENCHMARK:" : "BUSINESS ROI:"}
          </span>
        </div>
        <span className={`text-xs sm:text-sm font-black ${
          isGodMode ? "text-green-300 font-mono text-glow-green" : "text-blue-600 font-sans"
        }`}>
          {content.impact}
        </span>
      </div>
    </div>
  );
}