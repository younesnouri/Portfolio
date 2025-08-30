"use client";
import { useState, useEffect } from "react";
import "./Projects.css";
import { useRef } from "react";



interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    video?: string; // optional video
    tools: string;
    link?: string;
}

const projects: Project[] = [


    {
        id: 1,
        title: "MovieGuy",
        description:
            "A web based application to track and review films with an ML based Recommendation System",
        image: "/movieGuy2.jpg",
        video: "/movieguy.mp4", // hover video
        tools: "React, Node.js, Express, PostgreSQL, Python, TensorFlow",
        link: "#",
    },
    {
        id: 2,
        title: "Rotation Plan Platform",
        description: "A web based platform to automate and improve scheduling.",
        image: "/alten1.jpg",
        tools: "React, Java, Spring Boot, PostgreSQL",
        link: "#",
    },
    {
        id: 3,
        title: "Moneta Jewels",
        description: "A website for a jewelry business.",
        image: "monetaa.jpg",
        tools: "Next.js, Tailwind CSS, Supabase",
        link: "#",
    },
    {
        id: 4,
        title: "LeGym App",
        description: "A react native expo mobile app for Concordia fitness center LeGym.",
        image: "legym.jpg",
        video: "/Legym.mp4", // hover video
        tools: "React Native, Expo, Firebase, Stripe",
        link: "#",
    },
];

export default function Projects() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState<"left" | "right">("right");
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    // Auto-slide timer
    useEffect(() => {
        const interval = setInterval(() => {
            if (!isHovered) {
                nextProject() // only advance if not hovered
            }
        }, 10000); // 5 seconds, for example

        return () => clearInterval(interval);
    }, [isHovered, currentIndex]); // depends on hover & index


    const prevProject = () => {
        setDirection("left");
        setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
    };

    const nextProject = () => {
        setDirection("right");
        setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
    };

    const goToProject = (index: number) => {
        setDirection(index > currentIndex ? "right" : "left");
        setCurrentIndex(index);
    };

    const project = projects[currentIndex];

    return (
        <section className="projects-section">
            <h2 className="projects-title">Projects</h2>
            <div className="title-underline"></div>
            <div className="projects-content">
                <div
                    key={project.id}
                    className="project-card"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <div className={`project-image ${direction}`} onMouseEnter={() => {
                        if (videoRef.current) {
                            videoRef.current.currentTime = 0; // restart
                            videoRef.current.play();
                        }
                    }}
                        onMouseLeave={() => {
                            if (videoRef.current) {
                                videoRef.current.pause();
                            }
                        }}
                    >

                        {/* Background image */}
                        <div
                            className="project-bg"
                            style={{ backgroundImage: `url(${project.image})` }}
                        ></div>

                        {/* Hover video */}
                        {project.video && (
                            <video
                                ref={videoRef}
                                className="project-video"
                                src={project.video}
                                muted
                                loop
                                playsInline
                            />
                        )}

                        <div className="project-overlay">
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>
                            <p className="project-tools">{project.tools}</p>
                        </div>
                    </div>


                    <button className="project-nav left" onClick={prevProject}>
                        &#10094;
                    </button>
                    <button className="project-nav right" onClick={nextProject}>
                        &#10095;
                    </button>
                </div>

                <div className="project-indicators">
                    {projects.map((_, index) => (
                        <div
                            key={index}
                            className={`indicator ${currentIndex === index ? "active" : ""}`}
                            onClick={() => goToProject(index)}
                        ></div>
                    ))}
                </div>
            </div>
        </section>
    );
}
