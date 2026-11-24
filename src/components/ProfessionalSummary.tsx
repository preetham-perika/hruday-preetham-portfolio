"use client";

import React from "react";
import { Terminal } from "lucide-react";
import { RESUME_DATA } from "@/data/resume-data";

export function ProfessionalSummary() {
  return (
    <section id="summary" className="py-12 border-b border-slate-200/80 dark:border-slate-800/80">
      <div className="flex items-center gap-2 mb-4">
        <span className="p-1 rounded-md bg-blue-500/10 text-blue-600 dark:text-blue-400">
          <Terminal size={18} />
        </span>
        <h2 className="text-xs font-bold tracking-widest text-slate-500 dark:text-slate-400 uppercase">
          Professional Summary
        </h2>
      </div>

      <div className="relative p-6 sm:p-7 rounded-2xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 border-l-4 border-l-blue-600 dark:border-l-blue-500 shadow-sm backdrop-blur-md">
        <p className="text-slate-700 dark:text-slate-200 text-base sm:text-[17px] leading-relaxed">
          <strong className="text-slate-900 dark:text-white font-semibold">
            Java Full-Stack Developer
          </strong>{" "}
          with{" "}
          <strong className="text-slate-900 dark:text-white font-semibold">
            1.6+ years of production experience
          </strong>{" "}
          architecting high-throughput microservices using{" "}
          <strong className="text-blue-600 dark:text-blue-400 font-semibold">
            Java 21, Spring Boot, Apache Kafka, and PostgreSQL/MySQL
          </strong>
          , paired with{" "}
          <strong className="text-cyan-600 dark:text-cyan-400 font-semibold">
            React.js frontend delivery
          </strong>
          . Proven track record scaling mission-critical telecom provisioning and
          automated GST billing engines up to{" "}
          <strong className="text-emerald-600 dark:text-emerald-400 font-semibold">
            500 TPS
          </strong>{" "}
          across 10,000+ daily transactions. Experienced in cloud-native
          containerization (
          <strong className="text-slate-900 dark:text-white font-semibold">
            Maven Jib, AWS ECR, Kubernetes
          </strong>
          ) and PRD-driven AI-assisted development (
          <strong className="text-purple-600 dark:text-purple-400 font-semibold">
            OpenCode / Antigravity CLI
          </strong>
          ) to accelerate feature delivery and automated test coverage with zero
          critical SonarQube issues.
        </p>
      </div>
    </section>
  );
}
