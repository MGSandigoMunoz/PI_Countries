const { Router } = require("express");
const countriesRouter = Router();

const {getCountriesHandler, getCountryByIdHandler} = require("../handlers/CountriesHandlers");


//?GET countries: "/countries"
//Array de países(objetos) con propiedades que requiero.
countriesRouter.get("/",getCountriesHandler);
//?GET countriesById: "/countries/:idPais"
//Detalles con toda la info del País
countriesRouter.get("/:idPais",getCountryByIdHandler);

module.exports = countriesRouter;