import React from 'react';
import { withTheme } from '../GlobalProvider'

const MyFav = (props) => {
    return ( 
        <>
            {/* <div>
                <h3>{recipe.recipe_id}</h3>
                <input type="checkbox" value={recipe.recipe_id} onChange={this.props.handleSave}/>
            </div>
            <div className='heart-container'>
                <button className='like' onClick={this.props.handleLike}>
                    <i className="heart"></i>&nbsp;
                    {buttonText}
                </button>
            </div>
            <button>Remove</button> */}
        </>
    );
}
 
export default withTheme(MyFav);