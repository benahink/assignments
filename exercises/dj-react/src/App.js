import React from 'react'
import './styles.css'

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            squares: ['white', 'white', 'white', 'white']
        }
    }

    
    render() {
        return (
            <div className='parent-component'>
                <div className='boxes' color={this.state.squares[0]}>1</div>
                <div className='boxes' color={this.state.squares[1]}>2</div>
                <div className='boxes' color={this.state.squares[2]}>3</div>
                <div className='boxes' color={this.state.squares[3]}>4</div>
            </div>
        )
    }
}

export default App