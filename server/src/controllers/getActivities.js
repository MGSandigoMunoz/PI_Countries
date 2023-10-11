const { Activity } = require('../db');
const { all } = require('../routes');

const getActivities = async(req,res)=>{
    try {
        const allActivities= await Activity.findAll() ;
        return res.status(200).json(allActivities);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
module.exports = getActivities;