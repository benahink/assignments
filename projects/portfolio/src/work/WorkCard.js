import React, { Component } from 'react';
import './Work.css';

class WorkCard extends Component {

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