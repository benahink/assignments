import React from 'react'
import Colors from './Colors'
import './styles.css'

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            squares: ['white', 'white', 'white', 'white']
        }

    }

    
    blackSquares = () => {
        this.setState(prevState => {
            for (let i = 0; i < 4; i++) {
                if(this.state.squares[i] === 'white') {
                    return {
                        squares: ['black', 'black', 'black', 'black']
                    }
                } else {
                    return {
                        squares: ['white', 'white', 'white', 'white']
                    }
                }
            }
        })
    }

    purpleSquares = () => {
        this.setState(prevState => {
            for (let i = 0; i < 4; i++) {
                if(this.state.squares[i] !== 'purple') {
                    return {
                        squares: ['purple', 'purple', 'white', 'white']
                    }
                } else {
                    return {
                        squares: ['white', 'white', 'white', 'white']
                    }
                }
            }
        })
    }
    
    render() {
        const mapped = this.state.squares.map(square => {
           return <Colors color={square}/>
        })
        return (
            <div className='parent-component'>
                {mapped}
                <button onClick={this.blackSquares} id='small-time' type='button'>Black or White</button>
                <button onClick={this.purpleSquares} id='party-dj' type='button'>Purple</button>
                <button id='pro-dj' type='button'>Left Blue</button>
                <button id='pro-dj' type='button'>Right Blue</button>
            </div>
        )
    }
}

export default App