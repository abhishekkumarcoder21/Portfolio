"use client";

import { useState } from "react";
import { skillCategories, Skill } from "@/data/skills";
import { projects } from "@/data/projects";
import SectionHeading from "./SectionHeading";
import { FadeIn } from "./Animations";

export default function Skills() {
  const [activeSkill, setActiveSkill] = useState<Skill | null>(null);

  const relatedProjects = activeSkill
    ? projects.filter((p) => activeSkill.projectIds.includes(p.id))
    : [];

  return (
    <section id="skills" className="py-24 md:py-32 border-t border-border relative">
      <div className="section-container">
        <SectionHeading
          label="03 / CAPABILITY MATRIX"
          title="Technologies Organized by Engineering Role"
          subtitle="No arbitrary percentage bars or laundry lists. Here is how my toolset maps directly to shipped production infrastructure."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Skill Categories Grid */}
          <div className="lg:col-span-8 space-y-6">
            {skillCategories.map((category) => (
              <div
                key={category.id}
                className="p-5 md:p-6 bg-ink-light border border-border rounded-sm hover:border-border-light transition-colors"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
                  <h3 className="font-mono text-sm text-accent font-bold tracking-wider">
                    {category.label}
                  </h3>
                  <span className="text-xs text-text-muted font-mono">
                    {category.verb}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => {
                    const isSelected = activeSkill?.name === skill.name;
                    const hasProjects = skill.projectIds.length > 0;

                    return (
                      <button
                        key={skill.name}
                        onClick={() =>
                          setActiveSkill(isSelected ? null : skill)
                        }
                        onMouseEnter={() => setActiveSkill(skill)}
                        className={`px-3 py-1.5 rounded-sm font-mono text-xs transition-all duration-200 border ${
                          isSelected
                            ? "bg-accent text-ink border-accent font-semibold shadow-[0_0_12px_rgba(0,240,255,0.35)]"
                            : hasProjects
                            ? "bg-ink border-border text-text-primary hover:border-accent hover:text-accent"
                            : "bg-ink border-border/60 text-text-muted hover:border-border hover:text-text-secondary"
                        }`}
                      >
                        {skill.name}
                        {hasProjects && (
                          <span className="ml-1.5 opacity-60 text-[10px]">
                            • {skill.projectIds.length}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Contextual Project Inspector */}
          <div className="lg:col-span-4 sticky top-24">
            <div className="p-6 bg-ink-light border border-border rounded-sm">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-border">
                <span className="font-mono text-xs text-text-muted uppercase tracking-wider">
                  Technology Inspector
                </span>
                {activeSkill && (
                  <button
                    onClick={() => setActiveSkill(null)}
                    className="text-[11px] font-mono text-text-muted hover:text-accent"
                  >
                    CLEAR
                  </button>
                )}
              </div>

              {activeSkill ? (
                <div className="space-y-4">
                  <div>
                    <div className="text-[10px] font-mono text-text-muted uppercase">
                      SELECTED TECHNOLOGY
                    </div>
                    <div className="font-display font-bold text-xl text-text-primary flex items-center gap-2">
                      <span>{activeSkill.name}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    </div>
                  </div>

                  <div>
                    <div className="text-[10px] font-mono text-text-muted uppercase mb-2">
                      USED IN PROJECTS ({relatedProjects.length})
                    </div>
                    {relatedProjects.length > 0 ? (
                      <div className="space-y-2">
                        {relatedProjects.map((p) => (
                          <a
                            key={p.id}
                            href={`#work`}
                            className="block p-3 bg-ink border border-border rounded-sm hover:border-accent transition-colors group"
                          >
                            <div className="text-xs font-mono text-accent">
                              {p.index}
                            </div>
                            <div className="text-sm font-semibold text-text-primary group-hover:text-accent transition-colors">
                              {p.title}
                            </div>
                            <div className="text-xs text-text-muted line-clamp-1 mt-0.5">
                              {p.subtitle}
                            </div>
                          </a>
                        ))}
                      </div>
                    ) : (
                      <div className="p-3 bg-ink border border-border rounded-sm text-xs text-text-muted font-mono">
                        Core theoretical foundation & competitive programming (LeetCode / GFG / Academic coursework at IIIT Guwahati).
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="py-8 text-center text-text-muted">
                  <div className="font-mono text-xs mb-1">
                    [HOVER OR TAP A SKILL]
                  </div>
                  <p className="text-xs leading-relaxed max-w-xs mx-auto">
                    Inspect which real projects and architectures utilize that technology.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
