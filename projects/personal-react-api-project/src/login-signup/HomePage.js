import React, { Component } from 'react';
import ("./Login.css");

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="App">
                <div className="App__Aside"></div>
                <div className="App__Form">
                    <div className="PageSwitcher">
                        <a href="#" className="PageSwitcher__Item">Sign In</a>
                        <a href="#" className="PageSwitcher__Item PageSwitcher__Item--Active">Sign Up</a>
                    </div>

                    <div className="FormTitle">
                        <a href="#" className="FormTitle__Link">Sign In</a> 
                        or 
                        <a href="" className="FormTitle__Link FormTitle__Link--Active">Sign Up</a>
                    </div>

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
                                <a href="#" className="FormTitle__Link">I'm already a member</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default HomePage;