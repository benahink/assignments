import React, { Component } from 'react';
import './Work.css';

class WorkCard extends Component {

    render() { 
        return ( 
            <>
                <div className="work-card-container">
                    <div className="mySkills section-one">
                        <h2 className="front-end_title">Front-end</h2>
                        {/* <div className="solid-line_skills"></div> */}
                        <ul className="front-end_icons">
                            <i className="fab fa-html5 fa-5x"></i>
                            <i className="fab fa-css3-alt fa-5x"></i>
                            <i className="fab fa-js fa-5x"></i>
                            <i className="fab fa-sass fa-5x"></i>
                            <i className="fab fa-npm fa-5x"></i>
                            <i class="fab fa-react fa-5x"></i>
                            {/* <i class="fab fa-node fa-5x"></i> */}
                            <i class="fab fa-github fa-5x"></i>
                        </ul>
                    </div>
                    <div className="mySkills section-two">
                        <h2 className="front-end_title">Back End</h2>
                        <ul className="back-end_icons">
                            <i className="fab fa-java fa-5x"></i>
                            <i class="fab fa-node-js fa-5x"></i>
                        </ul>
                    </div>
                    <div className="mySkills section-three">
                        <h2 className="front-end_title">More Skills...</h2>
                        <ul className="more-skills">
                            <li>MongoDB</li>
                            <li>Responslive Deslign</li>
                            <li>Bootstrap</li>
                            <li>Chrome Developer Tools</li>
                            <li>Testing Debugging</li>
                            <li>WebPack</li>
                            <li>Socket.IO</li>
                        </ul>
                    </div>
                </div>
            </>
        );
    }
}
 
export default WorkCard;