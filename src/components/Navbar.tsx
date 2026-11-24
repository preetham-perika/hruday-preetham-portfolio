"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, FileText, Menu, X, ArrowUpRight } from "lucide-react";
import { RESUME_DATA } from "@/data/resume-data";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 print:hidden ${
        scrolled
          ? "bg-slate-900/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200/20 dark:border-slate-800/80 shadow-lg shadow-black/5"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <a href="#hero" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-500 text-white font-black text-sm flex items-center justify-center shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
            {RESUME_DATA.initials}
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-slate-900 dark:text-slate-100 text-sm tracking-tight leading-tight group-hover:text-blue-500 transition-colors">
              Hruday Preetham
            </span>
            <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 leading-tight">
              Java Full-Stack
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          <a
            href="#projects"
            className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Skills
          </a>
          <a
            href="#experience"
            className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Experience
          </a>
          <a
            href="#education"
            className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Education
          </a>
          <a
            href="#contact"
            className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
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
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          )}

          {/* Quick Print Button */}
          <button
            onClick={handlePrint}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-white shadow-md shadow-blue-500/25 hover:shadow-lg hover:shadow-blue-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
            title="Download or Print vector ATS Resume"
          >
            <FileText size={14} />
            <span>ATS Resume (PDF)</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
            aria-label="Open mobile menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900/95 dark:bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 px-6 py-5 flex flex-col gap-4 animate-in slide-in-from-top-4 duration-200">
          <a
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-medium text-slate-300 hover:text-blue-400"
          >
            Projects
          </a>
          <a
            href="#skills"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-medium text-slate-300 hover:text-blue-400"
          >
            Skills
          </a>
          <a
            href="#experience"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-medium text-slate-300 hover:text-blue-400"
          >
            Experience
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-medium text-slate-300 hover:text-blue-400"
          >
            Contact
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              handlePrint();
            }}
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold bg-blue-600 text-white"
          >
            <FileText size={15} />
            <span>Download ATS Resume (PDF)</span>
          </button>
        </div>
      )}
    </nav>
  );
}
