"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { profile } from "@/data/profile";

const navItems = [
  { id: "work", label: "Work" },
  { id: "engineering", label: "Systems" },
  { id: "skills", label: "Skills" },
  { id: "journey", label: "Journey" },
  { id: "contact", label: "Contact" },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navItems.map((item) => ({
        id: item.id,
        el: document.getElementById(item.id),
      }));

      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.el && section.el.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsMobileOpen(false);
    }
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-ink/90 backdrop-blur-md border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="section-container flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-display text-base font-bold text-text-primary tracking-tight hover:text-accent transition-colors"
            aria-label="Scroll to top"
          >
            {profile.firstName.toUpperCase()}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`relative font-mono text-xs tracking-widest uppercase transition-colors py-2 ${
                  activeSection === item.id
                    ? "text-accent"
                    : "text-text-muted hover:text-text-secondary"
                }`}
                aria-label={`Navigate to ${item.label}`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute -bottom-px left-0 right-0 h-px bg-accent"
                    transition={{ type: "spring", stiffness: 500, damping: 35 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileOpen}
          >
            <motion.span
              animate={{
                rotate: isMobileOpen ? 45 : 0,
                y: isMobileOpen ? 4 : 0,
              }}
              className="block w-5 h-px bg-text-primary"
              transition={{ duration: 0.2 }}
            />
            <motion.span
              animate={{ opacity: isMobileOpen ? 0 : 1 }}
              className="block w-5 h-px bg-text-primary"
              transition={{ duration: 0.2 }}
            />
            <motion.span
              animate={{
                rotate: isMobileOpen ? -45 : 0,
                y: isMobileOpen ? -4 : 0,
              }}
              className="block w-5 h-px bg-text-primary"
              transition={{ duration: 0.2 }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-ink/95 backdrop-blur-lg md:hidden flex flex-col items-center justify-center"
          >
            <div className="flex flex-col items-center gap-8">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  onClick={() => scrollTo(item.id)}
                  className={`font-display text-2xl font-semibold tracking-tight transition-colors ${
                    activeSection === item.id
                      ? "text-accent"
                      : "text-text-primary hover:text-accent"
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
