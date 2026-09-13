// src/content/agent_knowledge.js

export const AGENT_ROLES = {
  executive: {
    name: "IT Systems & Support Advisor",
    tagline: "Hardware Diagnostics, Infrastructure & Systems Engineering",
    badge: "IT_ADVISOR_v1.0",
    description: "An AI advisor providing verified insights into Muhammad Mobeen's IT support competencies, hardware repair capabilities, CompTIA A+ certification, and technical projects.",
    suggestedQueries: [
      { id: "comptia", label: "🛡️ CompTIA A+ Progress", query: "What is Mobeen's CompTIA A+ certification progress and competencies?" },
      { id: "hardware", label: "🔧 Hardware & Soldering", query: "What hands-on hardware and micro-soldering experience does Mobeen have?" },
      { id: "networking", label: "🌐 Networking & CCTV", query: "Can you summarize Mobeen's networking and CCTV deployment experience?" },
      { id: "projects", label: "💻 Technical Projects", query: "What software and engineering projects has Mobeen built?" },
      { id: "contact", label: "📍 Contact & UK Visa", query: "What is Mobeen's location, contact details, and UK right to work?" }
    ]
  },
  architect: {
    name: "SysOrchestrator v2.4",
    tagline: "Hardware Diagnostics, Network Telemetry & Real-Time Kernel",
    badge: "HARDWARE_KERNEL_STABLE",
    description: "Low-level autonomous terminal agent providing system telemetry, circuit diagnostics logs, Fastify/Vue 3 architectures, and network cabling specs.",
    suggestedCommands: [
      "help",
      "status",
      "skills",
      "projects",
      "hardware",
      "network",
      "comptia",
      "contact"
    ]
  }
};

