import React from "react";
import Card from '../card/Card';

import styles from './CardsView.module.css'

function CardsView({countries, filteredCountries}) {



    return (
      <div>

        {countries.map((country) => (
        <Card
          id={country.id}
          key={country.id}//Nombres con los que viene de la db
          name={country.name}
          continent={country.continents}
          image={country.flag}
          // capital={country.capital}
          // subregion={country.subregion}
          // area = {country.area}
          // population={country.population}
          />
      ))}
      </div>
    );
  }

  export default CardsView;


  


