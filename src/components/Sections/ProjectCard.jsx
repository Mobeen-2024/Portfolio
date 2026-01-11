export default function ProjectCard({ project, isGodMode }) {
  const content = isGodMode ? project.architect : project.executive;

  return (
    <div className={`group relative p-8 rounded-3xl transition-all duration-700 border h-full flex flex-col justify-between
      ${isGodMode 
        ? "bg-black/40 backdrop-blur-xl border-green-500/20 shadow-[0_0_30px_rgba(34,197,94,0.05)] hover:border-green-500/50" 
        : "bg-white/70 backdrop-blur-md border-white/20 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-blue-100"}`}>
      
      <div>
        <div className="flex justify-between items-start mb-6">
          <span className={`text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1 rounded-full
            ${isGodMode ? "bg-green-500/10 text-green-500" : "bg-blue-50 text-blue-600"}`}>
            {content.tagline}
          </span>
          {isGodMode && <span className="text-green-500/30 font-mono text-xs">ID: {project.id}</span>}
        </div>

        <h3 className={`text-2xl font-bold mb-4 transition-colors duration-500
          ${isGodMode ? "text-green-400 group-hover:text-green-300" : "text-slate-800"}`}>
          {content.title}
        </h3>

        <p className={`text-sm leading-relaxed mb-8 transition-colors duration-500
          ${isGodMode ? "text-green-500/70 font-mono" : "text-slate-600"}`}>
          {content.description}
        </p>
      </div>

      <div className={`mt-auto pt-6 border-t flex justify-between items-center
        ${isGodMode ? "border-green-500/10" : "border-slate-100"}`}>
        <span className="text-xs font-semibold uppercase tracking-widest opacity-50">Impact:</span>
        <span className={`text-lg font-bold ${isGodMode ? "text-green-400" : "text-blue-600"}`}>
          {content.impact}
        </span>
      </div>
    </div>
  );
}