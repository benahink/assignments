import React from 'react';
import "./App.css"
import { withProvider } from './GlobalProvider';

const Header = props => {
    return  (
        <div className="header">
            <h1>Recipe's App</h1>
        </div>
    )
} 


export default withProvider(Header)