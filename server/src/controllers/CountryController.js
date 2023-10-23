const { Country, Activity} = require('../db.js')
const { Op } = require("sequelize");

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
        throw new Error("No se encontraron países con el nombre especificado");
    }
  } catch (error) {
    throw new Error("Error al encontrar el país"+ error.message);
  }
};

module.exports = {getCountryByNameController};