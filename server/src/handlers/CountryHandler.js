const {getCountryByNameController} = require("../controllers/CountryController")


const getCountryByNameHandler = async (req, res) => {
  try {
    const { name } = req.query;

    const response = await getCountryByNameController(name)
    return res.status(200).json(response);
    
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {getCountryByNameHandler};