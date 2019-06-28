import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../navbar/Home.js";
import TopRecipes from '../navbar/TopRecipes.js';
import MyFav from '../navbar/MyFav.js';
import Navbar from '../navbar/Navbar.js';
import Footer from '../footer/Footer.js';
import HomePage from "../login-signup/HomePage.js"

const Routes = () => {
    return (
        <div class="home">
            <Navbar />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/home" component={TopRecipes}/>
                <Route path="/myprofile" component={Home}/>
                <Route path="/myfavorites" component={MyFav}/>
            </Switch>
            <Footer />
        </div>
    )
}

export default Routes;