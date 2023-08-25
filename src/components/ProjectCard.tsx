import React from 'react';
import '../styles/projectCard.css';
import Project1 from '../assets/project-1.png';
import {NavLink} from 'react-router-dom';
import { ProjectDataType } from '../data/projectData';

const ProjectCard = ({imgUrl, title, text, view, source}: ProjectDataType) => {
  return (
        <div className='card'>
            <img src={imgUrl} alt='Project 1' />
            <h2 className='project-title'>{title}</h2>
            <div className='project-details'>
                <p>{text}</p>
                <div className='project-btns'>
                    <NavLink to={view} className='btn'>
                        View
                    </NavLink>
                    <NavLink to={source} className='btn'>
                        Source
                    </NavLink>
                </div>
            </div>
        </div>
  )
}

export default ProjectCard