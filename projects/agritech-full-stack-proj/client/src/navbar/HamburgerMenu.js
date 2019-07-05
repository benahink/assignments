import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withProvider } from '../GlobalProvider.js';
import './HamburgerMenu.css';

class HamburgerMenu extends Component {
    constructor(props) {
        super(props);
        this.state = { 

        }
    }

    openNav = () => {
        document.getElementById("myNav").style.width = "100%";
    }
      
    closeNav = () => {
        document.getElementById("myNav").style.width = "0%";
    }

    render(props) { 
        return ( 
            <>
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
                            <li><Link to="/customers">Customers</Link></li>
                            <li><Link to="/merchants">Merchants</Link></li>
                            <li><Link to="/newsfeed">Feed</Link></li>
                            {/* <Link exact to="/" onClick={props.logout}>Logout</Link> */}
                        </ul>
                    </div>
                </nav>              
            </>
        )
    }
}
 
export default withProvider(HamburgerMenu);