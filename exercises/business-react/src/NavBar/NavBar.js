import React from 'react'
import './Navbar.css'


const NavBar = () => {
    return ( 
        <div>
            <nav role="navigation" style={{height: "125px"}}>
                <div id="menuToggle">
                    <input type="checkbox" />
                    <span></span>
                    <span></span>
                    <span></span>
                    <ul id="menu" className="menu">
                        <h2>IN AFRICA</h2>
                        <h3>_____________</h3>
                        <a href="#" className="toggleAncor menu"><li>Home</li></a>
                        <a href="#" className="toggleAncor menu"><li>In Music</li></a>
                        <a href="#" className="toggleAncor menu"><li>In TV</li></a>
                        <a href="#" className="toggleAncor menu"><li>In Fashion</li></a>
                        <a href="#" className="toggleAncor menu"><li>In News</li></a>
                        <a href="#" className="toggleAncor menu"><li>Contact us</li></a>
                    </ul>
                </div>
            </nav>              
        </div>
    )
}

export default NavBar