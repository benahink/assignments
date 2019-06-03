import React from 'react';
import Popup from 'reactjs-popup';
import './Modal.css';

const Modal = (props) => (
    <Popup trigger={<button className="button"> View Recipe </button>} modal>
    {close => (
      <div className="modal">
        <a href="000" className="close" onClick={close}>
          &times;
        </a>
        <div className="header"> {props.title}</div>
        <div className="ingredients">
          {' '}
          <h3>Go To <a href={props.recipe}>Ingredients</a>: </h3>
          
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
              console.log('modal closed ')
              close()
            }}
          >
            close
          </button>
        </div>
      </div>
    )}
  </Popup>
)

export default Modal;