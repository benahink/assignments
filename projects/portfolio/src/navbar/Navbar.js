import React, { Component } from 'react';
import './Navbar.css';
import logo from '../image/bk-logo.png';
import {Link, withRouter} from 'react-router-dom';

class Navbar extends Component {
    constructor() {
        super();
        this.state = {
            active: false
        }
    }

    handleToggle = () => {
        window.addEventListener("click", (e) => {
            if(e.target.id === "nav-toggle" || (e.target.parentNode && e.target.parentNode.id === "nav-toggle") || (e.target.parentNode.parentNode && e.target.parentNode.parentNode.id === "nav-toggle")){
                this.setState(prevState => {
                    return {active: !prevState.active}
                })
            }else{
                this.setState({
                    active: false
                })
            }
        })
    }

    render() { 
        const menuDrop = this.state.active ? "none" : "menu";
        return ( 
            <div className="nav-container">
                <nav role="navigation" className="nav">
                    <span className='nav-toggle' id="nav-toggle" onClick={this.handleToggle}>
                        <i className="fas fa-bars"></i>
                    </span>
                    <img src={logo} className="image" alt="BK"/>
                    <div className={menuDrop}>
                        <ul className="nav-list">
                            <li><Link to="/" className="nav-links">Home</Link></li>
                            <li><Link to="/intro" className="nav-links">Intro</Link></li>
                            <li><Link to="/skills" className="nav-links">Skills</Link></li>
                            <li><Link to="/projects" className="nav-links">Projects</Link></li>
                            <li><Link to="/resume" className="nav-links">Resume</Link></li>
                            <li><Link to="/about" className="nav-links">About me</Link></li>
                        </ul>
                    </div>
                </nav>              
            </div>
        )
    }
}
 
export default Navbar;