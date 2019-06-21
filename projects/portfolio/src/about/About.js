import React, { Component } from 'react';
import Yellow from '../image/yellow-paint-splash.jpeg'
import Red from '../image/beautiful-pattern.jpeg'
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
                        <p className="about-me">I am a full-stack developer based in Salt Lake City, UT. My skills include front-end development, and back-end development. 
                            I love minimalistic design and enjoy building/creating apps that are practical, enjoyable and user friendly.
                        </p>
                    </div>
                    <div className="my-photos" style={{backgroundImage: `url(${Yellow})`}}></div>
                    <div className="someColorWork" style={{backgroundImage:`url(${Red})`}}></div>
                </div>
            </div>
        );
    }
}
 
export default About;