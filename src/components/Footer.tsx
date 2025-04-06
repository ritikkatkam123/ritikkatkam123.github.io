
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="py-6 px-6 md:px-12 lg:px-24 text-center text-sm text-slate">
      <div className="max-w-5xl mx-auto">
        <p className="mb-2">
          Designed & Built by Ritik Katkam
        </p>
        <p>© {new Date().getFullYear()} - All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
