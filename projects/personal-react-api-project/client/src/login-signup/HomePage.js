import React from 'react';
import { BrowserRouter, Route, Link, NavLink } from 'react-router-dom';
import SignUp from "./SignUp.js";
import SignIn from "./SignIn.js";
import ("./Login.css");

const HomePage = () => {
    return ( 
        <BrowserRouter>
            <h1 className="header">Recipe's App</h1>
            <div className="App">
                <div className="App__Aside"></div>
                <div className="App__Form">
                    <div className="PageSwitcher">
                        <NavLink to="/sign-in" 
                                activeClassName="PageSwitcher__Item--Active"
                                className="PageSwitcher__Item">Sign In</NavLink>
                        <NavLink exact to="/" 
                                activeClassName="PageSwitcher__Item--Active"
                                className="PageSwitcher__Item">Sign Up</NavLink>
                    </div>
                    <div className="FormTitle">
                        <NavLink to="/sign-in" 
                                activeClassName="FormTitle__Link--Active" 
                                className="FormTitle__Link">Sign In</NavLink> 
                        or 
                        <NavLink exact to="/" 
                                activeClassName="FormTitle__Link--Active"
                                className="FormTitle__Link">Sign Up</NavLink>
                    </div>
                    <Route exact path="/" component={SignUp}></Route>
                    <Route path="/sign-in" component={SignIn}></Route>
                </div>  
            </div>
        </BrowserRouter>
    );
}
 
export default HomePage;