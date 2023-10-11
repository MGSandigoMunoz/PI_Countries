const { Country} = require('../db')

const getCountries = async(req,res)=>{
    try {
        const allCountries= await Country.findAll() ;
        return res.status(200).json(allCountries);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
module.exports = getCountries;


