
import React from "react";
import myImage from "../../69334.jpg";
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
              Hello! I'm Ritik, a software engineer passionate about creating exceptional 
              digital experiences. My journey in tech began during my undergraduate studies 
              in Information Science and Engineering, and I've since gained over 3 years of 
              experience as a Full-Stack Developer.
            </p> 
            <p className="mb-4">
              Currently, I'm pursuing a Master's in Computer Information Systems at Colorado 
              State University, while also bringing real-world development expertise from my 
              time at Insightsoftware where I've worked on everything from UI migrations to 
              maintaining multi-variant product suites.
            </p>
            <p className="mb-4">
              I enjoy solving complex problems through clean code and collaboration. 
              My experience spans across various technologies including React.js, Vue.js, 
              Spring Boot, and database systems. I'm particularly interested in creating 
              intuitive interfaces that enhance user experience while maintining robust 
              functionality.
            </p>
            <p>
              Outside of coding, I'm passionate about AI applications, data visualization, 
              participating in hackathons (prßoud winner of one!), and contributing to 
              open-source projects.
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
