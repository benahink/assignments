import React from 'react'
import "./styles.css"

const Spots = (props) => {
    return (
        <div className="container" >
            <p className='place'>Spot: {props.place}</p> 
            <p className='price'>Price: ${props.price}</p> 
            <p className='time'>Best time to travel: {props.time}</p> 
            <img src={props.image} className='photo' alt=""/>
        </div>
    )
}

export default Spots