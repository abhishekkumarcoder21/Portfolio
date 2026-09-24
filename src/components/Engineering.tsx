"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { FadeIn } from "./Animations";

type Pattern = {
  id: string;
  category: string;
  title: string;
  tagline: string;
  problem: string;
  constraints: string[];
  architecturalChoice: string;
  tradeoffAccepted: string;
  failureMitigation: string;
  projectOrigin: string;
};

const patterns: Pattern[] = [
  {
    id: "concurrency",
    category: "CONCURRENCY & ATOMICITY",
    title: "Atomic Redis Dispatch vs Distributed Locks",
    tagline: "Achieving sub-millisecond priority scheduling with zero race conditions",
    problem:
      "Multiple distributed workers concurrently poll for jobs. Using standard distributed locks introduces high lock contention, latency spikes, and deadlocks if a worker dies while holding a lock.",
    constraints: [
      "15+ concurrent workers polling continuously",
      "Strict weighted priority scheduling (6:3:1 ratio)",
      "Zero double-processing or duplicate claims",
    ],
    architecturalChoice:
      "Implemented atomic Redis Lua scripts that inspect priority queues, perform weight-ratio calculations, and dequeue jobs in a single atomic transaction on the Redis server without distributed locking overhead.",
    tradeoffAccepted:
      "Lua scripts execute single-threaded in Redis, meaning slow Lua logic would block the Redis server. Addressed by strictly keeping scripts O(1) in time complexity.",
    failureMitigation:
      "Visibility timeout watchdog detects unresponsive workers, reclaiming unacknowledged jobs in <100ms.",
    projectOrigin: "Distributed Workflow Engine",
  },
  {
    id: "fault-tolerance",
    category: "DISTRIBUTED CONSENSUS & FAULT TOLERANCE",
    title: "At-Least-Once Delivery with Idempotency Keys",
    tagline: "Eliminating the impossible promise of distributed exactly-once delivery",
    problem:
      "In real-world networks, packet loss, worker crashes, and network partitions make guaranteed exactly-once delivery impossible without crippling performance penalties (e.g. 2PC).",
    constraints: [
      "Worker nodes can crash mid-execution at any time",
      "State transitions must never enter an illegal orphan state",
      "Retrying must never corrupt or duplicate downstream actions",
    ],
    architecturalChoice:
      "Embraced at-least-once message delivery backed by deterministic idempotency keys and PostgreSQL atomic conditional state transitions (`UPDATE ... WHERE status = 'QUEUED'`).",
    tradeoffAccepted:
      "Application logic must be inherently idempotent. Non-idempotent legacy external APIs require transactional outbox or token-based deduplication.",
    failureMitigation:
      "Dead Letter Queue (DLQ) isolates jobs exceeding maximum retry budgets (exponential backoff) with Prometheus alert hooks.",
    projectOrigin: "Distributed Workflow Engine",
  },
  {
    id: "crdt",
    category: "STATE SYNCHRONIZATION",
    title: "RGA CRDT vs Operational Transformation",
    tagline: "Conflict-free eventual consistency without central coordinator bottlenecks",
    problem:
      "Collaborative document editors need to synchronize concurrent character insertions and deletions across distributed clients without losing characters or requiring synchronous central locks.",
    constraints: [
      "Offline-first local editing with zero typing latency",
      "Deterministic convergence regardless of packet arrival order",
      "Sub-millisecond merge performance under high concurrent load",
    ],
    architecturalChoice:
      "Engineered a Replicated Growable Array (RGA) Conflict-Free Replicated Data Type with Lamport logical clocks. Every character insertion generates a globally unique ID (client_id, sequence_number).",
    tradeoffAccepted:
      "CRDTs require tombstones for deleted characters, increasing memory overhead compared to OT. Addressed via periodic state garbage collection and snapshot persistence.",
    failureMitigation:
      "WebSocket reconnection protocol transmits missing Lamport clock vector delta, ensuring immediate convergence upon re-establishing connection.",
    projectOrigin: "SyncForge",
  },
  {
    id: "hybrid-ai",
    category: "AI INFRASTRUCTURE",
    title: "Deterministic AST Rules Before LLM Inference",
    tagline: "Slashing LLM API costs by 70% while improving review correctness",
    problem:
      "Relying solely on LLMs for code review is slow, expensive, non-deterministic, and prone to hallucinations on basic syntax and structural flaws.",
    constraints: [
      "8,000 token context window ceiling per PR chunk",
      "Predictable detection of common security anti-patterns",
      "GitHub webhook response SLA requirements",
    ],
    architecturalChoice:
      "Implemented a two-tier hybrid review pipeline: deterministic Abstract Syntax Tree (AST) parsing + regex scan first. Only complex semantic relationships and nuanced contextual diffs are forwarded to GPT-4o.",
    tradeoffAccepted:
      "AST parsers require language-specific grammars. Non-supported languages fall back to regex scanning and prompt-budgeted context.",
    failureMitigation:
      "Strict HMAC-SHA256 webhook validation, prompt-injection sanitization delimiters, and fallback to cached reviews if the OpenAI API encounters rate limits.",
    projectOrigin: "CodeLens",
  },
];

