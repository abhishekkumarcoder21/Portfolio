export type Project = {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  description: string;
  problem: string;
  approach: string;
  techStack: string[];
  primaryLanguage: string;
  githubUrl: string;
  liveUrl: string | null;
  highlights: string[];
  architectureNodes: ArchitectureNode[];
  demoSteps: DemoStep[];
  tradeoffs: string[];
  metrics: ProjectMetric[];
};

export type ArchitectureNode = {
  id: string;
  label: string;
  type: "input" | "process" | "storage" | "output" | "error";
};

export type DemoStep = {
  label: string;
  status: "pending" | "running" | "success" | "error" | "retry";
  duration: number; // ms to show this step
};

export type ProjectMetric = {
  label: string;
  value: string;
  verified: boolean;
};

export const projects: Project[] = [
  {
    id: "distributed-workflow-engine",
    index: "01",
    title: "Distributed Workflow Engine",
    subtitle: "Fault-tolerant job scheduling with DAG orchestration",
    description:
      "A production-grade distributed job scheduler with priority queues, concurrent worker pools, at-least-once delivery, and DAG workflow orchestration — built from scratch in Go.",
    problem:
      "Modern applications need reliable background job processing that handles failures gracefully. Off-the-shelf solutions often lack fine-grained control over scheduling semantics, retry policies, and dependency-aware execution.",
    approach:
      "Built a custom job scheduler in Go with Redis for priority dispatch (using atomic Lua scripts with 6:3:1 weighted scheduling) and PostgreSQL for durable state transitions. DAG workflows use Kahn's algorithm for cycle detection and dependency-aware parallel execution.",
    techStack: ["Go", "PostgreSQL", "Redis", "Next.js", "Docker", "Prometheus", "GitHub Actions"],
    primaryLanguage: "Go",
    githubUrl: "https://github.com/abhishekkumarcoder21/Distributed-Workflow-Engine",
    liveUrl: null,
    highlights: [
      "Priority queues with atomic Lua scripts and 6:3:1 weighted scheduling",
      "DAG orchestration using Kahn's algorithm for cycle detection",
      "Dependency-aware parallel task scheduling",
      "Cascading failure handling and workflow-level idempotency",
      "Visibility timeouts, exponential backoff, and dead-letter queues",
      "PostgreSQL atomic state transitions for job deduplication",
      "Race/chaos testing with verified zero duplicate claims across 15 workers",
    ],
    architectureNodes: [
      { id: "producer", label: "Producer", type: "input" },
      { id: "priority-queue", label: "Priority Queue", type: "process" },
      { id: "dispatcher", label: "Dispatcher", type: "process" },
      { id: "worker-pool", label: "Worker Pool", type: "process" },
      { id: "postgres", label: "PostgreSQL", type: "storage" },
      { id: "retry", label: "Retry / Backoff", type: "error" },
      { id: "dlq", label: "Dead Letter Queue", type: "error" },
      { id: "completion", label: "Completion", type: "output" },
    ],
    demoSteps: [
      { label: "JOB CREATED", status: "success", duration: 400 },
      { label: "QUEUED (PRIORITY: HIGH)", status: "success", duration: 300 },
      { label: "DISPATCHED → WORKER 03", status: "running", duration: 600 },
      { label: "WORKER 03 PROCESSING", status: "running", duration: 800 },
      { label: "WORKER 03 FAILURE", status: "error", duration: 500 },
      { label: "VISIBILITY TIMEOUT", status: "pending", duration: 400 },
      { label: "RETRY (ATTEMPT 2/3)", status: "retry", duration: 300 },
      { label: "DISPATCHED → WORKER 07", status: "running", duration: 500 },
      { label: "WORKER 07 PROCESSING", status: "running", duration: 700 },
      { label: "JOB COMPLETED", status: "success", duration: 400 },
    ],
    tradeoffs: [
      "At-least-once delivery over exactly-once — idempotency handles duplicates at the application level",
      "Redis for hot dispatch, PostgreSQL for durability — trades single-store simplicity for performance",
      "Weighted scheduling (6:3:1) over strict priority — prevents starvation of lower-priority jobs",
    ],
    metrics: [
      { label: "Zero duplicate claims across 15 workers", value: "Verified", verified: true },
      { label: "Orphan job recovery", value: "<100ms", verified: true },
    ],
  },
  {
    id: "codelens-ai-code-review",
    index: "02",
    title: "CodeLens",
    subtitle: "AI-powered code review platform",
    description:
      "A self-hosted GitHub AI code review platform that analyzes pull request diffs using a hybrid AST + semantic retrieval + LLM pipeline for automated security scanning, bug detection, and contextual review.",
    problem:
      "Manual code review is slow and inconsistent. Existing AI tools often lack context about the codebase, produce noisy results, and don't integrate deeply with GitHub's review workflow.",
    approach:
      "Built a hybrid pipeline: deterministic rules (AST analysis + regex) catch known patterns, while semantic retrieval provides codebase context to GPT-4o for nuanced analysis. 8K-token budgeting ensures cost control. HMAC-SHA256 webhook verification, prompt-injection isolation, and encrypted credentials ensure security.",
    techStack: ["Python", "FastAPI", "Next.js", "React", "PostgreSQL", "Redis", "OpenAI GPT-4o"],
    primaryLanguage: "Python",
    githubUrl: "https://github.com/abhishekkumarcoder21/CodeLens---AI-Code-Review-Platform",
    liveUrl: null,
    highlights: [
      "Hybrid AST + regex + semantic retrieval + LLM analysis pipeline",
      "Dependency-aware context resolution with 8K-token budgeting",
      "Deterministic security, bug, and correctness rules with confidence filtering",
      "Redis queues with crash recovery, retries, backoff, and DLQ",
      "HMAC-SHA256 webhook verification and prompt-injection isolation",
      "Encrypted credentials and GitHub API fallbacks",
      "Review telemetry and analytics dashboard",
    ],
    architectureNodes: [
      { id: "github-pr", label: "GitHub PR", type: "input" },
      { id: "webhook", label: "Webhook Handler", type: "process" },
      { id: "diff-parser", label: "Diff Extraction", type: "process" },
      { id: "ast-analysis", label: "AST Analysis", type: "process" },
      { id: "context-retrieval", label: "Context Retrieval", type: "process" },
      { id: "llm", label: "LLM Analysis", type: "process" },
      { id: "filter", label: "Severity Filter", type: "process" },
      { id: "review", label: "Review Submission", type: "output" },
    ],
    demoSteps: [
      { label: "PULL REQUEST OPENED", status: "success", duration: 400 },
      { label: "WEBHOOK VERIFIED (HMAC-SHA256)", status: "success", duration: 300 },
      { label: "DIFF EXTRACTED (12 FILES)", status: "success", duration: 500 },
      { label: "AST PARSING", status: "running", duration: 600 },
      { label: "DETERMINISTIC RULES: 3 ISSUES", status: "success", duration: 400 },
      { label: "CONTEXT RETRIEVAL (8K BUDGET)", status: "running", duration: 500 },
      { label: "LLM ANALYSIS (GPT-4o)", status: "running", duration: 800 },
      { label: "CONFIDENCE FILTERING", status: "running", duration: 300 },
      { label: "REVIEW SUBMITTED (5 COMMENTS)", status: "success", duration: 400 },
    ],
    tradeoffs: [
      "Hybrid approach over pure LLM — deterministic rules are fast and reliable for known patterns",
      "8K-token budget over full context — balances cost with analysis quality",
      "Asynchronous processing over synchronous — handles webhook timeouts gracefully",
    ],
    metrics: [],
  },
  {
    id: "syncforge",
    index: "03",
    title: "SyncForge",
    subtitle: "Real-time collaborative document platform",
    description:
      "A real-time collaborative document platform with conflict-free state synchronization using a custom RGA CRDT with Lamport timestamps, supporting offline-first editing and deterministic convergence.",
    problem:
      "Building real-time collaboration requires solving conflict resolution without a central authority locking mechanism. Traditional OT (Operational Transformation) is complex to implement correctly at scale.",
    approach:
      "Implemented a custom RGA (Replicated Growable Array) CRDT with Lamport timestamps for conflict-free synchronization. Combined with WebSocket-based real-time transport, Redis Pub/Sub for presence, and batched persistence to PostgreSQL.",
    techStack: ["Go", "Next.js", "React", "PostgreSQL", "Redis", "WebSockets", "Docker", "Prometheus"],
    primaryLanguage: "Go",
    githubUrl: "https://github.com/abhishekkumarcoder21/Syncforge---Real-Time-Collaborative-Document-Platform",
    liveUrl: null,
    highlights: [
      "Custom RGA CRDT with Lamport timestamps for conflict-free synchronization",
      "Offline-first editing with optimistic UI updates",
      "Redis Pub/Sub for presence awareness",
      "Batched persistence to PostgreSQL",
      "JWT authentication and Prometheus observability",
      "Validated convergence across 15+ tests",
    ],
    architectureNodes: [
      { id: "client-a", label: "Client A", type: "input" },
      { id: "client-b", label: "Client B", type: "input" },
      { id: "websocket", label: "WebSocket Server", type: "process" },
      { id: "crdt", label: "RGA CRDT Engine", type: "process" },
      { id: "presence", label: "Redis Pub/Sub", type: "process" },
      { id: "persistence", label: "PostgreSQL", type: "storage" },
      { id: "sync", label: "Converged State", type: "output" },
    ],
    demoSteps: [
      { label: "CLIENT A CONNECTED", status: "success", duration: 300 },
      { label: "CLIENT B CONNECTED", status: "success", duration: 300 },
      { label: "A: INSERT 'Hello'", status: "running", duration: 400 },
      { label: "B: INSERT 'World' (CONCURRENT)", status: "running", duration: 400 },
      { label: "CRDT MERGE (LAMPORT CLOCK)", status: "running", duration: 500 },
      { label: "CONFLICT RESOLVED", status: "success", duration: 300 },
      { label: "STATE CONVERGED: 'Hello World'", status: "success", duration: 400 },
    ],
    tradeoffs: [
      "CRDT over OT — simpler correctness guarantees, trades some bandwidth for convergence",
      "Batched persistence over write-through — lower latency at the cost of small data loss window",
      "Lamport timestamps over vector clocks — sufficient for document editing, simpler implementation",
    ],
    metrics: [
      { label: "Throughput under 15 clients", value: "62K+ ops/sec", verified: true },
      { label: "Convergence tests passed", value: "15+", verified: true },
    ],
  },
];
