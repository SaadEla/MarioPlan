import React from 'react';
import ProjectSummary from './ProjectSummary';
import { NavLink } from 'react-router-dom';

const ProjectList = ({projects}) => {

  let projiyat = projects && projects.map( projet => {
    return(
      <NavLink to={'/project/'+ projet.id} key={projet.id} >
        <ProjectSummary {...projet} />
      </NavLink>
    )
  })
  return (
    <div className="project-list section">
      {projiyat}
    </div>
  )
}

export default ProjectList;

