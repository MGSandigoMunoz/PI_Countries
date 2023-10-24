const { Activity, Country } = require("../db");

const getActivitiesController = async () => {
  try {
    const allActivities = await Activity.findAll({
      include: [
        {
          model: Country,
          attributes: ['name'], // Obtener solo el campo 'name' de Country
          through: {
            attributes: [], // No obtener ningún campo de la tabla intermedia
          },
        },
      ],
    }); 
    return allActivities;
  } catch (error) {
    throw new Error("Error loading activities: " + error.message);
  }
};

const postActivityController = async (activityName, difficulty, duration, season, countryName) => {
  try {
    
    if (!activityName || !difficulty || !duration || !season || !countryName) {
      throw new Error("Missing required fields"+ error.message);
    }

    // Crear una nueva actividad usando el modelo instanciado de Sequelize
    const newActivity = await Activity.create({
      activityName,
      difficulty,
      duration,
      season,
    });

    // const nameLowerCase = countryName.toLowerCase();
    const dbCountry = await Country.findAll({
      where: { 
        name: countryName,
      }
    })

    // Asociar la actividad a los países proporcionados por ID
    await newActivity.addCountries(dbCountry);

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
    throw new Error("Error creating new activity: " + error.message);
  }
};

module.exports = { getActivitiesController, postActivityController };
