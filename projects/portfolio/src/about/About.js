import React, { Component } from 'react';
import image from "../image/magic-mouse.jpeg"
import './About.css';


class About extends Component {
    render() { 
        return ( 
            <div className="about-main">
                <img src={image} alt="image" className="about-image"/>
                <div className="about-content">
                    <h1>Contact me</h1>
                    <div className="contact-me">
                        <h3>benahink@gmail.com</h3>
                        <p className="about-me">Looking for new exciting opportunites. Hire me!</p>
                        <ul className="font-awesome-about">
                            <a href="https://www.linkedin.com/in/benahin-kur-542634139/">
                                <i class="fab fa-linkedin-in fa-2x"></i>
                            </a>
                            <a href="https://github.com/benahink">
                                <i class="fab fa-github fa-2x"></i>
                            </a> 
                            <a href="https://twitter.com/BenahinK">
                                <i class="fab fa-twitter fa-2x"></i>
                            </a>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default About;