import React, { Component } from 'react';
import './Recipe.css';
import { withTheme } from "../GlobalProvider";

class Recipe extends Component {
    constructor() {
        super();
        this.state = {  
            
        }
    }

    render() { 
        console.log(this.props)
        const { filtering, recipesArr, filteredRecipes } = this.props;
        let recipesToMap = filtering ? filteredRecipes : recipesArr
        const mappedData = recipesToMap.map(recipe => {
            return (
                <div className='recipe-div'>
                    <a href="">{recipe.title}</a>
                    <img src={recipe.image_url} alt=""/>
                </div>
            )
        })
        return ( 
            <>
                <div className='search'>
                    <form>
                        <input  type="text" 
                                placeholder="Search"
                                name="searchInput" 
                                value={this.state.value}
                                onChange={this.props.handleChange}/>
                    </form>

                </div>
                <h1>Results: </h1>
                <div className='recipes-container'>
                    {mappedData}
                </div>
            </>
        );
    }
}
 
export default withTheme(Recipe);


