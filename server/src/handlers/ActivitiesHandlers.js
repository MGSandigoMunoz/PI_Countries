const { getActivitiesController, postActivityController } = require("../controllers/ActivitiesControllers");

const getActivitiesHandler = async (req, res) => {
  try {
    const response = await getActivitiesController();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}; 
  
const postActivityHandler = async (req, res) => {
  try {
    const { activityName, difficulty, duration, season, countryName } = req.body;
    const response = await postActivityController(activityName, difficulty, duration, season, countryName);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
 
module.exports = { getActivitiesHandler, postActivityHandler };
