import { getAllCountries } from "./countriesSlice";
import axios from "axios";


export const fetchCountries = () => async (dispatch) => {
  try {
    const response = await axios.get("http://localhost:3001/countries"); 
    const data = response.data;
    dispatch(getAllCountries(data));
  } catch (error) {
    console.error("Error al obtener los países:", error);
  }
};




