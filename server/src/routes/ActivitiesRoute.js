const { Router } = require("express");
const activitiesRouter = Router();

const { postActivityHandler, getActivitiesHandler } = require("../handlers/ActivitiesHandlers");

//? POST /activities
activitiesRouter.post("/", postActivityHandler);

//? GET /activities
activitiesRouter.get("/", getActivitiesHandler);

module.exports = activitiesRouter;
