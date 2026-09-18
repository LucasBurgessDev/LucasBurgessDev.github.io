import React from "react";
import { Link } from "react-router-dom";
import Chip from "../ui/Chip";
import "./Projects.css";

function ProjectCard({ project }) {
  const { title, tagline, tech, summary, repoUrl, status, blogId } = project;

  return (
    <div className="project-card">
      <div className="project-card-header">
        <h3>{title}</h3>
        <p className="project-tagline">{tagline}</p>
      </div>
      <div className="project-tech">
        {tech.map((t, i) => (
          <Chip key={i} label={t} />
        ))}
      </div>
      <p className="project-summary">{summary}</p>
      <div className="project-card-footer">
        {repoUrl ? (
          <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="project-link">
            <i className="fab fa-github"></i> View repo
          </a>
        ) : (
          <span className="project-status">{status}</span>
        )}
        {blogId && (
          <Link to={`/blog/${blogId}`} className="project-link">
            Read the write-up <i className="fas fa-arrow-right"></i>
          </Link>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
