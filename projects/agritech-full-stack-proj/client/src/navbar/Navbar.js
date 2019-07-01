import React from 'react';
import { Link } from 'react-router-dom';
import { withProvider } from '../GlobalProvider.js';
import { Header, Image } from 'semantic-ui-react';
import './Navbar.css';

const Navbar = (props) => {
    return (
        <>
            <div className="bar"></div>
            <div className="header">
                <h1 className="app-name">Farming Medium</h1>
                <Header as='h2' className="avatar">
                    Your Name
                    <Image circular src='https://react.semantic-ui.com/images/avatar/large/patrick.png' /> 
                </Header>
            </div>
            <div className="navbar">
                <Link to="/myprofile">Account</Link>
                <Link to="/customers">Customers</Link>
                <Link to="/merchants">Merchants</Link>
                <Link to="/newsfeed">Feed</Link>
                <Link exact to="/" onClick={props.logout}>Logout</Link>
            </div>
        </>
    )
}

export default withProvider(Navbar);