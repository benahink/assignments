import React, { Component } from 'react';

class ProjectsCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projectName: '', 
            description: '', 
            imageURL: '',
            projects: []
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const newProjects = {
            fName: this.state.projectName,
            lName: this.state.description, 
            email: this.state.imageURL
        }

        this.setState(prevState => {
           return {
               projects: [...prevState.projects, newProjects]
           }
        })
    }

    render() { 
        // const mappedProjects = this.state.projects.map((project) => {
        //     return (
        //         <div className="nameTag">
        //             <div className="nameTagDiv">
        //                 <span className="badge">Badge: </span>
        //                 <h3>
        //                 Name: {nameTag.fName} {nameTag.lName}
        //                 </h3> 
        //                 <h3>Phone: {nameTag.phone}</h3>
        //                 <h3>Place of Birth: {nameTag.placeOfBirth} </h3>
        //                 <h3>Favorite Food:{nameTag.favFood}</h3>
        //                 <h3>Email:{nameTag.email}</h3>
        //                 <p className="paragraph">{nameTag.about}</p>
        //             </div>
        //         </div>
        //     )
        // })
        return ( 
            <div className="card-container">
                <form className="addProjects" onSubmit={this.handleSubmit}>
                    <input  type="text" 
                            placeholder="Project Name"
                            name="projectName"
                            value={this.state.projectName}
                            onChange={this.handleChange}
                            />
                    <input  type="text" 
                            placeholder="Project Description"
                            name="description"
                            value={this.state.description}
                            onChange={this.handleChange}
                            />
                    <input  type="image"
                            placeholder="Project Image"
                            name="imageURL"
                            value={this.state.imageURL}
                            onChange={this.handleChange}
                            />
                    <button>Add</button>
                </form>
            </div>
        );
    }
}
 
export default ProjectsCard;