import React, { Component } from 'react';
import './Work.css';
import WorkCard from "./WorkCard.js"

class Work extends Component {

    render() { 
        return ( 
            <div className="works-container">
                <h1>Work: </h1>
                <div className="works">
                    <WorkCard />
                </div>
            </div>
         );
    }
}
 
export default Work;