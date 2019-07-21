import React, { Component } from 'react';
import './Projects.css';

class ProjectsCard extends Component {
    render() { 
        return ( 
            <>
            <div className="projects-card-container">
                    <div className="my-projects projects-one">
                        <h2>Chat App</h2>
                        <div className="solid-line_projects"></div>
                        <div>Technologies: Chatkit, React.js. MongoDB</div>
                    </div>
                    <div className="my-projects projects-two">
                        <h2>Recipe App</h2>
                        <div></div>
                    </div>
                    <div className="my-projects projects-three">
                         <h2>More projects</h2>
                        <div></div>
                    </div>
                </div>
            </>
        );
    }
}
 
export default ProjectsCard;