import React from 'react';
import { withTheme } from './GlobalProvider';

const Header = props => {
    return  (
        <div className={`${props.theme}-header`}>
            <h1>Recipe's App</h1>
        </div>
    )
} 


export default withTheme(Header)