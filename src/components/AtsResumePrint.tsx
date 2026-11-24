"use client";

import React from "react";
import { RESUME_DATA } from "@/data/resume-data";

export function AtsResumePrint() {
  const {
    name,
    title,
    location,
    email,
    phone,
    summary,
    experience,
    projects,
    skillGroups,
    education,
    certifications,
  } = RESUME_DATA;

  return (
    <div className="font-sans text-black bg-white p-0 m-0 max-w-full text-[8.2pt] leading-[1.24]">
      {/* ====================================================================
          PAGE 1: Profile Header, Summary, Technical Skills, Work Experience, Education
          ==================================================================== */}
      <div style={{ breakAfter: "page", pageBreakAfter: "always" }}>
        {/* ATS Header */}
        <header className="border-b-[1.5pt] border-black pb-0.5 mb-1.5 text-center">
          <h1 className="text-[16pt] font-extrabold uppercase tracking-tight text-black mb-0.5">
            {name}
          </h1>
          <p className="text-[9.2pt] font-bold text-gray-900 mb-0.5">
            {title} | Java 21 • Spring Boot • Microservices • Apache Kafka • React.js
          </p>
          <p className="text-[8pt] text-gray-700">
            {location} | 📞 {phone} | ✉️ {email} | LinkedIn: hrudaypreetham-perika | GitHub: preetham-perika
          </p>
        </header>

        {/* Professional Summary */}
        <section className="mb-1.5">
          <h2 className="text-[9.2pt] font-bold uppercase border-b border-gray-400 pb-[1px] mb-0.5 tracking-wider">
            Professional Summary
          </h2>
          <p className="text-[8.2pt] leading-[1.24] text-gray-800">
            {summary}
          </p>
        </section>

        {/* Technical Skills */}
        <section className="mb-1.5">
          <h2 className="text-[9.2pt] font-bold uppercase border-b border-gray-400 pb-[1px] mb-0.5 tracking-wider">
            Technical Skills
          </h2>
          <div className="space-y-[1px] text-[8.2pt]">
            {skillGroups.map((group) => (
              <div key={group.id} className="leading-[1.22]">
                <strong className="font-bold text-black">{group.title}:</strong>{" "}
                <span className="text-gray-800">
                  {group.skills.map((s) => s.name).join(", ")}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Work Experience */}
        <section className="mb-1.5">
          <h2 className="text-[9.2pt] font-bold uppercase border-b border-gray-400 pb-[1px] mb-0.5 tracking-wider">
            Work Experience
          </h2>
          <div>
            <div className="flex justify-between items-baseline font-bold text-[8.6pt] mb-0.5">
              <span>{experience.role} — {experience.company}</span>
              <span className="text-[8pt] font-normal text-gray-700">{experience.period} | {experience.location}</span>
            </div>
            <ul className="list-disc list-outside pl-4 space-y-[0.5px] text-[8.2pt] text-gray-800 leading-[1.24]">
              {experience.points.slice(0, 5).map((pt, i) => (
                <li key={i}>{pt}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Education & Certifications */}
        <section className="mb-1">
          <h2 className="text-[9.2pt] font-bold uppercase border-b border-gray-400 pb-[1px] mb-0.5 tracking-wider">
            Education &amp; Certifications
          </h2>
          <div className="flex justify-between items-baseline text-[8.2pt] mb-0.5">
            <div>
              <strong>{education.degree}</strong> — {education.institution}, {education.location}
            </div>
            <div>{education.period} | GPA: {education.gpa}</div>
          </div>
          <div className="text-[8.2pt]">
            <strong>Certifications:</strong> {certifications.map((c) => `${c.title} (${c.issuer})`).join("; ")}
          </div>
        </section>
      </div>

      {/* ====================================================================
          PAGE 2: Key Engineering Projects (All 4 Featured Projects)
          ==================================================================== */}
      <div className="pt-1">
        <section>
          <h2 className="text-[9.5pt] font-bold uppercase border-b-[1.5pt] border-black pb-[1px] mb-2 tracking-wider">
            Key Engineering Projects (Full-Stack &amp; High-Throughput Microservices)
          </h2>
          <div className="space-y-2.5">
            {projects.map((proj) => (
              <div key={proj.id} className="break-inside-avoid">
                <div className="flex justify-between items-baseline font-bold text-[8.6pt]">
                  <span>{proj.title}</span>
                  <span className="text-[7.6pt] font-semibold text-gray-600">[{proj.scopeBadge}]</span>
                </div>
                <div className="text-[7.8pt] text-gray-700 mb-0.5">
                  <strong>Tech Stack:</strong> {proj.techStack.join(", ")}
                </div>
                <ul className="list-disc list-outside pl-4 space-y-[1px] text-[8.1pt] text-gray-800 leading-[1.22]">
                  {proj.highlights.slice(0, 3).map((h, idx) => (
                    <li key={idx}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
