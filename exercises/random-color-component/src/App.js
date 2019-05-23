import React, { Component } from 'react';
import Axios from "axios";
import "./App.css"

class App extends Component {
    constructor() {
        super();
        this.state = { 
            colors: []
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
        
    }

    render() { 
        const mappedColors = this.state.colors.map(color => {
            return (
                <div className="color-container">
                    {/* <h3>{color.id}</h3>  */}
                    <div style={{backgroundColor: `#${color.hex}`}} className="color">
                        {/* {color.hex} */}
                    </div>
                </div>
            )
        })
        
        
        const randomNum = () => {
            let randNum = Math.floor(Math.random() * 163);
            return randNum;
        }

        return ( 
            <>
                <div className="main-container">
                    <form className="form">
                        <button className="button">Change Color</button>
                    </form>
                    {mappedColors[randomNum()]}
                </div>
            </>
        );
    }
}
 
export default App;