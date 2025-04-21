
import React from "react";
import { Github, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

interface ProjectItem {
  title: string;
  description: string[];
  technologies: string[];
  github?: string;
  external?: string;
  featured?: boolean;
}

const projects: ProjectItem[] = [
  {
    title: "AI Doc Assistant (Hackathon Winner)",
    description: [
      "Built an AI-powered document assistant using LLMs to enable interactive PDF content analysis.",
      "Enabled users to ask context-aware questions, with the system delivering accurate, human-like answers based on document content.",
      "Secured 1st place in an internal hackathon by showcasing innovative problem-solving with real-world applications.",
    ],
    technologies: ["LLMs", "Python", "PDF Analysis", "Natural Language Processing"],
    featured: true,
  },
  {
    title: "Intelligent Examination System",
    description: [
      "Created a platform for online exams with features for both subjective and objective exams.",
      "Implemented evaluation of subjective answers using NLTK and LSTM.",
      "Developed a feature enabling teachers to generate objective and subjective questions automatically from provided text.",
    ],
    technologies: ["NLTK", "LSTM", "Python", "Web Development"],
    featured: true,
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-heading">
          <span className="text-highlight mr-2">03.</span> Some Things I've Built
        </h2>
        
        <div className="space-y-24">
          {projects.filter(p => p.featured).map((project, i) => (
            <div 
              key={`featured-${i}`}
              className={cn(
                "relative grid md:grid-cols-12 gap-4 items-center",
                i % 2 === 1 && "md:text-right"
              )}
            >
              {/* Project Content */}
              <div className={cn(
                "relative z-10 md:col-span-7 md:px-6",
                i % 2 === 0 ? "md:col-start-1" : "md:col-start-6"
              )}>
                <p className="font-mono text-teal-500 text-sm mb-1">Featured Project</p>
                <h3 className="text-2xl font-semibold text-slate-800 mb-6">
                  {project.title}
                </h3>
                
                <div className={cn(
                  "bg-white p-6 rounded shadow-md",
                  i % 2 === 1 && "md:ml-auto"
                )}>
                  <ul className="space-y-2 text-slate-600">
                    {project.description.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
                
                <ul className={cn(
                  "flex flex-wrap gap-x-4 gap-y-2 mt-6 font-mono text-sm text-slate-600",
                  i % 2 === 1 && "md:justify-end"
                )}>
                  {project.technologies.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
                
                <div className={cn(
                  "flex items-center mt-6 gap-4",
                  i % 2 === 1 && "md:justify-end"
                )}>
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-slate-600 hover:text-teal-500 transition-colors"
                      aria-label={`GitHub link for ${project.title}`}
                    >
                      <Github size={22} />
                    </a>
                  )}
                  {project.external && (
                    <a 
                      href={project.external} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-slate-600 hover:text-teal-500 transition-colors"
                      aria-label={`External link for ${project.title}`}
                    >
                      <ExternalLink size={22} />
                    </a>
                  )}
                </div>
              </div>
              
              {/* Project Image - using a placeholder gradient */}
              <div className={cn(
                "h-full w-full absolute md:relative md:col-span-7 md:row-span-full",
                i % 2 === 1 ? "md:col-start-1" : "md:col-start-6"
              )}>
                <div className="bg-gradient-to-br from-slate-100 to-slate-200 w-full h-[300px] md:h-full rounded opacity-50 md:opacity-30"></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* <h3 className="text-center font-mono text-xl text-slate-800 mt-32 mb-12">
          Other Noteworthy Projects
        </h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array(3).fill(null).map((_, i) => (
            <Card key={`other-${i}`} className="bg-white border-slate-200 hover:translate-y-[-5px] transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <div className="text-teal-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div className="flex gap-3">
                    <a href="#" className="text-slate-600 hover:text-teal-500 transition-colors">
                      <Github size={20} />
                    </a>
                    <a href="#" className="text-slate-600 hover:text-teal-500 transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  Project {i + 1}
                </h3>
                
                <p className="text-slate-600 mb-8">
                  {i === 0 && "A visualization dashboard for tracking and analyzing data from multiple sources."}
                  {i === 1 && "Microservice architecture implementing secure API endpoints with authentication."}
                  {i === 2 && "Progressive web app with offline capabilities and push notifications."}
                </p>
                
                <ul className="flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-slate-600">
                  {i === 0 && ["React", "D3.js", "REST API"].map(tech => <li key={tech}>{tech}</li>)}
                  {i === 1 && ["Spring Boot", "JWT", "Docker"].map(tech => <li key={tech}>{tech}</li>)}
                  {i === 2 && ["Vue.js", "PWA", "IndexedDB"].map(tech => <li key={tech}>{tech}</li>)}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default Projects;
