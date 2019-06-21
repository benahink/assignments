import React, { Component } from 'react';
import { withProvider } from '../GlobalProvider';
import Modal from '../modal/Modal.js';

class RecipeCard extends Component {
    constructor(props){
        super(props)

        this.state = {
            isChecked: props.recipe.checked
        }
    }

    handleInputChange = (event) => {
        const recipe = this.props.recipe
        let {checked} = event.target
        if(checked){
            this.setState({isChecked: true})
            this.props.addLiked(recipe)
        } else {
            this.setState({isChecked: false})
            this.props.removeLiked(recipe)
        }
        // localStorage.setItem("likedRecipes", JSON.stringify(this.props.likedRecipes))
    }
    
    render() { 
        const {label, image, ingredientLines} = this.props.recipe.recipe
        return (
            <>
                <div className='recipe-div'>
                    <a href="000">{label}</a>
                    <img src={image} alt=""/>   
                    <input  style={{display: this.props.isFav ? 'none' : 'block'}}
                            name="liked"
                            type="checkbox"
                            id="checkbox"
                            checked={this.state.isChecked}
                            onChange={this.handleInputChange}/>
                    <button onClick={() => this.props.removeLiked(this.props.recipe)} className='delete-button' style={{display: this.props.isFav ? 'block' : 'none'}}>Delete</button>
                    <Modal title={label} image={image} ingredients={ingredientLines}/>
                </div>
            </>
        );
    }
}
 
export default withProvider(RecipeCard);