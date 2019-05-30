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
            searchTerm: ''
        }
    }

    componentDidMount(){
        this.setState({recipesArr: recipes.recipes})


        // const api_key = '63f9badb263245ba705ab49495786188';
        // const query = 'chicken'
        // const URL = `https://www.food2fork.com/api/search?key=${api_key}&q=&count=2`;
        // Axios.get(URL).then(response => {
        //     this.setState({recipesArr: response.data.recipes})
        // })
    }
  
    handleChange = (event) => {
        let {value, name} = event.target
        if(value === ''){
            this.setState({
                filtering: false,
                [name]: value
            })
        }else {
            this.setState(prevState => {
                return {
                    filteredRecipes: prevState.recipesArr.filter(recipe => recipe.title.toLowerCase().includes(value)),
                    filtering: true,
                    [name]: value
                }
            })
        }
    }

    render() { 
        const { filtering, recipesArr, filteredRecipes } = this.state;
        let recipesToMap = filtering ? filteredRecipes : recipesArr
        const mappedData = recipesToMap.map(recipe => {
           return (
               <div>
                   <h1>{recipe.title}</h1>
                   <img src={recipe.image_url} alt=""/>
               </div>
           )
        })
        return ( 
            <>
                
                <form onSubmit={this.handleSubmit}>
                    <input  type="text" 
                            placeholder="Search"
                            name="searchTerm" 
                            value={this.state.value}
                            onChange={this.handleChange}/>
                </form>
                <h1>Results: </h1>
                <ul>
                    {mappedData}
                </ul>
            </>
        );
    }
}
 
export default Recipe;


