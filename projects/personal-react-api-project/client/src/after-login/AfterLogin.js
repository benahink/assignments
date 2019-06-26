import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Footer from './footer/Footer.js';
import Navbar from './navbar/Navbar.js';
import TopRecipes from './navbar/TopRecipes.js';
import MyFav from './navbar/MyFav.js';



class AfterLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <>
                <Navbar />
                <Switch>
                    <Route path='/' component={TopRecipes}/>
                    <Route path='/my-favorites' component={MyFav}/>
                </Switch>
                <Footer />
            </>
        );
    }
}
 
export default AfterLogin;