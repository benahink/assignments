import React, { Component } from 'react';
import './Work.css';
import WorkCard from "./WorkCard.js"

class Work extends Component {
    constructor(props) {
        super(props);
    }

    render() { 
        return ( 
            <div className="main-container">
                <h1>Work: </h1>
                <div className="work-container">
                    <WorkCard />
                    <WorkCard />
                    <WorkCard />
                </div>
            </div>
         );
    }
}
 
export default Work;