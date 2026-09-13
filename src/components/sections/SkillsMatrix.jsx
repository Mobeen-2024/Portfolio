import React, { useState } from 'react';
import { Terminal, Cpu, Network, Wrench, Wifi, Code2, CheckCircle2 } from 'lucide-react';
import { playClick } from '../../utils/audio';

const EXECUTIVE_SKILLS = [
  {
    category: "Hardware & Component Repair",
    icon: Wrench,
    highlight: "+100% Battery Runtime / BMS",
    skills: [
      { name: "Motherboard Diagnostics & Repair", level: 96, tag: "Multimeter / Component Soldering / Tracing" },
      { name: "Lithium-Ion BMS Battery Integration", level: 95, tag: "Custom Cells / Power Management / Active BMS" },
      { name: "Microcontrollers & Embedded Logic", level: 92, tag: "Arduino / Multi-Channel Relays / Sensors" },
      { name: "Circuit Cleaning & Liquid Damage Recovery", level: 94, tag: "Ultrasonic / Corrosion Removal / Trace Repair" }
    ]
  },
  {
    category: "Networking & IT Infrastructure",
    icon: Wifi,
    highlight: "CompTIA A+ Aligned",
    skills: [
      { name: "LAN/WLAN & Router Configuration", level: 95, tag: "Subnets / Port Forwarding / Wi-Fi Optimization" },
      { name: "CCTV & Surveillance Deployment", level: 96, tag: "NVR/DVR / IP Cameras / Remote Mobile Viewing" },
      { name: "Structured Cabling & Hardware Mounting", level: 97, tag: "Cat6 T568B / Punchdown / Cable Management" },
      { name: "Systems & OS Administration", level: 93, tag: "Windows 10/11 Troubleshooting / Linux CLI Basics" }
    ]
  },
  {
    category: "Software Architecture & Web Technologies",
    icon: Code2,
    highlight: "Sub-Millisecond Multi-Account Execution",
    skills: [
      { name: "Modern Frontend & 3D WebGL", level: 95, tag: "React 19 / Three.js / Tailwind CSS 4" },
      { name: "High-Frequency Crypto Engines & APIs", level: 94, tag: "Node.js / Express / CCXT / WebSocket Feeds" },
      { name: "Real-Time Telemetry & Canvas Charts", level: 96, tag: "TradingView Lightweight Charts / Binance WS" },
      { name: "Offline-First Data & Multi-Kernel AI", level: 95, tag: "Dexie.js (IndexedDB) / Gemini 3.1 & Gemma 3" }
    ]
  }
];

const ARCHITECT_SKILLS = [
  {
    category: "Hardware Diagnostics & Electronics",
    icon: Cpu,
    highlight: "Component-Level Precision",
    skills: [
      { name: "SMD Micro-Soldering & Pad Repair", level: 96, tag: "Micro-Jumpers / Flux Profiling / Hot Air" },
      { name: "Power Rail Short Circuit Tracing", level: 95, tag: "Continuity / Thermal Probing / Schematics" },
      { name: "Active Battery Management (BMS)", level: 94, tag: "Overcurrent / Cell Balancing / Li-ion Packs" },
      { name: "Arduino Firmware Architecture", level: 92, tag: "C++ Loops / Interrupts / Relay Optocouplers" }
    ]
  },
  {
    category: "Systems Recovery & Network Engineering",
    icon: Network,
    highlight: "1000BASE-T Gigabit Standard",
    skills: [
      { name: "Structured Cat6 Infrastructure", level: 97, tag: "T568B Termination / Cable Testing / Racks" },
      { name: "IP Camera Networks & NVR Setup", level: 95, tag: "RTSP Protocols / PoE Budgeting / DDNS" },
      { name: "Windows & Linux OS Administration", level: 93, tag: "Registry / Hardware Utilities / CLI Recovery" },
      { name: "Router & Firewall Configuration", level: 92, tag: "VLAN Separation / DHCP Scopes / NAT Rules" }
    ]
  },
  {
    category: "Real-Time Web & Algorithmic Engines",
    icon: Terminal,
    highlight: "Sub-Millisecond CCXT Execution",
    skills: [
      { name: "Express & CCXT Order Mirroring", level: 95, tag: "Master-Slave / EventBus / HMAC Signatures" },
      { name: "React 19 & Three.js 3D Viewports", level: 96, tag: "GLSL Bio-Electric Shaders / Raycasting" },
      { name: "WebSocket Telemetry & Order Book Sync", level: 96, tag: "Binance Depth Feeds / Reconnect FSM" },
      { name: "Deterministic Heuristics & Local Stores", level: 94, tag: "Dexie.js / Better-SQLite3 / Polars" }
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
          {isGodMode ? "// SYSTEM_STACK: HARDWARE_&_ENGINEERING_COMPETENCIES" : "Technical Skills & Competencies"}
        </h2>
        <h3 className={`text-3xl sm:text-4xl font-black ${
          isGodMode ? "text-green-400 font-mono text-glow-green" : "text-slate-900 font-display"
        }`}>
          {isGodMode ? "CAPABILITY_REGISTRY_v2" : "Core Technical Capabilities"}
        </h3>
        <p className={`text-sm max-w-xl mx-auto opacity-70 ${
          isGodMode ? "font-mono text-green-400/70" : "font-normal text-slate-600"
        }`}>
          {isGodMode 
            ? "Inspect verified low-level circuit diagnostics, networking infrastructure, and real-time software systems."
            : "Hands-on expertise across physical IT hardware, network infrastructure, operating systems, and web applications."}
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
              className={`flex items-center gap-2.5 px-5 py-3 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all duration-300 active:scale-95 cursor-pointer border ${
                isActive
                  ? isGodMode
                    ? "bg-green-500 text-black border-green-400 shadow-[0_0_25px_rgba(34,197,94,0.4)] font-mono"
                    : "bg-blue-600 text-white border-blue-600 shadow-xl shadow-blue-500/25 font-sans"
                  : isGodMode
                    ? "bg-[#060a08]/80 text-green-400/70 border-green-500/20 hover:border-green-500/50 hover:text-green-300 font-mono"
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
          ? "bg-[#060907]/90 border-green-500/30 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.85)]" 
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
              isGodMode ? "text-green-400 font-mono" : "text-slate-900 font-display"
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
              className={`p-5 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                isGodMode 
                  ? "bg-black/50 border-green-500/20 hover:border-green-500/50 hover:shadow-[0_0_20px_rgba(34,197,94,0.12)]" 
                  : "bg-slate-50/80 border-slate-200/70 hover:bg-white hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/5"
              }`}
            >
              <div className="flex items-center justify-between gap-2 mb-2.5">
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
                      ? "bg-gradient-to-r from-green-600 to-green-400 shadow-[0_0_12px_rgba(34,197,94,0.8)]" 
                      : "bg-gradient-to-r from-blue-600 to-indigo-600"
                  }`}
                  style={{ width: `${skill.level}%` }}
                />
              </div>

              <div className="flex items-center gap-1.5">
                <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 ${isGodMode ? "text-green-500/60" : "text-blue-600/70"}`} />
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