export const CLI_COMMANDS = {
  help: {
    description: "Display all available terminal commands and diagnostic subroutines",
    output: [
      "AVAILABLE SYSTEM ROUTINES:",
      "  help        - List all available terminal commands",
      "  status      - Print real-time system diagnostics, UK work rights, and environment",
      "  skills      - Display verified hardware, networking, and software competencies",
      "  projects    - List all practical engineering projects and architecture specs",
      "  hardware    - Inspect component-level PCB repair and BMS battery mod details",
      "  network     - Inspect CCTV surveillance, LAN/WLAN, and Cat6 cabling specs",
      "  comptia     - Review CompTIA A+ core competencies in progress",
      "  contact     - Dump direct communication channels and location coordinates",
      "  clear       - Clear terminal display buffer"
    ]
  },
  status: {
    description: "Query system diagnostics, location, and work authorization",
    output: [
      ">> HARDWARE & SYSTEMS RUNTIME TELEMETRY:",
      "  OPERATOR:         Muhammad Mobeen",
      "  LOCATION:         London, NW9 6EJ, United Kingdom",
      "  RIGHT TO WORK:    Full UK Right to Work (Spouse Visa - Verified)",
      "  PRIMARY TARGET:   IT Support Specialist / Hardware Technician / Systems Engineer",
      "  CERTIFICATION:    CompTIA A+ (In Progress — Core 1 & 2 Domains)",
      "  LANGUAGES:        English (Fluent), Urdu (Native), Hindi (Fluent), Punjabi (Fluent)",
      "  KERNEL STATUS:    Online (Vite 7 / React 19 / Fastify / Vue 3 / WebSockets)"
    ]
  },
  skills: {
    description: "Display verified technical competencies across physical and digital systems",
    output: [
      ">> TECHNICAL SKILLS & SYSTEM STACK:",
      "  HARDWARE & REPAIR: Motherboard diagnostics, component soldering, circuit cleaning, Lithium-ion BMS, Arduino, relays",
      "  NETWORKING:        Router & LAN/WLAN config, CCTV deployment, structured cabling (Cat6 T568B), physical mounting",
      "  OS ADMINISTRATION: Windows 10/11 configuration & troubleshooting, Linux CLI basics, system recovery, hardware utilities",
      "  SOFTWARE STACK:    TypeScript, JavaScript (ES6+), Vue 3, Fastify, WebSockets, HTML5, CSS3, REST APIs, modular DBs",
      "  AI WORKFLOWS:      AI-directed document parsing, receipt OCR, rapid prototyping, and automated testing"
    ]
  },
  projects: {
    description: "Inspect all 6 practical technical projects",
    output: [
      ">> PRACTICAL EXPERIENCE & TECHNICAL PROJECTS:",
      "  [01] Hisaab-Kitaab           :: TypeScript / Modular DB / AI-directed bank statement & receipt parsing",
      "  [02] Gym Management System   :: Multi-tier member platform / RESTful APIs / RBAC auth & scheduling",
      "  [03] Advanced Hardware Mod   :: Component-level diagnostics on liquid damage / +100% BMS Li-ion runtime",
      "  [04] IoT Home Automation     :: Arduino microcontroller / Multi-channel relay logic / Voice assistant",
      "  [05] CryptoBot / TradeX      :: Fastify / Vue 3 / WebSockets / Binance API live market ingestion",
      "  [06] Appliance & CCTV Net    :: Physical hardware mounting / Cat6 structured cabling / NVR remote access",
      "",
      "Type 'hardware' or 'network' for deep-dive physical specifications."
    ]
  },
  hardware: {
    description: "Inspect component-level repair and BMS battery engineering",
    output: [
      ">> COMPONENT-LEVEL HARDWARE TELEMETRY:",
      "  DIAGNOSTIC PROTOCOL: Multimeter continuity mapping, thermal rail analysis, impedance probing",
      "  REPAIR CAPABILITIES: SMD component soldering, damaged PCB micro-jumper bridging, ultrasonic cleaning",
      "  POWER MODIFICATION:  Engineered multi-cell Lithium-ion pack with active BMS (over-current, thermal, balance)",
      "  RUNTIME OUTCOME:     +100% operational runtime achieved with stable voltage discharge curves",
      "  EMBEDDED LOGIC:      Arduino C++ firmware with opto-isolated relay switching for high-voltage AC circuits"
    ]
  },
  network: {
    description: "Inspect CCTV surveillance and network infrastructure deployment",
    output: [
      ">> NETWORK & CCTV INFRASTRUCTURE:",
      "  CABLING STANDARD:    TIA/EIA-568-B Cat6 UTP termination, punch-down patch panels, RJ45 crimping",
      "  SURVEILLANCE:        Multi-channel NVR/DVR IP setup, RTSP streaming, 802.3af/at PoE power budgeting",
      "  NETWORK LAYER:       Router LAN/WLAN subnetting, DHCP reservations, port forwarding, encrypted DDNS tunnel",
      "  PHYSICAL RIGGING:    Structural mounting, wall conduits, weather-sealed camera enclosures, clean AC wiring"
    ]
  },
  comptia: {
    description: "Review CompTIA A+ core competency areas",
    output: [
      ">> COMPTIA A+ COMPETENCY PROGRESS (IN PROGRESS):",
      "  CORE 1 (220-1101): Mobile devices, networking technology, hardware, virtualization & cloud computing",
      "  CORE 2 (220-1102): Operating systems (Windows, Linux, macOS), security protocols, software troubleshooting, operational procedures",
      "  STATUS:            Active exam preparation, continuous lab practice, and system diagnostic simulation"
    ]
  },
  contact: {
    description: "Show contact channels and work rights",
    output: [
      ">> DIRECT COMMUNICATION CHANNELS:",
      "  PHONE:         07351187884",
      "  EMAIL:         muhammadmobeen20011@gmail.com",
      "  LOCATION:      London, NW9 6EJ, United Kingdom",
      "  RIGHT TO WORK: Full Right to Work in the UK (Spouse Visa)",
      "  GITHUB:        https://github.com/Mobeen-2024",
      "  PORTFOLIO:     https://my-project-portfolios-projects-ed15ad56.vercel.app/"
    ]
  }
};

export const EXECUTIVE_ANSWERS = {
  comptia: {
    title: "CompTIA A+ Certification & Systems Mastery",
    thoughtTrace: "Retrieving certification progress and IT infrastructure syllabus...",
    response: "Muhammad Mobeen is actively preparing for the CompTIA A+ certification, building rigorous competencies in computer hardware, network protocols (TCP/IP, DNS, DHCP, VLANs), operating system diagnostics (Windows 10/11, Linux CLI), cybersecurity best practices, and systematic hardware troubleshooting."
  },
  hardware: {
    title: "Component-Level Hardware & Power Engineering",
    thoughtTrace: "Querying physical diagnostic, soldering, and BMS capabilities...",
    response: "Mobeen possesses hands-on expertise in motherboard diagnostics, microscopic circuit inspection, and precision component soldering. In a standout project, he reverse-engineered and repaired liquid-damaged circuitry, and custom-built a lithium-ion battery pack with an active Battery Management System (BMS), increasing equipment runtime by 100%."
  },
  networking: {
    title: "Networking & CCTV Infrastructure Deployment",
    thoughtTrace: "Analyzing physical cabling, NVR configurations, and router setup...",
    response: "Mobeen has planned and deployed on-premises CCTV surveillance networks, terminating and routing structured Cat6 cabling (T568B), configuring local routers (WLAN/LAN subnets, DHCP, port forwarding), and enabling secure remote mobile monitoring for commercial and residential installations."
  },
  projects: {
    title: "Featured Software & Engineering Projects",
    thoughtTrace: "Summarizing practical project portfolio...",
    response: "Mobeen's key projects include: (1) Hisaab-Kitaab personal finance tracker with automated statement parsing, (2) Gym Management platform with RBAC authentication and REST APIs, (3) TradeX high-throughput crypto terminal using Fastify & Vue 3 WebSockets, (4) Arduino IoT home automation with opto-isolated relays, and (5) Advanced Hardware BMS power modifications."
  },
  contact: {
    title: "Direct Contact Coordinates & UK Right to Work",
    thoughtTrace: "Retrieving verified contact details and visa status...",
    response: "Muhammad Mobeen is based in London, NW9 6EJ, and holds Full Right to Work in the UK under a Spouse Visa. You can reach him directly at 07351187884 or via email at muhammadmobeen20011@gmail.com."
  },
  languages: {
    title: "Multilingual Communication",
    thoughtTrace: "Reviewing language proficiencies...",
    response: "Mobeen is fluent in four languages: English (Fluent), Urdu (Native), Hindi (Fluent), and Punjabi (Fluent), enabling seamless communication across diverse technical teams and client environments."
  }
};

