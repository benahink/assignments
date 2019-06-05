import React, { Component } from 'react';

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
                    <h4>View project</h4>
                    <h3>Exercise Name</h3>
                    <p>__________</p>
                    <br/>
                    <p className="description">Project Description: This is where I describe what the project is about</p>
                </div>
            </>
        );
    }
}
 
export default WorkCard;