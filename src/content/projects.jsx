// src/content/projects.js

export const PROJECTS = [
  {
    id: 1,
    category: "Data Engineering & Growth",
    executive: {
      title: "Revenue Growth Architecture",
      tagline: "Marketing ROI Optimization",
      description: "Transformed fragmented customer data across disparate ad networks into a unified growth engine, unlocking sustainable scale and boardroom confidence.",
      impact: "+$2.4M ARR",
      techStack: ["HubSpot", "Google Ads", "Salesforce", "Snowflake"],
      keyMetrics: [
        { label: "Revenue Lift", value: "+40% ARR" },
        { label: "CAC Reduction", value: "-28%" },
        { label: "Audience Matched", value: "98.4%" }
      ],
      strategicTakeaway: "Eliminating cross-channel data silos enabled predictive ad bidding and maximized capital allocation towards high-intent segments.",
      businessChallenges: "Multiple marketing teams were tracking duplicate user conversions, inflating reported ROI and resulting in misdirected media spend."
    },
    architect: {
      title: "ETL_PIPELINE_STABLE",
      tagline: "Python / SQL / Snowflake",
      description: "Engineered a multi-threaded Python ETL pipeline to ingest, sanitize, and deduplicate 1.2M CRM records with cryptographic hashing and zero data loss.",
      impact: "O(n) Deduplication",
      techStack: ["Python 3.12", "PostgreSQL", "Pandas", "Snowflake", "Docker"],
      keyMetrics: [
        { label: "Throughput", value: "1.2M Rec/Batch" },
        { label: "Data Integrity", value: "99.99%" },
        { label: "Run Latency", value: "< 3.8 mins" }
      ],
      architectureDetails: "Distributed batch worker using SHA-256 composite row hashing, Polars streaming chunks, and atomic Snowflake MERGE statements.",
      pipelineSteps: [
        "Raw Webhook Ingestion & S3 Staging",
        "Polars-powered Memory-Mapped Parsing",
        "Deterministic Entity Deduplication",
        "Atomic Upsert via Snowflake MERGE"
      ],
      complexity: "Time: O(n) | Space: O(chunk_size)"
    }
  },
  {
    id: 2,
    category: "Deep Learning & Churn Analytics",
    executive: {
      title: "Strategic Attribution & Retention",
      tagline: "Board-Room Customer Lifetime Clarity",
      description: "Implemented a multi-touch attribution and neural churn forecasting engine that provided 100% transparency into customer retention and channel profitability.",
      impact: "100% Attribution",
      techStack: ["GA4", "Tableau", "Segment", "Python"],
      keyMetrics: [
        { label: "Attribution Accuracy", value: "100%" },
        { label: "Churn Prediction Lead", value: "45 Days" },
        { label: "Saved Subscriptions", value: "$680K/yr" }
      ],
      strategicTakeaway: "Leadership transitioned from reactive churn triage to proactive high-value customer retention interventions.",
      businessChallenges: "Last-click attribution models under-credited brand nurture touchpoints, distorting real acquisition unit economics."
    },
    architect: {
      title: "NEURAL_ATTRIBUTION_v2",
      tagline: "LSTM / Scikit-Learn / TensorFlow",
      description: "Developed a Long Short-Term Memory (LSTM) recurrent neural network with temporal attention to model multi-channel conversion likelihood and churn risk.",
      impact: "92% Accuracy",
      techStack: ["TensorFlow", "Scikit-Learn", "NumPy", "Keras", "FastAPI"],
      keyMetrics: [
        { label: "Validation Accuracy", value: "92.3%" },
        { label: "Inference Latency", value: "14ms (P99)" },
        { label: "ROC-AUC Score", value: "0.94" }
      ],
      architectureDetails: "Sequential bi-directional LSTM with custom attention layers, tracking user interaction events across continuous 90-day sliding windows.",
      pipelineSteps: [
        "Feature Engineering & Recency-Frequency Scaling",
        "Sliding Temporal Window Generation",
        "LSTM Inference & Churn Score Calculation",
        "FastAPI Asynchronous Scoring Webhook"
      ],
      complexity: "Model Parameters: 1.4M | Latency: 14ms"
    }
  },
  {
    id: 3,
    category: "Autonomous AI & Agent Orchestration",
    executive: {
      title: "Autonomous Workflow Intelligence",
      tagline: "Agentic Automation & Operational Velocity",
      description: "Designed an enterprise multi-agent swarm that automates competitor intelligence, marketing collateral synthesis, and executive briefing delivery.",
      impact: "75% Speed Increase",
      techStack: ["OpenAI", "LangChain", "Next.js", "Redis"],
      keyMetrics: [
        { label: "Cycle Time Cut", value: "75%" },
        { label: "Human Review Pass", value: "96.4%" },
        { label: "Weekly Hours Saved", value: "120+ hrs" }
      ],
      strategicTakeaway: "Empowered lean strategic squads to produce research and campaign materials with 4x output capacity without expanding headcount.",
      businessChallenges: "Competitive research and campaign copy iteration consumed dozens of senior strategist hours weekly with inconsistent quality."
    },
    architect: {
      title: "AGENT_SWARM_ORCHESTRATOR",
      tagline: "LangGraph / Python / Redis / Tool Routing",
      description: "Architected a directed acyclic graph (DAG) multi-agent system with supervisor routing, constitutional self-critique loops, and fault-tolerant state persistence.",
      impact: "Sub-second Tool Routing",
      techStack: ["LangGraph", "Python 3.12", "Redis", "ChromaDB", "FastAPI"],
      keyMetrics: [
        { label: "Agent Workers", value: "4 Autonomous Nodes" },
        { label: "Self-Correction Rate", value: "88% on first pass" },
        { label: "State Checkpoint Latency", value: "8ms" }
      ],
      architectureDetails: "LangGraph state machine with Supervisor agent dynamically delegating tasks to Research, Synthesis, Code Review, and Format Validation workers.",
      pipelineSteps: [
        "Supervisor Intent Parsing & Task Decomposition",
        "Parallel Worker Tool Execution & Scraping",
        "Constitutional AI Critique & Reflection Loop",
        "Redis State Checkpoint & Output Formatting"
      ],
      complexity: "Graph Depth: 5 Stages | Checkpoints: Redis Persistence"
    }
  },
  {
    id: 4,
    category: "Streaming Data & Real-Time Sync",
    executive: {
      title: "Real-Time Data Modernization",
      tagline: "Immediate Decision Intelligence",
      description: "Replaced legacy batch reporting with real-time operational data streaming, enabling executive leaders to make intraday revenue adjustments.",
      impact: "< 1s Analytics Lag",
      techStack: ["Databricks", "PowerBI", "AWS", "Segment"],
      keyMetrics: [
        { label: "Data Freshness", value: "Instant (<1s)" },
        { label: "Reporting Outages", value: "0 Incidents" },
        { label: "Ad Spend Agility", value: "Intraday Real-time" }
      ],
      strategicTakeaway: "Allowed marketing and finance to detect margin shifts and ad fatigue within minutes rather than at end-of-month reconciliation.",
      businessChallenges: "24-hour batch delays masked morning ad anomalies, causing budget hemorrhage on underperforming creatives."
    },
    architect: {
      title: "REALTIME_CDC_DATA_MESH",
      tagline: "Apache Kafka / Debezium / Postgres",
      description: "Engineered change-data-capture (CDC) pipeline streaming transaction events from relational datastores to analytical data lakes with sub-second replication.",
      impact: "Sub-100ms Latency",
      techStack: ["Apache Kafka", "Debezium", "PostgreSQL", "Apache Flink", "S3"],
      keyMetrics: [
        { label: "Sync Latency", value: "< 85ms" },
        { label: "Peak Message Volume", value: "45K msgs/sec" },
        { label: "Replication Lag", value: "0 Seconds" }
      ],
      architectureDetails: "Debezium WAL reader streaming Postgres events into partitioned Kafka topics, processed via Flink streaming aggregations into Iceberg tables.",
      pipelineSteps: [
        "PostgreSQL WAL Log Ingestion via Debezium",
        "Kafka Topic Partitioning with Keyed Hashes",
        "Flink Windowed Aggregation & Enrichment",
        "Materialized Views in Analytical Cache"
      ],
      complexity: "Throughput: 45K events/s | At-Least-Once Guarantees"
    }
  },
  {
    id: 5,
    category: "High-Performance Systems",
    executive: {
      title: "Enterprise Core Infrastructure",
      tagline: "Zero-Downtime Reliability",
      description: "Spearheaded the ground-up re-architecture of mission-critical customer-facing infrastructure, achieving 99.999% SLA availability during high-traffic flash surges.",
      impact: "99.999% Availability",
      techStack: ["Kubernetes", "Cloudflare", "AWS", "Datadog"],
      keyMetrics: [
        { label: "Uptime SLA", value: "99.999%" },
        { label: "Traffic Capacity", value: "10x Peak Load" },
        { label: "Infrastructure Cost", value: "-35%" }
      ],
      strategicTakeaway: "Unshakable platform stability protected brand reputation during marquee product launches and investor roadshows.",
      businessChallenges: "Legacy monolithic application suffered cascade failures during viral product drops, damaging user trust and enterprise sales."
    },
    architect: {
      title: "HIGH_THROUGHPUT_API_GW",
      tagline: "C++20 / Asynchronous I/O / Redis",
      description: "Constructed an ultra-low-latency event gateway and rate-limiting proxy in C++20 with epoll-driven non-blocking sockets and thread pool concurrency.",
      impact: "50K req/sec (P99 < 4ms)",
      techStack: ["C++20", "Redis", "Linux epoll", "Docker", "Prometheus"],
      keyMetrics: [
        { label: "Throughput", value: "52,000 req/sec" },
        { label: "Memory Footprint", value: "< 42MB RSS" },
        { label: "P99 Response Time", value: "3.8ms" }
      ],
      architectureDetails: "Zero-copy HTTP parsing with SIMD instructions, ring-buffer ring queues, and lock-free token bucket rate limiting against Redis clusters.",
      pipelineSteps: [
        "Linux epoll Asynchronous Event Loop",
        "Lock-Free Token Bucket Rate Validation",
        "SIMD-Accelerated Request Header Parsing",
        "Zero-Copy Proxy Forwarding to Upstream"
      ],
      complexity: "Zero-Copy SIMD | RSS: 42MB | 52K RPS"
    }
  }
];