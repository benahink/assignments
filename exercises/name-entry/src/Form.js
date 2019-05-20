import React, { Component } from 'react'

class Form extends Component {
    constructor() {
        super()

        this.state = {
            fName: "",
            lName: "",
            people: []
        }
    }

    inputValue = (event) => {
         this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitForm = (event) => {
        event.preventDefault()

        const newPerson = {
            fName: this.state.fName, 
            lName: this.state.lName
        }

        this.setState(prevState => {
            return {
                people: [...prevState.people, newPerson]
            }
        })

    }
    
    render() {
        const mappedPeople = this.state.people.map(person => {
            return <h1>{person.fName} {person.lName}</h1>
        })

        return (
            <>
                <form onSubmit={this.submitForm}>
                    <input  type="text" 
                            placeholder="First Name"
                            name="fName" 
                            value= {this.state.fName}
                            onChange={this.inputValue}/>
                    <input  type="text" 
                            placeholder="Last Name"
                            name="lName" 
                            value= {this.state.lName}
                            onChange={this.inputValue}/>                
                    <button>Submit</button>
                </form>
                {mappedPeople}
            </>
        )
    }
}
export default Form;