import React, { useState } from 'react';
import { Calendar, Briefcase, Award, ArrowUpRight, Cpu, GitBranch, CheckCircle2 } from 'lucide-react';
import { playClick } from '../../utils/audio';

const TIMELINE_DATA = [
  {
    period: "2024 — PRESENT",
    executive: {
      role: "Founder Advisory & AI Systems Architect",
      company: "Strategic AI Squads & Enterprise Advisory",
      description: "Spearheading autonomous multi-agent swarms and neural multi-touch attribution engines for high-growth tech ventures, delivering 4x team productivity and transparent boardroom ROI.",
      achievements: [
        "Architected LangGraph multi-agent systems replacing 120+ weekly manual research hours",
        "Devised board-level multi-touch attribution frameworks saving $680K/yr in subscription churn",
        "Engineered real-time data sync with sub-second replication latency"
      ],
      tags: ["Multi-Agent AI", "LangGraph", "Boardroom Strategy", "Attribution"]
    },
    architect: {
      role: "PRINCIPAL_SYSTEMS_ARCHITECT",
      company: "AUTONOMOUS_SWARM_LABS",
      description: "Designing directed acyclic graph (DAG) multi-agent state machines, memory-mapped Polars ETL pipelines, and SIMD-accelerated C++20 API gateways running with zero data loss.",
      achievements: [
        "Deployed 4-node supervisor-agent graph with constitutional self-correction loops",
        "Engineered O(n) streaming deduplication processing 1.2M CRM records/batch",
        "Authored lock-free C++20 rate-limiting proxy sustaining 52K req/sec at 3.8ms P99"
      ],
      tags: ["C++20 epoll", "LangGraph", "Kafka CDC", "Snowflake", "Polars"]
    }
  },
  {
    period: "2019 — 2023",
    executive: {
      role: "Head of Growth Engineering & Analytics",
      company: "Scale-Up Growth Ventures",
      description: "Directed full-lifecycle marketing technology and data infrastructure, eliminating cross-channel data silos and driving aggressive customer acquisition efficiency.",
      achievements: [
        "Accelerated ARR by +$2.4M through predictive ad bidding and audience deduplication",
        "Reduced blended CAC by 28% while improving lead-to-opportunity velocity",
        "Unified Salesforce, HubSpot, and GA4 telemetry into single source of truth"
      ],
      tags: ["+$2.4M ARR", "CAC Reduction", "Revenue Engineering", "Enterprise CRM"]
    },
    architect: {
      role: "STAFF_DATA_ENGINEER",
      company: "DISTRIBUTED_PIPELINES_CORE",
      description: "Engineered change-data-capture (CDC) pipelines streaming transaction events from PostgreSQL datastores to analytical lakes with sub-100ms sync.",
      achievements: [
        "Constructed Debezium + Kafka streaming fabric processing 45K events/sec",
        "Eliminated legacy 24hr batch reporting delays with real-time Flink windowing",
        "Maintained 99.999% data pipeline availability across viral flash surges"
      ],
      tags: ["Apache Kafka", "Debezium", "PostgreSQL", "Apache Flink", "AWS"]
    }
  },
  {
    period: "2012 — 2018",
    executive: {
      role: "Senior Systems & Infrastructure Architect",
      company: "Enterprise Cloud Platforms",
      description: "Led the migration of legacy monolithic client systems to resilient microservices and distributed data pipelines, slashing infrastructure costs by 35%.",
      achievements: [
        "Modernized core customer-facing applications to 99.999% SLA uptime",
        "Delivered zero-downtime database migrations during peak consumer periods",
        "Mentored and scaled engineering squads across three continents"
      ],
      tags: ["Microservices", "Cloud Migration", "Team Scaling", "High Availability"]
    },
    architect: {
      role: "SENIOR_SYSTEMS_ENGINEER",
      company: "DISTRIBUTED_CORE_SYSTEMS",
      description: "Built high-concurrency backend services in C++ and Python, focusing on low-latency memory management, network sockets, and database optimization.",
      achievements: [
        "Optimized relational query bottlenecks resulting in 80% database IOPS reduction",
        "Implemented fault-tolerant distributed consensus protocols and cache strategies",
        "Automated continuous delivery pipelines with comprehensive chaos engineering tests"
      ],
      tags: ["C++", "Python", "Linux Sockets", "Docker", "Database Tuning"]
    }
  },
  {
    period: "2004 — 2011",
    executive: {
      role: "Software & Systems Foundations",
      company: "Applied Engineering Laboratories",
      description: "Formative decade mastering core computing fundamentals, algorithmic efficiency, and building reliable foundational architectures from first principles.",
      achievements: [
        "Engineered foundational web software and backend transactional databases",
        "Established automated regression testing frameworks for critical financial code",
        "Forged enduring technical leadership ethos combining rigour with business impact"
      ],
      tags: ["Systems Foundations", "Algorithms", "Relational SQL", "Architecture"]
    },
    architect: {
      role: "KERNEL_&_SOFTWARE_SPECIALIST",
      company: "LOW_LEVEL_LABS",
      description: "Deep dive into memory safety, OS scheduling, network stack mechanics, and deterministic state transitions.",
      achievements: [
        "Authored custom network protocol parsers with strict bounds validation",
        "Implemented high-performance indexing trees and custom memory allocators",
        "Engineered high-concurrency client-server daemon architectures"
      ],
      tags: ["Algorithms", "Memory Architecture", "Data Structures", "TCP/IP"]
    }
  }
];

