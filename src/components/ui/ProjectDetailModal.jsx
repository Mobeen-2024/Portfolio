import React, { useEffect } from 'react';
import { X, CheckCircle2, Layers, Activity, TrendingUp, ShieldAlert, GitCommit } from 'lucide-react';

export default function ProjectDetailModal({ project, isGodMode, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const data = isGodMode ? project.architect : project.executive;

  return (
    <div 
      role="dialog"
      aria-modal="true"
      aria-label={data.title}
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div 
        onClick={(e) => e.stopPropagation()}
        className={`w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl p-6 sm:p-8 border shadow-2xl transition-all duration-300 ${
          isGodMode 
            ? "bg-neutral-950 border-green-500/40 text-green-400 font-mono shadow-[0_0_50px_rgba(34,197,94,0.15)]" 
            : "bg-white border-slate-200 text-slate-800 font-sans shadow-2xl"
        }`}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b pb-6 mb-6 border-current/15">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className={`text-[11px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full ${
                isGodMode ? "bg-green-500/10 text-green-400 border border-green-500/30" : "bg-blue-50 text-blue-600 border border-blue-100"
              }`}>
                {project.category}
              </span>
              <span className="text-xs opacity-50 font-semibold">•</span>
              <span className="text-xs opacity-60 uppercase tracking-wider font-semibold">{data.tagline}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight">{data.title}</h2>
          </div>

          <button
            onClick={onClose}
            className={`p-2 rounded-xl border transition-colors ${
              isGodMode 
                ? "border-green-500/30 text-green-400 hover:bg-green-500/10" 
                : "border-slate-200 text-slate-500 hover:bg-slate-100 hover:text-slate-800"
            }`}
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Core Description */}
        <div className="space-y-6">
          <p className="text-base sm:text-lg leading-relaxed opacity-90">
            {data.description}
          </p>

          {/* Key Metrics Grid */}
          {data.keyMetrics && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              {data.keyMetrics.map((m, idx) => (
                <div 
                  key={idx} 
                  className={`p-4 rounded-2xl border ${
                    isGodMode 
                      ? "bg-green-950/20 border-green-500/20" 
                      : "bg-slate-50 border-slate-200/80"
                  }`}
                >
                  <p className="text-[10px] font-bold uppercase tracking-wider opacity-60 mb-1">{m.label}</p>
                  <p className={`text-xl font-black ${isGodMode ? "text-green-300" : "text-blue-600"}`}>{m.value}</p>
                </div>
              ))}
            </div>
          )}

          {/* Dual Perspective Deep Dive */}
          {isGodMode ? (
            /* Architect Deep Dive */
            <div className="space-y-6 pt-4 border-t border-green-500/20">
              <div>
                <h4 className="text-xs uppercase tracking-widest font-bold text-green-500 mb-2 flex items-center gap-2">
                  <Activity className="w-4 h-4" />
                  // ARCHITECTURAL_SPECIFICATION
                </h4>
                <p className="text-sm opacity-80 leading-relaxed bg-black/50 p-4 rounded-xl border border-green-500/20">
                  {data.architectureDetails}
                </p>
              </div>

              {data.pipelineSteps && (
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-bold text-green-500 mb-3 flex items-center gap-2">
                    <GitCommit className="w-4 h-4" />
                    // PIPELINE_EXECUTION_STAGES
                  </h4>
                  <div className="space-y-2">
                    {data.pipelineSteps.map((step, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-xs p-2.5 rounded-lg bg-green-500/5 border border-green-500/10">
                        <span className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center text-[10px] font-bold text-green-400">
                          {idx + 1}
                        </span>
                        <span>{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {data.complexity && (
                <div className="p-3 rounded-xl bg-black/60 border border-green-500/20 flex items-center justify-between text-xs">
                  <span className="opacity-60 uppercase font-mono tracking-widest">ALGORITHMIC COMPLEXITY:</span>
                  <span className="font-bold text-green-300 font-mono">{data.complexity}</span>
                </div>
              )}
            </div>
          ) : (
            /* Executive Deep Dive */
            <div className="space-y-6 pt-4 border-t border-slate-100">
              <div>
                <h4 className="text-xs uppercase tracking-widest font-bold text-blue-600 mb-2 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  Strategic Takeaway & ROI
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-200/80">
                  {data.strategicTakeaway}
                </p>
              </div>

              {data.businessChallenges && (
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-bold text-slate-500 mb-2 flex items-center gap-2">
                    <ShieldAlert className="w-4 h-4 text-amber-500" />
                    Overcome Business Friction
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-200/80">
                    {data.businessChallenges}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Tech Stack Chips */}
          <div className="pt-4 border-t border-current/15">
            <h4 className="text-[11px] uppercase tracking-wider font-bold opacity-60 mb-3 flex items-center gap-2">
              <Layers className="w-3.5 h-3.5" />
              {isGodMode ? "// SYSTEM_TECHNOLOGY_STACK" : "Enterprise Toolchain"}
            </h4>
            <div className="flex flex-wrap gap-2">
              {data.techStack.map((tech, idx) => (
                <span 
                  key={idx} 
                  className={`px-3 py-1 rounded-lg text-xs font-semibold ${
                    isGodMode 
                      ? "bg-green-500/10 text-green-400 border border-green-500/20" 
                      : "bg-blue-50 text-blue-700 border border-blue-100"
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
