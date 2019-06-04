import React from 'react';
import './Home.css';
import './Navbar.css';

const Home = () => {
    return (
        <div className="home-container">
            <div className="row">
                <div className="span1">
                    <img src="../images/pots.jpeg" alt=""/> 
                </div>
                <p className="span2">
                    Cooking is like painting or writing a song. Just as there are only so many notes or colors, there are only so many flavors - it's how you combine them that sets you apart. 
                    <br/> 
                    <br/>
                    -Wolfgang Puck
                </p>
                <div className="photos">
                    <div className="firstPic" style={{backgroundImage:`url("https://images.unsplash.com/photo-1548370003-c17e7f080a06?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60")`}}></div>
                    <div className="secPic" style={{backgroundImage:`url("https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60")`}}></div>
                    <div className="thirdtPic" style={{backgroundImage:`url("https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60")`}}></div>
                    <div className="fourthPic" style={{backgroundImage:`url("https://images.unsplash.com/photo-1543362906-acfc16c67564?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60")`}}></div>
                    <div className="fifthPic" style={{backgroundImage:`url("https://images.unsplash.com/photo-1503810473512-f64b56827964?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60")`}}></div>
                    <div className="sixthPic" style={{backgroundImage:`url("https://images.unsplash.com/photo-1548370003-c17e7f080a06?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60")`}}></div>
                </div>
                <div className="footer">
                    <p>Posted by: Beni Kur</p>
                    <p>To see the full code, please visit <a href="https://github.com/benahink/assignments/tree/master/projects/personal-react-api-project">
                    GitHub</a>.</p>
                </div>
            </div>
        </div>
    );
}
 
export default Home;