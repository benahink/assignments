import React, { Component } from 'react';
import './About.css';

class About extends Component {
    render() { 
        return ( 
            <div className="about-container">
                <h1>Contact me </h1>
                <div className="about">
                    <div className="contact-me">
                        <h3>benahink@gmail.com</h3>
                        <div className="about-line-through"></div>
                        {/* <p className="about-me">I am a full-stack developer based in Salt Lake City, UT. My skills include front-end and back-end development. 
                            I love minimalistic design and enjoy building/creating apps that are practical, enjoyable and user friendly.
                            <br/><br/> As a full stack developer, I am constantly learning about Web App Development and Software Engineering through online courses, training, books and meet ups.
                        </p> */}
                        <ul className="font-awesome-about">
                        <i class="fab fa-linkedin-in fa-5x"></i>
                        <i class="fab fa-github fa-5x"></i>
                        <i class="fab fa-twitter fa-5x"></i>
                    </ul>
                    </div>
                    <div className="contact-me_image">image here</div>
                </div>
            </div>
        );
    }
}
 
export default About;