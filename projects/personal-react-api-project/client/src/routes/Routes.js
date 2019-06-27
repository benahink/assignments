import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../login-signup/HomePage.js";

import TopRecipes from '../navbar/TopRecipes.js';
import MyFav from '../navbar/MyFav.js';
import Navbar from '../navbar/Navbar.js';

const Routes = () => {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route path='/home' component={TopRecipes}/>
                <Route path='/my-favorites' component={MyFav}/>
            </Switch>
        </div>
    )
}

export default Routes;