import React from 'react';
import Styles from "./App.css";
import Navbar from './Navbar';

import { Switch, Route } from 'react-router-dom' ;

import Home from './Home'
import About from './About'
import Services from './Services'
import Footer from './Footer'

const App = () => {
    return (
        <div>
            <header className="header">
                <img src="../images.water-faucet.png" alt=""/>
                A Plumbing Co.
            </header>
            <Navbar />
            <Switch className='switch'>
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
                <Route path= '/services' component={Services} />
            </Switch>
            <Footer />
        </div>
    )
}

export default App;