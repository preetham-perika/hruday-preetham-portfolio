"use client";

import React from "react";
import { FileText } from "lucide-react";

export function FloatingResumeButton() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <aside className="fixed bottom-6 right-6 z-40 print:hidden">
      <button
        onClick={handlePrint}
        className="flex items-center gap-2 px-4 py-3 rounded-full text-xs sm:text-sm font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-white shadow-xl shadow-blue-500/35 hover:shadow-2xl hover:shadow-blue-500/50 hover:-translate-y-1 active:translate-y-0 transition-all cursor-pointer group"
        title="Download / Print Vector ATS Resume PDF"
      >
        <span className="p-1 rounded-full bg-white/20 group-hover:rotate-12 transition-transform">
          <FileText size={16} />
        </span>
        <span className="hidden sm:inline">Download ATS Resume</span>
        <span className="sm:hidden">Resume PDF</span>
      </button>
    </aside>
  );
}
