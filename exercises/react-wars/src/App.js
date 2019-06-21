import React, { Component } from 'react';
import Axios from 'axios';

class App extends Component {
    constructor() {
        super();
        this.state = { 
            people: []
         }
    }

    componentWillMount() {
        Axios.get('https://swapi.co/api/people/').then(response => {
            let data = response.data.results
            this.setState({
                people: [...data]
            })
        })
    }

    render() { 
        console.log(this.state.people)
        return ( 
            <>
                <h1>{}</h1>
            </>
         );
    }
}
 
export default App;
