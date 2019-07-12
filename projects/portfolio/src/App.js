import React, { Component } from 'react';
import Navbar from './navbar/Navbar.js';
import About from './about/About.js';
import Work from './work/Work.js';
import Intro from './intro/Intro.js';
import Resume from './resume/Resume.js';

import './App.css'

class App extends Component {
    constructor() {
        super();
        this.state = { 

         }
    }
    render() { 
        return ( 
            <div className="app-container">
                <Navbar />
                <Intro />
                <Work />
                <Resume />
                <About />
            </div>
        );
    }
}
 
export default App;