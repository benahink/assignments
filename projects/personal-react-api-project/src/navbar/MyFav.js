import React from 'react';
import { withProvider } from "../GlobalProvider";
import RecipeCard from '../recipe/RecipeCard'

const MyFav = (props) => {
    const mappedData = props.likedRecipes.map(recipe => <RecipeCard recipe={recipe}/>)
    console.log(props.likedRecipes)
    return (
        <div>
            {mappedData}
        </div>
    )
}

export default withProvider(MyFav);