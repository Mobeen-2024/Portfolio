import React, { useState } from 'react';
import { Layers, Terminal, Sparkles, CheckCircle2, ChevronRight, Cpu, Network, ShieldCheck, Database } from 'lucide-react';
import { playClick } from '../../utils/audio';

const EXECUTIVE_SKILLS = [
  {
    category: "Revenue & Growth Strategy",
    icon: Sparkles,
    highlight: "+$2.4M ARR Generated",
    skills: [
      { name: "Multi-Touch Attribution", level: 98, tag: "GA4 / Tableau / Segment" },
      { name: "Predictive CAC / LTV Modeling", level: 95, tag: "Cohort Retention Analysis" },
      { name: "Ad Network Budget Optimization", level: 92, tag: "Cross-Channel Ad Arbitrage" },
      { name: "Conversion Rate Optimization (CRO)", level: 94, tag: "A/B Testing & Funnel Engineering" }
    ]
  },
  {
    category: "AI Strategy & Operational Velocity",
    icon: Cpu,
    highlight: "75% Cycle Time Cut",
    skills: [
      { name: "Autonomous Agent Swarms", level: 96, tag: "Task Decomposition & Synthesis" },
      { name: "Executive AI Copilot Integration", level: 94, tag: "Boardroom Reporting Systems" },
      { name: "AI Risk Governance & Compliance", level: 90, tag: "Data Privacy & Ethical Alignment" },
      { name: "Strategic Headcount Leverage", level: 95, tag: "4x Squad Productivity" }
    ]
  },
  {
    category: "Enterprise Systems Leadership",
    icon: Database,
    highlight: "99.999% SLA Platform",
    skills: [
      { name: "Enterprise Data Governance", level: 95, tag: "Single Source of Truth (SSOT)" },
      { name: "Cloud Cost & Resource Stewardship", level: 92, tag: "-35% Infrastructure Spend" },
      { name: "M&A Technical Due Diligence", level: 88, tag: "Codebase & Security Audits" },
      { name: "Cross-Disciplinary Team Mentorship", level: 96, tag: "20+ Years Mentoring Staff Leads" }
    ]
  }
];

const ARCHITECT_SKILLS = [
  {
    category: "Autonomous AI & Agentic Graph",
    icon: Terminal,
    highlight: "Sub-Second DAG Routing",
    skills: [
      { name: "LangGraph State Machines", level: 98, tag: "Supervisor Dynamic Delegation" },
      { name: "ChromaDB & pgvector RAG", level: 95, tag: "Semantic Memory & Embeddings" },
      { name: "Constitutional AI Critique Loops", level: 92, tag: "Self-Healing Output Verification" },
      { name: "FastAPI Async Tool Integration", level: 96, tag: "REST & WebSocket Endpoints" }
    ]
  },
  {
    category: "Distributed Data & CDC Streaming",
    icon: Network,
    highlight: "45K events/s @ <85ms",
    skills: [
      { name: "Apache Kafka & Debezium CDC", level: 96, tag: "Log-Based Replication" },
      { name: "Snowflake & Polars Streaming", level: 98, tag: "O(n) Memory-Mapped Parsing" },
      { name: "Apache Flink & Windowed Aggs", level: 90, tag: "Real-Time Event Ingestion" },
      { name: "PostgreSQL & Redis Clusters", level: 96, tag: "Lock-Free Ring Buffers & Caching" }
    ]
  },
  {
    category: "Low-Level Systems & Microservices",
    icon: Cpu,
    highlight: "52K RPS (P99 < 3.8ms)",
    skills: [
      { name: "C++20 Asynchronous I/O", level: 94, tag: "Linux epoll & Non-Blocking Sockets" },
      { name: "SIMD Hardware Acceleration", level: 90, tag: "Zero-Copy HTTP Header Parsing" },
      { name: "Python 3.12 Concurrency", level: 98, tag: "asyncio, multiprocessing, uvloop" },
      { name: "Docker & Kubernetes Orchestration", level: 92, tag: "Containerized Mesh Architecture" }
    ]
  }
];

