const { Country } = require('../db.js')

const getCountryById = async (req, res) => {
  try {
    const { idPais } = req.params; //Le puedo dar el nombre que quiera a idParams. Viene de la URL

    const idUpperCase = idPais.toUpperCase();//convierte el idPaís en mayúscula, porque así está en mi db.

    const countryDetail = await Country.findByPk(idUpperCase);

    if (countryDetail) {
    
        return res.status(200).json(countryDetail);
      } else {
        
        return res.status(404).send('País no encontrado');
      }
    
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = getCountryById;