export default function Engineering() {
  const [selectedPattern, setSelectedPattern] = useState<Pattern>(patterns[0]);

  return (
    <section id="engineering" className="py-24 md:py-32 border-t border-border bg-ink/40">
      <div className="section-container">
        <SectionHeading
          label="02 / ARCHITECTURAL THINKING"
          title="How I Approach Engineering Problems"
          subtitle="Engineering is the disciplined management of trade-offs. Here is how I think through concurrency, fault tolerance, consistency, and AI pipelines."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Navigation Column */}
          <div className="lg:col-span-4 space-y-2">
            <div className="text-xs font-mono text-text-muted mb-3 uppercase tracking-wider">
              Select Architecture Case Study
            </div>
            {patterns.map((pattern) => {
              const isSelected = selectedPattern.id === pattern.id;
              return (
                <button
                  key={pattern.id}
                  onClick={() => setSelectedPattern(pattern)}
                  className={`w-full text-left p-4 rounded-sm border transition-all duration-200 ${
                    isSelected
                      ? "bg-ink-light border-accent text-text-primary shadow-[0_0_15px_rgba(0,240,255,0.12)]"
                      : "bg-ink/50 border-border text-text-muted hover:border-border-light hover:text-text-secondary"
                  }`}
                >
                  <div className="text-[10px] font-mono text-accent mb-1 tracking-wider">
                    {pattern.category}
                  </div>
                  <div className="font-display font-semibold text-sm mb-1 text-text-primary">
                    {pattern.title}
                  </div>
                  <div className="text-xs text-text-muted line-clamp-1">
                    From: {pattern.projectOrigin}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detailed Decision Matrix Column */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedPattern.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="bg-ink-light border border-border rounded-sm p-6 md:p-8 space-y-6"
              >
                {/* Header */}
                <div className="border-b border-border pb-5">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="font-mono text-xs text-accent uppercase tracking-widest">
                      {selectedPattern.category}
                    </span>
                    <span className="font-mono text-xs px-2 py-0.5 bg-ink border border-border text-text-muted rounded-sm">
                      {selectedPattern.projectOrigin}
                    </span>
                  </div>
                  <h3 className="heading-lg text-2xl md:text-3xl text-text-primary mb-2">
                    {selectedPattern.title}
                  </h3>
                  <p className="text-sm font-mono text-text-secondary">
                    {selectedPattern.tagline}
                  </p>
                </div>

                {/* Problem & Constraints */}
                <div className="space-y-4">
                  <div>
                    <h4 className="font-mono text-xs text-text-muted uppercase tracking-wider mb-2">
                      01 / The Core Challenge
                    </h4>
                    <p className="text-sm text-text-secondary leading-relaxed bg-ink p-4 border border-border rounded-sm">
                      {selectedPattern.problem}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-mono text-xs text-text-muted uppercase tracking-wider mb-2">
                      02 / System Constraints
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {selectedPattern.constraints.map((c, i) => (
                        <div
                          key={i}
                          className="p-3 bg-ink border border-border rounded-sm text-xs text-text-secondary font-mono"
                        >
                          <span className="text-accent block mb-1">C0{i + 1}</span>
                          {c}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Architectural Decision & Trade-offs */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-ink border border-accent/30 rounded-sm">
                    <h4 className="font-mono text-xs text-accent uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <span>✓</span> Architectural Decision
                    </h4>
                    <p className="text-xs text-text-secondary leading-relaxed">
                      {selectedPattern.architecturalChoice}
                    </p>
                  </div>

                  <div className="p-4 bg-ink border border-warning/30 rounded-sm">
                    <h4 className="font-mono text-xs text-warning uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <span>⇄</span> Accepted Trade-Off
                    </h4>
                    <p className="text-xs text-text-secondary leading-relaxed">
                      {selectedPattern.tradeoffAccepted}
                    </p>
                  </div>
                </div>

                {/* Failure Mitigation */}
                <div className="p-4 bg-ink/80 border border-border rounded-sm">
                  <h4 className="font-mono text-xs text-text-muted uppercase tracking-wider mb-1">
                    03 / Failure Mode & Recovery Strategy
                  </h4>
                  <p className="text-xs text-text-secondary leading-relaxed font-mono">
                    {selectedPattern.failureMitigation}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
