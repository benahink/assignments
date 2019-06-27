import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Footer from '../footer/Footer.js';
import Navbar from '../navbar/Navbar.js';

import TopRecipes from '../navbar/TopRecipes.js';
import MyFav from '../navbar/MyFav.js';

const AfterLogin = () => {
    return ( 
        <div>
            <Navbar />
                <Switch>
                    <Route path='/top-recipes' component={TopRecipes}/>
                    <Route path='/my-favorites' component={MyFav}/>
                </Switch>
            <Footer />
        </div>
    );
};
 
export default AfterLogin;