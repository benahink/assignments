import React from 'react';
import { Link } from 'react-router-dom';
import Styles from './Navbar.css';

const Navbar = () => {
    return(
        <div className="navbar">
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to="services">Services</Link>
        </div>
    )
}

export default Navbar;