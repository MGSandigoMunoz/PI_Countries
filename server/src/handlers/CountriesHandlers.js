const { getCountriesController, getCountryByIdController } = require("../controllers/CountriesControllers")

const getCountriesHandler = async(req, res)=>{
    try {
        const response = await getCountriesController();
        return res.status(200).json(response);

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}


const getCountryByIdHandler= async(req,res)=>{

    try {
      const { idPais } = req.params; //Le puedo dar el nombre que quiera a idParams. Viene de la URL

      const response = await getCountryByIdController(idPais)
      
      return res.status(200).json(response);
              
            
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
}



module.exports = {getCountriesHandler, getCountryByIdHandler};