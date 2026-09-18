import React from "react";
import { projects } from "../../data/projects";
import ProjectCard from "./ProjectCard";
import AskProjects from "./AskProjects";
import "./Projects.css";

function ProjectsList() {
  return (
    <div className="projects-page">
      <div className="page_name">Projects</div>
      <p className="projects-intro">
        A handful of the things I've actually shipped — mostly agentic AI systems
        running on Google Cloud, plus the infra and computer vision work behind them.
      </p>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <AskProjects />
    </div>
  );
}

export default ProjectsList;
