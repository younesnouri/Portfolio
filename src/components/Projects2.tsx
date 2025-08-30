import ProjectCard from "./Cards";

export default function ProjectsSection() {
    return (
      <div>
        <ProjectCard
          title="Portfolio Website"
          subtitle="A sleek and modern personal portfolio website built with HTML, CSS, and JavaScript."
          skills={["HTML", "CSS", "JavaScript", "Responsive Design"]}
          image="/movieGuy2.jpg"
        />
        <ProjectCard
          title="E-commerce App"
          subtitle="An online shopping platform with real-time inventory management and payment integration."
          skills={["React", "TypeScript", "Node.js"]}
          image="/alten1.jpg"
        />
      </div>
    );
  }
  