import React from 'react'

const Colors = (props) => {
    return (
        <div className='squares' style={{background: props.color}}></div>
    )
}

export default Colors