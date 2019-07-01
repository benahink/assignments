import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import Logout from "../logout/Logout.js";
import Messages from './Messages.js';
import DisplayPanels from '../accordion/DisplayPanels.js';
import './Home.css';
import './Navbar.css';

const Home = (props) => {
    return (
        <>
            <div className="App">
                    <div className="App__Form">
                        <div>
                            <div className="PageSwitcher">
                                <NavLink to="/newsfeed" 
                                        activeClassName="PageSwitcher__Item--Active"
                                        className="PageSwitcher__Item">Messages</NavLink>
                                <NavLink exact to="/" 
                                        activeClassName="PageSwitcher__Item--Active"
                                        className="PageSwitcher__Item">Logout</NavLink>
                            </div>
                            <Messages />
                        </div>
                        {/* <Route exact path="/" component={SignUp}></Route> */}
                        <Route path="/" component={Logout}></Route> 
                    </div>  
                    <div className="App__Aside">
                        <DisplayPanels />
                    </div>
                </div>
            </>
    );
}
 
export default Home;