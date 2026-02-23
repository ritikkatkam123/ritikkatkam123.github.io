
import React from "react";
import myImage from "../../69334.png";
const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-heading">
          <span className="text-highlight mr-2">01.</span> About Me
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 text-slate">
            <p className="mb-4">
              Hey! I'm Ritik, a full-stack software engineer who loves building products people actually want to use.
            </p>
            <p className="mb-4">
              I spent 3 years at Insightsoftware building enterprise applications for Fortune 500 clients—migrating legacy systems to modern frameworks, integrating APIs, and shipping features that increased adoption by 40% and reduced defects by 35%. I've worked across the full stack with React.js, Vue.js, Spring Boot, and PostgreSQL, and I'm comfortable owning projects from design through deployment.
            </p>
            <p className="mb-4">
              Recently, I won my company's internal hackathon by building an AI-powered document assistant that's now being deployed across 20+ products. That project got me hooked on how AI can solve real problems, not just create demos
            </p>
            <p>
              Right now, I'm finishing my Master's in Computer Information Systems at Colorado State University and actively looking for my next software engineering role where I can keep building, learning, and making an impact.
            </p>
            <p>
              When I'm not coding, you'll find me exploring AI applications, playing cricket, or tinkering with new frameworks. I believe great software comes from understanding what users actually need—not just what they say they want.
            </p>
          </div>
          <div className="relative mx-auto w-full max-w-[300px]">
            <div className="relative z-10 rounded overflow-hidden">
              <div className="absolute inset-0 bg-highlight/20 z-10 rounded hover:bg-transparent transition-colors duration-300"></div>
              <img 
                src={myImage}
                alt="Ritik Katkam" 
                className="grayscale hover:grayscale-0 transition-all duration-300 object-cover w-full h-full rounded"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 h-full w-full border-2 border-highlight rounded z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
