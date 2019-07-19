import React, { Component } from 'react';
import './Navbar.css';
import logo from '../image/bk-logo.png';

class Navbar extends Component {
    constructor() {
        super();
        this.state = {
            active: false
        }
    }

    // handleToggle = (prevState) => {
    //     this.setState({active: !prevState.active})
    // }

    render() { 
        let className = "toggle";
        if(this.state.active) {
            className += 'toggle-active'
        }
        return ( 
            <>
                <nav role="navigation" className="nav">
                    <span className={className}>
                        <i className="fas fa-bars"></i>
                    </span>
                    <img src={logo} className="image "alt="BK"/>
                    <ul className="menu">
                        <li><a href="" className="nav-links">Home</a></li>
                        <li><a href="" className="nav-links">Intro</a></li>
                        <li><a href="" className="nav-links">Skills</a></li>
                        <li><a href="" className="nav-links">Background</a></li>
                        <li><a href="" className="nav-links">Projects</a></li>
                        <li><a href="" className="nav-links">About me</a></li>
                    </ul>
                </nav>              
            </>
        )
    }
}
 
export default Navbar;