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
        const { filtering, recipesArr, filteredRecipes } = this.props;
        let recipesToMap = filtering ? filteredRecipes : recipesArr;
        let buttonText = this.props.liked ? "Unlike" : "Like";
        const mappedData = recipesToMap.map(recipe => {
            return (
                <div className='recipe-div'>
                    <a href="000">{recipe.title}</a>
                    <img src={recipe.image_url} alt=""/>
                    <button onClick={this.props.handleLike}>
                        <h1>{buttonText}</h1>
                    </button>
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


