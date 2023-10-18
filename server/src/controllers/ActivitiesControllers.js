const { Activity, Country } = require("../db");

const getActivitiesController = async () => {
  try {
    const allActivities = await Activity.findAll({
      include: [
        { 
          model: Country,
          attributes: ['name'], // Incluir solo el campo 'name' del modelo Country
        },
      ], // Cargar la asociación con el modelo Country
    });
    return allActivities;
  } catch (error) {
    throw new Error("No se pudieron obtener las actividades: " + error.message);
  }
};

const postActivityController = async (activityName, difficulty, duration, season, countryId) => {
  try {
    if (!activityName || !difficulty || !duration || !season || !countryId) {
      throw new Error("Campos obligatorios faltantes en la solicitud.");
    }

    // Crear una nueva actividad usando el modelo instanciado de Sequelize
    const newActivity = await Activity.create({
      activityName,
      difficulty,
      duration,
      season,
    });

    // Asociar la actividad a los países proporcionados por ID
    await newActivity.addCountries(countryId);

    // Consultar los países asociados a la actividad, pero solo el nombre
    const associatedCountries = await newActivity.getCountries({
      attributes: ['name']
    });

    // Obtener los nombres de los países
    const countryNames = associatedCountries.map(country => country.name);

    // Agregar los nombres de los países a la respuesta
    newActivity.dataValues.Countries = countryNames;

    return newActivity;
  } catch (error) {
    throw new Error("Error al crear una nueva actividad: " + error.message);
  }
};

module.exports = { getActivitiesController, postActivityController };
