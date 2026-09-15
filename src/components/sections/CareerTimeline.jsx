import React, { useState, useMemo } from 'react';
import { 
  CheckCircle2, 
  MapPin, 
  Calendar, 
  GraduationCap, 
  Briefcase, 
  Code2, 
  ArrowUpDown,
  SlidersHorizontal 
} from 'lucide-react';
import { playClick } from '../../utils/audio';

export const TIMELINE_DATA = [
  {
    id: "edu-comptia",
    section: "Education",
    role: "CompTIA A+ Certification Prep",
    timeline: "Sep 2026 – Nov 2026",
    location: "London, UK",
    orderIndex: 8,
    executive: {
      role: "CompTIA A+ Certification Prep",
      company: "Certification & Systems Practice (London, UK)",
      description: "Structured examination preparation and hands-on lab practice across CompTIA A+ Core 1 (220-1101) and Core 2 (220-1102) domains, establishing certified proficiency in computer hardware, networking protocols, operating system internals, and security administration.",
      achievements: [
        "Validating core enterprise hardware diagnostics, peripheral configuration, and virtualization foundations",
        "Configuring Layer 2/Layer 3 networking protocols: TCP/IP, DNS, DHCP, VLANs, and wireless security",
        "Mastering multi-OS administration across Windows 10/11, Linux terminal CLI, and incident management procedures"
      ],
      tags: ["CompTIA A+", "Networking (TCP/IP)", "OS Diagnostics", "Virtualization", "Security"]
    },
    architect: {
      role: "COMPTIA_A+_CERTIFICATION_PIPELINE",
      company: "CORE_1_&_CORE_2_EXAM_DOMAINS",
      description: "Systematic diagnostic modeling and hardware simulation across 220-1101 & 220-1102 exam criteria, validating hardware buses, network packet flows, and security protocols.",
      achievements: [
        "Synthesized protocol behaviors for DHCP DORA cycle, DNS hierarchy, subnet boundaries, and 802.11 Wi-Fi standards",
        "Automated Windows CLI diagnostics (DISM, SFC, Netsh, Diskpart) and Linux bash administration workflows",
        "Hardened access control, endpoint security policies, and incident response runbooks"
      ],
      tags: ["220-1101 / 220-1102", "TCP/IP Subnetting", "PowerShell / Bash", "OS Hardening", "Hardware Telemetry"]
    }
  },
  {
    id: "proj-hisaab",
    section: "Projects",
    role: "Hisaab-Kitaab Finance App",
    timeline: "Jul 2024 – Feb 2025",
    location: "Independent",
    orderIndex: 7,
    executive: {
      role: "Hisaab-Kitaab Finance App",
      company: "Independent Engineering",
      description: "Architected a localized, offline-first financial ledger (Khata) and business management PWA/Android APK designed to digitize informal credit for merchants, featuring hands-free voice accounting and receipt OCR.",
      achievements: [
        "Implemented zero-latency offline persistence using Dexie.js (IndexedDB) with optional Firebase cloud sync",
        "Integrated Gemini 3.1 Flash real-time voice accounting and multimodal receipt parsing (Gemini Vision + Tesseract.js)",
        "Delivered full English, Urdu (اردو), and Roman Urdu support with dynamic RTL layouts"
      ],
      tags: ["React 19", "Dexie.js (IndexedDB)", "Gemini 3.1 Flash", "Offline PWA", "Tailwind CSS"]
    },
    architect: {
      role: "HISAAB_KITAAB_REACTIVE_LEDGER",
      company: "LOCAL_FIRST_FINANCIAL_ENGINE",
      description: "Reactive offline-first financial datastore utilizing Dexie.js v4 for schema-versioned client-side storage, WebRTC real-time voice streaming with Gemini 3.1, and dual-engine receipt OCR.",
      achievements: [
        "Engineered ACID client datastore with live query propagation and background sync queues",
        "Built deterministic fallback parsers for mobile money statements (JazzCash / Easypaisa)",
        "Packaged universal build targets across PWA Workbox precaching and native Capacitor 8 Android APK"
      ],
      tags: ["Dexie v4", "WebRTC Audio", "Gemini Vision", "Capacitor 8", "Workbox PWA"]
    }
  },
  {
    id: "exp-hardware",
    section: "Experience",
    role: "IT Infrastructure & Hardware Technician",
    timeline: "Jan 2024 – Present",
    location: "London, UK",
    orderIndex: 6,
    executive: {
      role: "IT Infrastructure & Hardware Technician",
      company: "Technical Hardware & Infrastructure (London, UK)",
      description: "Performing component-level diagnostics, electronic repairs, and system recovery on compromised enterprise and consumer hardware. Custom-engineering lithium-ion power packs with active Battery Management Systems (BMS).",
      achievements: [
        "Restored liquid-damaged motherboards and circuitry through ultrasonic decontamination and microscopic trace reconstruction",
        "Custom-engineered lithium-ion battery packs with active BMS, extending operational runtime by 100%",
        "Conducted precision SMD micro-soldering, component replacements, and multi-rail voltage impedance checks"
      ],
      tags: ["Hardware Diagnostics", "Micro-Soldering", "Active BMS", "Lithium-Ion", "Trace Reconstruction"]
    },
    architect: {
      role: "HARDWARE_DIAGNOSTICS_&_SYSTEMS_TECHNICIAN",
      company: "COMPONENT_LEVEL_LAB_OPS",
      description: "Tracing microscopic PCB power rails, isolating short-to-ground conditions with thermal probes and digital multimeters, and fabricating balanced multi-cell battery packs.",
      achievements: [
        "Engineered custom multi-cell Li-ion pack with balanced charge management and over-current protection",
        "Diagnosed 3.3V and 5V power bus short circuits on high-density multi-layer motherboards",
        "Bridged severed PCB traces using micro-jumpers and UV-curable solder mask insulation"
      ],
      tags: ["SMD Micro-Soldering", "PCB Schematics", "Thermal Probing", "Li-ion BMS", "Multimeter"]
    }
  },
  {
    id: "exp-cctv",
    section: "Experience",
    role: "Physical Infrastructure & CCTV Deployment",
    timeline: "Sep 2022 – Dec 2023",
    location: "Pakistan",
    orderIndex: 5,
    executive: {
      role: "Physical Infrastructure & CCTV Deployment",
      company: "Appliance & Infrastructure Installations (Pakistan)",
      description: "Planned and executed on-premises CCTV surveillance networks, structured Cat6 network cabling, and local networking hardware installations for commercial and residential facilities.",
      achievements: [
        "Mounted and configured multi-camera CCTV networks with local NVR/DVR storage and secure remote access",
        "Terminated and routed high-density Cat6 structured Ethernet cabling adhering strictly to T568B standards",
        "Configured LAN/WLAN routers, subnetting, DHCP reservations, and port forwarding rules"
      ],
      tags: ["CCTV (NVR/DVR)", "Cat6 Cabling", "LAN / WLAN", "Router Config", "Hardware Mounting"]
    },
    architect: {
      role: "PHYSICAL_INFRASTRUCTURE_&_SURVEILLANCE_LEAD",
      company: "FACILITY_DEPLOYMENT_OPS",
      description: "Executed Layer 1 physical cabling to Layer 3 IP routing, PoE switch power budgeting, RTSP streaming configuration, and electrical circuit integration.",
      achievements: [
        "Calculated 802.3af/at PoE power budgets for multi-node IP surveillance installations",
        "Configured secure remote access gateways with encrypted DDNS and firewall port restrictions",
        "Conducted physical structural modifications and electrical wiring for commercial equipment"
      ],
      tags: ["Structured Cabling", "IP Cameras", "Subnetting", "PoE", "Electrical Wiring"]
    }
  },
  {
    id: "proj-cryptobot",
    section: "Projects",
    role: "CryptoBot 1.0 Terminal Architecture",
    timeline: "Feb 2021 – Present",
    location: "Independent",
    orderIndex: 4,
    executive: {
      role: "CryptoBot 1.0 Terminal Architecture",
      company: "Independent Engineering",
      description: "Engineered an institutional-grade cryptocurrency trading terminal and execution engine with zero-latency Master-to-Slave trade mirroring, automated Delta-Neutral hedging, and multi-kernel AI pilot.",
      achievements: [
        "Architected sub-millisecond trade mirroring across up to 20 accounts via CCXT and Binance User Data Streams",
        "Engineered automated Delta Master (5 USDT buffer) and Voltron Straddle hedging algorithms",
        "Integrated multi-kernel Google Gemini 3.1 Flash & Gemma 3 27B AI pilot with TradingView Lightweight Charts canvas"
      ],
      tags: ["React 19", "Lightweight Charts", "WebSockets", "CCXT", "Google Gemini"]
    },
    architect: {
      role: "CRYPTOBOT_MULTI_KERNEL_TERMINAL",
      company: "HIGH_FREQUENCY_TRADING_LAB",
      description: "Event-driven algorithmic execution engine orchestrated via Node.js/Express EventBus, Binance WebSocket feeds, CCXT exchange abstraction, and an isolated SQLite paper trading sandbox (Shadow Mode).",
      achievements: [
        "Engineered EventBus real-time HedgeScore decision engine from drawdown, liquidity, and ATR friction",
        "Streamed Binance WebSocket 1m-1M OHLCV klines and orderbook depth into custom TradingView canvas",
        "Built isolated SQLite paper trading ledgers (trades.db & shadow_orders.db) with 1x-125x margin simulation"
      ],
      tags: ["Node.js / Express", "WebSockets", "SQLite", "Delta Hedging", "EventBus"]
    }
  },
  {
    id: "proj-branding",
    section: "Projects",
    role: "Digital Branding & 3D Motion Design",
    timeline: "Jan 2021 – Dec 2023",
    location: "Independent",
    orderIndex: 3,
    executive: {
      role: "Digital Branding & 3D Motion Design",
      company: "Independent Practice",
      description: "Directed end-to-end visual identity systems, 3D asset modeling, and motion design projects for diverse digital brands, marrying technical precision with contemporary UI/UX aesthetics.",
      achievements: [
        "Created complete brand design packages, typography systems, vector graphics, and digital product assets",
        "Modeled and rendered 3D spatial assets and animated motion graphics for digital products",
        "Collaborated with digital agencies and independent creators to produce high-conversion visual collateral"
      ],
      tags: ["3D Modeling", "Motion Graphics", "Brand Systems", "UI/UX Aesthetics", "Digital Assets"]
    },
    architect: {
      role: "DIGITAL_BRANDING_&_3D_MOTION_SYSTEMS",
      company: "CREATIVE_VISUAL_LAB",
      description: "Engineered brand guidelines, vector icon sets, 3D asset pipelines, and motion sequences with strict typographic scales and color science.",
      achievements: [
        "Established modular design systems, brand guidelines, and high-fidelity vector assets",
        "Rendered 3D spatial motion graphics and promotional sequence renders",
        "Bridged visual design tokens with frontend component implementation"
      ],
      tags: ["3D Assets", "Motion Graphics", "Vector Systems", "Design Tokens", "Typography"]
    }
  },
  {
    id: "edu-ics",
    section: "Education",
    role: "Super Wings (I.C.S)",
    timeline: "Jul 2018 – Apr 2020",
    location: "Pakistan",
    orderIndex: 2,
    executive: {
      role: "Super Wings (I.C.S)",
      company: "Higher Secondary Education (Pakistan)",
      description: "Completed Intermediate in Computer Science (I.C.S), building a formal grounding in computer architecture, algorithmic thinking, mathematics, and scientific fundamentals.",
      achievements: [
        "Studied core computer science principles, programming logic, data structures, and computer architecture",
        "Mastered computational mathematics, algebra, statistics, and applied electrical physics",
        "Cultivated methodical problem-solving routines directly bridging hardware and software logic"
      ],
      tags: ["Intermediate in CS (I.C.S)", "Programming Logic", "Computer Architecture", "Mathematics", "Physics"]
    },
    architect: {
      role: "INTERMEDIATE_COMPUTER_SCIENCE_FOUNDATIONS",
      company: "SUPER_WINGS_COLLEGE",
      description: "Formal curriculum in computer systems architecture, procedural programming logic, boolean algebra, and applied physics.",
      achievements: [
        "Gained deep understanding of CPU instruction cycles, memory architectures, and binary arithmetic",
        "Formulated algorithmic solutions to mathematical and computational problems",
        "Established theoretical principles bridging hardware electronics and software algorithms"
      ],
      tags: ["Computer Science", "Boolean Algebra", "Algorithms", "Physics", "Computational Logic"]
    }
  },
  {
    id: "edu-matric",
    section: "Education",
    role: "Matriculation (GCSE Equivalent)",
    timeline: "Jan 2016 – Mar 2018",
    location: "Pakistan",
    orderIndex: 1,
    executive: {
      role: "Matriculation (GCSE Equivalent)",
      company: "The Educators (Pakistan)",
      description: "Completed foundational secondary education with science and computer science focus, establishing foundational disciplines in mathematics, scientific methodology, and analytical deduction.",
      achievements: [
        "Completed foundational secondary education with focus on science, mathematics, and computer fundamentals",
        "Developed multilingual fluency: English (Fluent), Urdu (Native), Hindi (Fluent), Punjabi (Fluent)",
        "Cultivated rigorous problem-solving approach directly applicable to IT support and systems diagnostics"
      ],
      tags: ["Matriculation (GCSE Equivalent)", "Mathematics", "Multilingual", "Analytical Logic"]
    },
    architect: {
      role: "MATRICULATION_GCSE_EQUIVALENT",
      company: "THE_EDUCATORS_PAKISTAN",
      description: "Core secondary education in science, algebra, physics, and foundational computer literacy.",
      achievements: [
        "Mastered foundational algebra, basic physics, and empirical scientific deduction",
        "Developed multilingual communication capabilities facilitating international technical collaboration",
        "Laid the initial groundwork for technical curiosity and electronics repair"
      ],
      tags: ["Foundations", "Science", "Mathematics", "Multilingual", "Deductive Logic"]
    }
  }
];

