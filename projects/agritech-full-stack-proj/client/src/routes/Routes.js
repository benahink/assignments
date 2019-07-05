import React from "react";
import { Route, Switch } from "react-router-dom";

import Feeds from "../feed/Feeds.js";
import Home from "../navbar/Home.js";
import Navbar from '../navbar/Navbar.js';
import Footer from '../footer/Footer.js';
import Customers from '../customers/Customers';
import Merchants from '../merchants/Merchants';
<<<<<<< HEAD
import HomePage from "../login-signup/HomePage.js"
=======
// import HomePage from "../login-signup/HomePage.js"
>>>>>>> 9154b0b8d7378fb706475d0b8ec4e4260c0f5aa1

const Routes = () => {
    return (
        <div class="home">
            <Navbar />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/myprofile" component={Home}/>
                <Route path="/newsfeed" component={Feeds}/>
                <Route path="/customer" component={Customers}/>
                <Route path="/merchant" component={Merchants}/>
            </Switch>
            <Footer />
        </div>
    )
}

export default Routes;