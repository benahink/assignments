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

    handleToggle = () => {
        this.setState({active: !this.state.active})
    }

    render() { 
        const menuDrop = this.state.active ? "none" : "menu";
        return ( 
            <div className="nav-container">
                <nav role="navigation" className="nav">
                    <span className='nav-toggle' onClick={this.handleToggle}>
                        <i className="fas fa-bars"></i>
                    </span>
                    <img src={logo} className="image "alt="BK"/>
                    <div className={menuDrop}>
                        <ul className="nav-list">
                            <li><a href="" className="nav-links">Home</a></li>
                            <li><a href="" className="nav-links">Intro</a></li>
                            <li><a href="" className="nav-links">Skills</a></li>
                            <li><a href="" className="nav-links">Projects</a></li>
                            <li><a href="" className="nav-links">Resume</a></li>
                            <li><a href="" className="nav-links">About me</a></li>
                        </ul>
                    </div>
                </nav>              
            </div>
        )
    }
}
 
export default Navbar;