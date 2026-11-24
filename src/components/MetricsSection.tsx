"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap, Activity, Database, CheckCircle, Clock } from "lucide-react";
import { RESUME_DATA } from "@/data/resume-data";

export function MetricsSection() {
  const icons = [
    <Clock key="clock" className="text-blue-500" size={20} />,
    <Zap key="zap" className="text-cyan-500" size={20} />,
    <Activity key="activity" className="text-emerald-500" size={20} />,
    <Database key="db" className="text-purple-500" size={20} />,
    <CheckCircle key="check" className="text-amber-500" size={20} />,
  ];

  return (
    <section className="py-8 border-b border-slate-200/80 dark:border-slate-800/80 print:hidden">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
        {RESUME_DATA.metrics.map((metric, idx) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            className="p-4 rounded-xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-md hover:border-blue-500/50 hover:shadow-md hover:shadow-blue-500/10 transition-all group"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800/80 group-hover:scale-110 transition-transform">
                {icons[idx % icons.length]}
              </span>
            </div>
            <div className="text-2xl font-black tracking-tight text-slate-900 dark:text-white flex items-baseline gap-1">
              <span>{metric.value}</span>
              {metric.unit && (
                <span className="text-xs font-bold text-blue-600 dark:text-blue-400">
                  {metric.unit}
                </span>
              )}
            </div>
            <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-1">
              {metric.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
