const { Router } = require("express");
const countryRouter = Router();


const {getCountryByNameHandler} = require("../handlers/CountryHandler");



//?GET countryByName : /country/name?="name=valueName"
//Detalles con toda la info del País
countryRouter.get("/name", getCountryByNameHandler);

module.exports = countryRouter;
