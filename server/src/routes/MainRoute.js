//!ROUTE CONFIGURATION

const { Router } = require("express");
const router = Router();

const countryRoute = require("./CountryRoute")
const countriesRoute = require("./CountriesRoute")
const activitiesRoute= require("./ActivitiesRoute")


router.use("/country",countryRoute);
router.use("/countries",countriesRoute);
router.use("/activities",activitiesRoute);


module.exports = router;
