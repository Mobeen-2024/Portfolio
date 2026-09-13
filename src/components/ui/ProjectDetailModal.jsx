import React, { useEffect, useState } from 'react';
import { X, CheckCircle2, Layers, Activity, TrendingUp, ShieldAlert, GitCommit, ArrowRight, Zap, RefreshCw } from 'lucide-react';
import { playClick } from '../../utils/audio';

export default function ProjectDetailModal({ project, isGodMode, onClose }) {
  const [modalPerspective, setModalPerspective] = useState(isGodMode ? 'architect' : 'executive');

  useEffect(() => {
    setModalPerspective(isGodMode ? 'architect' : 'executive');
  }, [isGodMode]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        playClick(440, 0.03);
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const isArchitectView = modalPerspective === 'architect';
  const data = isArchitectView ? project.architect : project.executive;

  const handleClose = () => {
    playClick(440, 0.03);
    onClose();
  };

  const togglePerspective = () => {
    playClick(580, 0.04);
    setModalPerspective(prev => prev === 'architect' ? 'executive' : 'architect');
  };

  return (
    <div 
      role="dialog"
      aria-modal="true"
      aria-label={data.title}
      className="fixed inset-0 z-[200] flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-300"
      onClick={handleClose}
    >
      <div 
        onClick={(e) => e.stopPropagation()}
        className={`w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl p-6 sm:p-10 border transition-all duration-300 ${
          isArchitectView 
            ? "bg-[#060a08]/95 border-green-500/40 text-green-300 font-mono shadow-[0_0_60px_rgba(34,197,94,0.2)]" 
            : "bg-white/95 border-slate-200/90 text-slate-800 font-sans shadow-2xl shadow-slate-900/20"
        }`}
      >
        {/* Top Control Bar: Category, Perspective Toggle, Close Button */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b pb-6 mb-6 border-current/15">
          <div className="flex items-center gap-3">
            <span className={`text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${
              isArchitectView 
                ? "bg-green-500/10 text-green-400 border-green-500/30 font-mono" 
                : "bg-blue-50 text-blue-700 border-blue-100 font-sans"
            }`}>
              {project.category}
            </span>

            {/* Quick In-Modal Perspective Switcher */}
            <button
              onClick={togglePerspective}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider transition-all border ${
                isArchitectView
                  ? "bg-black text-green-400 border-green-500/40 hover:bg-green-500/10"
                  : "bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200"
              }`}
            >
              <RefreshCw className="w-3 h-3 animate-spin-once" />
              <span>Switch to {isArchitectView ? "Executive" : "Architect"} View</span>
            </button>
          </div>

          <button
            onClick={handleClose}
            className={`p-2 rounded-xl border transition-colors cursor-pointer ${
              isArchitectView 
                ? "border-green-500/30 text-green-400 hover:bg-green-500/10" 
                : "border-slate-200 text-slate-500 hover:bg-slate-100 hover:text-slate-800"
            }`}
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Title & Tagline */}
        <div className="mb-6 space-y-2">
          <span className={`text-xs font-bold uppercase tracking-widest opacity-60 ${
            isArchitectView ? "text-green-400" : "text-blue-600"
          }`}>
            {data.tagline}
          </span>
          <h2 className={`text-2xl sm:text-4xl font-black tracking-tight ${
            isArchitectView ? "text-green-400 text-glow-green" : "text-slate-900"
          }`}>
            {data.title}
          </h2>
        </div>

        {/* Core Narrative */}
        <div className="space-y-7">
          <p className={`text-base sm:text-lg leading-relaxed ${
            isArchitectView ? "text-green-400/90 font-mono" : "text-slate-700"
          }`}>
            {data.description}
          </p>

          {/* Key Metrics Grid */}
          {data.keyMetrics && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              {data.keyMetrics.map((m, idx) => (
                <div 
                  key={idx} 
                  className={`p-4 rounded-2xl border ${
                    isArchitectView 
                      ? "bg-black/60 border-green-500/25 shadow-[0_0_15px_rgba(34,197,94,0.06)]" 
                      : "bg-slate-50 border-slate-200/80 shadow-sm"
                  }`}
                >
                  <p className="text-[10px] font-bold uppercase tracking-wider opacity-60 mb-1">{m.label}</p>
                  <p className={`text-xl font-black ${isArchitectView ? "text-green-300" : "text-blue-600"}`}>{m.value}</p>
                </div>
              ))}
            </div>
          )}

          {/* Perspective-Specific Deep Dive */}
          {isArchitectView ? (
            /* Architect Deep Dive */
            <div className="space-y-6 pt-5 border-t border-green-500/20">
              <div>
                <h4 className="text-xs uppercase tracking-widest font-bold text-green-400 mb-2.5 flex items-center gap-2">
                  <Activity className="w-4 h-4 text-green-400" />
                  // LOW_LEVEL_ARCHITECTURAL_SPECIFICATION
                </h4>
                <p className="text-sm opacity-90 leading-relaxed bg-black/60 p-4 sm:p-5 rounded-2xl border border-green-500/25">
                  {data.architectureDetails}
                </p>
              </div>

              {data.pipelineSteps && (
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-bold text-green-400 mb-3 flex items-center gap-2">
                    <GitCommit className="w-4 h-4 text-green-400" />
                    // EXECUTION_PIPELINE_STAGES
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {data.pipelineSteps.map((step, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-xs p-3.5 rounded-xl bg-black/50 border border-green-500/20">
                        <span className="w-6 h-6 rounded-lg bg-green-500/20 flex items-center justify-center text-[10px] font-bold text-green-300 shrink-0">
                          0{idx + 1}
                        </span>
                        <span className="text-green-200/90 font-mono">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {data.complexity && (
                <div className="p-4 rounded-xl bg-black/70 border border-green-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                  <span className="opacity-70 uppercase font-mono tracking-widest">ALGORITHMIC COMPLEXITY:</span>
                  <span className="font-bold text-green-300 font-mono">{data.complexity}</span>
                </div>
              )}
            </div>
          ) : (
            /* Executive Deep Dive */
            <div className="space-y-6 pt-5 border-t border-slate-100">
              <div>
                <h4 className="text-xs uppercase tracking-widest font-bold text-blue-600 mb-2.5 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  Strategic Takeaway & Boardroom Impact
                </h4>
                <p className="text-sm text-slate-700 leading-relaxed bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200/80">
                  {data.strategicTakeaway}
                </p>
              </div>

              {data.businessChallenges && (
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-bold text-slate-600 mb-2.5 flex items-center gap-2">
                    <ShieldAlert className="w-4 h-4 text-amber-500" />
                    Friction Resolved & Business Challenge
                  </h4>
                  <p className="text-sm text-slate-700 leading-relaxed bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200/80">
                    {data.businessChallenges}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Tech Stack Toolchain */}
          <div className="pt-5 border-t border-current/15">
            <h4 className="text-[11px] uppercase tracking-wider font-bold opacity-60 mb-3 flex items-center gap-2">
              <Layers className="w-3.5 h-3.5" />
              {isArchitectView ? "// TECHNOLOGY_STACK_BLUEPRINT" : "Enterprise Solution Toolchain"}
            </h4>
            <div className="flex flex-wrap gap-2">
              {data.techStack.map((tech, idx) => (
                <span 
                  key={idx} 
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold ${
                    isArchitectView 
                      ? "bg-black/60 text-green-300 border border-green-500/30 font-mono" 
                      : "bg-blue-50 text-blue-800 border border-blue-100 font-sans"
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

