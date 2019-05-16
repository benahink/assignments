import React from 'react';
import ColorDisplay from './ColorDisplay';
import styles from './styles.css';

const colorBoxes =  [
    {
        id: 1,
        background: 'lightblue', 
        title: 'This Box',
        subtitle: 'these boxes were made with react',
        information: 'this is the info section'
    },
    {
        id: 2,
        background: 'lightgray', 
        title: 'This Box',
        subtitle: 'these boxes were made with react',
        information: 'this is the info section'
    },
    {
        id: 3,
        background: 'lightgreen', 
        title: 'This Box',
        subtitle: 'these boxes were made with react',
        information: 'this is the info section'
    },
    {
        id: 4,
        background: 'goldenrod', 
        title: 'This Box',
        subtitle: 'these boxes were made with react',
        information: 'this is the info section'
    }
]


const Main = () => {

    const mappedColors = colorBoxes.map((color) => {
        return <ColorDisplay key={color.id} backgroundColor={color.background} title={color.title} subtitle={color.subtitle} info={color.information}/> 
    })

    return (
        <div className="container">
            {mappedColors}
        </div>
    )
}

export default Main