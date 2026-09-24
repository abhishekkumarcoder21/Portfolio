"use client";

import { useState } from "react";
import { profile, socialLinks } from "@/data/profile";
import SectionHeading from "./SectionHeading";
import { FadeIn } from "./Animations";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  return (
    <footer id="contact" className="py-24 md:py-32 border-t border-border bg-ink relative">
      <div className="section-container">
        <SectionHeading
          label="06 / INITIATE CONTACT"
          title="Let's Build Reliable Systems."
          subtitle="Whether you're building distributed infrastructure, engineering developer platforms, or looking for a systems engineer who cares about correctness and performance."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20">
          {/* Main Action Block */}
          <div className="lg:col-span-7 p-8 bg-ink-light border border-border rounded-sm space-y-6">
            <div className="text-xs font-mono text-text-muted uppercase tracking-wider">
              DIRECT COMMUNICATION CHANNEL
            </div>

            <div>
              <div className="font-display font-bold text-2xl md:text-3xl text-text-primary mb-2 break-all">
                {profile.email}
              </div>
              <p className="text-xs font-mono text-text-muted">
                Response SLA: typically within 24 hours. Based in {profile.location}.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={copyEmail}
                className="px-4 py-2.5 font-mono text-xs font-medium bg-accent text-ink rounded-sm hover:bg-accent/90 transition-all flex items-center gap-2"
                aria-label="Copy email address"
              >
                {copied ? (
                  <>
                    <span>✓</span> EMAIL COPIED TO CLIPBOARD
                  </>
                ) : (
                  <>
                    <span>⎘</span> COPY EMAIL ADDRESS
                  </>
                )}
              </button>

              <a
                href={`mailto:${profile.email}`}
                className="px-4 py-2.5 font-mono text-xs border border-border text-text-primary hover:border-accent hover:text-accent rounded-sm transition-colors"
              >
                OPEN MAIL CLIENT ↗
              </a>
            </div>
          </div>

          {/* Quick Info & Social Nodes */}
          <div className="lg:col-span-5 p-8 bg-ink-light border border-border rounded-sm space-y-6 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono text-text-muted uppercase tracking-wider mb-4">
                COMMUNICATION NODES
              </div>

              <div className="space-y-3 font-mono text-xs">
                <div className="flex justify-between items-center py-1.5 border-b border-border/60">
                  <span className="text-text-muted">Telephone</span>
                  <a
                    href={`tel:${profile.phone}`}
                    className="text-text-primary hover:text-accent transition-colors"
                  >
                    {profile.phone}
                  </a>
                </div>

                <div className="flex justify-between items-center py-1.5 border-b border-border/60">
                  <span className="text-text-muted">Location</span>
                  <span className="text-text-primary">{profile.location}</span>
                </div>

                <div className="flex justify-between items-center py-1.5 border-b border-border/60">
                  <span className="text-text-muted">Institution</span>
                  <span className="text-text-primary">IIIT Guwahati</span>
                </div>
              </div>
            </div>

            {/* Social Links List */}
            <div>
              <div className="text-xs font-mono text-text-muted uppercase tracking-wider mb-3">
                VERIFIABLE PROFILES
              </div>
              <div className="flex flex-wrap gap-2">
                {Object.entries(socialLinks).map(([key, link]) => (
                  <a
                    key={key}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2.5 py-1 text-xs font-mono bg-ink border border-border text-text-secondary hover:text-accent hover:border-accent rounded-sm transition-colors"
                  >
                    {link.label} ↗
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-text-muted">
          <div>
            © {new Date().getFullYear()} Abhishek Kumar. Built with Next.js, TypeScript & Tailwind CSS.
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-accent">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              SYSTEMS NORMAL
            </span>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="hover:text-accent transition-colors"
            >
              TOP ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
