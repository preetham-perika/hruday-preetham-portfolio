"use client";

import React, { useState, useEffect, useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X, Download } from "lucide-react";
import { RESUME_DATA } from "@/data/resume-data";

const emptySubscribe = () => () => {};

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 print:hidden ${
        scrolled
          ? "bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-b border-slate-200/90 dark:border-slate-800/90 shadow-md shadow-black/5 dark:shadow-black/30"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <a href="#hero" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-500 text-white font-black text-sm flex items-center justify-center shadow-md shadow-blue-500/25 group-hover:scale-105 transition-transform">
            {RESUME_DATA.initials}
          </div>
          <div className="flex flex-col">
            <span className="brand-name font-extrabold text-slate-900 dark:text-white text-base tracking-tight leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              Sri Hruday Preetham
            </span>
            <span className="text-[11px] font-semibold text-blue-600 dark:text-cyan-400 leading-tight">
              Java Full-Stack Developer
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          <a
            href="#projects"
            className="text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Skills
          </a>
          <a
            href="#experience"
            className="text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Experience
          </a>
          <a
            href="#education"
            className="text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Education
          </a>
          <a
            href="#contact"
            className="text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Contact
          </a>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-all cursor-pointer shadow-xs"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          )}

          {/* Direct Download Button */}
          <a
            href="Sri_Hruday_Preetham_Perika_Java_Full_Stack_2026.pdf"
            download="Sri_Hruday_Preetham_Perika_Java_Full_Stack_2026.pdf"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-white shadow-md shadow-blue-500/25 hover:shadow-lg hover:shadow-blue-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
            title="Download vector ATS Resume PDF"
          >
            <Download size={14} />
            <span>ATS Resume (PDF)</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800"
            aria-label="Open mobile menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 px-6 py-5 flex flex-col gap-4 animate-in slide-in-from-top-4 duration-200">
          <a
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400"
          >
            Projects
          </a>
          <a
            href="#skills"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400"
          >
            Skills
          </a>
          <a
            href="#experience"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400"
          >
            Experience
          </a>
          <a
            href="#education"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400"
          >
            Education
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400"
          >
            Contact
          </a>
          <a
            href="Sri_Hruday_Preetham_Perika_Java_Full_Stack_2026.pdf"
            download="Sri_Hruday_Preetham_Perika_Java_Full_Stack_2026.pdf"
            onClick={() => setMobileMenuOpen(false)}
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold bg-blue-600 text-white"
          >
            <Download size={15} />
            <span>Download ATS Resume (PDF)</span>
          </a>
        </div>
      )}
    </nav>
  );
}
