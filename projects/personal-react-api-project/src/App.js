import React, { Component } from 'react';
import RecipeCard from './recipe/RecipeCard.js';
// import Recipe from './recipe/Recipe.js'
import Navbar from './navbar/Navbar.js';
import { Switch, Route } from 'react-router-dom';
import "./App.css"

import Home from './navbar/Home.js';
import TopRecipes from './navbar/TopRecipes.js';

class App  extends Component {
    render() {
        return (
            <div className="container">
                <Navbar />
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/top-recipes' component={TopRecipes}/>
                    <Route path='./my-favorites' component={RecipeCard}/>
                </Switch>
                {/* <Recipe /> */}
            </div>
        )
    }
}
 
export default App;