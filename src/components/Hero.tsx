
import React from "react";
import { ArrowRight } from "lucide-react";

const Hero: React.FC = () => {
  // Smooth scroll function for the "Check out my work" button
  const handleCheckoutClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const projectsSection = document.getElementById('projects');
    
    if (projectsSection) {
      window.scrollTo({
        top: projectsSection.offsetTop - 100, // Offset for fixed header
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center pt-20 pb-10 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
        <h1 className="font-mono text-teal-500 mb-5 text-lg">Hi, my name is</h1>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-800 mb-3">
          Ritik Katkam.
        </h2>
        <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate-600 mb-8">
          I build digital experiences that people actually enjoy using.
          
        </h3>
        <p className="text-slate-600 text-lg max-w-2xl mb-12">
          
I'm a full-stack software engineer with 3 years of experience creating enterprise applications for Fortune 500 clients. I recently completed my Master's in Computer Information Systems at Colorado State University and I'm actively seeking my next challenge in software engineering.
 </p>
        <a 
          href="#projects" 
          className="button inline-flex items-center"
          onClick={handleCheckoutClick}
        >
          Check out my work
          <ArrowRight size={16} className="ml-2" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
