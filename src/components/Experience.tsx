
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
    range: "Nov 2023 - Jul 2024",
    duties: [
      "Migrated the UI from FreeMarker templates to Vue.js, improving page load speed by ~40% for large datasets.",
      "Took over and maintained a multi-variant product suite within 6 months, reducing handover and ramp-up time by ~30%.",
      "Created reusable Vue.js components across banking, insurance, and IFRS17 modules.",
      "Documented code thoroughly with ticket references and optimization notes, improving developer onboarding time.",
      "Worked in an Agile team environment using Git, CI/CD pipelines, and RESTful APIs to deploy scalable microservices.",
    ],
    techStack: "Spring Boot, Vue.js, PostgreSQL, MySQL",
  },
  {
    company: "Insightsoftware",
    title: "Front-End Developer",
    range: "Dec 2021 - Nov 2023",
    duties: [
      "Delivered a key feature integrating in-house data visualization tools via APIs, enhancing client reporting and contributing to a ~39% boost in customer satisfaction and retention.",
      "Migrated 10+ legacy modules from jQuery to React.js, improving performance and maintainability, leading to fewer bug reports.",
      "Managed virtual machines and software build pipelines (TC, RC, GA), reducing deployment errors through improved versioning and QA collaboration.",
      "Followed structured Git branching (feature, bugfix, release), ensuring cleaner merges and reducing rollback.",
    ],
    techStack: "React.js, JavaScript, jQuery, Azure DevOps",
  },
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
                {exp.company} - {exp.title.split(' ')[0]}
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
