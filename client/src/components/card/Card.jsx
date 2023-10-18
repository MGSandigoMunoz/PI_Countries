import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Card.module.css'

function Card({name,continent,image}) {

  // const{name, image, continent} = country;
    return (
      <div>
        <div>
         <img src={image} alt={name}/>
         <p>Name:{name} </p>
         <p>Continent:{continent} </p>

        </div>
      </div>
    );
  }

  export default Card;