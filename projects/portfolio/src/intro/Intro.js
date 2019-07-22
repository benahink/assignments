import React from 'react';
import './Intro.css';

const Intro = () => {
    return ( 
        <div className="intro-container">
            <div className="intro-left">
                <h1 className="intro-left_title">Intro</h1>
                <h1 className="intro-left_description">"Intuitive <span>design</span> happens when current knowledge is the same as target knowledge."</h1> 
                <p className="intro-left_paragraph"></p>
            </div>
            <div className="intro-right">
                <p className="intro-right_paragraph">
                    I am a full-stack developer based in Salt Lake City, UT. My skills include front-end and back-end development. I love minimalistic design and enjoy building/creating apps that are practical, enjoyable and user friendly.
                    <br/>
                    <br/>
                    As a full stack developer, I am constantly learning about Web App Development and Software Engineering through online courses, training, books and meet ups.
                </p>
            </div>
        </div>
     );
}
 
export default Intro;