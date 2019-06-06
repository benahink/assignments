import React, { Component } from 'react';
import './Home.css';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    openNav() {
        document.getElementById("myNav").style.width = "100%";
    }
      
    closeNav() {
        document.getElementById("myNav").style.width = "0%";
    }
    render() { 
        return ( 
            <>
                <nav role="navigation">
                    <div id="menuToggle">
                        <input type="checkbox" />
                        <span></span>
                        <span></span>
                        <span></span>
                        <ul id="menu" className="menu">
                            <h2>BENAHIN KUR</h2>
                            <h3>_____________</h3>
                            <a href="#"><li>Home</li></a>
                            <a href="#"><li>About</li></a>
                            <a href="#"><li>Contact</li></a>
                        </ul>
                    </div>
                </nav>              
            </>
         );
    }
}
 
export default Navbar;