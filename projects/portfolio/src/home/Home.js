import React, { Component } from 'react';
import Navbar from './Navbar.js';
import pic from '../image/my-logo.png';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <>
                <Navbar />
                <div className="backImg" style={{backgroundImage:`url(${pic})`}}></div> 
            </>
         );
    }
}
 
export default Home;