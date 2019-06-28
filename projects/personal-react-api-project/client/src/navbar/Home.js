import React from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import Logout from "../logout/Logout.js";
import './Home.css';
import './Navbar.css';

const Home = (props) => {
    return (
       <div className="App">
                <div className="App__Form">
                    <div className="PageSwitcher">
                        <NavLink to="/signin" 
                                activeClassName="PageSwitcher__Item--Active"
                                className="PageSwitcher__Item">My Favorites</NavLink>
                        <NavLink exact to="/" 
                                activeClassName="PageSwitcher__Item--Active"
                                className="PageSwitcher__Item">Logout</NavLink>
                    </div>
                    {/* <Route exact path="/" component={SignUp}></Route> */}
                    <Route path="/" component={Logout}></Route> 
                </div>  
                <div className="App__Aside"></div>
            </div>
    );
}
 
export default Home;