import React from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import Logout from "../logout/Logout.js";
import './Home.css';
import './Navbar.css';
// import avatar from "../images/avatar.png";

const Home = (props) => {
    return (
       <div className="App">
                <div className="App__Form">
                    <span class="aui-avatar aui-avatar-xxlarge">
                        <span class="aui-avatar-inner">
                            <img src="../images/avatar.png" alt="Person McRealface" />
                        </span>
                        <span class="custom-presence-indicator">
                            <svg height="100%" version="1.1" viewBox="0 0 8 8" width="100%" xmlns="http://www.w3.org/2000/svg">
                                <description>Online</description>
                                <circle cx="4" cy="4" r="4"></circle>
                            </svg>
                        </span>
                    </span>
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