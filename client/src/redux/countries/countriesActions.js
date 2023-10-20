import axios from "axios";

import { getAllCountries, getCountryById } from "./countriesSlice";



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

export const filterByID= (id)=> async (dispatch) =>{ //name viene de mi params id
  try {
    const response = await axios.get(`http://localhost:3001/countries/${id}`);//Retorna objeto
    const data= response.data;

    dispatch(getCountryById(data));


  } catch (error) {
    throw new Error (error.message)
  }
}








