import React, { useEffect } from "react";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {filterByID} from '../../redux/countries/countriesActions'
import styles from './Detail.module.css'

function Detail() {
  //!EN PROGRESO

  const{ id }= useParams();
  const dispatch=useDispatch();

  const countryById= useSelector((state)=>state.countries.filteredCountry)

  useEffect(() => {
    dispatch(filterByID(id));
  }, [id, dispatch]);

    return (
      <div>
        <p> DETAIL!</p>
          <p>ID:{id} </p>
          <p>Name: {countryById.name}</p>
          <img src={countryById.image} alt={countryById.name}/>
          <p>Continent:{countryById.continents} </p>
          <p>Capital:{countryById.capital} </p>
          <p>Subregion:{countryById.subregion}</p>
          {/* Área se pone si tiene, sino no. Usar condicional ternario */}
          <p>Area: {countryById.area ? countryById.area : "No information"}</p>
          <p>Population:{countryById.population} </p>
      </div>
    );
  }

  export default Detail;

