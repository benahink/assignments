import React from 'react';
import Popup from 'reactjs-popup';
import './Modal.css';

const Modal = (props) => {
    const ingredientArr = props.ingredients.map(ingredient => {
        return (
          <p>{ingredient}</p>
        )
    })
    return (
      <>
        <Popup trigger={<button className="button"> View Recipe </button>} modal>
          {close => (
            <div className="modal">
              <a href="000" className="close" onClick={close}>
                &times;
              </a>
              <div className="header">
                {props.title}
                <img src={props.image} alt=""/>
                </div>
              <div className="ingredients">
                {' '}
                <div>{ingredientArr}</div>          
              </div>
              <div className="instructions">
                <Popup
                  trigger={<button className="button"> More info </button>}
                  position="top center"
                  closeOnDocumentClick
                >
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
                    magni omnis delectus nemo, maxime molestiae dolorem numquam
                    mollitia, voluptate ea, accusamus excepturi deleniti ratione
                    sapiente! Laudantium, aperiam doloribus. Odit, aut.
                  </span>
                </Popup>
                <button
                  className="button"
                  onClick={() => {
                    close()
                  }}
                >
                  close
                </button>
              </div>
            </div>
          )}
        </Popup>
      </>
    )
    
}

export default Modal;