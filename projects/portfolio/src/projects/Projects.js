import React, { Component } from 'react';
import './Projects.css';
import ProjectsCard from "./ProjectsCard.js"

class Projects extends Component {
    constructor(props) {
        super(props);
    }

    render() { 
        return ( 
            <div className="main-container">
                <h1>Projects: </h1>
                <div className="projects-container">
                    <ProjectsCard />
                    <ProjectsCard />
                    <ProjectsCard />
                </div>
            </div>
         );
    }
}
 
export default Projects;