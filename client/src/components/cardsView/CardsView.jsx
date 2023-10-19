import React from "react";
import Card from '../card/Card';

import styles from './CardsView.module.css'

function CardsView({countries}) {

    return (
      <div>
        {countries.map((country) => (
        <Card
          id={country.id}
          key={country.id}//Nombres con los que viene de la db
          name={country.name}
          continent={country.continents}
          image={country.flag}
          />
      ))}
      </div>
    );
  }

  export default CardsView;


  


