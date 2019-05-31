import React from 'react';
import Recipe from './recipe/Recipe.js';
import Navbar from './navbar/Navbar.js';
import Header from './Header.js';
import { Switch, Route } from 'react-router-dom';

import Home from './navbar/Home.js';
import TopRecipes from './navbar/TopRecipes.js';
import MyFav from './navbar/MyFav.js';

const App = () => {
   return (
        <>
            <Header />
            <Navbar />
            <Switch>
                <Route exact path='./' component={Home}/>
                <Route path='./top-recipes' component={TopRecipes}/>
                <Route path='./my-favorites' component={MyFav}/>
            </Switch>
            <Recipe />
        </>
   )
}
 
export default App;