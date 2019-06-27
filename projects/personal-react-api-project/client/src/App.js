import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './login-signup/HomePage.js';
import Recipe from './recipe/Recipe.js';
import './App.css';

class App  extends Component {
    render() {
        return (
            <div className="app-container">
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route path="/recipes" component={Recipe}/>
                </Switch>
            </div>
        )
    }
}
 
export default App;