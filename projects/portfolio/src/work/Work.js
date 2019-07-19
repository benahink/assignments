import React, { Component } from 'react';
import './Work.css';
import WorkCard from './WorkCard.js';

class Work extends Component {
    constructor(props) {
        super(props);
    }

    render() { 
        return ( 
            <div className="work-container">
                <h1>Skills </h1>
                <div className="work">
                    <WorkCard />
                </div>
            </div>
         );
    }
}
 
export default Work;