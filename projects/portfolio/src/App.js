import React from 'react';
import Navbar from './navbar/Navbar.js';
import Home from './home/Home.js';
import About from './about/About.js';
import Work from './work/Work.js';
import Intro from './intro/Intro.js';
import Projects from './projects/Projects'
import Resume from './resume/Resume.js';
import {Route, Switch} from 'react-router-dom'

import './App.css'

const App = () => {
    return ( 
        <div className="app-container">
            <Navbar />
            <Home />
            <Intro />
            <Work /> 
            <Projects /> 
            <Resume />
            <About />
        </div>
    );
    
}
 
export default App;


// <Navbar />
//             <Switch>
//             <Route exact path='/' component={Home}/>
//             <Route path='/intro' component={Intro}/>
//             <Route path='/skills' component={Work}/>
//             <Route path='/projects' component={Projects}/>
//             <Route path='/resume' component={Resume}/>
//             <Route path='/contactme' component={About}/>
//             </Switch>