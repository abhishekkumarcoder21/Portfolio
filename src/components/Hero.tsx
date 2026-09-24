"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { profile, socialLinks } from "@/data/profile";

const SystemGraph = dynamic(() => import("./SystemGraph"), {
  ssr: false,
  loading: () => <div className="w-full h-full" />,
});

const ArrowDown = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M8 3v10M3 8l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ExternalLink = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M5.5 2.5h-3v9h9v-3M8.5 2.5h3v3M6 8l5.5-5.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      aria-label="Introduction"
    >
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg-subtle opacity-40" />

      {/* Gradient overlay top */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-transparent to-ink pointer-events-none" />

      {/* System graph — background visual */}
      <div className="absolute inset-0 hidden md:block opacity-50">
        <SystemGraph />
      </div>

      {/* Content */}
      <div className="relative z-10 section-container py-32 md:py-0">
        <div className="max-w-3xl">
          {/* Status indicator */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-2 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-success status-pulse" />
            <span className="font-mono text-xs text-text-muted tracking-wide">
              AVAILABLE FOR OPPORTUNITIES
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="heading-xl text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-4"
          >
            {profile.name}
          </motion.h1>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-6"
          >
            <span className="font-display text-xl md:text-2xl text-text-primary font-medium">
              {profile.title}
            </span>
            <span className="text-border-light hidden sm:inline">—</span>
            <span className="font-mono text-sm text-text-muted tracking-wide">
              Systems · AI · Full Stack
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-text-secondary text-base md:text-lg leading-relaxed max-w-xl mb-10"
          >
            {profile.tagline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-accent text-ink font-display font-semibold text-sm tracking-tight rounded-sm hover:bg-accent/90 transition-colors"
            >
              View Projects
              <ArrowDown />
            </a>
            <a
              href={socialLinks.github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-6 py-3 border border-border text-text-primary font-display font-medium text-sm tracking-tight rounded-sm hover:border-accent hover:text-accent transition-colors"
            >
              GitHub
              <ExternalLink />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-text-muted font-display font-medium text-sm tracking-tight hover:text-accent transition-colors"
            >
              Contact
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-transparent via-text-muted to-transparent"
        />
      </motion.div>
    </section>
  );
}
