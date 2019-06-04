import React from 'react';
import './Home.css';
import './Navbar.css'

const Home = () => {
    return (
        <div className="home-container">
            <div className="row">
                <div className="span2"></div>
                <p className="span10">
                    Cooking is like painting or writing a song. Just as there are only so many notes or colors, there are only so many flavors - it's how you combine them that sets you apart. 
                    <br/> 
                    <br/>
                    -Wolfgang Puck
                </p>
            </div>
        </div>
    );
}
 
export default Home;