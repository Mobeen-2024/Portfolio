import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { playClick } from '../../utils/audio';

const TIMELINE_DATA = [
  {
    period: "2024 — PRESENT",
    executive: {
      role: "CompTIA A+ & Systems Engineering",
      company: "Certification & Full-Stack Projects",
      description: "Developing core competencies across enterprise IT infrastructure, network protocols, operating system diagnostics, hardware troubleshooting, and security administration. Architecting full-stack web applications and real-time market data terminals.",
      achievements: [
        "Preparing for CompTIA A+ certification to validate core networking and systems administration proficiency",
        "Architected Hisaab-Kitaab personal finance application with automated statement parsing and receipt OCR",
        "Engineered TradeX real-time cryptocurrency terminal using Fastify and reactive Vue 3 WebSockets"
      ],
      tags: ["CompTIA A+", "Systems Diagnostics", "Fastify", "Vue 3", "TypeScript"]
    },
    architect: {
      role: "SYSTEMS_&_INFRASTRUCTURE_ENGINEER",
      company: "LABS_&_TECHNICAL_PROJECTS",
      description: "Deploying high-throughput Fastify and Vue 3 WebSocket pipelines, modular relational databases, and AI-directed development workflows with deterministic data persistence.",
      achievements: [
        "Constructed sub-50ms Binance WebSocket order-book aggregation and live feed ingestion",
        "Implemented idempotent transaction accounting schema with zero cross-session data loss",
        "Integrated Arduino C++ opto-isolated relay modules for IoT smart environment control"
      ],
      tags: ["WebSockets", "Fastify", "TypeScript", "Arduino C++", "Relay Logic"]
    }
  },
  {
    period: "2023 — PRESENT",
    executive: {
      role: "Hardware Diagnostics & Electronics Technician",
      company: "Freelance & Technical Work (London, UK)",
      description: "Executing component-level diagnostics and electronic repairs on liquid-damaged and compromised hardware. Custom-engineering lithium-ion power packs with active Battery Management Systems (BMS).",
      achievements: [
        "Restored liquid-damaged laptops and circuitry through ultrasonic cleaning and trace reconstruction",
        "Custom-engineered lithium-ion battery packs with active BMS, extending operational runtime by 100%",
        "Executed precision SMD micro-soldering, component replacement, and signal rail impedance tests"
      ],
      tags: ["Hardware Repair", "Micro-Soldering", "Active BMS", "Lithium-Ion", "PCB Diagnostics"]
    },
    architect: {
      role: "COMPONENT_LEVEL_HARDWARE_SPECIALIST",
      company: "HARDWARE_DIAGNOSTICS_LAB",
      description: "Tracing microscopic PCB signal lines, isolating short-to-ground rail failures with multimeters and thermal inspection, and balancing multi-cell battery packs.",
      achievements: [
        "Engineered custom multi-cell Li-ion pack with balanced charge management and over-current protection",
        "Diagnosed 3.3V and 5V power bus short circuits on high-density multi-layer motherboards",
        "Bridged damaged PCB traces using micro-jumpers and UV-curable solder mask"
      ],
      tags: ["SMD Soldering", "Multimeter", "Thermal Probing", "Li-ion BMS", "Schematics"]
    }
  },
  {
    period: "2022 — 2023",
    executive: {
      role: "Network & Infrastructure Installation Specialist",
      company: "Appliance & Physical IT Installations",
      description: "Planned and deployed on-premises CCTV security camera networks, structured Cat6 cabling, and local networking hardware for commercial and residential facilities.",
      achievements: [
        "Mounted and configured multi-camera CCTV networks with local NVR/DVR storage and secure remote access",
        "Terminated and routed high-density Cat6 structured Ethernet cabling adhering to T568B standards",
        "Configured LAN/WLAN routers, subnetting, DHCP reservations, and port forwarding rules"
      ],
      tags: ["CCTV (NVR/DVR)", "Cat6 Cabling", "LAN / WLAN", "Router Config", "Hardware Mounting"]
    },
    architect: {
      role: "NETWORK_&_INFRASTRUCTURE_LEAD",
      company: "INFRASTRUCTURE_DEPLOYMENT_OPS",
      description: "Executing Layer 1 physical cabling to Layer 3 IP routing, PoE switch budgeting, RTSP streaming configuration, and electrical circuit integration.",
      achievements: [
        "Calculated 802.3af/at PoE power budgets for multi-node IP surveillance installations",
        "Configured secure remote access gateways with encrypted DDNS and firewall port restrictions",
        "Conducted physical structural modifications and electrical wiring for commercial equipment"
      ],
      tags: ["Structured Cabling", "IP Cameras", "Subnetting", "PoE", "Electrical Wiring"]
    }
  },
  {
    period: "FOUNDATIONAL",
    executive: {
      role: "Matriculation (GCSE Equivalent)",
      company: "Foundational Secondary Education (Pakistan)",
      description: "Completed foundational secondary education with strong analytical and mathematics disciplines, establishing the core logical principles for hardware troubleshooting and computer engineering.",
      achievements: [
        "Completed foundational secondary education with emphasis on mathematics, science, and computer fundamentals",
        "Developed multilingual fluency: English (Fluent), Urdu (Native), Hindi (Fluent), Punjabi (Fluent)",
        "Cultivated rigorous problem-solving approach directly applicable to IT support and systems diagnostics"
      ],
      tags: ["GCSE Equivalent", "Mathematics", "Multilingual", "Analytical Logic"]
    },
    architect: {
      role: "ACADEMIC_&_COMPUTATIONAL_FOUNDATIONS",
      company: "SECONDARY_EDUCATION_BOARD",
      description: "Rigorous training in foundational mathematics, analytical logic, electrical physics, and computational thinking.",
      achievements: [
        "Mastered core algebraic, electrical principles, and logical deduction methods",
        "Fluency across 4 languages facilitating seamless cross-functional communication in global IT teams",
        "Laid the technical groundwork for component-level diagnostics and full-stack software development"
      ],
      tags: ["Foundations", "Electrical Physics", "Multilingual", "Analytical Logic"]
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
          {isGodMode ? "// TELEMETRY_LOG: EXPERIENCE_&_EDUCATION_CHRONOLOGY" : "Career Milestones & Education"}
        </h2>
        <h3 className={`text-3xl sm:text-4xl font-black ${
          isGodMode ? "text-green-400 font-mono text-glow-green" : "text-slate-900 font-sans"
        }`}>
          {isGodMode ? "SYSTEM_EVOLUTION_TIMELINE" : "Practical Experience & Qualifications"}
        </h3>
        <p className={`text-sm max-w-xl mx-auto opacity-70 ${
          isGodMode ? "font-mono text-green-400/70" : "font-normal text-slate-600"
        }`}>
          {isGodMode 
            ? "Inspect verified hardware diagnostics milestones, network cabling deployments, and systems development." 
            : "A track record of hands-on physical repairs, CCTV network setups, CompTIA A+ preparation, and software applications."}
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
