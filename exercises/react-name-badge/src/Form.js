import React, { Component } from 'react';
import styles from "./styles.css";

class Form extends Component {
    constructor() {
        super();

        this.state = { 
            fName: "", 
            lName: "", 
            email: "", 
            placeOfBirth: "", 
            phone: "", 
            favFood: "", 
            about: "", 
            nameTags: [],
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const newNameTags = {
            fName: this.state.fName,
            lName: this.state.lName, 
            email: this.state.email, 
            placeOfBirth: this.state.placeOfBirth, 
            phone: this.state.phone, 
            favFood: this.state.favFood, 
            about: this.state.about
        }

        this.setState(prevState => {
           return {
               nameTags: [...prevState.nameTags, newNameTags]
           }
        })
    }

    render() { 

        const mappedNameTags = this.state.nameTags.map((nameTag) => {
            return (
                <div className="nameTag">
                    <div className="nameTagDiv">
                        <span className="badge">Badge: </span>
                        <h3>
                        Name: {nameTag.fName} {nameTag.lName}
                        </h3> 
                        <h3>Phone: {nameTag.phone}</h3>
                        <h3>Place of Birth: {nameTag.placeOfBirth} </h3>
                        <h3>Favorite Food:{nameTag.favFood}</h3>
                        <h3>Email:{nameTag.email}</h3>
                        <p className="paragraph">{nameTag.about}</p>
                    </div>
                </div>
            )
        })

        const {fName, lName, email, placeOfBirth, phone, favFood, about} = this.state
        const enable = fName.length > 3 && lName.length > 3 && email.length > 3 && placeOfBirth.length > 3 && phone.length > 3 && favFood.length > 3 && about.length > 3
        return (  
            <>
                <form className="form" onSubmit={this.handleSubmit}>
                    <div className="input">
                        <input  type="text" 
                                placeholder="First Name"
                                name="fName" 
                                value= {this.state.fName}
                                onChange={this.handleChange}/>
                        <input  type="text" 
                                placeholder="Last Name" 
                                name="lName" 
                                value= {this.state.lName}
                                onChange={this.handleChange}/>
                        <input  type="text" 
                                placeholder="Email" 
                                name="email" 
                                value= {this.state.email}
                                onChange={this.handleChange}/>
                        <input type="text" 
                                placeholder="Place of Birth" 
                                name="placeOfBirth" 
                                value= {this.state.placeOfBirth}
                                onChange={this.handleChange}/>
                        <input  type="number" 
                                placeholder="Phone" 
                                name="phone" 
                                value= {this.state.phone}
                                onChange={this.handleChange}/>
                        <input  type="text" 
                                placeholder="Favorite Food" 
                                name="favFood" 
                                value= {this.state.favFood}
                                onChange={this.handleChange}/>
                    </div>
                    <div className='boxAndBtn'>
                        <input  type="text" 
                                placeholder="Tell us about yourself" 
                                id="about"
                                name="about" 
                                value= {this.state.about}
                                onChange={this.handleChange}/>
                        <button disabled={!enable}>Submit</button>
                    </div>
                </form>
                {mappedNameTags}
            </>
        );
    }
}
 
export default Form;