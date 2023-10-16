const { Router } = require("express");
const activitiesRouter = Router();

const { postActivityHandler, getActivitiesHandler } = require("../handlers/ActivitiesHandlers");

// POST /activities: Crea actividad
activitiesRouter.post("/", postActivityHandler);

// GET /activities: Obtiene una lista de actividades
activitiesRouter.get("/", getActivitiesHandler);

module.exports = activitiesRouter;
