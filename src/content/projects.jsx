// src/content/projects.jsx

export const PROJECTS = [
  {
    id: 1,
    category: "Fintech & Automation",
    images: [
      "/images/projects/hisaab-kitaab/hk-cover.png",
      "/images/projects/hisaab-kitaab/hk-dashboard.png",
      "/images/projects/hisaab-kitaab/hk-pos.png",
      "/images/projects/hisaab-kitaab/hk-reports.png",
      "/images/projects/hisaab-kitaab/hk-calendar.png",
      "/images/projects/hisaab-kitaab/hk-quick-add.png"
    ],
    executive: {
      title: "Hisaab-Kitaab Finance App",
      tagline: "Automated Daily Expense Management",
      description: "Architected and engineered a full-stack daily expense tracking application using TypeScript and modular database structures. Leveraged AI-directed development tools to implement automated bank statement parsing, digital receipt management, and analytics reporting.",
      impact: "Automated Statement Parsing",
      techStack: ["TypeScript", "React", "Node.js", "AI Workflows", "Modular DB"],
      keyMetrics: [
        { label: "Parsing Speed", value: "< 1.5s / Statement" },
        { label: "Data Integrity", value: "99.8% Extraction" },
        { label: "Persistence", value: "Cross-Session Zero Loss" }
      ],
      strategicTakeaway: "Automating document ingestion and categorization cut manual expense entry time by over 85%, ensuring dependable personal finance auditing.",
      businessChallenges: "Unstructured bank PDF statements and receipt captures required intelligent sanitization to reliably normalize currency, dates, and vendors."
    },
    architect: {
      title: "HISAAB_KITAAB_ENGINE",
      tagline: "TypeScript / Modular DB / AI Parsing",
      description: "Engineered a TypeScript financial ledger with atomic transaction logging, automated document parsing pipelines, and persistent modular storage with instant cross-session hydration.",
      impact: "Atomic Transaction Engine",
      techStack: ["TypeScript", "SQLite / Modular DB", "Node.js", "FastAPI", "Tailwind CSS"],
      keyMetrics: [
        { label: "Schema Architecture", value: "Modular Relational" },
        { label: "Query Execution", value: "< 12ms P95" },
        { label: "Ingestion Format", value: "PDF / OCR / JSON" }
      ],
      architectureDetails: "Normalized modular schema separating accounts, transactions, and audit journals with idempotent transaction upsert pipelines and schema validation.",
      pipelineSteps: [
        "Digital Receipt & Statement Document Ingestion",
        "AI-Assisted Text Tokenization & Entity Extraction",
        "Deterministic Transaction Deduplication & Validation",
        "Atomic Commit to Modular Relational Datastore"
      ],
      complexity: "Time: O(n) token parsing | Space: O(k) memory buffer"
    }
  },
  {
    id: 2,
    category: "Full-Stack & 3D WebGL",
    images: [
      "/images/projects/repx/RepX1.png",
      "/images/projects/repx/RepX2.png",
      "/images/projects/repx/RepX3.png",
      "/images/projects/repx/RepX4.png",
      "/images/projects/repx/RepX5.png",
      "/images/projects/repx/RepX6.png",
      "/images/projects/repx/RepX7.png",
      "/images/projects/repx/RepX8.png"
    ],
    executive: {
      title: "RepX AI Gym Platform",
      tagline: "Cybernetic Fitness Intelligence & 3D WebGL Telemetry",
      description: "Engineered a personal fitness intelligence platform designed for the physical realities of the training floor: sweaty hands, background mobile throttling, and offline environments. Features an interactive 3D WebGL athlete anatomy model with raycastable sub-muscles and custom GLSL bio-electric shaders, a deterministic multi-factor recommendation engine over 3,213 canonical exercises normalized from 605k+ Kaggle records with Polars, and local-first offline persistence via IndexedDB with SHA-256 cryptographic envelopes.",
      impact: "3D WebGL Anatomy & Offline Resilience",
      techStack: ["Three.js", "WebGL / GLSL", "React 19", "TypeScript", "Drizzle ORM", "PostgreSQL / PGlite", "Python (Polars)", "Google Gemini"],
      keyMetrics: [
        { label: "Data Processing", value: "605k+ Kaggle Records" },
        { label: "Recommendation Speed", value: "< 5ms Deterministic" },
        { label: "3D Anatomy Heads", value: "27 Sub-Muscles" }
      ],
      strategicTakeaway: "Built an enterprise-grade fitness architecture combining 44×44px tactile gym-floor UI, zero layout shifts, local-first offline execution with background sync, and strict trust-bounded AI coaching that eliminates exercise hallucinations.",
      businessChallenges: "Active workout sessions demand absolute reliability with zero latency and offline capability. Solved mobile background timer throttling using absolute Unix epoch calculations, and prevented generative AI hallucinations by constraining LLM coaching strictly to pre-scored deterministic candidates."
    },
    architect: {
      title: "REPX_AI_CORE_PLATFORM",
      tagline: "WebGL Shaders / Polars Pipeline / Local-First FSM / Drizzle ORM",
      description: "Constructed an enterprise cybernetic fitness engine combining Three.js 3D anatomy rendering with runtime spatial mesh splitting, custom GLSL Bio-Electric muscle charge shaders, a 7-factor deterministic recommendation algorithm across 3,213 normalized exercises, and an offline-first IndexedDB finite-state machine sealed with SHA-256 StorageEnvelopes.",
      impact: "Sub-5ms Scorer & Zero Data Loss",
      techStack: ["Three.js (GLSL)", "React 19 / Vite", "Drizzle ORM", "PostgreSQL / PGlite", "Polars (Python)", "IndexedDB (idb)", "Argon2id / CSRF"],
      keyMetrics: [
        { label: "Scorer Latency", value: "< 5ms Heuristics" },
        { label: "Persistence Layer", value: "PGlite / Postgres Dual" },
        { label: "Test Suite", value: "275 Automated Tests" }
      ],
      architectureDetails: "Zero-trust backend with multi-tenant isolation (WHERE id = :id AND user_id = :userId), Argon2id password hashing, CSRF synchronizer tokens, Drizzle ORM schema with UUIDv7 keys, and an immutable finite-state machine (initializing -> in_progress -> completed) backed by IndexedDB and SHA-256 storage envelope verification.",
      pipelineSteps: [
        "605k Kaggle Raw Record Ingestion & Polars High-Performance Normalization",
        "3D Spatial Partition & GLSL Bio-Electric Muscle Charge Shader Rendering",
        "7-Factor Deterministic Compatibility Scoring (< 5ms, Zero Hallucinations)",
        "IndexedDB Local-First State Buffering & Cryptographic Envelope Sync"
      ],
      complexity: "Algorithmic: 7-factor weighted heuristic | Graphics: Multi-pass GLSL & spatial mesh splitting"
    }
  },
  {
    id: 3,
    category: "Hardware Diagnostics & Electronics",
    executive: {
      title: "Advanced Hardware Diagnostics & Repair",
      tagline: "Component-Level Restoration & BMS Engineering",
      description: "Executed component-level diagnostics and repair on liquid-damaged hardware, disassembling circuitry, tracing signal lines, and restoring functional integrity. Custom-engineered power management solutions by integrating additional lithium-ion cells with an active BMS, increasing operational runtime by 100%.",
      impact: "+100% Operational Runtime",
      techStack: ["Micro-Soldering", "BMS Integration", "Motherboard Diagnostics", "Li-ion Cells", "Multimeter"],
      keyMetrics: [
        { label: "Runtime Increase", value: "+100% via Active BMS" },
        { label: "Salvage Success", value: "Liquid Damage Reversal" },
        { label: "Cell Configuration", value: "Balanced Li-ion Pack" }
      ],
      strategicTakeaway: "Delivered component-level repair solutions that fully restored severely compromised hardware at a fraction of replacement cost, coupled with custom power mods.",
      businessChallenges: "Microscopic corrosion bridging solder joints and shorting high-voltage supply rails to sensitive ground planes required micro-soldering and trace reconstruction."
    },
    architect: {
      title: "PCB_DIAGNOSTICS_&_BMS",
      tagline: "Micro-Soldering / Circuit Tracing / BMS",
      description: "Disassembled high-density multilayer PCBs, traced power rail shorts using thermal inspection and multimeters, and micro-soldered replacement SMD components. Engineered balanced multi-cell Li-ion pack with active Battery Management System.",
      impact: "Zero-Resistance Rail Repair",
      techStack: ["SMD Micro-Soldering", "Thermal Probing", "Active BMS", "Circuit Schematics", "Oscilloscope"],
      keyMetrics: [
        { label: "Diagnostic Method", value: "Signal Line Tracing" },
        { label: "BMS Protection", value: "Over-current / Thermal / Balance" },
        { label: "Soldering Standard", value: "SMD / Micro-Pads" }
      ],
      architectureDetails: "Schematic analysis to identify 3.3V/5V power rail short-to-ground conditions, ultrasonic flux de-oxidation, micro-jumper trace bridging, and constant-current/constant-voltage BMS charge regulation.",
      pipelineSteps: [
        "Multimeter Continuity & Impedance Rail Mapping",
        "Ultrasonic Cleaning & Corrosion Neutralization",
        "SMD Component Desoldering & Micro-Jumper Bridging",
        "BMS Cell Voltage Balancing & Thermal Stress Testing"
      ],
      complexity: "Physical: Micron-scale micro-soldering | Electrical: 1S-4S BMS"
    }
  },
  {
    id: 4,
    category: "Embedded Systems & IoT",
    images: [
      "/images/projects/iot/board1.jpg",
      "/images/projects/iot/board2.png",
      "/images/projects/iot/board3.jpg"
    ],
    executive: {
      title: "IoT Home Automation Framework",
      tagline: "Smart Microcontroller Automation",
      description: "Designed and configured an IoT automation framework using Arduino microcontrollers and multi-channel relay modules. Established smart assistant ecosystem integrations for remote mobile and voice-controlled management of environmental systems.",
      impact: "Unified Smart Environment",
      techStack: ["Arduino", "C/C++", "Relay Logic", "Smart Assistant", "IoT Protocols"],
      keyMetrics: [
        { label: "Control Channels", value: "Multi-Channel Relay" },
        { label: "Interface", value: "Voice & Mobile App" },
        { label: "Response Lag", value: "< 200ms Actuation" }
      ],
      strategicTakeaway: "Transformed standard high-voltage electrical appliances into intelligent, voice-activated environmental systems with seamless manual fallback switches.",
      businessChallenges: "Isolating low-voltage 5V microcontroller logic from 240V AC mains to eliminate inductive kickback interference and ensure absolute operational safety."
    },
    architect: {
      title: "ARDUINO_RELAY_IOT_CORE",
      tagline: "Arduino C++ / Optocoupler Isolation / Relays",
      description: "Embedded C++ state machine running on Arduino with opto-isolated relay modules, debounced physical GPIO inputs, and smart assistant wireless gateway bridge integration.",
      impact: "Opto-Isolated AC Switching",
      techStack: ["Arduino C++", "Relay Modules", "Optocouplers", "WiFi / MQTT", "GPIO Interrupts"],
      keyMetrics: [
        { label: "Firmware", value: "Non-Blocking C++ Loop" },
        { label: "Galvanic Isolation", value: "Optocoupler Array" },
        { label: "Command Latency", value: "< 45ms Local" }
      ],
      architectureDetails: "Hardware interrupt-driven edge detection for physical toggle switches, non-blocking millis() state management, and fail-safe default-off relay coil states.",
      pipelineSteps: [
        "Voice Assistant / Mobile MQTT Command Reception",
        "Microcontroller Firmware Interlock & Bounds Check",
        "Optocoupler Signal Trigger & Relay Armature Energization",
        "State Telemetry Broadcast to Smart Network Bridge"
      ],
      complexity: "Firmware: Deterministic state machine | Safety: Full galvanic isolation"
    }
  },
  {
    id: 5,
    category: "Real-Time Systems & WebSockets",
    images: [
      "/images/projects/cryptobot/CryptoBot1.png",
      "/images/projects/cryptobot/CryptoBot2.png",
      "/images/projects/cryptobot/CryptoBot3.png",
      "/images/projects/cryptobot/CryptoBot4.png"
    ],
    executive: {
      title: "CryptoBot / TradeX Terminal",
      tagline: "High-Frequency Market Data Engine",
      description: "Developed a real-time market interface connecting directly to the Binance API for live data feed ingestion. Constructed a high-throughput Fastify backend and reactive Vue 3 frontend utilizing WebSockets for low-latency updates. Executed automated risk management and trade execution algorithms within live testing environments.",
      impact: "Sub-50ms Market Telemetry",
      techStack: ["Vue 3", "Fastify", "WebSockets", "Binance API", "TypeScript"],
      keyMetrics: [
        { label: "Market Feed", value: "Binance API Live WSS" },
        { label: "UI Reactivity", value: "Vue 3 Composition API" },
        { label: "Update Rate", value: "Sub-50ms WebSockets" }
      ],
      strategicTakeaway: "Delivered instantaneous market visibility and automated order risk bounds, safeguarding capital against unexpected slippage during high-volatility spikes.",
      businessChallenges: "Ingesting continuous order book ticker streams without causing main-thread frame drops or memory leaks in the client browser interface."
    },
    architect: {
      title: "TRADEX_WEBSOCKET_CORE",
      tagline: "Fastify / Vue 3 / Binance API / WSS",
      description: "Asynchronous Fastify streaming backend bridging Binance WebSocket APIs with ring-buffer throttling, typed order execution structures, and reactive Vue 3 virtualized order books.",
      impact: "Zero-Lag Order Book Diff",
      techStack: ["Fastify", "Vue 3", "TypeScript", "WebSocket (WSS)", "Node.js"],
      keyMetrics: [
        { label: "Throughput", value: "5,000+ msgs/sec" },
        { label: "Backend Engine", value: "Fastify Async I/O" },
        { label: "Client Latency", value: "< 25ms Render" }
      ],
      architectureDetails: "Stream aggregation pipeline with exponential backoff WebSocket reconnects, atomic trade execution validation against balance bounds, and Vue 3 ShallowRef optimizations.",
      pipelineSteps: [
        "Direct Binance WebSocket Ticker & Depth Stream Ingestion",
        "Fastify Stream Sanitization & Risk Check Subroutine",
        "WSS Broadcast to Authenticated Vue 3 Client",
        "Reactive DOM Virtualization & Algorithmic Trigger"
      ],
      complexity: "Time: O(1) orderbook diff | Space: O(window) ring buffer"
    }
  },
  {
    id: 6,
    category: "Network Infrastructure & Deployment",
    executive: {
      title: "CCTV Network & Infrastructure",
      tagline: "Commercial & Residential Cabling",
      description: "Deployed local CCTV network infrastructure, executing physical hardware mounting, cable routing, and remote access configuration. Performed physical structural modifications and electrical wiring integration for commercial and residential hardware installations.",
      impact: "Secure Multi-Point Coverage",
      techStack: ["CCTV (NVR/DVR)", "Structured Cabling (Cat6)", "LAN/WLAN", "Router Config", "Electrical Wiring"],
      keyMetrics: [
        { label: "Infrastructure", value: "Structured Cat6 / RJ45" },
        { label: "Surveillance", value: "Local NVR & Remote Access" },
        { label: "Certification", value: "CompTIA A+ Aligned" }
      ],
      strategicTakeaway: "Designed and deployed tamper-resistant physical IT networks and security surveillance, providing continuous 24/7 facility monitoring with encrypted mobile access.",
      businessChallenges: "Routing cabling through complex architectural conduits while maintaining strict bend radiuses and avoiding high-voltage AC electromagnetic interference."
    },
    architect: {
      title: "INFRASTRUCTURE_&_CCTV_NET",
      tagline: "Structured Cabling / NVR / Subnetting",
      description: "Terminated T568B Cat6 cabling, configured static IP addressing and port forwarding on local routers, set up multi-channel NVR recording streams, and integrated clean electrical power distribution.",
      impact: "Gigabit LAN & Secure RTSP",
      techStack: ["Cat6 Termination (T568B)", "NVR/DVR IP Cameras", "Subnetting / VLAN", "DDNS / Port Forwarding", "PoE Injectors"],
      keyMetrics: [
        { label: "Bandwidth", value: "1000BASE-T Gigabit" },
        { label: "Power Delivery", value: "802.3af/at PoE" },
        { label: "Stream Protocol", value: "RTSP / H.265+" }
      ],
      architectureDetails: "Isolated surveillance traffic onto dedicated IP subnets, configured PoE power budgets for outdoor weather-sealed cameras, and established secure remote access via encrypted DDNS tunnel.",
      pipelineSteps: [
        "Physical Site Survey, Cable Path & PoE Budget Planning",
        "T568B Cat6 Pulling, Punch-Down & Continuity Testing",
        "NVR Camera IP Addressing, Subnetting & RTSP Stream Config",
        "Router Firewall Rule Setup & Secure Remote Gateway Verification"
      ],
      complexity: "Physical: T568B standard | Network: Layer 2/3 IP Subnetting"
    }
  },
  {
    id: 7,
    category: "Hardware & Diagnostics",
    images: [
      "/images/projects/diy/extractor.jpg"
    ],
    executive: {
      title: "DIY Appliance Installation",
      tagline: "Stove Extractor Hood Setup",
      description: "Successfully executed a DIY installation of a kitchen stove extractor hood, managing physical mounting and structural modifications.",
      impact: "Home Improvement",
      techStack: ["Hardware Mounting", "Power Tools", "Structural Modification"],
      keyMetrics: [
        { label: "Project", value: "DIY Installation" },
        { label: "Hardware", value: "Extractor Hood" },
        { label: "Result", value: "Fully Operational" }
      ],
      strategicTakeaway: "Demonstrated hands-on hardware installation and structural modification skills in a practical environment.",
      businessChallenges: "Physical appliance installation requires precision, proper structural support, and safe handling of power tools."
    },
    architect: {
      title: "HARDWARE_INSTALL_DIY",
      tagline: "Structural Mounting / Appliance Setup",
      description: "Planned and executed the physical mounting and integration of a Stoves extractor hood, ensuring structural integrity and level alignment.",
      impact: "Hardware Mounting",
      techStack: ["Drill", "Wall Anchors", "Measurement Tools"],
      keyMetrics: [
        { label: "Alignment", value: "Level Check" },
        { label: "Support", value: "Wall Mounting" },
        { label: "Integration", value: "Appliance Setup" }
      ],
      architectureDetails: "Physical layer installation requiring precise measurement, drilling, and secure wall anchoring for heavy appliance support.",
      pipelineSteps: [
        "Site Measurement & Marking",
        "Structural Drilling",
        "Secure Wall Anchoring",
        "Appliance Mounting & Alignment"
      ],
      complexity: "Physical Hardware Mounting"
    }
  }
];