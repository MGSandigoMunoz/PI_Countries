const { Router } = require("express");
const router = Router();

const getCountries = require("../controllers/getCountries");
const getCountryById= require("../controllers/getCountryById");
const getCountriesByName= require("../controllers/getCountriesByName");
const postActivity= require("../controllers/postActivity");
const getActivities = require("../controllers/getActivities");

//?GET countries: "/countries"
//* Array de países(objetos) con propiedades que requiero.
router.get("/countries",getCountries);
//?GET countriesById: "/countries/countryId"
// router.get("/countries/countryId",getCountryById);
//?GET /countries/name?="...": /countries/name?="name=valorName"
// router.get("/country/name?="..."", getCountriesByName )
//?POST postActivities: "/activities"
//router.post("/activities", postActivity);
//?GET postActivities: "/activities"
//router.get("/activities", getActivities);

module.exports = router;
