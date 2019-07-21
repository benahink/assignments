import React, { Component } from 'react';
import './Projects.css';
import ProjectsCard from "./ProjectsCard.js"

class Projects extends Component {
    render() { 
        return ( 
            <div className="projects-container">
                <h1 className="projects-title">Projects</h1>
                <div className="projects">
                    <ProjectsCard />
                </div>
            </div>
         );
    }
}
 
export default Projects;