import React, { Component } from 'react';
import Blue from '../image/dark-light-blue.jpeg';

class ProjectsCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
        
        }
    }

    render() { 
        return ( 
            <>
                <div className="card-container one">
                    <a  href="https://github.com/benahink/assignments/tree/master/projects/personal-react-api-project" 
                        id="aTagLink"><h3>Recipe App</h3></a>
                    <p>__________</p>
                    <br/>
                    <p className="description">I built a recipe app using React Native.</p>
                </div>
                <div className="card-container two">
                <a href="" id="aTagLink"><h3>CSS Zen Garden</h3></a>
                    <p>__________</p>
                    <br/>
                    <p className="description">For this project, I recreated the website http://www.csszengarden.com</p>
                </div>
                <div className="card-container three">
                <a href="" id="aTagLink"><h3>Role Playing Game</h3></a>
                    <p>__________</p>
                    <br/>
                    <p className="description">Project Description: This is where I describe what the project is about</p>
                </div>
                <div className="someColor" style={{backgroundImage:`url(${Blue})`}}></div>
            </>
        );
    }
}
 
export default ProjectsCard;