export default function SkillsMatrix({ isGodMode }) {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  const categories = isGodMode ? ARCHITECT_SKILLS : EXECUTIVE_SKILLS;
  const activeCategory = categories[activeCategoryIndex] || categories[0];

  const handleCategorySelect = (index) => {
    playClick(560, 0.03);
    setActiveCategoryIndex(index);
  };

  return (
    <section id="skills" className="w-full py-16 md:py-24 max-w-6xl mx-auto px-4 sm:px-6 scroll-mt-24">
      <div className="text-center mb-12 sm:mb-16 space-y-3">
        <h2 className={`text-xs sm:text-sm font-bold tracking-[0.5em] uppercase ${
          isGodMode ? "text-green-500/70 font-mono" : "text-blue-600/70 font-sans"
        }`}>
          {isGodMode ? "// SYSTEM_STACK: ARCHITECTURAL_COMPETENCIES" : "Strategic Competencies & Expertise"}
        </h2>
        <h3 className={`text-3xl sm:text-4xl font-black ${
          isGodMode ? "text-green-400 font-mono text-glow-green" : "text-slate-900 font-sans"
        }`}>
          {isGodMode ? "CAPABILITY_REGISTRY_v2" : "Proven Value Delivery Engine"}
        </h3>
        <p className={`text-sm max-w-xl mx-auto opacity-70 ${
          isGodMode ? "font-mono text-green-400/70" : "font-normal text-slate-600"
        }`}>
          {isGodMode 
            ? "Inspect verified low-level frameworks, high-throughput pipelines, and autonomous agent systems."
            : "Explore tactical mastery in growth attribution, AI orchestration, and enterprise value scaling."}
        </p>
      </div>

      {/* Domain Category Selector Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
        {categories.map((cat, idx) => {
          const Icon = cat.icon;
          const isActive = idx === activeCategoryIndex;
          return (
            <button
              key={idx}
              onClick={() => handleCategorySelect(idx)}
              className={`flex items-center gap-2.5 px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 active:scale-95 cursor-pointer border ${
                isActive
                  ? isGodMode
                    ? "bg-green-500 text-black border-green-400 shadow-[0_0_25px_rgba(34,197,94,0.4)] font-mono"
                    : "bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-500/25 font-sans"
                  : isGodMode
                    ? "bg-[#060a08]/80 text-green-500/70 border-green-500/20 hover:border-green-500/50 hover:text-green-300 font-mono"
                    : "bg-white/80 text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50 font-sans"
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{cat.category}</span>
            </button>
          );
        })}
      </div>

      {/* Active Category Detail Panel */}
      <div className={`p-6 sm:p-10 rounded-3xl border transition-all duration-500 ${
        isGodMode 
          ? "bg-[#060907]/90 border-green-500/30 backdrop-blur-2xl shadow-[0_0_40px_rgba(0,0,0,0.8)]" 
          : "bg-white/90 border-slate-200/90 backdrop-blur-2xl shadow-xl shadow-slate-200/40"
      }`}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-current/15">
          <div>
            <span className={`text-[10px] font-bold uppercase tracking-widest ${
              isGodMode ? "text-green-500/60 font-mono" : "text-blue-600 font-sans"
            }`}>
              {isGodMode ? "MODULE SPECIFICATION" : "CORE DOMAIN FOCUS"}
            </span>
            <h4 className={`text-2xl font-black mt-1 ${
              isGodMode ? "text-green-400 font-mono" : "text-slate-900 font-sans"
            }`}>
              {activeCategory.category}
            </h4>
          </div>

          <div className={`px-4 py-2 rounded-xl border self-start sm:self-auto ${
            isGodMode 
              ? "bg-green-500/10 border-green-500/30 text-green-300 font-mono text-xs" 
              : "bg-blue-50 border-blue-100 text-blue-700 font-sans text-xs font-semibold"
          }`}>
            <span>★ PROVEN IMPACT: </span>
            <span className="font-bold">{activeCategory.highlight}</span>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {activeCategory.skills.map((skill, sIdx) => (
            <div 
              key={sIdx} 
              className={`p-5 rounded-2xl border transition-all duration-300 hover:-translate-y-0.5 ${
                isGodMode 
                  ? "bg-black/50 border-green-500/20 hover:border-green-500/50" 
                  : "bg-slate-50/80 border-slate-200/70 hover:bg-white hover:border-blue-200 hover:shadow-md"
              }`}
            >
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className={`font-bold text-sm ${
                  isGodMode ? "text-green-300 font-mono" : "text-slate-900 font-sans"
                }`}>
                  {skill.name}
                </span>
                <span className={`text-xs font-bold ${
                  isGodMode ? "text-green-400 font-mono" : "text-blue-600 font-sans"
                }`}>
                  {skill.level}%
                </span>
              </div>

              {/* Progress Track */}
              <div className={`w-full h-2 rounded-full overflow-hidden mb-3 ${
                isGodMode ? "bg-green-950/40" : "bg-slate-200"
              }`}>
                <div 
                  className={`h-full rounded-full transition-all duration-1000 ${
                    isGodMode 
                      ? "bg-gradient-to-r from-green-600 to-green-400 shadow-[0_0_10px_rgba(34,197,94,0.7)]" 
                      : "bg-gradient-to-r from-blue-600 to-indigo-600"
                  }`}
                  style={{ width: `${skill.level}%` }}
                />
              </div>

              <div className="flex items-center gap-1.5">
                <CheckCircle2 className={`w-3.5 h-3.5 ${isGodMode ? "text-green-500/60" : "text-blue-600/70"}`} />
                <span className={`text-[11px] font-medium ${
                  isGodMode ? "text-green-400/70 font-mono" : "text-slate-500 font-sans"
                }`}>
                  {skill.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
