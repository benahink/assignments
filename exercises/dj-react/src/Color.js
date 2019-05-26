import React, { Component } from 'react';
import Colors from './Colors';
import Music from './Music';

class Color extends Component {
    constructor() {
        super();
        this.state = {
            squares: ['white', 'white', 'white', 'white'],
            sound: ''
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

    pinkSquare = () => {
        this.setState(prevState => {
            const newSquares = prevState.squares.map((square, i) => {
                return i === 0 ? square = 'pink' : square;
            })

            return {squares: newSquares}
        })
    }

    yellowSquare = () => {
        this.setState(prevState => {
            const newSquares = prevState.squares.map((square, i) => {
                return i === 1 ? square = 'yellow' : square;
            })
            return {squares: newSquares}
        })
    }

    maroonSquare = () => {
        this.setState(prevState => {
            const newSquares = prevState.squares.map((square, i) => {
                return i === 2 ? square = 'maroon' : square;
            })
            return {squares: newSquares}
        })
    }
    
    greenSquare = () => {
        this.setState(prevState => {
            const newSquares = prevState.squares.map((square, i) => {
                return i === 3 ? square = 'green' : square;
            })
            return {squares: newSquares}
        })
    }


    render() {
        const mappedSquares = this.state.squares.map(square => {
           return <Colors color={square}/>
        })

        return (
            <div className='parent-component'>
                {mappedSquares}
                <button onClick={this.blackSquares} id='small-time' type='button'>Black or White</button>
                <button onClick={this.purpleSquares} id='party-dj' type='button'>Purple</button>
                <button onClick={this.blueSquaresR} id='pro-dj' type='button'>Left Blue</button>
                <button onClick={this.blueSquaresL} id='pro-dj' type='button'>Right Blue</button>
                <button onClick={this.pinkSquare} id='big-dj' type='button'>Pink</button>
                <button onClick={this.yellowSquare} id='big-dj' type='button'>Yellow</button>
                <button onClick={this.maroonSquare} id='big-dj' type='button'>Maroon</button>
                <button onClick={this.greenSquare} id='big-dj' type='button'>Green</button>
                <Music />
            </div>
        )
    }
}

export default Color;