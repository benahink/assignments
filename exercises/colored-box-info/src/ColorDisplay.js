import React from 'react'
import styles from './styles.css'

const ColorDisplay = (props) => {
    
    const styles = {
        background: props.backgroundColor
    }

    return (
        <div style={styles} >
            <p>{props.title}</p>
            <p>{props.subtitle}</p>
            <p>{props.info}</p>
        </div>
    )
}

export default ColorDisplay