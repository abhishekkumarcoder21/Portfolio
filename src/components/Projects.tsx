"use client";

import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import SectionHeading from "./SectionHeading";
import { FadeIn } from "./Animations";

export default function Projects() {
  return (
    <section id="work" className="py-24 md:py-32 border-t border-border relative">
      <div className="section-container">
        <SectionHeading
          label="01 / SYSTEMS & ARTIFACTS"
          title="Featured Engineering Projects"
          subtitle="Infrastructure, distributed systems, and AI developer tooling built with deterministic reliability and verifiable performance."
        />

        <div className="space-y-16 md:space-y-24">
          {projects.map((project, idx) => (
            <FadeIn key={project.id} delay={idx * 0.1}>
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
