import React from 'react';
import './Card.css';

export const Card = (props) => {
  const { title, genero, status, imagen } = props;
  return (
    
        <div class="card"  >
            <img src={imagen} class="card-img-top" alt="..."></img>
            <div class="card-body">
                <b> <h4>{title}</h4></b>
                <p>Gender: {genero}</p>
                <p>Status: {status}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
      );
};