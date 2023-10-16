 const axios = require("axios");
const { Country } = require('../db'); 
const URL = "http://localhost:5000/countries"


//! HACE PETICIÓN A APPI Y GUARDA EN BASE DE DATOS
const axiosSaveCountries= async ()=>{
    try {
        const response = await axios.get(URL);
        const countriesData = response.data; //Objeto data trae toda la info de la petición

       
        for (const countryData of countriesData) { // Itera a través de los datos y crea registros en la base de datos
          const capital = countryData.capital ? countryData.capital[0] : null;  
          await Country.create({
              id:countryData.cca3,//Debe ser acorde a  como viene la info en la API
              name: countryData.name.common,
              flag: countryData.flags.svg,
              continents: countryData.continents[0],
              capital:capital,
              subregion: countryData.subregion,
              area: countryData.area,
              population: countryData.population,
            });
          }
          console.log('Países guardados en la base de datos');

    } catch (error) {
        console.error('Error al obtener los países de la API:', error);
    }
}

module.exports = axiosSaveCountries;
