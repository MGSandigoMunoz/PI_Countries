import axios from "axios";

import { getAllCountries, getCountryById, filters } from "./countriesSlice";



export const fetchCountries = () => async (dispatch) => {
  try {
    const response = await axios.get("http://localhost:3001/countries"); 
    const data = response.data;
    dispatch(getAllCountries(data));
  } catch (error) {
    console.error("Error al obtener los países:", error);
  }
};


export const searchByName= (countryName)=> async (dispatch) =>{ //name viene de mi input
  try {
    const response = await axios.get(`http://localhost:3001/country/name?name=${countryName}`);
    const data= response.data;

    dispatch(getAllCountries(data));


  } catch (error) {
    throw new Error (error.message)
  }
}


export const filterByID= (idPais)=> async (dispatch) =>{ //name viene de mi params id
  try {
    
    const response = await axios.get(`http://localhost:3001/countries/${idPais}`);//Retorna objeto

    const data= response.data;

    dispatch(getCountryById(data));


  } catch (error) {
    throw new Error (error.message)
  }
}


export const filterCountriesByContinent = (continent) => (dispatch, getState) => {
  const { allCountries } = getState().countries;//Traigo el estado global allCountries para filtrar la info de allí

  if (continent === "All"){
    const filteredCountries = allCountries
    dispatch(getAllCountries(filteredCountries));
  } else{
    const filteredCountries = allCountries.filter(
    (country) => country.continents === continent
  );
  dispatch(getAllCountries(filteredCountries));}
};

export const organizeCountriesByABC = (ascendingOrDescending) => (dispatch, getState) => {
  const { allCountries } = getState().countries;

  const sortedCountries = [...allCountries];

  if (ascendingOrDescending === "A") {
    sortedCountries.sort((a, b) => a.name.localeCompare(b.name));
  } else if (ascendingOrDescending === "D") {
    sortedCountries.sort((a, b) => b.name.localeCompare(a.name));
  }

  dispatch(getAllCountries(sortedCountries)); 
};

export const organizeCountriesByPopulation = (ascendingOrDescending) => (dispatch, getState) => {
  const { allCountries } = getState().countries;

  const sortedCountries = [...allCountries];

  if (ascendingOrDescending === "A") {
    sortedCountries.sort((a, b) => a.population - b.population); 
  } else if (ascendingOrDescending === "D") {
    sortedCountries.sort((a, b) => b.population - a.population); 
  }

  dispatch(getAllCountries(sortedCountries)); 
};








