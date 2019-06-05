import React, { Component } from 'react';
import Projects from './projects/Projects.js';
import About from './about/About.js'
import Work from './work/Work.js';

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
                <Projects />
                <Work />
                <About />
            </div>
        );
    }
}
 
export default App;