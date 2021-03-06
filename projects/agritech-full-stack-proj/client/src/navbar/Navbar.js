import React from 'react';
import { Link } from 'react-router-dom';
import { withProvider } from '../GlobalProvider.js';
import './HamburgerMenu.css';
import './Navbar.css';

const Navbar = (props) => {
    return (
        <>
            <div className="bar"></div>
            <div className="header">
                <nav role="navigation">
                    <div id="menuToggle">
                        <input type="checkbox" />
                        <span></span>
                        <span></span>
                        <span></span>
                        <ul id="menu" className="menu">
                            <h2>YOUR NAME</h2>
                            <h3>_____________</h3>
                            <li><Link to="/myprofile">Account</Link></li>
                            <li><Link to="/customer">Customers</Link></li>
                            <li><Link to="/merchant">Merchants</Link></li>
                            <li><Link to="/newsfeed">Feed</Link></li>
                            {/* <Link exact to="/" onClick={props.logout}>Logout</Link> */}
                        </ul>
                    </div>
                </nav> 
                <h1 className="app-name">Farming Medium</h1>
            </div>
        </>
    )
}

export default withProvider(Navbar);