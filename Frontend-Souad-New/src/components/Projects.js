import React from 'react'
import ProjectCard from './ProjectCard'
import { Link } from 'react-router-dom'
import PrCard from './PrCard'
import './ProjectCard.css';
function Projects() {
    return (
        <div className="projects" id="Projects">
            <h1>My Projects</h1>
            <div className="projects--container">
                <div className="projects--wrapper">
                    <ul className="projects--items">
                        <PrCard />
                    </ul>
                </div>
            </div>
            <Link to="/project">
                <button className="button">
                    See All my Work
                </button>
            </Link>
        </div>
    )
}

export default Projects
