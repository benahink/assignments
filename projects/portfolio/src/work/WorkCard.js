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
                <div className="work-card-container">
                    <div className="mySkills section-one">
                        <h2>Front-end</h2>
                        <div>HTML CSS Sass</div>
                    </div>
                    <div className="mySkills section-two">
                        <h2>Back End</h2>
                        <div></div>
                    </div>
                    <div className="mySkills section-three">
                        <h2>More Skills Here</h2>
                        <div></div>
                    </div>
                </div>
            </>
        );
    }
}
 
export default WorkCard;