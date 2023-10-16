const { Country} = require('../db.js')
const { Op } = require("sequelize");

const getCountryByNameController = async (name) => {
  try {

    const countries = await Country.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%` // Búsqueda insensible a mayúsculas/minúsculas
        }
      }
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