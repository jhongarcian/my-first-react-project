import React, {useEffect, useState} from "react";
import './css/Project.css'

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => setProjects(data))
  },[])

  return (
    <div className="project-container">
      <p className="product-header">My projects </p>
      <div className="projects">
        {projects.map(project => {
          return (
            <div className="project" key={project.id}>
              <img src={project.image} alt={project.title} />
              <div className="project-details">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
                <div className="project-links">
                  <a href={project.url} target="_blank" rel="noopener noreferrer">Wishlist</a>
                  <a href={project.url} target="_blank" rel="noopener noreferrer">Buy</a>
                </div>
            </div>
          )
        })}
      </div>
    </div>

  );
};
export default Projects;
