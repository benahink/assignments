import React from 'react';
import { Link } from 'react-router-dom';
import { withProvider } from '../GlobalProvider.js';
import './Navbar.css';

const Navbar = (props) => {
    return (
        <>
            <div className="bar"></div>
            <div className="header">
                <h1 className="app-name">Farming Medium</h1>
            </div>
            <div className="navbar">
                <Link to="/myprofile">Account</Link>
                <Link to="/customers">Customers</Link>
                <Link to="/merchants">Merchants</Link>
                <Link to="/newsfeed">Feed</Link>
                <Link exact to="/" onClick={props.logout}>Logout</Link>
            </div>
        </>
    )
}

export default withProvider(Navbar);