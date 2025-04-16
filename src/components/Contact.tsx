
import React from "react";
import { Github, Linkedin, Mail, FileText } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-mono text-highlight mb-4 text-sm">06. What's Next?</h2>
        <h3 className="text-4xl md:text-5xl font-bold text-slate-lighter mb-6">
          Get In Touch
        </h3>
        <p className="text-slate text-lg mb-12 max-w-lg mx-auto">
          I'm currently looking for new opportunities. Whether you have a question 
          or just want to say hello, I'll do my best to get back to you!
        </p>
        <div className="flex justify-center mb-12">
          <a
            href="mailto:ritik.katkam@gmail.com"
            className="button text-base px-8 py-3"
          >
            Say Hello
          </a>
        </div>
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-slate hover:text-highlight transition-colors"
          >
            <Github size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/ritik-katkam/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-slate hover:text-highlight transition-colors"
          >
            <Linkedin size={22} />
          </a>
          <a
            href="mailto:ritik.katkam@gmail.com"
            aria-label="Email"
            className="text-slate hover:text-highlight transition-colors"
          >
            <Mail size={22} />
          </a>
          <a
            href="/lovable-uploads/2f234822-1f07-4b18-bdbb-4b78ebd2fddb.png"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Resume"
            className="text-slate hover:text-highlight transition-colors"
          >
            <FileText size={22} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
