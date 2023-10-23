import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import NavBar from '../../components/navBar/NavBar';
import CardsView from '../../components/cardsView/CardsView'
import { fetchCountries, filterCountriesByContinent, organizeCountriesByABC,  organizeCountriesByPopulation } from "../../redux/countries/countriesActions";

import styles from './Home.module.css'

function Home() {

  const dispatch = useDispatch();

  const allCountries = useSelector((state) => state.countries.allCountries);//Accedo al estado global donde están mis countries

  const filteredCountries = useSelector((state) => state.countries.filteredCountries);

  useEffect(() => {
    // Llama a la acción para cargar los países al cargar la página
    dispatch(fetchCountries());
  }, []);

  

//?FILTROS CONTINENTS, ORGANIZE ABC Y POPULATION

  const handleFilter = (event) =>{
    dispatch(filterCountriesByContinent(event.target.value))
  }

  const handleOrder = (event) =>{
    dispatch(organizeCountriesByABC(event.target.value))
  }

  const handleOrderPopulation = (event) =>{
    dispatch( organizeCountriesByPopulation(event.target.value))
  }




    return (
      <div>
        <h1> HOME!</h1>
        <NavLink to="/activities"><button >Activities</button></NavLink>
        <NavLink to="/form"><button >Create activity</button></NavLink>
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

        

        <div >
          <h3>Organize countries by ABC</h3>
          <select onChange={handleOrder}>
            <option value = "A" > A-Z </option>
            <option value = "D" > Z-A </option>
          </select>
        </div>


        <div >
          <h3>Organize countries by population</h3>
          <select onChange={handleOrderPopulation}>
            <option value = "A">Ascendente</option>
            <option value = "D">Descendente</option>
          </select>
        </div>
        <CardsView  countries ={filteredCountries}/>{/* Pasa los datos de los países como propiedades */}


      </div>
    );
  }

  export default Home;