export default function CareerTimeline({ isGodMode, themeMode = 'dark' }) {
  const [activeItem, setActiveItem] = useState(0);
  const [selectedSection, setSelectedSection] = useState("ALL");
  const [sortOrder, setSortOrder] = useState("REVERSE"); // "REVERSE" (Newest First: 2026 -> 2016) by default

  const handleNodeClick = (index) => {
    playClick(680, 0.03);
    setActiveItem(index);
  };

  const handleSectionFilter = (sec) => {
    playClick(620, 0.03);
    setSelectedSection(sec);
    setActiveItem(0);
  };

  const toggleSort = () => {
    playClick(750, 0.03);
    setSortOrder(prev => prev === "CHRONO" ? "REVERSE" : "CHRONO");
    setActiveItem(0);
  };

  // Section Counts
  const counts = useMemo(() => {
    return {
      ALL: TIMELINE_DATA.length,
      Experience: TIMELINE_DATA.filter(d => d.section === "Experience").length,
      Projects: TIMELINE_DATA.filter(d => d.section === "Projects").length,
      Education: TIMELINE_DATA.filter(d => d.section === "Education").length
    };
  }, []);

  // Filtered & Sorted items
  const displayItems = useMemo(() => {
    let list = [...TIMELINE_DATA];
    if (selectedSection !== "ALL") {
      list = list.filter(item => item.section === selectedSection);
    }
    // Sort
    list.sort((a, b) => {
      return sortOrder === "CHRONO" 
        ? a.orderIndex - b.orderIndex 
        : b.orderIndex - a.orderIndex;
    });
    return list;
  }, [selectedSection, sortOrder]);

  const getSectionIcon = (section) => {
    switch (section) {
      case "Education":
        return <GraduationCap className="w-3.5 h-3.5" />;
      case "Experience":
        return <Briefcase className="w-3.5 h-3.5" />;
      case "Projects":
        return <Code2 className="w-3.5 h-3.5" />;
      default:
        return null;
    }
  };

  const getSectionBadgeClass = (section) => {
    if (isGodMode) {
      return "bg-green-500/15 border-green-500/40 text-green-300 font-mono";
    }
    if (themeMode === "light") {
      switch (section) {
        case "Education":
          return "bg-emerald-50 border-emerald-200 text-emerald-700 font-sans";
        case "Experience":
          return "bg-blue-50 border-blue-200 text-blue-700 font-sans";
        case "Projects":
          return "bg-purple-50 border-purple-200 text-purple-700 font-sans";
        default:
          return "bg-slate-100 border-slate-200 text-slate-700 font-sans";
      }
    }
    // Dark Executive
    switch (section) {
      case "Education":
        return "bg-emerald-950/40 border-emerald-500/40 text-emerald-300 font-sans";
      case "Experience":
        return "bg-blue-950/40 border-blue-500/40 text-cyan-300 font-sans";
      case "Projects":
        return "bg-purple-950/40 border-purple-500/40 text-purple-300 font-sans";
      default:
        return "bg-slate-900 border-slate-700 text-slate-300 font-sans";
    }
  };

  return (
    <section id="timeline" className="w-full py-16 md:py-24 max-w-6xl mx-auto px-4 sm:px-6 scroll-mt-24">
      {/* Header */}
      <div className="text-center mb-8 sm:mb-12 space-y-3">
        <h2 className={`text-xs sm:text-sm font-bold tracking-[0.5em] uppercase ${
          isGodMode ? "text-green-500/70 font-mono" : themeMode === "light" ? "text-blue-600 font-sans" : "text-cyan-400 font-sans"
        }`}>
          {isGodMode ? "// TELEMETRY_LOG: CONSOLIDATED_MASTER_TIMELINE" : "Consolidated Master Timeline"}
        </h2>
        <h3 className={`text-3xl sm:text-4xl font-black ${
          isGodMode ? "text-green-400 font-mono text-glow-green" : themeMode === "light" ? "text-slate-900 font-display" : "text-white font-display"
        }`}>
          {isGodMode ? "CHRONOLOGICAL_SYSTEM_RECORD" : "Practical Experience & Qualifications"}
        </h3>
        <p className={`text-sm max-w-2xl mx-auto opacity-80 ${
          isGodMode ? "font-mono text-green-400/70" : themeMode === "light" ? "font-normal text-slate-600" : "font-normal text-slate-300"
        }`}>
          {isGodMode 
            ? "Unified temporal record tracking foundational academics in Pakistan to active UK IT infrastructure and real-time software architectures." 
            : "A clean, non-overlapping chronological record spanning foundational education, independent projects, and physical & IT infrastructure in Pakistan and London, UK."}
        </p>
      </div>

      {/* Interactive Controls Bar: Filter Pills & Chronological Sort Toggle */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-4 border-b border-current/10">
        {/* Section Filter Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {[
            { key: "ALL", label: "All Records", count: counts.ALL },
            { key: "Experience", label: "Experience", count: counts.Experience },
            { key: "Projects", label: "Projects", count: counts.Projects },
            { key: "Education", label: "Education", count: counts.Education }
          ].map(tab => {
            const isSelected = selectedSection === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => handleSectionFilter(tab.key)}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 border cursor-pointer ${
                  isSelected
                    ? isGodMode
                      ? "bg-green-500/20 border-green-400 text-green-300 shadow-[0_0_15px_rgba(34,197,94,0.3)]"
                      : themeMode === "light"
                      ? "bg-blue-600 border-blue-600 text-white shadow-md"
                      : "bg-cyan-500/20 border-cyan-400 text-cyan-200 shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                    : isGodMode
                    ? "bg-black/40 border-green-500/20 text-green-400/60 hover:border-green-500/50 hover:text-green-300"
                    : themeMode === "light"
                    ? "bg-white border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-slate-300 shadow-sm"
                    : "bg-[#0c1222]/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200"
                }`}
              >
                <span>{tab.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  isSelected
                    ? isGodMode 
                      ? "bg-green-500/40 text-green-100" 
                      : themeMode === "light" 
                      ? "bg-blue-700 text-white" 
                      : "bg-cyan-400/30 text-cyan-100"
                    : "bg-current/10 opacity-70"
                }`}>
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Sort Order Toggle */}
        <button
          onClick={toggleSort}
          className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 border cursor-pointer ${
            isGodMode
              ? "bg-black/60 border-green-500/30 text-green-300 hover:border-green-400 font-mono"
              : themeMode === "light"
              ? "bg-white border-slate-300 text-slate-700 hover:border-blue-500 shadow-sm"
              : "bg-[#0c1222]/80 border-slate-800 text-slate-300 hover:border-cyan-500"
          }`}
          title="Toggle chronological sorting"
        >
          <ArrowUpDown className="w-3.5 h-3.5" />
          <span>
            {sortOrder === "CHRONO" ? "Chronological (2016 → 2026)" : "Newest First (2026 → 2016)"}
          </span>
        </button>
      </div>

      {/* Timeline Flow */}
      <div className="relative border-l-2 ml-4 sm:ml-8 md:ml-12 pl-6 sm:pl-10 space-y-10 transition-colors duration-500 border-current/20">
        {displayItems.map((item, idx) => {
          const content = isGodMode ? item.architect : item.executive;
          const isActive = idx === activeItem;

          return (
            <div 
              key={item.id} 
              onClick={() => handleNodeClick(idx)}
              className="relative group cursor-pointer"
            >
              {/* Timeline Indicator Dot */}
              <div className={`absolute -left-[31px] sm:-left-[47px] top-2 w-6 h-6 rounded-full border-4 transition-all duration-500 flex items-center justify-center ${
                isActive
                  ? isGodMode 
                    ? "bg-green-500 border-black shadow-[0_0_15px_rgba(34,197,94,0.8)] scale-110" 
                    : themeMode === "light"
                    ? "bg-blue-600 border-white shadow-[0_0_15px_rgba(37,99,235,0.4)] scale-110"
                    : "bg-cyan-400 border-[#070a12] shadow-[0_0_20px_rgba(6,182,212,0.6)] scale-110"
                  : isGodMode
                    ? "bg-black border-green-500/40 group-hover:border-green-400"
                    : themeMode === "light"
                    ? "bg-white border-slate-300 group-hover:border-blue-500"
                    : "bg-[#0c1222] border-slate-700 group-hover:border-blue-400"
              }`}>
                <span className={`w-1.5 h-1.5 rounded-full ${isActive ? (isGodMode ? "bg-black" : "bg-white") : "opacity-0"}`} />
              </div>

              {/* Card Container */}
              <div className={`p-6 sm:p-8 rounded-3xl border transition-all duration-500 ${
                isActive
                  ? isGodMode
                    ? "bg-[#070b09]/92 border-green-400/70 backdrop-blur-2xl shadow-[0_0_35px_rgba(34,197,94,0.18)] translate-x-1"
                    : themeMode === "light"
                    ? "bg-white border-blue-400/80 backdrop-blur-2xl shadow-[0_15px_40px_rgba(37,99,235,0.12)] translate-x-1"
                    : "bg-[#0c1324]/90 border-blue-500/60 backdrop-blur-2xl shadow-[0_15px_40px_rgba(37,99,235,0.2),inset_0_1px_0_rgba(255,255,255,0.08)] translate-x-1"
                  : isGodMode
                    ? "bg-black/50 border-green-500/20 hover:border-green-500/40 hover:bg-black/70 backdrop-blur-xl"
                    : themeMode === "light"
                    ? "bg-white/80 border-slate-200 hover:border-slate-300 hover:bg-white backdrop-blur-xl shadow-md"
                    : "bg-[#0c1222]/70 border-slate-800/80 hover:border-slate-700 hover:bg-[#11192e] backdrop-blur-xl shadow-lg"
              }`}>
                {/* Meta Header: Badges for Timeline, Section, and Location */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div className="flex flex-wrap items-center gap-2">
                    {/* Timeline Pill */}
                    <span className={`text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full border inline-flex items-center gap-1.5 ${
                      isGodMode 
                        ? "bg-green-500/15 border-green-500/40 text-green-300 font-mono" 
                        : themeMode === "light"
                        ? "bg-blue-50 border-blue-200 text-blue-800 font-semibold"
                        : "bg-blue-950/40 border-blue-500/30 text-cyan-300 font-semibold"
                    }`}>
                      <Calendar className="w-3 h-3 opacity-70" />
                      {item.timeline}
                    </span>

                    {/* Section Badge */}
                    <span className={`text-[11px] font-bold tracking-wide uppercase px-2.5 py-0.5 rounded-full border inline-flex items-center gap-1.5 ${getSectionBadgeClass(item.section)}`}>
                      {getSectionIcon(item.section)}
                      {item.section}
                    </span>
                  </div>

                  {/* Location Badge */}
                  <div className="flex items-center gap-1.5">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-lg border inline-flex items-center gap-1.5 ${
                      isGodMode
                        ? "bg-black/50 border-green-500/20 text-green-400/80 font-mono"
                        : themeMode === "light"
                        ? "bg-slate-100 border-slate-200 text-slate-600 font-sans"
                        : "bg-[#101728] border-slate-800 text-slate-300 font-sans"
                    }`}>
                      <MapPin className="w-3 h-3 text-red-400 opacity-80 shrink-0" />
                      {item.location}
                    </span>
                  </div>
                </div>

                {/* Subtitle / Company context */}
                <div className={`text-xs font-medium mb-1 opacity-70 ${
                  isGodMode ? "font-mono text-green-400/70" : themeMode === "light" ? "font-sans text-slate-500" : "font-sans text-slate-400"
                }`}>
                  {content.company}
                </div>

                {/* Role / Item Name */}
                <h4 className={`text-xl sm:text-2xl font-black mb-3 ${
                  isGodMode ? "text-green-400 font-mono" : themeMode === "light" ? "text-slate-900 font-sans" : "text-white font-sans"
                }`}>
                  {content.role}
                </h4>

                <p className={`text-sm sm:text-base leading-relaxed mb-5 ${
                  isGodMode ? "text-green-400/80 font-mono" : themeMode === "light" ? "text-slate-700 font-normal" : "text-slate-300 font-normal"
                }`}>
                  {content.description}
                </p>

                {/* Achievements List */}
                <div className="space-y-2 mb-6">
                  {content.achievements.map((ach, aIdx) => (
                    <div key={aIdx} className="flex items-start gap-2.5">
                      <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${
                        isGodMode ? "text-green-400" : themeMode === "light" ? "text-blue-600" : "text-cyan-400"
                      }`} />
                      <span className={`text-xs sm:text-sm ${
                        isGodMode ? "text-green-300/90 font-mono" : themeMode === "light" ? "text-slate-700 font-medium" : "text-slate-200 font-medium"
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
                          : themeMode === "light"
                          ? "bg-slate-100 border-slate-200 text-slate-700 font-sans"
                          : "bg-[#101728] border-slate-800 text-slate-300 font-sans"
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
