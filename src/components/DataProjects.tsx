"use client";
import { JSX } from "react";
import { FaPython, FaDatabase, FaBrain } from "react-icons/fa";
import { motion } from "framer-motion";


interface DataProject {
  id: number;
  title: string;
  description: string;
  icons?: JSX.Element[];
  tools: string[];
}

const dataProjects: DataProject[] = [
  {
    id: 1,
    title: "Movie Recommendation System",
    description:
      "Built a content-based and collaborative filtering model to recommend movies based on user ratings.",
    icons: [<FaPython key="p1" />, <FaBrain key="b1" />],
    tools: ["Python", "Pandas", "Scikit-learn", "Matplotlib","Tensorflow"],
  },
  {
    id: 2,
    title: "Churn Prediction Analysis",
    description:
      "Performed Data Analysis and visualization on over 3M data points to predict potential customer churns for CIH Bank.",
    icons: [<FaPython key="p2" />, <FaDatabase key="d1" />],
    tools: ["Python", "Seaborn", "XGBoost", "SQL","Pandas"],
  },
  
  {
    id: 4,
    title: "Steam Reviews Big Data Analysis",
    description:
      "Analyzed 40M Steam reviews using Apache Spark, Neo4j, Kafka, and AWS for distributed insights.",
    icons: [<FaPython key="p4" />, <FaDatabase key="d2" />],
    tools: ["PySpark", "Neo4j", "Kafka", "AWS", "Docker"],
  },
];

export default function DataProjects() {
  return (
    <section className="data-projects-section">
      

      <div className="data-projects-grid">
      {dataProjects.map((project, index) => (
            <motion.div
            key={project.id}
            className="data-project-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
          <div key={project.id} className="data-project-card">
            <div className="data-project-icons">
              {project.icons?.map((icon, idx) => (
                <span key={idx}>{icon}</span>
              ))}
            </div>
            <h3 className="data-project-title">{project.title}</h3>
            <p className="data-project-description">{project.description}</p>
            <div className="data-project-tools">
              {project.tools.map((tool, idx) => (
                <span key={idx} className="tool-badge">{tool}</span>
              ))}
            </div>
          </div>
          </motion.div>
        ))}
      </div>

      <style jsx>{`
        .data-projects-section {
          padding: 0rem 2rem;
          background-color: #1c1c1c;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 3rem;
        }

        .data-projects-title {
          font-size: 2rem;
          font-weight: 1000;
          color: aquamarine;
          margin-bottom: 2rem;
          font-family: "Space Grotesk", sans-serif;
          text-align: center;
        }

        .data-projects-grid {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          justify-content: center;
          width: 100%;
          max-width: 1200px;
        }

        .data-project-card {
          background-color: rgba(255, 255, 255, 0.05);
          border-radius: 1rem;
          padding: 2rem;
          flex: 1 1 300px;
          max-width: 335px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          height: 380px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .data-project-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0, 255, 200, 0.3);
        }

        .data-project-title {
          font-size: 1.2rem;
          font-weight: 700;
          color: aquamarine;
          font-family: "Fira Code", sans-serif;
          margin-bottom: 1rem;
        }

        .data-project-description {
          font-size: 0.9rem;
          font-weight: 500;
          color:#B0E0E6;
          margin-bottom: 1rem;
          font-family: "Space Grotesk", sans-serif;
          letter-spacing: 1px;
        }

        .data-project-icons {
          display: flex;
          gap: 0.8rem;
          font-size: 1.5rem;
          color: aquamarine;
          margin-bottom: 1rem;
        }

        .data-project-tools {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-top: auto;
        }

        .tool-badge {
          background: rgba(0, 255, 200, 0.15);
          color: aquamarine;
          font-size: 0.8rem;
          padding: 0.3rem 0.6rem;
          border-radius: 0.5rem;
          font-family: "Fira Code", monospace;
          border: 1px solid aquamarine;
        }
      `}</style>
    </section>
  );
}
