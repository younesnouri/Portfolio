"use client";

import { useEffect, useRef, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import "./Hero.css";

export default function Hero() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const glowRef = useRef<HTMLDivElement>(null);

    // Particles with Canvas
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const particles: { x: number; y: number; vx: number; vy: number; size: number }[] = [];
        for (let i = 0; i < 20; i++) {
            particles.push({
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                vx: (Math.random() - 0.5) * 1,
                vy: (Math.random() - 0.5) * 1,
                size: Math.random() * 3 + 1,
            });
        }

        const animate = () => {
            if (!ctx) return;
            ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
            particles.forEach((p) => {
                p.x += p.vx;
                p.y += p.vy;

                if (p.x < 0 || p.x > window.innerWidth) p.vx *= -1;
                if (p.y < 0 || p.y > window.innerHeight) p.vy *= -1;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = "aquamarine";
                ctx.fill();
            });
            requestAnimationFrame(animate);
        };
        animate();

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Mouse glow
    useEffect(() => {
        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;
        let glowX = mouseX;
        let glowY = mouseY;

        const handleMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        const animateGlow = () => {
            glowX += (mouseX - glowX) * 0.1;
            glowY += (mouseY - glowY) * 0.1;

            if (glowRef.current) {
                glowRef.current.style.left = `${glowX}px`;
                glowRef.current.style.top = `${glowY}px`;
            }

            requestAnimationFrame(animateGlow);
        };

        window.addEventListener("mousemove", handleMouseMove);
        animateGlow();

        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <main className="hero">
            <canvas ref={canvasRef} className="particles-canvas" />
            <div ref={glowRef} className="mouse-glow" />

            <motion.div
                className="content"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <Typewriter text="Hey, Younes here!" speed={70} className="title" />

                <motion.p
                    className="subtitle"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    <span className="terminal-prefix">&gt;</span>
                    Full-Stack Developer | Problem Solver
                </motion.p>

                <motion.p
                    className="subtitle"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                >
                    <span className="terminal-prefix">&gt;</span>
                    Welcome to my portfolio. Scroll to see more about me, skills and projects.
                </motion.p>

                <motion.div
                    className="subtitle"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                >
                    <div className="socials">
                        <a
                            href="https://github.com/younesnouri"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaGithub className="icon" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/younes-nouri-6a4479232/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaLinkedin className="icon" />
                        </a>
                    </div>
                </motion.div>

                <div className="scrollIndicator">
                    <span className="arrow"></span>
                    <span className="scrollText">Scroll</span>
                </div>
            </motion.div>
        </main>
    );
}

// Typewriter
function Typewriter({
    text,
    speed = 60,
    className = "",
}: {
    text: string;
    speed?: number;
    className?: string;
}) {
    const [output, setOutput] = useState("");

    useEffect(() => {
        let i = 0;
        function typeNextChar() {
            if (i <= text.length) {
                setOutput(text.slice(0, i));
                i++;
                setTimeout(typeNextChar, speed);
            }
        }
        typeNextChar();
    }, [text, speed]);

    return (
        <h1 className={className}>
            {output}
            <span className="caret" />
        </h1>
    );
}
