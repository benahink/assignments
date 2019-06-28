import React, { Component } from 'react';
import { withProvider } from "../GlobalProvider";
import RecipeCard from '../recipe/RecipeCard';

class MyFav extends Component {
    render() { 
        const mappedData = this.props.likedRecipes.map(recipe => {
            return <RecipeCard isFav={true} recipe={recipe}/>
        })
    
        return (
            <div className="my-fav">
                <div className='search'>
                    <form>
                        <input  type="text" 
                                placeholder="Search"
                                name="searchInput" 
                                id="search"
                                value={this.props.value}
                                onChange={this.props.handleChange}/>
                    </form>
                </div>
                {mappedData}
            </div>
        )
    }
}

export default withProvider(MyFav);