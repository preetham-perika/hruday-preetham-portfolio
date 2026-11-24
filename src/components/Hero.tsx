"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FileText,
  Check,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Code2,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { RESUME_DATA } from "@/data/resume-data";

export function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(RESUME_DATA.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // fallback
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="hero" className="pt-24 pb-14 border-b border-slate-200/80 dark:border-slate-800/80">
      <div className="flex flex-col items-start gap-4">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          <span>Available for Full-Stack Opportunities • Open to Relocate</span>
        </motion.div>

        {/* Name Header with Gradient */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white"
        >
          {RESUME_DATA.name}
        </motion.h1>

        {/* Title & Core Stack */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center gap-2 text-base sm:text-lg text-slate-600 dark:text-slate-300 font-medium"
        >
          <span className="text-blue-600 dark:text-blue-400 font-bold">
            {RESUME_DATA.title}
          </span>
          <span className="text-slate-400">•</span>
          <span>Java 21</span>
          <span className="text-slate-400">•</span>
          <span>Spring Boot</span>
          <span className="text-slate-400">•</span>
          <span>Apache Kafka</span>
          <span className="text-slate-400">•</span>
          <span>React.js</span>
        </motion.div>

        {/* Location & Relocation */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="flex items-center gap-1.5 text-xs sm:text-sm text-slate-500 dark:text-slate-400"
        >
          <MapPin size={15} className="text-slate-400" />
          <span>{RESUME_DATA.location}</span>
          <span className="text-sky-500 dark:text-sky-400 font-medium">
            ({RESUME_DATA.relocationText})
          </span>
        </motion.p>

        {/* Quick Contact Bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center gap-2.5 pt-2"
        >
          {/* Email Copy Trigger */}
          <button
            onClick={handleCopyEmail}
            className="group flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 transition-all cursor-pointer shadow-sm hover:-translate-y-0.5"
            title="Click to copy email address"
          >
            <Mail size={14} className="text-blue-500" />
            <span className="font-mono">{RESUME_DATA.email}</span>
            <span className="px-1.5 py-0.5 rounded text-[10px] bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              {copied ? (
                <span className="inline-flex items-center gap-1 text-emerald-400 font-bold">
                  <Check size={11} /> Copied!
                </span>
              ) : (
                "Copy"
              )}
            </span>
          </button>

          {/* Direct Phone */}
          <a
            href={`tel:${RESUME_DATA.phone.replace(/\s+/g, "")}`}
            className="flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 transition-all shadow-sm hover:-translate-y-0.5"
          >
            <Phone size={14} className="text-emerald-500" />
            <span>{RESUME_DATA.phone}</span>
          </a>

          {/* LinkedIn */}
          <a
            href={RESUME_DATA.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 transition-all shadow-sm hover:-translate-y-0.5"
          >
            <LinkedinIcon size={14} className="text-sky-500" />
            <span>LinkedIn</span>
          </a>

          {/* GitHub */}
          <a
            href={RESUME_DATA.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 transition-all shadow-sm hover:-translate-y-0.5"
          >
            <GithubIcon size={14} className="text-purple-500" />
            <span>GitHub</span>
          </a>
        </motion.div>

        {/* Primary CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-wrap items-center gap-3.5 pt-3"
        >
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
          >
            <FileText size={17} />
            <span>Download ATS Resume (PDF)</span>
          </button>

          <a
            href="#projects"
            className="flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-slate-100 hover:border-blue-500 dark:hover:border-blue-500 hover:-translate-y-0.5 transition-all shadow-sm"
          >
            <Code2 size={17} className="text-blue-500" />
            <span>Explore Full-Stack Projects</span>
            <ArrowRight size={15} className="text-slate-400 group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
