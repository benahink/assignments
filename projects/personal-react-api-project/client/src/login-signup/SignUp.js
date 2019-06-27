import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withProvider } from "../GlobalProvider.js";
import './Login.css';

class SingUp extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            // name: "",
            email: "", 
            password: ""
        }
    }

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    handleChange = event => {
        this.setState({
          [event.target.id]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.props);
        this.props.signup(this.state)
            .then(() => this.props.history.push("/recipes"));
    }

    render() { 
        return (
            <div className="FormCenter">
                <form className="FormFields" onSubmit={this.handleSubmit}>
                    {/* <div className="FormField">
                        <label  htmlFor="name" className="FormField__Label">Full Name</label>
                        <input  type="text" 
                                id="name" 
                                placeholder="Enter your full name" 
                                className="FormField__Input"
                                name="name"
                                onChange={this.handleChange}/>
                    </div> */}
                    <div className="FormField">
                        <label  htmlFor="email" className="FormField__Label">E-mail Address</label>
                        <input  type="email" 
                                id="email" 
                                placeholder="Enter your email" 
                                className="FormField__Input"
                                name="email"
                                value={this.state.email}
                                onChange={this.handleChange}/>
                    </div>
                    <div className="FormField">
                        <label  htmlFor="password" className="FormField__Label">Password</label>
                        <input  type="password" 
                                id="password" 
                                placeholder="Enter your password" 
                                className="FormField__Input"
                                name="password"
                                value={this.state.password}
                                onChange={this.handleChange}/>
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
 
export default withProvider(SingUp);