import React, { Component } from 'react';
import Axios from 'axios';
import recipes from "./recipe.json";

class Recipe extends Component {
    constructor() {
        super();
        this.state = {  
            recipesArr: [],
            filteredRecipes: [],
            filtering: false
        }
    }
  
    componentWillMount() {
        const api_key = '63f9badb263245ba705ab49495786188';
        // const query = 'chicken'
        const URL = `https://www.food2fork.com/api/search?key=${api_key}&q=&count=2`;
        Axios.get(URL).then(response => {
            let data = response.data.recipes
            this.setState({
                recipesArr: data
            })
        })
    }

    getRecipes = (event) => {
        if(event.target.value === ''){
            this.setState({
                filtering: false
            })
        }else {
            this.setState(prevState => {
                return {
                    filteredRecipes: prevState.recipesArr.filter(recipe => recipe.title.includes(event.target.value)),
                    filtering: true
                }
            })
        }

    }

    render() { 
        const recipeArr = this.state.filtering ? this.state.filteredRecipes : this.state.recipesArr;
        const recipes = recipeArr.map(recipe => {
            return (
                <div>
                    <h1>{recipe.title}</h1>
                    <img src={recipe.image_url} alt=""/>
                </div>
            )
        })
        console.log(recipes)

        return ( 
            <>
                <form>
                    <input  type="text" 
                            placeholder="Search"
                            name="recipesArr" 
                            onChange={this.getRecipes}/>
                </form>
                <div>{recipes}</div>
            </>
        );
    }
}
 
export default Recipe;