export function processExecutiveQuery(queryText) {
  const normalized = queryText.toLowerCase().trim();
  
  if (!normalized) {
    return {
      title: "Query Error",
      thoughtTrace: "Sanitizing input...",
      response: "Please provide a query regarding CompTIA A+, hardware diagnostics, networking, projects, or contact information."
    };
  }

  if (normalized.includes("comptia") || normalized.includes("cert") || normalized.includes("qualification") || normalized.includes("exam")) {
    return EXECUTIVE_ANSWERS.comptia;
  }
  if (normalized.includes("hardware") || normalized.includes("solder") || normalized.includes("bms") || normalized.includes("battery") || normalized.includes("circuit") || normalized.includes("repair")) {
    return EXECUTIVE_ANSWERS.hardware;
  }
  if (normalized.includes("network") || normalized.includes("cctv") || normalized.includes("cable") || normalized.includes("router") || normalized.includes("lan") || normalized.includes("wlan")) {
    return EXECUTIVE_ANSWERS.networking;
  }
  if (normalized.includes("case") || normalized.includes("project") || normalized.includes("work") || normalized.includes("build") || normalized.includes("app")) {
    return EXECUTIVE_ANSWERS.projects;
  }
  if (normalized.includes("contact") || normalized.includes("book") || normalized.includes("hire") || normalized.includes("email") || normalized.includes("phone") || normalized.includes("visa") || normalized.includes("location") || normalized.includes("right to work")) {
    return EXECUTIVE_ANSWERS.contact;
  }
  if (normalized.includes("language") || normalized.includes("speak") || normalized.includes("urdu") || normalized.includes("english") || normalized.includes("hindi") || normalized.includes("punjabi")) {
    return EXECUTIVE_ANSWERS.languages;
  }

  // General intelligent synthesis
  return {
    title: "Technical Profile Overview",
    thoughtTrace: `Processing query: "${queryText.slice(0, 40)}..." through technical knowledge graph`,
    response: `Muhammad Mobeen is an IT Support Specialist and Systems Engineer with expertise in hardware diagnostics, component soldering, structured network cabling, and full-stack software development. Currently preparing for CompTIA A+ and available for IT roles in London with Full UK Right to Work (Spouse Visa).`
  };
}

export function executeCliCommand(rawCmd) {
  const sanitized = rawCmd.trim().toLowerCase();
  
  if (!sanitized) {
    return {
      type: "empty",
      lines: []
    };
  }

  if (sanitized === "clear") {
    return {
      type: "clear",
      lines: []
    };
  }

  const handler = CLI_COMMANDS[sanitized];
  if (handler) {
    return {
      type: "success",
      command: sanitized,
      lines: handler.output
    };
  }

  // Fuzzy match or fallback
  if (sanitized.startsWith("proj")) {
    return {
      type: "success",
      command: "projects",
      lines: CLI_COMMANDS.projects.output
    };
  }

  if (sanitized.startsWith("hard")) {
    return {
      type: "success",
      command: "hardware",
      lines: CLI_COMMANDS.hardware.output
    };
  }

  if (sanitized.startsWith("net")) {
    return {
      type: "success",
      command: "network",
      lines: CLI_COMMANDS.network.output
    };
  }

  if (sanitized.startsWith("comp")) {
    return {
      type: "success",
      command: "comptia",
      lines: CLI_COMMANDS.comptia.output
    };
  }

  return {
    type: "error",
    command: rawCmd,
    lines: [
      `zsh: command not found: ${rawCmd}`,
      "Type 'help' to see valid system commands."
    ]
  };
}
