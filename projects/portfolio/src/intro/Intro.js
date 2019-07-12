import React from 'react';
import './Intro.css';
const Intro = () => {
    return ( 
        <div className="intro-container">
            <div className="intro-left">
                <h1 className="intro-left_title">Intro</h1>
                <h1 className="intro-left_description">An <span>overiew</span> of how I approach we application development</h1>
                <p className="intro-left_paragraph">My style of web application develeopment is
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium explicabo fugit et. Placeat, consequatur sunt odit nemo fuga quaerat quas, magni consequuntur vitae quos illum in id corrupti, vero voluptatem?
                </p>
            </div>
            <div className="intro-right">
                <p className="intro-right_paragraph">
                    Write about the countries I've lived in and why we chose to move to the US
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium excepturi, nesciunt odit deleniti vel modi incidunt culpa, dolore ducimus, est libero qui quo atque fugiat repellat provident veritatis aliquam impedit.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, laboriosam dolore. Eveniet provident asperiores id nulla necessitatibus exercitationem obcaecati assumenda laboriosam! Officiis cupiditate eaque dolor doloremque! Facilis illum quos omnis!
                    write about 
                </p>
            </div>
        </div>
     );
}
 
export default Intro;