export default function CareerTimeline({ isGodMode }) {
  const [activeItem, setActiveItem] = useState(0);

  const handleNodeClick = (index) => {
    playClick(680, 0.03);
    setActiveItem(index);
  };

  return (
    <section id="timeline" className="w-full py-16 md:py-24 max-w-6xl mx-auto px-4 sm:px-6 scroll-mt-24">
      <div className="text-center mb-12 sm:mb-16 space-y-3">
        <h2 className={`text-xs sm:text-sm font-bold tracking-[0.5em] uppercase ${
          isGodMode ? "text-green-500/70 font-mono" : "text-blue-600/70 font-sans"
        }`}>
          {isGodMode ? "// TELEMETRY_LOG: SYSTEM_CHRONOLOGY" : "Career Milestones & Proven Experience"}
        </h2>
        <h3 className={`text-3xl sm:text-4xl font-black ${
          isGodMode ? "text-green-400 font-mono text-glow-green" : "text-slate-900 font-sans"
        }`}>
          {isGodMode ? "SYSTEM_EVOLUTION_TIMELINE" : "20+ Years of Transformational Impact"}
        </h3>
        <p className={`text-sm max-w-xl mx-auto opacity-70 ${
          isGodMode ? "font-mono text-green-400/70" : "font-normal text-slate-600"
        }`}>
          {isGodMode 
            ? "Inspect 175,200+ operating hours of systems architecture, streaming data pipelines, and agent swarms." 
            : "A track record of steering cross-functional teams, generating verified ARR, and deploying resilient systems."}
        </p>
      </div>

      {/* Timeline Flow */}
      <div className="relative border-l-2 ml-4 sm:ml-8 md:ml-12 pl-6 sm:pl-10 space-y-12 transition-colors duration-500 border-current/20">
        {TIMELINE_DATA.map((item, idx) => {
          const content = isGodMode ? item.architect : item.executive;
          const isActive = idx === activeItem;

          return (
            <div 
              key={idx} 
              onClick={() => handleNodeClick(idx)}
              className="relative group cursor-pointer"
            >
              {/* Timeline Indicator Dot */}
              <div className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full border-4 transition-all duration-500 flex items-center justify-center ${
                isActive
                  ? isGodMode 
                    ? "bg-green-500 border-black shadow-[0_0_15px_rgba(34,197,94,0.8)] scale-110" 
                    : "bg-blue-600 border-white shadow-lg shadow-blue-500/40 scale-110"
                  : isGodMode
                    ? "bg-black border-green-500/40 group-hover:border-green-400"
                    : "bg-white border-slate-300 group-hover:border-blue-400"
              }`}>
                <span className={`w-1.5 h-1.5 rounded-full ${isActive ? (isGodMode ? "bg-black" : "bg-white") : "opacity-0"}`} />
              </div>

              {/* Card Container */}
              <div className={`p-6 sm:p-8 rounded-3xl border transition-all duration-500 ${
                isActive
                  ? isGodMode
                    ? "bg-[#070b09]/92 border-green-400/70 backdrop-blur-2xl shadow-[0_0_35px_rgba(34,197,94,0.18)] translate-x-1"
                    : "bg-white/95 border-blue-300 backdrop-blur-2xl shadow-xl shadow-blue-100 translate-x-1"
                  : isGodMode
                    ? "bg-black/50 border-green-500/20 hover:border-green-500/40 hover:bg-black/70 backdrop-blur-xl"
                    : "bg-white/70 border-slate-200/80 hover:border-slate-300 hover:bg-white backdrop-blur-xl"
              }`}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <span className={`text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full border inline-block w-fit ${
                    isGodMode 
                      ? "bg-green-500/15 border-green-500/40 text-green-300 font-mono" 
                      : "bg-blue-50 border-blue-100 text-blue-700 font-semibold"
                  }`}>
                    {item.period}
                  </span>

                  <span className={`text-xs font-medium opacity-60 ${
                    isGodMode ? "font-mono text-green-400/60" : "font-sans text-slate-500"
                  }`}>
                    {content.company}
                  </span>
                </div>

                <h4 className={`text-xl sm:text-2xl font-black mb-3 ${
                  isGodMode ? "text-green-400 font-mono" : "text-slate-900 font-sans"
                }`}>
                  {content.role}
                </h4>

                <p className={`text-sm sm:text-base leading-relaxed mb-5 ${
                  isGodMode ? "text-green-400/80 font-mono" : "text-slate-600 font-normal"
                }`}>
                  {content.description}
                </p>

                {/* Achievements List */}
                <div className="space-y-2 mb-6">
                  {content.achievements.map((ach, aIdx) => (
                    <div key={aIdx} className="flex items-start gap-2.5">
                      <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${
                        isGodMode ? "text-green-400" : "text-blue-600"
                      }`} />
                      <span className={`text-xs sm:text-sm ${
                        isGodMode ? "text-green-300/90 font-mono" : "text-slate-700 font-medium"
                      }`}>
                        {ach}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-2 pt-3 border-t border-current/10">
                  {content.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx} 
                      className={`text-[10px] sm:text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-lg border ${
                        isGodMode 
                          ? "bg-black/60 border-green-500/30 text-green-300 font-mono" 
                          : "bg-slate-100 border-slate-200 text-slate-700 font-sans"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          );
        })}
      </div>
    </section>
  );
}
