"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Layers,
  ChevronDown,
  ChevronUp,
  Cpu,
  Workflow,
  Sparkles,
} from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { RESUME_DATA, Project } from "@/data/resume-data";

export function ProjectsSection() {
  const [filter, setFilter] = useState<"all" | "fullstack" | "backend">("all");
  const [expandedArchitecture, setExpandedArchitecture] = useState<Record<string, boolean>>({
    "whatsapp-vault": true,
  });

  const toggleArchitecture = (id: string) => {
    setExpandedArchitecture((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const filteredProjects = RESUME_DATA.projects.filter((p) => {
    if (filter === "all") return true;
    return p.category === filter;
  });

  return (
    <section id="projects" className="py-14 border-b border-slate-200/80 dark:border-slate-800/80">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="p-1 rounded-md bg-blue-500/10 text-blue-600 dark:text-blue-400">
              <Layers size={18} />
            </span>
            <h2 className="text-xs font-bold tracking-widest text-slate-500 dark:text-slate-400 uppercase">
              Featured Work
            </h2>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Key Engineering Projects
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            Enterprise high-throughput telecom platforms &amp; cloud-native full-stack systems
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 print:hidden self-start sm:self-auto">
          <button
            onClick={() => setFilter("all")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              filter === "all"
                ? "bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-sm"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            All Projects ({RESUME_DATA.projects.length})
          </button>
          <button
            onClick={() => setFilter("fullstack")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              filter === "fullstack"
                ? "bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-sm"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            Full-Stack (3)
          </button>
          <button
            onClick={() => setFilter("backend")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              filter === "backend"
                ? "bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-sm"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            Backend (1)
          </button>
        </div>
      </div>

      {/* Projects List */}
      <div className="flex flex-col gap-6">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.article
              layout
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`p-6 sm:p-7 rounded-2xl bg-white/70 dark:bg-slate-900/60 border backdrop-blur-md transition-all hover:shadow-xl hover:shadow-blue-500/5 group ${
                project.id === "whatsapp-vault"
                  ? "border-blue-500/40 dark:border-blue-500/30 bg-gradient-to-b from-blue-500/5 to-transparent"
                  : "border-slate-200/80 dark:border-slate-800/80 hover:border-blue-500/40"
              }`}
            >
              {/* Header Row */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                <div className="flex flex-col gap-1.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={`px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider ${
                        project.category === "fullstack"
                          ? "bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20"
                          : "bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20"
                      }`}
                    >
                      {project.scopeBadge}
                    </span>
                    {project.id === "whatsapp-vault" && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                        <Sparkles size={11} /> Featured Full-Stack Showcase
                      </span>
                    )}
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400">
                    {project.subtitle}
                  </p>
                </div>

                {/* External Actions */}
                <div className="flex items-center gap-2 print:hidden self-start">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-blue-600 dark:hover:bg-blue-500 dark:hover:text-white transition-all shadow-sm"
                    >
                      <GithubIcon size={14} />
                      <span>GitHub Code</span>
                      <ExternalLink size={12} />
                    </a>
                  )}
                </div>
              </div>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-1.5 mb-4 pt-1">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Highlights List */}
              <ul className="space-y-2 mb-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed list-disc list-outside pl-5">
                {project.highlights.map((point, i) => (
                  <li key={i} className="pl-1">
                    {point}
                  </li>
                ))}
              </ul>

              {/* Interactive Architecture Flow View */}
              {project.architectureFlow && (
                <div className="pt-2 border-t border-slate-200/60 dark:border-slate-800/60 print:hidden">
                  <button
                    onClick={() => toggleArchitecture(project.id)}
                    className="flex items-center gap-2 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors cursor-pointer"
                  >
                    <Workflow size={14} />
                    <span>
                      {expandedArchitecture[project.id]
                        ? "Hide System Architecture Flow"
                        : "View System Architecture Pipeline"}
                    </span>
                    {expandedArchitecture[project.id] ? (
                      <ChevronUp size={14} />
                    ) : (
                      <ChevronDown size={14} />
                    )}
                  </button>

                  {expandedArchitecture[project.id] && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-2.5 p-3 rounded-lg bg-slate-900 text-slate-200 font-mono text-xs border border-slate-800 flex items-center gap-2 overflow-x-auto"
                    >
                      <Cpu size={16} className="text-cyan-400 shrink-0" />
                      <span className="whitespace-nowrap">{project.architectureFlow}</span>
                    </motion.div>
                  )}
                </div>
              )}
            </motion.article>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
