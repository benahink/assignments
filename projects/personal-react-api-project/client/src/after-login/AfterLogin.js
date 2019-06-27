import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Footer from './footer/Footer.js';
import Navbar from './navbar/Navbar.js';
import TopRecipes from './navbar/TopRecipes.js';
import MyFav from './navbar/MyFav.js';
import Recipe from './recipe/Recipe.js';

const AfterLogin = () => {
    return ( 
        <>
            <Navbar />
            <Switch>
                <Route exact path='/' component={TopRecipes}/>
                <Route path="/recipes" component={Recipe}/>
                <Route path='/my-favorites' component={MyFav}/>
            </Switch>
            <Footer />
        </>
    );
};
 
export default AfterLogin;