import React, { Component } from 'react';
import Axios from 'axios';
import recipes from "./recipe.json";

class Recipe extends Component {
    constructor() {
        super();
        this.state = {  
            recipesArr: [],
            filteredRecipes: [],
            filtering: false,
            value: ''
        }
    }
  
    getRecipes() {
        const api_key = '63f9badb263245ba705ab49495786188';
        // const query = 'chicken'
        // const URL = `https://www.food2fork.com/api/search?key=${api_key}&q=&count=2`;
        // Axios.get(URL).then(response => {
        //     let data = response.data.recipes
        //     data.map(recipe => ({
        //         title: `${recipe.title}`,
        //         image: `${recipe.image_url}`
        //     }))

        //     this.setState({
        //         recipesArr: data
        //     })
        // })
        let data = recipes.recipes
        console.log(data)
        data.map(recipe => ({
            title: `${recipe.title}`,
            image: `${recipe.image_url}`
        }))

        this.setState({
            recipesArr: data
        })
    }

    componentDidMount() {
        this.getRecipes();
    }

    handleChange = (event) => {
        this.setState({
            value: event.target.value
        })
    }

    handleSubmit = (event) => {
        if(event.target.value === ''){
            this.setState({
                filtering: false
            })
            console.log('fired')
        }else {
            this.setState(prevState => {
                return {
                    filteredRecipes: prevState.recipesArr.filter(recipe => recipe.title.includes(event.target.value)),
                    filtering: true
                }
            })
            console.log("no, this fired")
        }
    }

    render() { 
        console.log(this.state.recipesArr)
        const { filtering, recipesArr, filteredRecipes } = this.state;
        const mappedData = this.state.recipesArr.map(recipe => {
           return (
               <div>
                   <h1>{recipe.title}</h1>
               </div>
           )
        })
        return ( 
            <>
                <h1>Results: </h1>
                <div>
                    {[filtering] ? filteredRecipes : recipesArr}
                </div>
                <form onSubmit={this.handleSubmit}>
                    <input  type="text" 
                            placeholder="Search"
                            name="recipesArr" 
                            value={this.state.value}
                            onChange={this.handleChange}/>
                </form>
                <ul>
                    {mappedData}
                </ul>
            </>
        );
    }
}
 
export default Recipe;


