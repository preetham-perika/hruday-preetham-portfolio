"use client";

import React, { useState } from "react";
import { Mail, Phone, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { RESUME_DATA } from "@/data/resume-data";

export function Footer() {
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="pt-16 pb-12 border-t border-slate-200/80 dark:border-slate-800/80 print:hidden">
      <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-10">
        <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-2">
          Let&apos;s Connect &amp; Build
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
          Actively exploring opportunities as a{" "}
          <strong className="text-blue-600 dark:text-blue-400">
            Java Full-Stack Developer
          </strong>{" "}
          or{" "}
          <strong className="text-slate-900 dark:text-white">
            Senior Java Backend Engineer
          </strong>
          . Open to relocation across India.
        </p>

        {/* Contact Links Grid */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={handleCopyEmail}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-blue-600 text-white shadow-md shadow-blue-500/20 hover:bg-blue-700 transition-all cursor-pointer"
          >
            <Mail size={15} />
            <span>{copied ? "Copied Email! ✨" : "Copy Email Address"}</span>
          </button>

          <a
            href={`tel:${RESUME_DATA.phone.replace(/\s+/g, "")}`}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-all"
          >
            <Phone size={15} />
            <span>{RESUME_DATA.phone}</span>
          </a>

          <a
            href={RESUME_DATA.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-all"
          >
            <LinkedinIcon size={15} />
            <span>LinkedIn Profile</span>
          </a>

          <a
            href={RESUME_DATA.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-all"
          >
            <GithubIcon size={15} />
            <span>GitHub Profile</span>
          </a>
        </div>
      </div>

      {/* Subfooter */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-slate-200/60 dark:border-slate-800/60 text-xs text-slate-500 dark:text-slate-400">
        <p>© 2026 {RESUME_DATA.name}</p>
        <button
          onClick={scrollToTop}
          className="flex items-center gap-1.5 text-slate-500 hover:text-blue-500 transition-colors cursor-pointer"
        >
          <span>Back to Top</span>
          <ArrowUp size={14} />
        </button>
      </div>
    </footer>
  );
}
