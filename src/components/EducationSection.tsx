"use client";

import React from "react";
import { GraduationCap, Award, CheckCircle } from "lucide-react";
import { RESUME_DATA } from "@/data/resume-data";

export function EducationSection() {
  const { education, certifications } = RESUME_DATA;

  return (
    <section id="education" className="py-14 border-b border-slate-200/80 dark:border-slate-800/80">
      <div className="flex items-center gap-2 mb-2">
        <span className="p-1 rounded-md bg-blue-500/10 text-blue-600 dark:text-blue-400">
          <GraduationCap size={18} />
        </span>
        <h2 className="text-xs font-bold tracking-widest text-slate-500 dark:text-slate-400 uppercase">
          Background
        </h2>
      </div>
      <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-8">
        Education &amp; Certifications
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Education Card */}
        <div className="p-6 rounded-2xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-md">
          <div className="flex items-center gap-2.5 mb-3">
            <span className="p-2 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400">
              <GraduationCap size={20} />
            </span>
            <div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white leading-tight">
                {education.degree}
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                {education.period}
              </p>
            </div>
          </div>
          <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
            {education.institution}, {education.location}
          </p>
          <span className="inline-block px-2.5 py-1 rounded-md text-xs font-bold bg-slate-100 dark:bg-slate-800 text-blue-600 dark:text-blue-400 border border-slate-200 dark:border-slate-700">
            Cumulative GPA: {education.gpa}
          </span>
        </div>

        {/* Certifications Card */}
        <div className="p-6 rounded-2xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-md">
          <div className="flex items-center gap-2.5 mb-3">
            <span className="p-2 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
              <Award size={20} />
            </span>
            <div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white leading-tight">
                Certifications &amp; Credentials
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                Verified Skills
              </p>
            </div>
          </div>

          <ul className="space-y-2.5 text-sm text-slate-600 dark:text-slate-300">
            {certifications.map((cert, index) => (
              <li key={index} className="flex items-start gap-2">
                <CheckCircle size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 dark:text-white">{cert.title}</strong>
                  <span className="text-slate-500 dark:text-slate-400 text-xs block">
                    {cert.issuer}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
