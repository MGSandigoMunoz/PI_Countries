import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import NavBar from '../../components/navBar/NavBar';
import CardsView from '../../components/cardsView/CardsView'
import { fetchCountries, filterCountriesByContinent } from "../../redux/countries/countriesActions";

import styles from './Home.module.css'

function Home() {

  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.countries.allCountries);//Accedo al estado global donde están mis countries
  

  useEffect(() => {
    // Llama a la acción para cargar los países al cargar la página
    dispatch(fetchCountries());
  }, []);

  

//?FILTROS

  const handleFilter = (event) =>{
    dispatch(filterCountriesByContinent(event.target.value))
  }

  const handleOrder = (event) =>{
    dispatch()
  }

    return (
      <div>
        <h1> HOME!</h1>
        <NavBar/>
        <div >
          <h3>Filter by continents</h3>
            <select onChange={handleFilter}>
              <option value="All">All</option>
              <option value="Africa">Africa</option>
              <option value="Europe">Europe</option>
              <option value="Asia">Asia</option>
              <option value="North America">North America</option>
              <option value="South America">South America</option>
              <option value="Antarctica">Antartica</option>
            </select>
        </div>

        <div>
          <h3>Activities filter</h3>
            <select>
              <option>Skydiving</option>
              <option>Rafting</option>
              <option>Hiking</option>
              <option>Rappelling</option>
              <option>Surf</option>
            </select>
        </div>

        <div >
          <h3>Organize countries by ABC</h3>
          <select>
            <option >Ascendente</option>
            <option >Descendente</option>
          </select>
        </div>


        <div >
          <h3>Organize countries by population</h3>
          <select>
            <option >Ascendente</option>
            <option >Descendente</option>
          </select>
        </div>
        <CardsView countries={allCountries}/>{/* Pasa los datos de los países como propiedades */}

      </div>
    );
  }

  export default Home;

