const { Country } = require('../db')

const getCountriesController = async()=>{
    try {
        const allCountries= await Country.findAll() ;
        return allCountries;
    } catch (error) {
        throw new Error("Error loading countries: " + error.message);
    }
}

const getCountryByIdController = async (idPais) => {
    try {
      
      const idUpperCase = idPais.toUpperCase();//convierte el idPaís en mayúscula, porque así está en mi db.
  
      const countryDetail = await Country.findByPk(idUpperCase);
  
      if (countryDetail) {
      
          return countryDetail;
        } else {
          
          return 'Country not found';
        }
      
    } catch (error) {
        throw new Error("Error searching for the country" + error.message);;
    }
  };
module.exports = {getCountriesController, getCountryByIdController};