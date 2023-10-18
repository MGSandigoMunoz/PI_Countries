import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import NavBar from '../../components/navBar/NavBar';
import CardsView from '../../components/cardsView/CardsView'
import { fetchCountries } from "../../redux/countries/countriesActions";

import styles from './Home.module.css'

function Home() {

  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.countries.allCountries);//Accedo al estado global donde están mis countries

  useEffect(() => {
    // Llama a la acción para cargar los países al cargar la página
    dispatch(fetchCountries());
  }, [dispatch]);

    return (
      <div>
        <h1> HOME!</h1>
        <NavBar/>
        <CardsView countries={allCountries}/>{/* Pasa los datos de los países como propiedades */}

        <div >
          <h3>Continents filter</h3>
            <select >
              <option>Africa</option>
              <option>Europe</option>
              <option>Oceania</option>
              <option>Asia</option>
              <option>North America</option>
              <option>South America</option>
              <option>Antartica</option>
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
      </div>
    );
  }

  export default Home;

