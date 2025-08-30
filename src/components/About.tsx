"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "./About.css";

const tools = [
  { name: "Java", logo: "/logos/java.png", category: "Backend", proficiency: 85 },
  { name: "Python", logo: "/logos/python.png", category: "Backend", proficiency: 90 },
  { name: "React", logo: "/logos/react.png", category: "Frontend", proficiency: 95 },
  { name: "TypeScript", logo: "/logos/typescript.png", category: "Frontend", proficiency: 88 },
  { name: "Node.js", logo: "/logos/nodejs.png", category: "Backend", proficiency: 82 },
  { name: "Next.js", logo: "/logos/nextjs.png", category: "Frontend", proficiency: 85 },
  { name: "AWS", logo: "/logos/aws.png", category: "Cloud", proficiency: 75 },
  { name: "Git", logo: "/logos/git.png", category: "Tools", proficiency: 92 },
  { name: "Docker", logo: "/logos/docker.png", category: "DevOps", proficiency: 80 },
  { name: "CSS", logo: "/logos/css.png", category: "Frontend", proficiency: 90 },
  { name: "SQL", logo: "/logos/sql.png", category: "Database", proficiency: 85 },
  { name: "MongoDB", logo: "/logos/mongodb.png", category: "Database", proficiency: 78 }
];

const stats = [
  { label: "Projects Completed", value: 25, suffix: "+" },
  { label: "Technologies Mastered", value: 15, suffix: "+" },
  { label: "Years of Experience", value: 3, suffix: "+" },
  { label: "Coffee Cups", value: 1000, suffix: "+" }
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredTool, setHoveredTool] = useState<string | null>(null);

  const categories = ["All", "Frontend", "Backend", "Database", "Cloud", "DevOps", "Tools"];

  const filteredTools = activeCategory === "All"
    ? tools
    : tools.filter(tool => tool.category === activeCategory);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`about-section ${isVisible ? "visible" : ""}`}
    >
      {/* Background Elements */}
      <div className="floating-code">
        <span>{"{ }"}</span>
        <span>{"[ ]"}</span>
        <span>{"< />"}</span>
        <span>{"< />"}</span>
      </div>

      <div className="section-container">
        {/* Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">
            <span className="title-prefix">About me</span>
          </h2>
          <div className="title-underline"></div>
        </motion.div>

        {/* Main Content */}
        <div className="about-content">
          {/* Left Side - About Text & Stats */}
          <motion.div
            className="about-left"
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* About Text */}
            <div className="about-text-container">
              <div className="property-line">
                <span className="property-key">name:</span>
                <span className="property-value">Younes Nouri</span>
              </div>
              <div className="property-line">
                <span className="property-key">role:</span>
                <span className="property-value">Full-Stack Developer</span>
              </div>
              <div className="property-line">
                <span className="property-key">passion:</span>
                <span className="property-value">Building innovative solutions</span>
              </div>
              <div className="property-line">
                <span className="property-key">description:</span>
                <span className="property-value">
                  I&apos;m passionate about creating web applications that solve real-world problems.
                  I love experimenting with new technologies and building projects that challenge me to grow.
                </span>
              </div>
              <div className="property-line">
                <span className="property-key">tools:</span>
                <span className="property-value">
                  <div className="tools-grid">
                    {tools.map((tool) => (
                      <div className="data-project-tools" key={tool.name}>
                        <span className="tool-badge">
                          <span className="blinking">&gt; </span>
                          {tool.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Profile Image */}
          <motion.div
            className="about-right"
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="image-container">
              <div className="image-frame">
                <img src="/profile.jpg" alt="Younes Nouri" className="profile-image" />
              </div>
              <div className="image-caption">
                <span className="caption-text"></span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Count-up animation component
function CountUpAnimation({ target, duration, delay }: { target: number; duration: number; delay: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const increment = target / (duration / 16);
      let current = 0;

      const counter = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(counter);
        } else {
          setCount(Math.floor(current));
        }
      }, 16);

      return () => clearInterval(counter);
    }, delay);

    return () => clearTimeout(timer);
  }, [target, duration, delay]);

  return <span>{count}</span>;
}
