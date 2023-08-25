import React from 'react';
import '../styles/projectsContainer.css';
import ProjectCard from './ProjectCard';
import {projectData} from '../data/projectData'

const ProjectsContainer = () => {
  return (
    <div className='projects-container'>
        <h1 className='projects-heading'>Project</h1>
        <div className='project-card-container'>
          {projectData.map((project) => (
            <ProjectCard key={project.title} {...project} />

          ))}
        </div>
    </div>
  )
}

export default ProjectsContainer