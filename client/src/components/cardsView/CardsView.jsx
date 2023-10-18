import React from "react";
import Card from '../card/Card';

import styles from './CardsView.module.css'

function CardsView({countries}) {

    return (
      <div>
        {countries.map((country) => (
        <Card
          key={country.id}
          name={country.name}
          continent={country.continents}
          imagen={country.flags}
          />
      ))}
      </div>
    );
  }

  export default CardsView;


  


