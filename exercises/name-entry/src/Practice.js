import React, { Component } from 'react';

class Form extends Component {
    constructor(){
        super()

        this.state = {
            fName: '',
            age: '',
            people: []
        }
    }

    handleChange = (event) => {
        this.setState({
           [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        
        const newPerson = {
            name: this.state.fName,
            age: this.state.age
        }

        this.setState(prevState => {
            return {
                people: [...prevState.people, newPerson]
            }
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} >
                <input  type="text" 
                        name="fName"
                        placeholder="First Name"
                        value={this.state.fName}
                        onChange={this.handleChange} />
                <input  type="text" 
                        name="age"
                        placeholder="Age"
                        value={this.state.age}
                        onChange={this.handleChange} />
                <button>Submit</button>
            </form>
        );
    }
}

export default Form;