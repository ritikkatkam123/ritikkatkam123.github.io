
import React from "react";
import { Card } from "@/components/ui/card";

interface SkillCategory {
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages & Frontend",
    skills: ["JavaScript", "HTML", "CSS", "Java", "Python", "React.js", "Vue.js"]
  },
  {
    title: "Backend & Databases",
    skills: ["Spring Boot", "MySQL", "PostgreSQL", "REST APIs"]
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "Azure DevOps", "Power BI", "CI/CD", "Agile", "NLTK", "LSTM"]
  }
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 px-6 md:px-12 lg:px-24 bg-slate-100">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-heading">
          <span className="text-teal-500 mr-2">04.</span> Skills
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <Card key={category.title} className="bg-white border-slate-200 p-6">
              <h3 className="text-xl font-semibold text-teal-500 mb-4">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center text-slate-600">
                    <span className="text-teal-500 mr-2">▹</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
        
        <div className="mt-16">
          <h3 className="text-xl font-semibold text-teal-500 mb-6">
            Key Achievements
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-white border-slate-200 p-6">
              <div className="flex items-start gap-4">
                <div className="bg-slate-100 rounded-full p-3 text-teal-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m12 2 4.5 10 5.5.8-8.3 7.2 2.5 11-9.2-5.8L2 31l2.5-11L-3.8 12.8l5.5-.8L8 2z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-slate-800 mb-2">
                    Hackathon Winner
                  </h4>
                  <p className="text-slate-600">
                    Achieved 1st place in a hackathon organized by InsightSoftware, 
                    demonstrating strong problem solving skills and innovative thinking.
                  </p>
                </div>
              </div>
            </Card>
            
            <Card className="bg-white border-slate-200 p-6">
              <div className="flex items-start gap-4">
                <div className="bg-slate-100 rounded-full p-3 text-teal-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <path d="M14 2v6h6"></path>
                    <path d="M16 13H8"></path>
                    <path d="M16 17H8"></path>
                    <path d="M10 9H8"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-slate-800 mb-2">
                    Published Research Paper
                  </h4>
                  <p className="text-slate-600">
                    Published research paper on "Intelligent Examination System" in IRJMETS 
                    (Volume 3, Issue 7, Certificate No. 249759) and received appreciation from university.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
