import React, { Component } from 'react';
import Axios from "axios";
import "./App.css";

class App extends Component {
    constructor() {
        super();
        this.state = { 
            colors: [],
            divColor: ""
        }
    }

    componentWillMount() {
        Axios.get('http://www.colr.org/json/tags/cheese,wine').then(response => {
            let data = response.data.colors
            this.setState(
                {
                    colors: [...data]
                }
            )
        })
    }
    
    handleClick = () => {
        let randNum = Math.floor(Math.random() * 163);
        this.setState({divColor: this.state.colors[randNum].hex})
    }

    render() { 
        return (
            <div className="color-container">
                <button onClick={this.handleClick} className="button">Change Color</button>
                <div style={{backgroundColor: `#${this.state.divColor}`}} className="color"></div>
            </div>
        )
    }
}
 
export default App;