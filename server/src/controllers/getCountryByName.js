const { Country,Activity } = require('../db.js')
const { Op } = require("sequelize");

const getCountryByName = async (req, res) => {
  try {
    const { name } = req.query;

    const countries = await Country.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%` // Búsqueda insensible a mayúsculas/minúsculas
        }
      }
    });

    if (countries.length > 0) {
      return res.status(200).json(countries);
    } else {
      return res.status(404).send('No se encontraron países con el nombre especificado.');
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = getCountryByName;

