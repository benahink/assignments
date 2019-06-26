import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

class SingUp extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className="FormCenter">
                <form className="FormFields" onSubmit={this.handlesubmit}>
                    <div className="FormField">
                        <label  htmlFor="name" className="FormField__Label">Full Name</label>
                        <input  type="text" 
                                id="name" 
                                placeholder="Enter your full name" 
                                className="FormField__Input"
                                name="name"/>
                    </div>
                    <div className="FormField">
                        <label  htmlFor="password" className="FormField__Label">Password</label>
                        <input  type="password" 
                                id="password" 
                                placeholder="Enter your password" 
                                className="FormField__Input"
                                name="password"/>
                    </div>
                    <div className="FormField">
                        <label  htmlFor="email" className="FormField__Label">E-mail Address</label>
                        <input  type="email" 
                                id="email" 
                                placeholder="Enter your email" 
                                className="FormField__Input"
                                name="email"/>
                    </div>
                    <div className="FormField">
                        <button className="FormField__Button mr-20">Sign Up</button>
                        <Link to="/sign-in" className="FormTitle__Link">I'm already a member</Link>
                    </div>
                </form>
            </div>
        );
    }
}
 
export default SingUp;