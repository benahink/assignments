import React, { Component } from 'react';
import Navbar from './Navbar.js';
import './Home.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="home">
                <h1 className="home-page-header">hello</h1>
                <div className="home-page">
                    <div className="left-container">
                        <h2>Benahin Kur</h2>
                        <br/>
                        <h3>Full Stack Developer</h3>
                    </div>
                    {/* <div className="right-container">right container</div> */}
                </div>
            </div>
        );
    }
}
 
export default Home;