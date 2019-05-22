import React, { Component } from 'react';
import Axios from 'axios';
import Styles from "./App.css"

class App extends Component {
    constructor() {
        super();
        this.state = { 
            people: []
        }
    }

    componentWillMount() {
        Axios.get('https://s3.amazonaws.com/v-school/data/hitlist.json').then(response => {
            this.setState({
                people: response.data
            })
        })
    }

    render() { 
        console.log(this.state)
        const mappedPeople = this.state.people.map(person => {
            return (
                <>
                    <div>
                        <div className='person-div'>
                            <img src={person.image} alt=" "/>
                            <h1>{person.name}</h1>
                        </div>
                    </div>
                </>
            
            )
        })

        return ( 
            <>
                <header>
                    Don Corleone's Hit List
                </header>    
                <div className='main-container'>
                    {mappedPeople}
                </div>
            </>
         );
    }
}
 
export default App;

