// const { Country} = require('../db')

// const getCountries = async(req,res)=>{
//     try {
//         const {name}=req.query
//         const nameLowerCase= name.toLowerCase();//Porque así viene en la API

//         const findCountryName = Country.findOne({ where: {name:nameLowerCase
//         const allCountries= await Country.findAll() ;
//         return res.status(200).json(allCountries);
//     } catch (error) {
//         res.status(400).json({message: error.message});
//     }
// }
// module.exports = getCountries;

