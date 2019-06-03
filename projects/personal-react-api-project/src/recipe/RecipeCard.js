import React, { Component } from 'react';
import { withProvider } from '../GlobalProvider';
import Modal from '../modal/Modal.js';

class RecipeCard extends Component {

    handleInputChange = (event) => {
        if(event.target.checked){
            this.props.addLiked(this.props.recipe)
        } else {
            this.props.removeLiked(this.props.recipe)
        }
    }
    
    render() { 
        const {title, image_url, f2f_url} = this.props.recipe
        return (
            <>
                <div className='recipe-div'>
                    <a href="000">{title}</a>
                    <img src={image_url} alt=""/>   
                    <input  name="liked"
                            type="checkbox"
                            id="checkbox"
                            onChange={this.handleInputChange}/>
                    <Modal title={title} image={image_url} recipe={f2f_url}/>
                </div>
            </>
        );
    }
}
 
export default withProvider(RecipeCard);