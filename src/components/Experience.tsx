
import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface ExperienceItem {
  company: string;
  title: string;
  range: string;
  duties: string[];
  techStack?: string;
}

const experiences: ExperienceItem[] = [
  {
    company: "Insightsoftware",
    title: "Software Engineer (Full-Stack)",
    range: "Dec 2021 - Jul 2024",
    duties: [
      "Engineered and maintained enterprise PIM and accounting platforms with React.js, Vue.js, Spring Boot, PostgreSQL, and MySQL, enabling accurate workflow processing for Fortune 500 financial and manufacturing clients, which reduced data-entry errors and improved reporting reliability",
      "Reduced frontend defects and production rework by 35% through implementation of comprehensive unit testing, rigorous code reviews, and proactive refactoring of legacy code patterns.",
      "Led integration of in-house data visualization product by designing React UI components and consuming REST APIs, increasing feature adoption by 40% among enterprise customers.",
      "Spearheaded modernization initiative to migrate legacy jQuery-based application (15,000+ lines) to React.js, improving page load performance by 25%, reducing technical debt, and accelerating feature development velocity.",
      "Rapidly onboarded to a newly formed team and achieved full product ownership within 6 months for a complex financial platform serving Banking, IFRS17, Part VII Transfer, and Insurance verticals through a unified interface.",
      "Developed and integrated Spring Boot RESTful APIs with backend microservices, ensuring seamless data flow between frontend components and backend systems while maintaining strict compliance standards",
      "Orchestrated release management and deployed software across distributed QA and production environments using Git and Azure DevOps, implementing branching strategies for zero-downtime TC, RC, and GA builds"
    ]
  },
  {
    company: "GoVise Technologies (now CLO Virtual Fashion)",
    title: "Software Engineering Intern",
    range: "Sep 2020 - Nov 2020",
    duties: [
      "Developed a production-deployed web application for fashion industry clients using Java Servlets, JSP, MySQL, and three.js, enabling interactive 3D garment visualization directly in the browser",
      "Implemented real-time 3D model rendering with three.js and integrated backend services to manage and efficiently serve 3D assets, delivering smooth client-facing applications that improved user experience and increased client satisfaction."
    ]
  }
];

const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="experience" className="py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-heading">
          <span className="text-highlight mr-2">02.</span> Where I've Worked
        </h2>
        
        <div className="flex flex-col md:flex-row gap-6">
          {/* Tab buttons */}
          <div className="flex md:flex-col overflow-x-auto md:overflow-visible border-b md:border-b-0 md:border-l border-navy-lighter">
            {experiences.map((exp, idx) => (
              <button
                key={`${exp.company}-${exp.title}`}
                className={cn(
                  "px-5 py-3 font-mono text-sm whitespace-nowrap md:border-l-2 transition-all duration-300 hover:bg-navy-lighter hover:text-highlight focus:outline-none",
                  activeTab === idx
                    ? "text-highlight md:border-l-highlight bg-navy-lighter/50"
                    : "text-slate md:border-l-transparent"
                )}
                onClick={() => setActiveTab(idx)}
              >
                {exp.company}
              </button>
            ))}
          </div>
          
          {/* Tab content */}
          <div className="py-6">
            {experiences.map((experience, idx) => (
              <div
                key={`content-${experience.company}-${experience.title}`}
                className={cn(
                  "transition-all duration-500",
                  activeTab === idx ? "block" : "hidden"
                )}
              >
                <h3 className="text-xl font-medium text-slate-lighter">
                  <span>{experience.title}</span>{" "}
                  <span className="text-highlight">@ {experience.company}</span>
                </h3>
                <p className="font-mono text-sm text-slate mt-1 mb-4">
                  {experience.range}
                </p>
                <ul className="space-y-3">
                  {experience.duties.map((duty, i) => (
                    <li key={i} className="flex text-slate">
                      <span className="text-highlight mr-2">▹</span>
                      <span>{duty}</span>
                    </li>
                  ))}
                </ul>
                {experience.techStack && (
                  <p className="mt-4 font-mono text-sm text-slate">
                    <span className="text-highlight">Tech Stack:</span> {experience.techStack}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
