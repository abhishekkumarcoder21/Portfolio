"use client";

import { education } from "@/data/profile";
import { journeySteps } from "@/data/achievements";
import SectionHeading from "./SectionHeading";
import { FadeIn } from "./Animations";

export default function Journey() {
  return (
    <section id="journey" className="py-24 md:py-32 border-t border-border relative">
      <div className="section-container">
        <SectionHeading
          label="05 / TRAJECTORY & EDUCATION"
          title="Engineering Evolution"
          subtitle="From mathematical problem-solving in Patna to building distributed infrastructure at IIIT Guwahati."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Timeline of Evolution */}
          <div className="lg:col-span-7 space-y-8 relative">
            <div className="absolute left-3 top-3 bottom-3 w-px bg-border hidden sm:block" />

            {journeySteps.map((step, idx) => (
              <FadeIn key={idx} delay={idx * 0.05} className="relative sm:pl-10">
                <div className="hidden sm:block absolute left-2 top-1.5 w-2 h-2 rounded-full bg-accent border-4 border-ink transform -translate-x-1/2" />
                
                <div className="p-5 bg-ink-light border border-border rounded-sm hover:border-border-light transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs text-accent font-semibold">
                      {step.year}
                    </span>
                    <span className="font-mono text-[11px] text-text-muted uppercase">
                      {step.label}
                    </span>
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed font-sans">
                    {step.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Academic Credentials & Engineering Principles */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-24">
            {/* Education Card */}
            <div className="p-6 bg-ink-light border border-border rounded-sm space-y-5">
              <div className="flex items-center gap-2 border-b border-border pb-3">
                <span className="w-2 h-2 rounded-full bg-accent" />
                <h3 className="font-mono text-xs text-text-primary uppercase tracking-wider font-semibold">
                  Formal Academic Background
                </h3>
              </div>

              <div className="space-y-4">
                {education.map((edu, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex items-baseline justify-between text-xs font-mono">
                      <span className="text-text-primary font-medium">
                        {edu.shortName}
                      </span>
                      <span className="text-text-muted">{edu.period}</span>
                    </div>
                    <div className="text-xs text-text-secondary">
                      {edu.degree}
                    </div>
                    {edu.score && (
                      <div className="text-[11px] font-mono text-accent">
                        Score: {edu.score}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Current Focus Card */}
            <div className="p-6 bg-ink-light border border-accent/30 rounded-sm space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] text-accent uppercase tracking-wider">
                  CURRENT RESEARCH & DEVELOPMENT
                </span>
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              </div>
              <h4 className="font-display font-semibold text-lg text-text-primary">
                High-Throughput Distributed Engines
              </h4>
              <p className="text-xs text-text-secondary leading-relaxed font-mono">
                Currently diving deeper into consensus algorithms (Raft), eBPF-based network telemetry, and deterministic scheduling under extreme concurrency.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
