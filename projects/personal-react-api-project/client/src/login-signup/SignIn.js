import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withProvider } from '../GlobalProvider.js'

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "", 
            password: ""
        }
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState ({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        // event.preventDefault();
        this.props.login(this.state)
        .then(() => this.props.history.push("/home"))
    }

    render() { 
        return ( 
            <div className="FormCenter">
                <form className="FormFields" onSubmit={this.handleSubmit}>
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
                        <button className="FormField__Button mr-20">Sign In</button>
                        <Link exact to="/" className="FormTitle__Link">Create an account</Link>
                    </div>
                </form>
            </div>
         );
    }
}
 
export default withProvider(SignIn);