import React, { Component } from 'react';
import '../recipe/Recipe.css';
import { withProvider } from "../GlobalProvider";
import RecipeCard from '../recipe/RecipeCard.js';

class Recipe extends Component {
    constructor() {
        super()
        this.state = {

        }
    }
    render() { 
        const { filtering, recipesArr, filteredRecipes } = this.props;
        let recipesToMap = filtering ? filteredRecipes : recipesArr;
        const mappedData = recipesToMap.map(recipe => {
            recipe.checked = false
            return <RecipeCard isFav={false} recipe={recipe}/>
        })

        return ( 
            <div className="main-container">
                <div className='search'>
                    <form>
                        <input  type="text" 
                                placeholder="Search"
                                name="searchInput" 
                                id="search"
                                value={this.state.value}
                                onChange={this.props.handleChange}/>
                    </form>
                </div>
                <h1>Results: </h1>
                <div className='recipes-container'>
                    {mappedData}
                </div>
            </div>
        );
    }
}
 
export default withProvider(Recipe);


