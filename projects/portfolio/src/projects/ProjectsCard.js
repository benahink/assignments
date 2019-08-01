import React, { Component } from 'react';
import './Projects.css';

class ProjectsCard extends Component {
    render() { 
        return ( 
            <>
            <div className="projects-card-container">
                    <div className="my-projects projects-one">
                        <h2 className="projects_title"><a href="https://github.com/benahink/full-stack-group-proj">Chat App</a></h2>
                        <label htmlFor="technologies" className="technologies">Technologies: </label>
                        <ul className="chat-app">
                            <li>ReactJS</li>
                            <li>NodeJS</li>
                            <li>npm</li>
                            <li>Socket.io</li>
                            <li></li>
                        </ul>
                    </div>
                    <div className="my-projects projects-two">
                        <h2 className="projects_title">
                            <a href="https://github.com/benahink/assignments/tree/master/projects/personal-react-api-project">Recipe App</a>
                        </h2>
                        <label htmlFor="technologies" className="technologies">Technologies: </label>
                        {/* <i class="fas fa-utensils fa-3x"></i> */}
                        <ul className="recipe-app">
                            <li>ReactJS</li>
                            <li>NodeJS</li>
                            <li>npm</li>
                            <li></li>
                        </ul>
                    </div>
                    <div className="my-projects projects-three">
                        <h2 className="projects_title"><a href="https://github.com/benahink/my-projects">More Porjects...</a></h2>
                    </div>
                </div>
            </>
        );
    }
}
 
export default ProjectsCard;