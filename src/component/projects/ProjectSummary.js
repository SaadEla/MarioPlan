import React from 'react';
import moment from 'moment';

const ProjectSummary = (props) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title ">{props.title}</span>
        <p>Posted by {props.authorFirstName} {props.authorLastName}</p>
        <p className="grey-text">{ moment(props.createdAt.toDate()).calendar() }</p>
      </div>
    </div>
  )
}

export default ProjectSummary