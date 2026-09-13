import React, { useEffect, useState } from 'react';
import { X, CheckCircle2, Layers, Activity, TrendingUp, ShieldAlert, GitCommit, ArrowRight, Zap, RefreshCw } from 'lucide-react';
import { playClick } from '../../utils/audio';

export default function ProjectDetailModal({ project, isGodMode, themeMode = 'dark', onClose }) {
  const [perspectiveOverride, setPerspectiveOverride] = useState(null);
  const modalPerspective = perspectiveOverride ?? (isGodMode ? 'architect' : 'executive');

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

  // Lock document body scrolling while modal is open
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  if (!project) return null;

  const isArchitectView = modalPerspective === 'architect';
  const data = isArchitectView ? project.architect : project.executive;

  const handleClose = () => {
    playClick(440, 0.03);
    onClose();
  };

  const togglePerspective = () => {
    playClick(580, 0.04);
    setPerspectiveOverride(modalPerspective === 'architect' ? 'executive' : 'architect');
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
        className={`w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl p-6 sm:p-10 border transition-all duration-300 no-scrollbar ${
          isArchitectView 
            ? "bg-[#060a08]/95 border-green-500/40 text-green-300 font-mono shadow-[0_0_60px_rgba(34,197,94,0.2)]" 
            : themeMode === "light"
            ? "bg-white/98 border-slate-200 text-slate-800 font-sans shadow-[0_25px_60px_rgba(0,0,0,0.25)] backdrop-blur-2xl"
            : "bg-[#0c1222]/95 border-slate-800 text-slate-200 font-sans shadow-[0_25px_60px_rgba(0,0,0,0.9),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-2xl"
        }`}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {/* Top Control Bar: Category, Perspective Toggle, Close Button */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b pb-6 mb-6 border-current/15">
          <div className="flex items-center gap-3">
            <span className={`text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${
              isArchitectView 
                ? "bg-green-500/10 text-green-400 border-green-500/30 font-mono" 
                : themeMode === "light"
                ? "bg-blue-50 text-blue-700 border-blue-200 font-sans"
                : "bg-blue-950/40 text-cyan-300 border-blue-500/30 font-sans"
            }`}>
              {project.category}
            </span>

            {/* Quick In-Modal Perspective Switcher */}
            <button
              onClick={togglePerspective}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider transition-all border cursor-pointer ${
                isArchitectView
                  ? "bg-black text-green-400 border-green-500/40 hover:bg-green-500/10"
                  : themeMode === "light"
                  ? "bg-slate-100 text-slate-700 border-slate-300 hover:bg-slate-200 hover:text-slate-900"
                  : "bg-[#121b30] text-slate-200 border-slate-750 hover:bg-[#18233d] hover:border-slate-700 hover:text-white"
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
                : themeMode === "light"
                ? "border-slate-200 text-slate-500 hover:bg-slate-100 hover:text-slate-900"
                : "border-slate-800 text-slate-400 hover:bg-slate-800/60 hover:text-white"
            }`}
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Title & Tagline */}
        <div className="mb-6 space-y-2">
          <span className={`text-xs font-bold uppercase tracking-widest opacity-80 ${
            isArchitectView ? "text-green-400" : themeMode === "light" ? "text-blue-600 font-semibold" : "text-cyan-400"
          }`}>
            {data.tagline}
          </span>
          <h2 className={`text-2xl sm:text-4xl font-black tracking-tight ${
            isArchitectView ? "text-green-400 text-glow-green" : themeMode === "light" ? "text-slate-900" : "text-white"
          }`}>
            {data.title}
          </h2>
        </div>

        {/* Image Gallery */}
        {project.images && project.images.length > 0 && (
          <div className="mb-8">
            <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider opacity-60 mb-2.5">
              <span>Application Screenshots & Telemetry ({project.images.length})</span>
              <span className="text-[10px]">Scroll horizontally →</span>
            </div>
            <div className="overflow-x-auto pb-4 snap-x snap-mandatory hide-scrollbar flex gap-4">
              {project.images.map((img, idx) => (
                <div key={idx} className="shrink-0 w-full sm:w-[85%] snap-center rounded-2xl overflow-hidden border border-current/15 shadow-xl bg-black/40">
                  <img 
                    src={img} 
                    alt={`${project.executive.title} screenshot ${idx + 1}`} 
                    className="w-full max-h-[420px] object-cover object-top hover:scale-[1.01] transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Core Narrative */}
        <div className="space-y-7">
          <p className={`text-base sm:text-lg leading-relaxed ${
            isArchitectView ? "text-green-400/90 font-mono" : themeMode === "light" ? "text-slate-700" : "text-slate-300"
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
                      : themeMode === "light"
                      ? "bg-slate-50 border-slate-200 shadow-sm"
                      : "bg-[#101728] border-slate-800 shadow-sm"
                  }`}
                >
                  <p className="text-[10px] font-bold uppercase tracking-wider opacity-60 mb-1">{m.label}</p>
                  <p className={`text-xl font-black ${
                    isArchitectView ? "text-green-300" : themeMode === "light" ? "text-blue-600" : "text-cyan-400"
                  }`}>{m.value}</p>
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
            <div className="space-y-6 pt-5 border-t border-current/15">
              <div>
                <h4 className={`text-xs uppercase tracking-widest font-bold mb-2.5 flex items-center gap-2 ${
                  themeMode === "light" ? "text-blue-600" : "text-cyan-400"
                }`}>
                  <TrendingUp className="w-4 h-4" />
                  Strategic Takeaway & ROI
                </h4>
                <p className={`text-sm leading-relaxed p-4 sm:p-5 rounded-2xl border ${
                  themeMode === "light" 
                    ? "text-slate-700 bg-slate-50 border-slate-200" 
                    : "text-slate-300 bg-[#101728] border-slate-800"
                }`}>
                  {data.strategicTakeaway}
                </p>
              </div>

              {data.businessChallenges && (
                <div>
                  <h4 className={`text-xs uppercase tracking-widest font-bold mb-2.5 flex items-center gap-2 ${
                    themeMode === "light" ? "text-amber-600" : "text-amber-400"
                  }`}>
                    <ShieldAlert className="w-4 h-4" />
                    Friction Resolved & Business Challenge
                  </h4>
                  <p className={`text-sm leading-relaxed p-4 sm:p-5 rounded-2xl border ${
                    themeMode === "light" 
                      ? "text-slate-700 bg-slate-50 border-slate-200" 
                      : "text-slate-300 bg-[#101728] border-slate-800"
                  }`}>
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
                      : themeMode === "light"
                      ? "bg-slate-100 text-blue-700 border border-slate-200 font-sans"
                      : "bg-[#131d33] text-cyan-300 border border-slate-750 font-sans"
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

