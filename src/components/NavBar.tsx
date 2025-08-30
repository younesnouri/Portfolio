"use client";

import { useState, useEffect } from "react";
import classNames from "classnames";

import "./NavBar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      
      // Get all sections
      const sections = ["home", "about", "projects"];
      const scrollPosition = window.scrollY + 100; // Offset for better detection
      
      // Find which section is currently in view
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveLink(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    // Call once to set initial state
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (link: string, e: React.MouseEvent) => {
    e.preventDefault();
    
    const section = document.getElementById(link);
    if (section) {
      // Smooth scroll to section
      section.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
      
      // Update active link immediately for better UX
      setActiveLink(link);
    }
    
    setIsOpen(false); // Close mobile menu if open
  };

  return (
    <nav className={classNames("navbar", { scrolled })}>
      <div className="navbar-container">
        { !scrolled && <  div className="navbar-logo">Younes Nouri</div>}

        <div className="navbar-links">
          {["home", "about", "projects"].map((link) => (
            <a
              key={link}
              href={`#${link}`}
              className={classNames({ active: activeLink === link })}
              onClick={(e) => handleLinkClick(link, e)}
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </a>
          ))}
        </div>

        <div className="navbar-hamburger">
          <button
            className="hamburger-btn"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="hamburger-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
      </div>

      <div className={classNames("mobile-menu", { open: isOpen })}>
        {["home", "about", "projects", "contact"].map((link) => (
          <a
            key={link}
            href={`#${link}`}
            className={classNames({ active: activeLink === link })}
            onClick={(e) => handleLinkClick(link, e)}
          >
            {link.charAt(0).toUpperCase() + link.slice(1)}
          </a>
        ))}
      </div>
    </nav>
  );
}