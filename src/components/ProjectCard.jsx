import { Github, ExternalLink } from "lucide-react";

function ProjectCard({project}) {
  return (
    <div className="card project-card">
      <div className="project-image">
        {
          project.image ? (
                    <img src={project.image} alt={project.title} />


          ):(
            <span classname="image-placeholder">{project.title[0]}</span>

          )
        }
      </div>

      <h3>{project.title}</h3>
      <p className="muted">{project.description}</p>

      <div className="badges">
        {
          project.technologies,map((tech)=>(
            <span classname="badge small" key={tech}>{tech</span>

          ))
        }
      </div>

      <div className="project-links">
        <a className="btn btn-ghost btn-small" href={project.Github}><Github size={16} /></a>
                <a className="btn btn-ghost btn-small" href={project.demo}><Github size={16} /></a>

        <a className="btn btn-primary btn-small"><ExternalLink size={16} /></a>
      </div>
    </div>
  );
}

export default ProjectCard;
