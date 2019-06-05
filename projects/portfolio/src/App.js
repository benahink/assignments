import React, { Component } from 'react';
import Projects from './projects/Projects.js';
import Work from './work/Work.js';

class App extends Component {
    constructor() {
        super();
        this.state = { 

         }
    }
    render() { 
        return ( 
            <>
                <Projects />
                <Work />
            </>
        );
    }
}
 
export default App;