import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Card.module.css'

function Card({name,continent,image,id}) {

  // const{name, image, continent} = country;
    return (
      <div className={styles.country}>
        
          <div className={styles.containerFlag}>
            <img src={image} alt={name} className={styles.flag}/>
        
         <p>
            Name:<NavLink to={`/home/:${id}`} 
            name={name}>{name}</NavLink>
          </p>
         <p>Continent:{continent} </p>

        </div>
      </div>
    );
  }

  export default Card;