import React, { Component } from 'react';
// import React from 'react';
import { Link, Route } from "react-router-dom";
import HomePage from "../login-signup/HomePage.js"


class Logout extends Component {
    handleClick = (e) => {
        e.preventDefault();
        this.props.logout(this.props.users, this.props.token)
        .then(() => this.props.history.push("/"))
    }

    render() { 
    
        return ( 
            <div>
                <Link to="/" />
            </div>
         );
    }
}
 
export default Logout;


// const Logout = () => {

//     handleClick = (e) => {
//         e.preventDefault();
//         this.props.logout(this.state)
//         .then(() => this.props.history.push("/"))
//     }

//     return ( 
//         <div>
//             <Route path="/" component={HomePage}/>
//         </div>
//      );
// }
 
// export default Logout;