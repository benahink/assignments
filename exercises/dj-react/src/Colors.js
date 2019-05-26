import React from 'react';
import Color from './Color';

const Colors = (props) => {
    return (
        <div className='squares' style={{background: props.color}}></div>
    )
}

export default Colors;
