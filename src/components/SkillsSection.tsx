"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code,
  Server,
  Layout,
  MessageSquare,
  Database,
  Cloud,
  CheckCircle2,
  Wrench,
} from "lucide-react";
import { RESUME_DATA, SkillGroup } from "@/data/resume-data";

export function SkillsSection() {
  const [filter, setFilter] = useState<string>("all");

  const filterTabs = [
    { id: "all", label: "All Skills" },
    { id: "backend", label: "Backend & Core" },
    { id: "frontend", label: "Frontend & UI" },
    { id: "data", label: "Messaging & DB" },
    { id: "cloud", label: "Cloud & DevOps" },
    { id: "testing", label: "Testing & AI" },
  ];

  const filteredGroups = RESUME_DATA.skillGroups.filter((group) => {
    if (filter === "all") return true;
    return group.category === filter;
  });

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case "languages":
        return <Code size={16} className="text-blue-500" />;
      case "backend":
        return <Server size={16} className="text-indigo-500" />;
      case "frontend":
        return <Layout size={16} className="text-cyan-500" />;
      case "messaging":
        return <MessageSquare size={16} className="text-purple-500" />;
      case "databases":
        return <Database size={16} className="text-emerald-500" />;
      case "devops":
        return <Cloud size={16} className="text-amber-500" />;
      case "testing":
        return <CheckCircle2 size={16} className="text-rose-500" />;
      default:
        return <Wrench size={16} className="text-slate-500" />;
    }
  };

  return (
    <section id="skills" className="py-14 border-b border-slate-200/80 dark:border-slate-800/80">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="p-1 rounded-md bg-blue-500/10 text-blue-600 dark:text-blue-400">
              <Wrench size={18} />
            </span>
            <h2 className="text-xs font-bold tracking-widest text-slate-500 dark:text-slate-400 uppercase">
              Technical Expertise
            </h2>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Full-Stack Skill Matrix
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            Production-grade competencies in modern Java microservices, event streaming, and reactive frontends
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 print:hidden">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                filter === tab.id
                  ? "bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-sm"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <AnimatePresence mode="popLayout">
          {filteredGroups.map((group, idx) => (
            <motion.div
              layout
              key={group.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35, delay: idx * 0.04 }}
              className="p-5 rounded-2xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-md hover:border-blue-500/40 hover:shadow-md transition-all group"
            >
              <div className="flex items-center gap-2 mb-3.5">
                <span className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 group-hover:scale-110 transition-transform">
                  {getCategoryIcon(group.id)}
                </span>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white tracking-tight">
                  {group.title}
                </h4>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {group.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors ${
                      skill.isPrimary
                        ? "bg-blue-500/10 dark:bg-blue-500/15 text-blue-700 dark:text-blue-300 border border-blue-500/30 font-semibold"
                        : "bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60 hover:border-slate-400"
                    }`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
