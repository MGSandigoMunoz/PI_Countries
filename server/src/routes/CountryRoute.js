const { Router } = require("express");
const countryRouter = Router();


const {getCountryByNameHandler} = require("../handlers/CountryHandler");

//?GET countryByName : /country/name?="name=valueName"

countryRouter.get("/name", getCountryByNameHandler);

module.exports = countryRouter;
