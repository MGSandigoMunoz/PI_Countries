import axios from "axios";

import { getAllCountries } from "./countriesSlice";
import { searchCountryByName } from "./countriesSlice"


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








