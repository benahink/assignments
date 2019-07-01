import React from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import SignUp from "./SignUp.js";
import SignIn from "./SignIn.js";
import ("./Login.css");

const HomePage = () => {
    return ( 
        <BrowserRouter>
            {/* <h1 className="app-name">Recipe's App</h1> */}
            <div className="App">
                <div className="App__Aside"></div>
                <div className="App__Form">
                    <div className="PageSwitcher">
                        <NavLink to="/signin" 
                                activeClassName="PageSwitcher__Item--Active"
                                className="PageSwitcher__Item">Sign In</NavLink>
                        <NavLink exact to="/" 
                                activeClassName="PageSwitcher__Item--Active"
                                className="PageSwitcher__Item">Sign Up</NavLink>
                    </div>
                    <div className="FormTitle">
                        <NavLink to="/signin" 
                                activeClassName="FormTitle__Link--Active" 
                                className="FormTitle__Link">Sign In</NavLink> 
                        or 
                        <NavLink exact to="/" 
                                activeClassName="FormTitle__Link--Active"
                                className="FormTitle__Link">Sign Up</NavLink>
                    </div>
                    <Route exact path="/" component={SignUp}></Route>
                    <Route path="/signin" component={SignIn}></Route>
                </div>  
            </div>
        </BrowserRouter>
    );
}
 
export default HomePage;