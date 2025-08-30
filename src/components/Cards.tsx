"use client";

import React from "react";

interface ProjectCardProps {
    title: string;
    subtitle: string;
    skills: string[];
    image: string;
}

export default function ProjectCard({
    title,
    subtitle,
    skills,
    image,
}: ProjectCardProps) {
    return (
        <>
            <div className="project-card">
                {/* Left Content */}
                <div className="project-content">
                    <h2 className="project-title">{title}</h2>
                    <p className="project-subtitle">{subtitle}</p>
                    <div className="skills">
                        {skills.map((skill, index) => (
                            <span className="skill-badge" key={index}>
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Right Image */}
                <div className="project-image">
                    <img src={image} alt={title} />
                </div>
            </div>

            <style jsx>{`
        .project-card {
          display: flex;
          align-items: center;
          justify-content: space-between;
          
          border-radius: 20px;
          padding: 2rem;
          gap: 2rem;
          max-width: 800px;
          margin: 1rem auto;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          height: 300px;
        }

        .project-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
        }

        .project-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .project-title {
          font-family: 'Fira Code', monospace;
          font-size: 1.8rem;
          font-weight: 700;
          color: aquamarine;
        }

        .project-subtitle {
          font-family: 'DM Sans', sans-serif;
          font-size: 1rem;
          color: #b0e0e6;
          line-height: 1.5;
          max-width: 90%;
        }

        .skills {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .skill-badge {
          background: rgba(176, 224, 230, 0.1);
          color: #e0f7fa;
          padding: 0.4rem 0.8rem;
          border-radius: 20px;
          font-size: 0.85rem;
          font-family: 'DM Sans', sans-serif;
          border: 1px solid rgba(176, 224, 230, 0.3);
        }

        .project-image {
          flex: 0.8;
          display: flex;
          justify-content: center;
          align-items: center;
         
          border : none;
          background: none;
          margin-top :150px
          
        }

        .project-image img {
          width: 80%;
          height: auto;
          border-radius: 0px;
          object-fit: cover;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.25);
        }

        @media (max-width: 768px) {
          .project-card {
            flex-direction: column;
            padding: 1.5rem;
          }

          .project-image img {
            width: 100%;
          }
        }
      `}</style>
        </>
    );
}
