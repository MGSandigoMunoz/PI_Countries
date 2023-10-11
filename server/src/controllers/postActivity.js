const { Country,Activity } = require('../db.js')
const { Op } = require("sequelize");


const postActivity = async (req, res) => {
    try {
        const { id, activityName,dificulty,duration,season } = req.body;

        if(!activityName||!dificulty||!season)return res.status(400).send(error.message);

        const newActivity = await Activity.create({id, activityName,dificulty,duration,season});

        await newActivity.addCountry(req.body.countries);
        return res.status(200).json(newActivity);
       

    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = postActivity;