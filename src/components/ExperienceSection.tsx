"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Building2, Calendar, MapPin, CheckCircle } from "lucide-react";
import { RESUME_DATA } from "@/data/resume-data";

export function ExperienceSection() {
  const { experience } = RESUME_DATA;

  return (
    <section id="experience" className="py-14 border-b border-slate-200/80 dark:border-slate-800/80">
      <div className="flex items-center gap-2 mb-2">
        <span className="p-1 rounded-md bg-blue-500/10 text-blue-600 dark:text-blue-400">
          <Briefcase size={18} />
        </span>
        <h2 className="text-xs font-bold tracking-widest text-slate-500 dark:text-slate-400 uppercase">
          Career Journey
        </h2>
      </div>
      <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-8">
        Work Experience
      </h3>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative p-6 sm:p-7 rounded-2xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 border-l-4 border-l-blue-600 dark:border-l-blue-500 shadow-sm backdrop-blur-md"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-200/60 dark:border-slate-800/60">
          <div>
            <h4 className="text-xl font-bold text-slate-900 dark:text-white">
              {experience.role}
            </h4>
            <div className="flex items-center gap-1.5 text-blue-600 dark:text-blue-400 font-semibold text-sm mt-0.5">
              <Building2 size={15} />
              <span>{experience.company}</span>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1">
              <Calendar size={13} />
              {experience.period}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <MapPin size={13} />
              {experience.location}
            </span>
          </div>
        </div>

        <ul className="space-y-2.5 text-sm text-slate-600 dark:text-slate-300 leading-relaxed list-disc list-outside pl-5">
          {experience.points.map((point, index) => (
            <li key={index} className="pl-1">
              {point}
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
