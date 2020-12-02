import React from 'react';
import { Link } from 'react-router-dom';

function ProjectCard(props) {
  return (
    <>
      <li className="projects--item">
        <Link className="projects--item--link" to={props.path}>
          <figure className="projects--item--pic-wrap" data-category={props.label}>
            <img src={props.src} className="projects--item--img" alt="main" />
          </figure>
          <div className="projects--item--info">
            <h5 className="projects--item--text">{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  )
}

export default ProjectCard
