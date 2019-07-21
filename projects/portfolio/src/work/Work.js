import React, { Component } from 'react';
import './Work.css';
import WorkCard from './WorkCard.js';

class Work extends Component {
    render() { 
        return ( 
            <div className="work-container">
                <h1 className='work-container_title'>Skills</h1>
                <div className="work">
                    <WorkCard />
                </div>
            </div>
        );
    }
}
 
export default Work;