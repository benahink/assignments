import React, { Component } from 'react';
import Purple from '../image/purple-green-print.jpg'
import './Work.css';

class WorkCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
        
        }
    }

    render() { 
        return ( 
            <>
                <div className="workcard-container">
                <a href="" id="workATagLink"><h3>Responsive CSS Grid</h3></a>
                    <p>__________</p>
                    <br/>
                    <p className="description">Project Description: This is where I describe what the project is about</p>
                </div>
                <div className="workcard-container">
                <a href="" id="workATagLink"><h3>Recipe App</h3></a>
                    <p>__________</p>
                    <br/>
                    <p className="description">Project Description: This is where I describe what the project is about</p>
                </div>
                <div className="workcard-container">
                <a href="" id="workATagLink"><h3>Recipe App</h3></a>
                    <p>__________</p>
                    <br/>
                    <p className="description">Project Description: This is where I describe what the project is about</p>
                </div>
                <div className="someColorWork" style={{backgroundImage:`url(${Purple})`}}></div>
            </>
        );
    }
}
 
export default WorkCard;