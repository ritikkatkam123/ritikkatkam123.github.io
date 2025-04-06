
import React from "react";
import { ArrowRight } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-20 pb-10 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
        <h1 className="font-mono text-highlight mb-5 text-lg">Hi, my name is</h1>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-lighter mb-3">
          Ritik Katkam.
        </h2>
        <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate mb-8">
          I build things for the web.
        </h3>
        <p className="text-slate text-lg max-w-2xl mb-12">
          I'm a software engineer specializing in building exceptional digital experiences. 
          Currently, I'm focused on expanding my knowledge in Computer Information Systems 
          at Colorado State University while applying my 3 years of industry experience 
          building accessible, human-centered products.
        </p>
        <a href="#projects" className="button inline-flex items-center">
          Check out my work
          <ArrowRight size={16} className="ml-2" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
