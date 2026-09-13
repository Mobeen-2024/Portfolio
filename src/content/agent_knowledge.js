// src/content/agent_knowledge.js

export const AGENT_ROLES = {
  executive: {
    name: "Strategic Executive Advisor",
    tagline: "Board-Level Growth & Marketing Strategy",
    badge: "EXECUTIVE_AI_v1.4",
    description: "An AI advisor synthesizing 20+ years of cross-channel marketing leadership, revenue attribution, and ROI modeling.",
    suggestedQueries: [
      { id: "roi", label: "📈 Proven ROI & Metrics", query: "What is Mobeen's track record in revenue impact?" },
      { id: "leadership", label: "🏛️ Strategic Leadership", query: "How does Mobeen lead cross-functional growth teams?" },
      { id: "projects", label: "💼 Key Case Studies", query: "Summarize the top business success stories." },
      { id: "contact", label: "🤝 Book Strategy Session", query: "How can we initiate a strategic consultation?" }
    ]
  },
  architect: {
    name: "SysOrchestrator v2.4",
    tagline: "Autonomous Agent & Systems Pipeline Engine",
    badge: "SYS_KERNEL_STABLE",
    description: "Low-level autonomous terminal agent trained on distributed data pipelines, multi-agent frameworks, and fault-tolerant architectures.",
    suggestedCommands: [
      "help",
      "status",
      "projects",
      "skills",
      "eval_metrics",
      "arch_swarm",
      "contact"
    ]
  }
};

export const CLI_COMMANDS = {
  help: {
    description: "Display all available terminal commands and orchestration subroutines",
    output: [
      "AVAILABLE SYSTEM ROUTINES:",
      "  help              - List all available terminal commands",
      "  status            - Print real-time pipeline status and system telemetry",
      "  projects          - List all architectural case studies and throughput specs",
      "  skills            - Display low-level tech stack and frameworks",
      "  eval_metrics      - Run benchmark evaluation suite across agent workflows",
      "  arch_swarm        - View ASCII diagram of multi-agent orchestration architecture",
      "  contact           - Dump secure transmission coordinates",
      "  clear             - Clear terminal display buffer"
    ]
  },
  status: {
    description: "Query system telemetry and runtime environment",
    output: [
      ">> RUNTIME TELEMETRY:",
      "  KERNEL:           Linux x86_64 / React 19.2 / Vite 7.x",
      "  AGENT CLUSTER:    5 Active Worker Nodes (Status: HEALTHY)",
      "  UPTIME:           175,200+ Hours (20+ Years Equivalent)",
      "  DATA INGESTION:   1.2M Records / Batch (99.9% deduplication fidelity)",
      "  MODEL LATENCY:    P99 < 85ms across neural inference nodes",
      "  SECURITY LAYER:   Biometric Multi-Factor Authentication ACTIVE"
    ]
  },
  skills: {
    description: "Display architectural skills and technologies",
    output: [
      ">> ARCHITECTURAL CORE COMPETENCIES:",
      "  LANGUAGES:        Python 3.12, C++20, TypeScript, SQL (PostgreSQL / Snowflake), Bash",
      "  DATA & PIPELINES: Apache Kafka, Debezium, Pandas, Apache Spark, dbt, Redis",
      "  AI & AGENTS:      LangChain, LangGraph, Multi-Agent Orchestration, PyTorch, Scikit-Learn",
      "  CLOUD & DEVOPS:   AWS (ECS, Lambda, S3), Docker, GitHub Actions CI/CD, Kubernetes",
      "  FRONTEND SYSTEMS: React 19, Tailwind CSS, Vite, WebSockets, Responsive UI/UX"
    ]
  },
  projects: {
    description: "Inspect architectural projects",
    output: [
      ">> SYSTEM_CASE_STUDIES:",
      "  [01] ETL_PIPELINE_STABLE       :: Python / Snowflake / Pandas (1.2M records, 99.9% dedupe)",
      "  [02] NEURAL_ATTRIBUTION_v2     :: LSTM / TensorFlow / Keras (92% churn prediction accuracy)",
      "  [03] AGENT_SWARM_ORCHESTRATOR  :: LangGraph / Python / Redis (4 autonomous worker nodes)",
      "  [04] REALTIME_CDC_DATA_MESH    :: Kafka / Debezium / Postgres (Sub-100ms sync latency)",
      "  [05] HIGH_THROUGHPUT_API_GW    :: C++ / FastHTTP / Redis (50K req/sec, zero memory leaks)",
      "",
      "Type 'arch_swarm' to inspect the multi-agent orchestration diagram."
    ]
  },
  eval_metrics: {
    description: "Run automated evaluation metrics suite",
    output: [
      ">> EXECUTING BENCHMARK PROTOCOL [agent-orchestration-improve-agent]:",
      "  [✓] Instruction Fidelity:       98.4% (Target: >95%)",
      "  [✓] Hallucination Rate:         0.2%  (Target: <1%)",
      "  [✓] Tool Selection Accuracy:    99.1% (Target: >98%)",
      "  [✓] Pipeline Deduplication:     99.9% (Verified zero data loss)",
      "  [✓] P95 Response Latency:       64ms  (Target: <100ms)",
      "  EVAL STATUS: ALL CONSTITUTIONAL CRITERIA MET"
    ]
  },
  arch_swarm: {
    description: "Display ASCII diagram of the multi-agent swarm architecture",
    output: [
      "+---------------------------------------------------------------+",
      "|           [Autonomous Ingestion Gateway (FastAPI)]            |",
      "+-------------------------------+-------------------------------+",
      "                                |",
      "               +----------------v---------------+",
      "               |  Supervisor Agent Orchestrator |",
      "               |   (LangGraph State Machine)    |",
      "               +-------+----------------+-------+",
      "                       |                |",
      "         +-------------v----+     +-----v-------------+",
      "         | Extraction Agent |     | Validation Agent  |",
      "         | (Entity Parsing) |     | (Schema & Bounds) |",
      "         +-------------+----+     +-----+-------------+",
      "                       |                |",
      "               +-------v----------------v-------+",
      "               |   Consensus & Attribution Node |",
      "               |  (Snowflake / Postgres Engine) |",
      "               +--------------------------------+"
    ]
  },
  contact: {
    description: "Show contact and secure transmission info",
    output: [
      ">> SECURE CHANNELS:",
      "  DIRECT COMMS:  Reach out via the secure form below.",
      "  GITHUB:        https://github.com/Mobeen-2024",
      "  STATUS:        Open for Strategic Architecture & Growth Advisory roles."
    ]
  }
};

