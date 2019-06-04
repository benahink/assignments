import React from 'react';
import { Link } from 'react-router-dom'
import './Navbar.css';

const Navbar = (props) => {
    return (
        <>
            <div className="bar"></div>
            <div className="navbar">
                <Link to="/" id="header">
                    Recipe's App
                </Link>
                <Link to="/">Home</Link>
                <Link to="/top-recipes">Top Recipes</Link>
                <Link to="/my-favorites">My Favorites</Link>
            </div>
        </>
    )
}

export default Navbar;