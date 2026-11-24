import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { MetricsSection } from "@/components/MetricsSection";
import { ProfessionalSummary } from "@/components/ProfessionalSummary";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { EducationSection } from "@/components/EducationSection";
import { Footer } from "@/components/Footer";
import { AtsResumePrint } from "@/components/AtsResumePrint";

export default function Home() {
  return (
    <>
      {/* WEB VIEW (Modern, Interactive, Animated) */}
      <div className="web-content relative">
        {/* Ambient Glows */}
        <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden" aria-hidden="true">
          <div className="absolute top-[-10%] left-[10%] w-[550px] h-[550px] rounded-full bg-blue-500/10 dark:bg-blue-500/15 blur-[120px]" />
          <div className="absolute top-[40%] right-[-5%] w-[500px] h-[500px] rounded-full bg-teal-500/10 dark:bg-teal-500/15 blur-[120px]" />
          <div className="absolute bottom-[10%] left-[20%] w-[450px] h-[450px] rounded-full bg-indigo-500/10 dark:bg-indigo-500/15 blur-[120px]" />
        </div>

        <Navbar />

        <main className="max-w-6xl mx-auto px-4 sm:px-6">
          <Hero />
          <MetricsSection />
          <ProfessionalSummary />
          <ProjectsSection />
          <SkillsSection />
          <ExperienceSection />
          <EducationSection />
          <Footer />
        </main>
      </div>

      {/* ATS PRINT RESUME (Active only during Print / PDF generation) */}
      <div className="print-content">
        <AtsResumePrint />
      </div>
    </>
  );
}