export const EXECUTIVE_ANSWERS = {
  roi: {
    title: "Documented ROI & Revenue Generation",
    thoughtTrace: "Analyzing historical impact across multi-channel attribution and CRM consolidation...",
    response: "Over a 20-year career spanning digital transformation and full-stack systems, Mobeen has unlocked over $2.4M in incremental ARR through proprietary attribution models, optimized customer acquisition cost (CAC) by up to 34%, and eliminated high-risk data silos across marketing and engineering organizations."
  },
  leadership: {
    title: "Cross-Functional Strategic Leadership",
    thoughtTrace: "Synthesizing executive leadership approach across marketing, engineering, and C-suite alignment...",
    response: "Mobeen bridges the critical divide between boardroom ROI imperatives and technical engineering execution. By establishing clear OKRs, data governance protocols, and collaborative cross-disciplinary squads, engineering deliverables directly map to top-line business velocity."
  },
  projects: {
    title: "Flagship Strategic Transformations",
    thoughtTrace: "Retrieving case studies with highest enterprise impact...",
    response: "Key initiatives include: (1) Enterprise CRM Deduplication Engine achieving 99.9% data fidelity across 1.2M client records, (2) Deep Neural Attribution Model predicting customer lifetime churn with 92% accuracy, and (3) Autonomous Multi-Agent Swarm for automated data verification and marketing pipeline routing."
  },
  contact: {
    title: "Initiate Strategic Consultation",
    thoughtTrace: "Configuring communication protocol dispatch...",
    response: "Mobeen is currently available for select advisory roles, technical leadership consultations, and enterprise architecture engagements. Please submit the consultation dispatch below, or connect directly via GitHub."
  }
};

export function processExecutiveQuery(queryText) {
  const normalized = queryText.toLowerCase().trim();
  
  if (!normalized) {
    return {
      title: "Query Error",
      thoughtTrace: "Sanitizing input...",
      response: "Please provide a query regarding strategy, ROI, case studies, or consultations."
    };
  }

  if (normalized.includes("roi") || normalized.includes("revenue") || normalized.includes("track record") || normalized.includes("metric")) {
    return EXECUTIVE_ANSWERS.roi;
  }
  if (normalized.includes("lead") || normalized.includes("team") || normalized.includes("manage") || normalized.includes("culture")) {
    return EXECUTIVE_ANSWERS.leadership;
  }
  if (normalized.includes("case") || normalized.includes("project") || normalized.includes("work") || normalized.includes("story")) {
    return EXECUTIVE_ANSWERS.projects;
  }
  if (normalized.includes("contact") || normalized.includes("book") || normalized.includes("hire") || normalized.includes("consult") || normalized.includes("email")) {
    return EXECUTIVE_ANSWERS.contact;
  }

  // General intelligent synthesis
  return {
    title: "Strategic Overview",
    thoughtTrace: `Processing query: "${queryText.slice(0, 40)}..." through executive knowledge graph`,
    response: `Mobeen brings 20+ years of high-impact leadership at the intersection of business strategy and deep systems architecture. For specific insights, explore the project case studies below, run a system diagnostic, or use one of the quick inquiry options.`
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

  return {
    type: "error",
    command: rawCmd,
    lines: [
      `zsh: command not found: ${rawCmd}`,
      "Type 'help' to see valid system commands."
    ]
  };
}
