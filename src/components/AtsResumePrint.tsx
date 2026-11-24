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

  // Page 1 gets flagship enterprise project (BSNL Commission)
  // Page 2 gets BSNL SIM, CVPS, and personal showcase (Family WhatsApp Vault at bottom)
  const page1Project = projects[0]; // BSNL Commission
  const page2Projects = projects.slice(1); // BSNL SIM, CVPS, WhatsApp Vault

  return (
    <div className="font-sans text-neutral-900 bg-white p-0 m-0 max-w-full text-[8.2pt] leading-[1.28]">
      {/* ====================================================================
          PAGE 1: Header, Summary, Skills, Experience, Flagship Enterprise Project
          ==================================================================== */}
      <div
        className="ats-page-1"
        style={{
          breakAfter: "page",
          pageBreakAfter: "always",
          paddingTop: "3mm",
          paddingBottom: "1mm",
        }}
      >
        {/* ATS Header - Clean & Elegant, No Heavy Black Borders */}
        <header className="border-b border-gray-400 pb-1 mb-2 text-center">
          <h1
            className="text-[16pt] font-extrabold uppercase tracking-tight mb-0.5"
            style={{ color: "#000000" }}
          >
            {name}
          </h1>
          <p className="text-[9pt] font-bold mb-0.5" style={{ color: "#111827" }}>
            {title} | Java 21 • Spring Boot • Microservices • Apache Kafka • React.js
          </p>
          <p className="text-[7.8pt]" style={{ color: "#374151" }}>
            {location} | Phone: {phone} | Email: {email} | LinkedIn: hrudaypreetham-perika | GitHub: preetham-perika
          </p>
        </header>

        {/* Professional Summary */}
        <section className="mb-2">
          <h2 className="text-[9pt] font-bold uppercase border-b border-gray-300 pb-[1px] mb-1 tracking-wider text-black">
            Professional Summary
          </h2>
          <p className="text-[8.1pt] leading-[1.28] text-gray-800 text-justify">
            {summary}
          </p>
        </section>

        {/* Technical Skills Matrix */}
        <section className="mb-2">
          <h2 className="text-[9pt] font-bold uppercase border-b border-gray-300 pb-[1px] mb-1 tracking-wider text-black">
            Technical Skills Matrix
          </h2>
          <div className="space-y-[1.5px] text-[8.1pt]">
            {skillGroups.map((group) => (
              <div key={group.id} className="leading-[1.25]">
                <strong className="font-bold text-black">{group.title}:</strong>{" "}
                <span className="text-gray-800">
                  {group.skills.map((s) => s.name).join(", ")}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Professional Experience */}
        <section className="mb-2">
          <h2 className="text-[9pt] font-bold uppercase border-b border-gray-300 pb-[1px] mb-1 tracking-wider text-black">
            Professional Experience
          </h2>
          <div>
            <div className="flex justify-between items-baseline font-bold text-[8.5pt] mb-0.5">
              <span className="text-black">{experience.role} — {experience.company}</span>
              <span className="text-[7.8pt] font-medium text-gray-700">{experience.period} | {experience.location}</span>
            </div>
            <ul className="list-disc list-outside pl-4 space-y-[1.5px] text-[8pt] text-gray-800 leading-[1.25]">
              {experience.points.map((pt, i) => (
                <li key={i}>{pt}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Flagship Production Project */}
        {page1Project && (
          <section>
            <h2 className="text-[9pt] font-bold uppercase border-b border-gray-300 pb-[1px] mb-1 tracking-wider text-black">
              Key Engineering Projects
            </h2>
            <div className="break-inside-avoid">
              <div className="flex justify-between items-baseline font-bold text-[8.4pt]">
                <span className="text-black">{page1Project.title}</span>
                <span className="text-[7.5pt] font-semibold text-gray-600">[{page1Project.scopeBadge}]</span>
              </div>
              <div className="text-[7.8pt] text-gray-700 mb-0.5">
                <strong>Tech Stack:</strong> {page1Project.techStack.join(", ")}
              </div>
              <ul className="list-disc list-outside pl-4 space-y-[1px] text-[8pt] text-gray-800 leading-[1.25]">
                {page1Project.highlights.map((h, idx) => (
                  <li key={idx}>{h}</li>
                ))}
              </ul>
            </div>
          </section>
        )}
      </div>

      {/* ====================================================================
          PAGE 2: Key Engineering Projects (Continued), Education, Certifications, Strengths
          ==================================================================== */}
      <div className="ats-page-2" style={{ paddingTop: "3mm" }}>
        {/* Projects (Continued) */}
        <section className="mb-2">
          <h2 className="text-[9pt] font-bold uppercase border-b border-gray-300 pb-[1px] mb-1.5 tracking-wider text-black">
            Key Engineering Projects (Continued)
          </h2>
          <div className="space-y-2">
            {page2Projects.map((proj) => (
              <div key={proj.id} className="break-inside-avoid">
                <div className="flex justify-between items-baseline font-bold text-[8.4pt]">
                  <span className="text-black">{proj.title}</span>
                  <span className="text-[7.5pt] font-semibold text-gray-600">[{proj.scopeBadge}]</span>
                </div>
                <div className="text-[7.8pt] text-gray-700 mb-0.5">
                  <strong>Tech Stack:</strong> {proj.techStack.join(", ")}
                </div>
                <ul className="list-disc list-outside pl-4 space-y-[1px] text-[8pt] text-gray-800 leading-[1.25]">
                  {proj.highlights.map((h, idx) => (
                    <li key={idx}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-2 break-inside-avoid">
          <h2 className="text-[9pt] font-bold uppercase border-b border-gray-300 pb-[1px] mb-1 tracking-wider text-black">
            Education
          </h2>
          <div className="flex justify-between items-baseline text-[8.2pt]">
            <div>
              <strong className="font-bold text-black">{education.degree}</strong>
              <div className="text-gray-700">{education.institution}, {education.location}</div>
            </div>
            <div className="text-right text-gray-700 font-medium">
              <div>{education.period}</div>
              <div>GPA: {education.gpa} / 10.0</div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-2 break-inside-avoid">
          <h2 className="text-[9pt] font-bold uppercase border-b border-gray-300 pb-[1px] mb-1 tracking-wider text-black">
            Certifications &amp; Credentials
          </h2>
          <ul className="list-disc list-outside pl-4 space-y-[1px] text-[8pt] text-gray-800 leading-[1.25]">
            {certifications.map((c, idx) => (
              <li key={idx}>
                <strong>{c.title}</strong> — {c.issuer}
              </li>
            ))}
            <li>
              <strong>AI-Assisted Production Engineering</strong> — PRD-driven workflows with OpenCode &amp; Antigravity CLI
            </li>
          </ul>
        </section>

        {/* Core Competencies - Clean Text Layout, No Ugly Boxes */}
        <section className="break-inside-avoid">
          <h2 className="text-[9pt] font-bold uppercase border-b border-gray-300 pb-[1px] mb-1 tracking-wider text-black">
            Core Production Competencies &amp; Architectural Strengths
          </h2>
          <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-[7.8pt] text-gray-800 leading-[1.24]">
            <div>
              <strong className="text-black">• High-Throughput &amp; Fault Tolerance:</strong> Scaled 500 TPS via Kafka consumer tuning, batch chunking, and PostgreSQL indexing.
            </div>
            <div>
              <strong className="text-black">• Full-Stack Synergy:</strong> Coupled Spring Boot 3 REST APIs with component-driven React.js frontends and responsive UI.
            </div>
            <div>
              <strong className="text-black">• Containerization &amp; K8s:</strong> Lightweight builds using Maven Jib directly to AWS ECR, zero Dockerfile overhead, kubectl monitoring.
            </div>
            <div>
              <strong className="text-black">• Code Quality &amp; Zero Regressions:</strong> Automated JUnit 5 / Mockito suites with 0 critical SonarQube issues and PRD-driven testing.
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
