const { Router } = require("express");
const activitiesRouter = Router();

const { postActivityHandler, getActivitiesHandler } = require("../handlers/ActivitiesHandlers");

//? POST /activities
activitiesRouter.post("/", postActivityHandler);

//? GET /activities
activitiesRouter.get("/", getActivitiesHandler);

//? DELETE/activities
// activitiesRouter.get("/", deleteActivitiesHandler);

module.exports = activitiesRouter;
