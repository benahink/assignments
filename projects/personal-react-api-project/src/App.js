import React from 'react';
import RecipeCard from './recipe/RecipeCard.js';
import Recipe from './recipe/Recipe.js'
import Navbar from './navbar/Navbar.js';
import Header from './Header.js';
import { Switch, Route } from 'react-router-dom';
import "./App.css"

import Home from './navbar/Home.js';
import TopRecipes from './navbar/TopRecipes.js';

const App = () => {
   return (
        <div className="main-container">
            <Header />
            <Navbar />
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/top-recipes' component={TopRecipes}/>
                <Route path='./my-favorites' component={RecipeCard}/>
            </Switch>
            <Recipe />
        </div>
   )
}
 
export default App;