import React from 'react';

export default function ProjectCard({ project, isGodMode }) {
  const content = isGodMode ? project.architect : project.executive;

  return (
    <div className={`group relative p-8 rounded-2xl transition-all duration-700 border flex flex-col justify-between h-full
      ${isGodMode 
        ? "bg-black/40 backdrop-blur-xl border-green-500/20 shadow-[0_0_30px_rgba(34,197,94,0.05)] hover:border-green-500/50" 
        : "bg-white/70 backdrop-blur-md border-white/10 shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:shadow-blue-100"}`}>
      
      <div>
        {/* Tech Stack Badge System */}
        <div className="flex flex-wrap gap-2 mb-6">
          {content.techStack.map((tech, index) => (
            <span key={index} className={`px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full transition-all duration-500
              ${isGodMode 
                ? "bg-green-500/10 text-green-500 border border-green-500/20" 
                : "bg-blue-50 text-blue-600 border border-blue-100"}`}>
              {tech}
            </span>
          ))}
        </div>

        <h3 className={`text-2xl font-bold mb-4 transition-all duration-500
          ${isGodMode ? "text-green-400 font-mono architect-glitch" : "text-slate-800 font-sans"}`}>
          {content.title}
        </h3>

        <p className={`text-base leading-relaxed mb-8 transition-colors duration-500
          ${isGodMode ? "text-green-500/60 font-mono" : "text-slate-600 font-light italic"}`}>
          {content.description}
        </p>
      </div>

      <div className={`mt-auto pt-6 border-t flex justify-between items-center
        ${isGodMode ? "border-green-500/10" : "border-slate-100"}`}>
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-40">Performance:</span>
        <span className={`text-xl font-black ${isGodMode ? "text-green-400" : "text-blue-600"}`}>
          {content.impact}
        </span>
      </div>
    </div>
  );
}