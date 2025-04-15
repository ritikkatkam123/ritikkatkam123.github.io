
import React, { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  name: string;
  url: string;
}

const navItems: NavItem[] = [
  { name: "About", url: "#about" },
  { name: "Experience", url: "#experience" },
  { name: "Projects", url: "#projects" },
  { name: "Skills", url: "#skills" },
  { name: "Education", url: "#education" },
  { name: "Contact", url: "#contact" },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll function for anchor links
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId.substring(1));
    
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 100, // Offset for fixed header
        behavior: 'smooth'
      });
      
      if (mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 px-6 md:px-12 lg:px-24 transition-all duration-300",
        isScrolled
          ? "bg-white/90 backdrop-blur-md py-4 shadow-lg"
          : "bg-transparent py-6"
      )}
    >
      <nav className="flex items-center justify-between">
        <a href="#" className="text-teal-500 font-mono text-xl font-bold">
          RK
        </a>

        {isMobile ? (
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-slate-800"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        ) : (
          <div className="flex items-center space-x-1">
            <ul className="flex font-mono">
              {navItems.map((item, i) => (
                <li key={item.name}>
                  <a
                    href={item.url}
                    className="nav-link text-sm"
                    onClick={(e) => handleNavClick(e, item.url)}
                  >
                    <span className="text-teal-500 mr-1">{`0${i + 1}.`}</span>{" "}
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="/Resume-Ritik-Katkam.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="button ml-4"
            >
              Resume
            </a>
          </div>
        )}

        {/* Mobile menu */}
        {isMobile && mobileMenuOpen && (
          <div className="fixed inset-0 top-[72px] bg-white/90 backdrop-blur-md z-50 flex flex-col items-center justify-center animate-fade-in">
            <ul className="flex flex-col items-center space-y-6 font-mono">
              {navItems.map((item, i) => (
                <li key={item.name}>
                  <a
                    href={item.url}
                    className="text-lg"
                    onClick={(e) => {
                      handleNavClick(e, item.url);
                      setMobileMenuOpen(false);
                    }}
                  >
                    <span className="text-teal-500 mr-2">{`0${i + 1}.`}</span>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="/Resume-Ritik-Katkam.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="button mt-8"
              onClick={() => setMobileMenuOpen(false)}
            >
              Resume
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
