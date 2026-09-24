"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/data/projects";

type Props = {
  project: Project;
};

export default function ProjectDemo({ project }: Props) {
  const [isRunning, setIsRunning] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState(-1);
  const [logs, setLogs] = useState<string[]>([]);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const steps = project.demoSteps;

  const startSimulation = () => {
    if (isRunning) return;
    setIsRunning(true);
    setCurrentStepIndex(0);
    setLogs([`[00:00.000] SIMULATION INITIALIZED: ${project.title.toUpperCase()}`]);
  };

  const resetSimulation = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setIsRunning(false);
    setCurrentStepIndex(-1);
    setLogs([]);
  };

  useEffect(() => {
    if (!isRunning || currentStepIndex < 0) return;

    if (currentStepIndex >= steps.length) {
      setIsRunning(false);
      setLogs((prev) => [...prev, `[STATUS: READY] Process cycle completed.`]);
      return;
    }

    const currentStep = steps[currentStepIndex];
    const timestamp = (currentStepIndex * 0.42).toFixed(3);
    setLogs((prev) => [
      ...prev,
      `[00:0${timestamp}] ${currentStep.status.toUpperCase()}: ${currentStep.label}`,
    ]);

    timerRef.current = setTimeout(() => {
      setCurrentStepIndex((prev) => prev + 1);
    }, currentStep.duration + 200);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [isRunning, currentStepIndex, steps]);

  return (
    <div className="bg-ink-light border border-border rounded-sm overflow-hidden">
      {/* Simulation Header */}
      <div className="flex flex-wrap items-center justify-between px-4 py-3 border-b border-border bg-ink/60 gap-3">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="font-mono text-xs tracking-wider uppercase text-text-primary font-medium">
            Live Execution Trace
          </span>
          <span className="text-border-light">|</span>
          <span className="font-mono text-[11px] text-text-muted">
            Deterministic Engine Simulator
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={resetSimulation}
            disabled={!isRunning && currentStepIndex === -1}
            className="px-2.5 py-1 text-xs font-mono border border-border text-text-muted hover:text-text-primary hover:border-border-light disabled:opacity-30 disabled:cursor-not-allowed transition-colors rounded-sm"
          >
            RESET
          </button>
          <button
            onClick={startSimulation}
            disabled={isRunning}
            className={`px-3 py-1 text-xs font-mono font-medium rounded-sm flex items-center gap-1.5 transition-all ${
              isRunning
                ? "bg-accent/20 text-accent border border-accent/40 cursor-wait"
                : "bg-accent text-ink hover:bg-accent/90"
            }`}
          >
            {isRunning ? (
              <>
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
                EXECUTING...
              </>
            ) : (
              <>▶ RUN SIMULATION</>
            )}
          </button>
        </div>
      </div>

      {/* Visual Pipeline Stages */}
      <div className="p-4 sm:p-5 border-b border-border bg-ink/30">
        <div className="text-[11px] font-mono text-text-muted mb-3 uppercase tracking-wider flex items-center justify-between">
          <span>System Nodes & Transition Flow</span>
          <span className="text-accent/80">
            {currentStepIndex >= 0 && currentStepIndex < steps.length
              ? `Step ${currentStepIndex + 1}/${steps.length}`
              : isRunning
              ? "Completed"
              : "Idle — Ready to Run"}
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-2">
          {project.architectureNodes.map((node, idx) => {
            const isNodeActive =
              currentStepIndex >= 0 &&
              (Math.floor((currentStepIndex / steps.length) * project.architectureNodes.length) === idx ||
                (currentStepIndex >= steps.length && idx === project.architectureNodes.length - 1));

            return (
              <div
                key={node.id}
                className={`p-2.5 rounded-sm border transition-all duration-300 ${
                  isNodeActive
                    ? "bg-accent/10 border-accent text-text-primary shadow-[0_0_15px_rgba(0,240,255,0.2)]"
                    : "bg-ink border-border text-text-muted"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-mono text-[9px] text-text-muted">
                    N0{idx + 1}
                  </span>
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      isNodeActive ? "bg-accent" : "bg-border-light"
                    }`}
                  />
                </div>
                <div className="font-mono text-xs font-semibold truncate text-text-primary">
                  {node.label}
                </div>
                <div className="text-[10px] text-text-muted capitalize">
                  {node.type}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Execution Terminal Output */}
      <div className="p-4 bg-ink font-mono text-xs max-h-44 overflow-y-auto space-y-1 scrollbar-thin">
        {logs.length === 0 ? (
          <div className="text-text-muted/60 italic flex items-center justify-between py-2">
            <span>// Click "RUN SIMULATION" to trigger execution stream...</span>
            <span className="text-[10px] text-border-light tracking-widest uppercase">
              STANDBY
            </span>
          </div>
        ) : (
          logs.map((log, i) => {
            const isError = log.includes("ERROR") || log.includes("FAILURE");
            const isSuccess = log.includes("SUCCESS") || log.includes("COMPLETED");
            const isRetry = log.includes("RETRY");

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                className={`flex items-start gap-2 ${
                  isError
                    ? "text-error"
                    : isSuccess
                    ? "text-accent"
                    : isRetry
                    ? "text-warning"
                    : "text-text-secondary"
                }`}
              >
                <span className="select-none text-text-muted">›</span>
                <span className="break-all">{log}</span>
              </motion.div>
            );
          })
        )}
      </div>

      {/* Project Verified Benchmarks / Metrics */}
      {project.metrics.length > 0 && (
        <div className="px-4 py-2.5 bg-ink-lighter/40 border-t border-border flex flex-wrap items-center gap-4 text-xs font-mono">
          <span className="text-text-muted text-[11px] uppercase tracking-wider">
            Verified Benchmarks:
          </span>
          {project.metrics.map((metric, idx) => (
            <div key={idx} className="flex items-center gap-1.5">
              <span className="text-text-secondary">{metric.label}:</span>
              <span className="text-accent font-semibold">{metric.value}</span>
              <span className="text-success text-[10px]" title="Empirically verified in tests">
                ✓
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
