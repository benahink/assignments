import React from 'react';
import { withProvider } from "../GlobalProvider";
import RecipeCard from '../recipe/RecipeCard'

const MyFav = (props) => {
    const mappedData = props.likedRecipes.map(recipe => {
        return <RecipeCard isFav={true} recipe={recipe}/>
    })
    console.log(mappedData)
    return (
        <div>
            {mappedData}
        </div>
    )
}

export default withProvider(MyFav);