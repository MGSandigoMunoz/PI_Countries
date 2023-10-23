import React, { useEffect } from "react";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";
import { filterByID } from '../../redux/countries/countriesActions';
import styles from './Detail.module.css';

function Detail() {
  const { idPais } = useParams(); // Corregir a idPais en lugar de id
  const cleanIdPais = idPais.replace(":", "");//Quita los dos puntos que llegan por params

  const dispatch = useDispatch();
  const countryById = useSelector((state) => state.countries.filteredCountry);

  useEffect(() => {
    dispatch(filterByID(cleanIdPais)); // Corregir a idPais en lugar de id
  }, [cleanIdPais, dispatch]);

  return (
    <div>
      <p>DETAIL!</p>

      <NavLink to="/home">
            <button >
              Home
            </button> 
          </NavLink>

      <p>ID: {cleanIdPais}</p> {/* Corregir a idPais en lugar de id */}
      <p>Name: {countryById.name}</p>
      <img src={countryById.flag} alt={countryById.name} />
      <p>Continent: {countryById.continents}</p>
      <p>Capital: {countryById.capital}</p>
      <p>Subregion: {countryById.subregion}</p>
      {/* Área se pone si tiene, sino no. Usar condicional ternario */}
      <p>Area: {countryById.area ? countryById.area : "No information"}</p>
      <p>Population: {countryById.population}</p>
    </div>
  );
}

export default Detail;


