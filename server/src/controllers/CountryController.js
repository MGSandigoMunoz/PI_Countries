const { Country, Activity} = require('../db.js')
const { Op } = require("sequelize");

//! GET COUNTRY BY NAME

const getCountryByNameController = async (name) => {

  const nameLowerCase = name.toLowerCase();

  try {

    const countries = await Country.findAll({
      where: {
        name: {
          [Op.iLike]: `%${nameLowerCase}%` // Búsqueda insensible a mayúsculas/minúsculas
        }
      },
      include:[
        {
          model: Activity,
          attributes: ['activityName'],
          through: {
            attributes: [], // No obtener ningún campo de la tabla intermedia
          },
        }]
    }); 

    if (countries.length > 0) {
      return countries;
    } else {
        throw new Error("No countries found with the specified name");
    }
  } catch (error) {
    throw new Error("Error finding country"+ error.message);
  }
};

module.exports = {getCountryByNameController};