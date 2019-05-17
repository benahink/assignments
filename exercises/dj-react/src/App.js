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
           const newSquares = prevState.squares.map((square) => {
               return square === 'white' ? square = 'black': square = 'black' ? square = 'white' : square;
           })
           return {squares: newSquares}
        })
    }

    purpleSquares = () => {
       this.setState(prevState => {
           const newSquares = prevState.squares.map((square, i) => {
               return i === 0 || i === 1 ? square = 'purple' : square;
           })
           return {squares: newSquares}
       })
    }

    blueSquaresR = () => {
        this.setState(prevState => {
            const newSquares = prevState.squares.map((square, i) => {
                return i === 2 ? square = 'blue' : square;
            })
            return {squares: newSquares}
        })
    }

    blueSquaresL = () => {
        this.setState(prevState => {
            const newSquares = prevState.squares.map((square, i) => {
                return i === 3 ? square = 'blue' : square;
            })
            return {squares: newSquares}
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
                <button onClick={this.blueSquaresR} id='pro-dj' type='button'>Left Blue</button>
                <button onClick={this.blueSquaresL} id='pro-dj' type='button'>Right Blue</button>
            </div>
        )
    }
}

export default App