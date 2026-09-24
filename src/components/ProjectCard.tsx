"use client";

import { useState } from "react";
import { Project } from "@/data/projects";
import ProjectDemo from "./ProjectDemo";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  const [activeTab, setActiveTab] = useState<"architecture" | "highlights" | "tradeoffs">("architecture");

  return (
    <article className="border border-border bg-ink-light rounded-sm overflow-hidden transition-all duration-300 hover:border-border-light group">
      {/* Card Header */}
      <div className="p-6 md:p-8 border-b border-border bg-gradient-to-r from-ink-lighter/30 via-transparent to-transparent">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs px-2 py-0.5 rounded-sm bg-accent/10 border border-accent/30 text-accent font-semibold">
              PROJECT {project.index}
            </span>
            <span className="font-mono text-xs text-text-muted">
              {project.primaryLanguage}
            </span>
          </div>

          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono border border-border text-text-primary hover:border-accent hover:text-accent transition-colors rounded-sm"
                aria-label={`View ${project.title} on GitHub`}
              >
                <span>source code</span>
                <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor">
                  <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </a>
            )}
          </div>
        </div>

        <h3 className="heading-lg text-2xl md:text-3xl text-text-primary mb-2">
          {project.title}
        </h3>
        <p className="text-accent text-sm md:text-base font-mono mb-4">
          {project.subtitle}
        </p>
        <p className="text-text-secondary text-sm md:text-base leading-relaxed max-w-3xl">
          {project.description}
        </p>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5 mt-5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-xs font-mono bg-ink border border-border text-text-secondary rounded-sm hover:border-border-light transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Interactive Tabs */}
      <div className="border-b border-border bg-ink/70 px-6 md:px-8 flex gap-6">
        <button
          onClick={() => setActiveTab("architecture")}
          className={`py-3 text-xs font-mono uppercase tracking-wider relative transition-colors ${
            activeTab === "architecture"
              ? "text-accent font-semibold"
              : "text-text-muted hover:text-text-secondary"
          }`}
        >
          01. Interactive Simulation & Architecture
          {activeTab === "architecture" && (
            <motion.div
              layoutId={`active-tab-${project.id}`}
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
            />
          )}
        </button>

        <button
          onClick={() => setActiveTab("highlights")}
          className={`py-3 text-xs font-mono uppercase tracking-wider relative transition-colors ${
            activeTab === "highlights"
              ? "text-accent font-semibold"
              : "text-text-muted hover:text-text-secondary"
          }`}
        >
          02. Engineering Implementation
          {activeTab === "highlights" && (
            <motion.div
              layoutId={`active-tab-${project.id}`}
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
            />
          )}
        </button>

        <button
          onClick={() => setActiveTab("tradeoffs")}
          className={`py-3 text-xs font-mono uppercase tracking-wider relative transition-colors ${
            activeTab === "tradeoffs"
              ? "text-accent font-semibold"
              : "text-text-muted hover:text-text-secondary"
          }`}
        >
          03. Architectural Trade-offs
          {activeTab === "tradeoffs" && (
            <motion.div
              layoutId={`active-tab-${project.id}`}
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
            />
          )}
        </button>
      </div>

      {/* Tab Content */}
      <div className="p-6 md:p-8">
        <AnimatePresence mode="wait">
          {activeTab === "architecture" && (
            <motion.div
              key="architecture"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
                <div className="p-4 bg-ink border border-border rounded-sm">
                  <div className="text-text-muted uppercase tracking-wider mb-1">
                    [Problem Statement]
                  </div>
                  <p className="text-text-secondary font-sans leading-relaxed">
                    {project.problem}
                  </p>
                </div>
                <div className="p-4 bg-ink border border-border rounded-sm">
                  <div className="text-accent uppercase tracking-wider mb-1">
                    [Engineered Solution]
                  </div>
                  <p className="text-text-secondary font-sans leading-relaxed">
                    {project.approach}
                  </p>
                </div>
              </div>

              {/* Simulation Engine */}
              <div>
                <div className="text-xs font-mono text-text-muted mb-2 uppercase tracking-wider">
                  Interactive Execution Diagram
                </div>
                <ProjectDemo project={project} />
              </div>
            </motion.div>
          )}

          {activeTab === "highlights" && (
            <motion.div
              key="highlights"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="space-y-3"
            >
              <div className="text-xs font-mono text-text-muted mb-3 uppercase tracking-wider">
                Production-Ready Implementation Details
              </div>
              <ul className="space-y-2.5">
                {project.highlights.map((highlight, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 p-3 bg-ink border border-border rounded-sm text-sm text-text-secondary"
                  >
                    <span className="font-mono text-xs text-accent mt-0.5 select-none">
                      #{String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="leading-relaxed">{highlight}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {activeTab === "tradeoffs" && (
            <motion.div
              key="tradeoffs"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="space-y-3"
            >
              <div className="text-xs font-mono text-text-muted mb-3 uppercase tracking-wider">
                Deliberate Technical Decisions & Sacrifices
              </div>
              <div className="space-y-3">
                {project.tradeoffs.map((tradeoff, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-ink border border-border rounded-sm flex items-start gap-3 text-sm"
                  >
                    <span className="font-mono text-xs text-accent mt-0.5">
                      ⇄
                    </span>
                    <p className="text-text-secondary leading-relaxed">
                      {tradeoff}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </article>
  );
}
