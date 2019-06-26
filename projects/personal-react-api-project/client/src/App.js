import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HomePage from "./login-signup/HomePage.js"
import "./App.css";

import Home from './login-signup/HomePage.js';

class App  extends Component {
    render() {
        return (
            <div className="app-container">
                <HomePage />
            </div>
        )
    }
}
 
export default App;