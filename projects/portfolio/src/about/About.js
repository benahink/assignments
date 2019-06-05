import React, { Component } from 'react';
import './About.css';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
        
        }
    }

    render() { 
        return ( 
            <div className="about-container">
                <h1>About me: </h1>
                <div className="about">
                    <div className="contact-me">
                        <h3>benahink@gmail.com</h3>
                        <p>__________</p>
                        <br/>
                        <p className="about-me">I am a full-stack developer. more stuff about me will go here. not sure what to put yet.</p>
                    </div>
                    <div className="my-photos">
                       <img src="https://images.unsplash.com/photo-1524751299649-7551517b4a6b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60" alt=""/>
                       {/* <img src="https://images.unsplash.com/photo-1490772888775-55fceea286b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60" alt=""/> */}

                    </div>
                </div>
            </div>
        );
    }
}
 
export default About;