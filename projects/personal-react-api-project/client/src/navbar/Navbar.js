import React from 'react';
import { Link } from 'react-router-dom';
import { withProvider } from '../GlobalProvider.js'
import './Navbar.css';

const Navbar = (props) => {
    return (
        <>
            <div className="bar"></div>
            <div className="navbar">
                <h1 className="app-name">Recipe's App</h1>
                <Link to="/myprofile">My Profle</Link>
                <Link to="/home">Top Recipes</Link>
                {/* <Link to="/myfavorites">My Favorites</Link> */}
                <Link exact to="/" onClick={props.logout}>Logout</Link>
            </div>
        </>
    )
}

export default withProvider(Navbar);