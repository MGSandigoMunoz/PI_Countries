const { Router } = require("express");
const router = Router();

const getCountries = require("../controllers/getCountries");
const getCountryById= require("../controllers/getCountryById");
const getCountryByName= require("../controllers/getCountryByName");
const postActivity= require("../controllers/postActivity");
const getActivities = require("../controllers/getActivities");

//?GET countries: "/countries"
//* Array de países(objetos) con propiedades que requiero.
router.get("/countries",getCountries);
//?GET countriesById: "/countries/:idParams"
//*Detalles con toda la info del País
router.get("/countries/:idPais",getCountryById);
//?GET /countries/name?="name=name_value": /countries/name?="name=valueName"
//*Detalles con toda la info del País
router.get("/country/name", getCountryByName);
//?POST postActivities: "/activities"
router.post("/activities", postActivity);
//?GET postActivities: "/activities"
router.get("/activities", getActivities);

module.exports = router;
