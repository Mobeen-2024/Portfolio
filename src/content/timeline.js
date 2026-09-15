// src/content/timeline.js

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
      description: "Engineered an institutional-grade cryptocurrency trading terminal and execution engine with real-time Master-to-Slave trade mirroring, automated Delta-Neutral hedging, and multi-kernel AI pilot.",
      achievements: [
        "Architected real-time trade mirroring across up to 20 accounts via CCXT and Binance User Data Streams",
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
