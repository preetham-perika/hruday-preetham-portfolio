"use client";

import React, { useState } from "react";
import { FileText, Download, Printer, X } from "lucide-react";

export function FloatingResumeButton() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handlePrint = () => {
    setMenuOpen(false);
    window.print();
  };

  return (
    <aside className="fixed bottom-6 right-6 z-40 print:hidden">
      <div className="relative flex flex-col items-end gap-2">
        {/* Quick Menu Popover */}
        {menuOpen && (
          <div className="p-2 rounded-2xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200 dark:border-slate-800 shadow-2xl flex flex-col gap-1.5 min-w-[210px] animate-in slide-in-from-bottom-2 duration-150">
            <div className="px-3 py-1.5 text-[11px] font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100 dark:border-slate-800/80">
              ATS Resume Actions
            </div>

            <a
              href="/Sri_Hruday_Preetham_Perika_Java_Full_Stack_2026.pdf"
              download="Sri_Hruday_Preetham_Perika_Java_Full_Stack_2026.pdf"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/60 transition-colors"
            >
              <Download size={15} />
              <span>Download 2-Page PDF</span>
            </a>

            <button
              onClick={handlePrint}
              className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer text-left"
            >
              <Printer size={15} />
              <span>Browser Print / Preview</span>
            </button>
          </div>
        )}

        {/* Main Floating Pill Trigger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex items-center gap-2 px-4 py-3 rounded-full text-xs sm:text-sm font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-white shadow-xl shadow-blue-500/35 hover:shadow-2xl hover:shadow-blue-500/50 hover:-translate-y-1 active:translate-y-0 transition-all cursor-pointer group"
          title="Download or Print ATS Resume PDF"
        >
          <span className="p-1 rounded-full bg-white/20 group-hover:rotate-12 transition-transform">
            {menuOpen ? <X size={16} /> : <FileText size={16} />}
          </span>
          <span className="hidden sm:inline">ATS Resume</span>
          <span className="sm:hidden">Resume</span>
        </button>
      </div>
    </aside>
  );
}
