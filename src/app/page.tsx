"use client";

import Navbar from "@/components/NavBar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Masonry from "@/components/Masonry";
import CustomGrid from "@/components/CustomGrid";
import SlidePages from "@/components/FullPageScroll";
import ProjectsSection from "@/components/Projects2";
import Footer from "@/components/Footer";
import DataProjects from "@/components/DataProjects";
import "./globals.css";

export default function HomePage() {
  return (

    <>
    <Navbar />
    <section id="home" >
    <Hero />
      </section>
    
    <About />

    <section id="projects" >
    <Projects />
    <DataProjects />
      </section>
    
    
    
    
    
    {/* <FullPageWrapper /> */}
    {/* <Masonry />
    <CustomGrid /> */}

    
    <Footer/>
    
    </>
  );
}

