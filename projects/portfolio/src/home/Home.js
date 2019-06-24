import React, { Component } from 'react';
import Navbar from './Navbar.js';
import pic from '../image/my-logo.png';

class Home extends Component {
    render() { 
        return ( 
            <div className="home-page">
                <Navbar />
                <div className="backImg" style={{backgroundImage:`url(${pic})`}}></div> 
            </div>
         );
    }
}
 
export default Home;