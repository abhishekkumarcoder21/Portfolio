"use client";

import { proofOfWork, achievements } from "@/data/achievements";
import SectionHeading from "./SectionHeading";
import { FadeIn, StaggerContainer, StaggerItem } from "./Animations";

export default function ProofOfWork() {
  return (
    <section className="py-24 md:py-32 border-t border-border bg-ink/60">
      <div className="section-container">
        <SectionHeading
          label="04 / VERIFIABLE TRACK RECORD"
          title="Proof of Work & Competitive Benchmarks"
          subtitle="Direct links to verified profiles, competitive programming statistics, and hackathon results."
        />

        {/* Proof of Work Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {proofOfWork.map((item, idx) => (
            <a
              key={idx}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-ink-light border border-border rounded-sm hover:border-accent group transition-all duration-200 block"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs text-text-muted uppercase">
                  {item.platform}
                </span>
                <span className="text-text-muted group-hover:text-accent transition-colors text-xs">
                  ↗
                </span>
              </div>
              <div className="font-display font-bold text-3xl md:text-4xl text-text-primary group-hover:text-accent transition-colors mb-1">
                {item.stat}
              </div>
              <div className="text-xs font-mono text-text-secondary">
                {item.label}
              </div>
            </a>
          ))}
        </div>

        {/* Verified Achievements & Distinctions */}
        <div>
          <div className="text-xs font-mono text-text-muted uppercase tracking-wider mb-6 flex items-center gap-2">
            <span>Competitive Distinctions & Academic Rigor</span>
            <span className="h-px bg-border flex-1" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {achievements.map((ach, idx) => (
              <div
                key={idx}
                className="p-5 bg-ink border border-border rounded-sm hover:border-border-light transition-colors"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span className="font-mono text-[10px] text-accent uppercase tracking-wider">
                    {ach.category}
                  </span>
                </div>
                <h4 className="font-display font-semibold text-base text-text-primary mb-1">
                  {ach.title}
                </h4>
                {ach.detail && (
                  <p className="text-xs font-mono text-text-muted">
                    {ach.detail}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
