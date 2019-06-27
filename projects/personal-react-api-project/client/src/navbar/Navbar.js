import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = (props) => {
    return (
        <>
            <div className="bar"></div>
            <div className="navbar">
                {/* <Link to="/">Home</Link> */}
                <Link to="/home">Top Recipes</Link>
                <Link to="/my-favorites">My Favorites</Link>
            </div>
        </>
    )
}

export default Navbar;