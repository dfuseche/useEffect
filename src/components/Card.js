import React from 'react';
import './Card.css';

export const Card = (props) => {
  const { title, genero, status, imagen } = props;
  return (
    
        <div class="card"  >
            <img src={imagen} class="card-img-top" alt="..."></img>
            <div class="card-body">
                <p>Nombre: {title}</p>
                <p>Genero: {genero}</p>
                <p>Estado: {status}</p>
                
            </div>
        </div>
      );
};