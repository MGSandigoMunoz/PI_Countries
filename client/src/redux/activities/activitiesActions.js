import axios from "axios";

import { getAllActivities, postActivity, filterbyActivity } from "./activitiesSlice";

export const fetchActivities = () => async (dispatch)=>{
    try {
        const response = await axios.get("http://localhost:3001/activities");
        const data= response.data;
        dispatch(getAllActivities(data));
        console.log(data)
    } catch (error) {
        console.error("Error al obtener las actividades:", error);
    }
};

export const createActivity = ({ activityName, difficulty, duration, season, countryName }) => async (dispatch, getState) => {
    try {
      const allActivities = getState().activities.allActivities;
    
      const nameExists = allActivities.some((activity) => activity.activityName.toLowerCase() === activityName.toLowerCase());
  
      if (nameExists) {
        return alert('This Activity already exists');
      } else {
        
        const response = await axios.post("http://localhost:3001/activities", { activityName, difficulty, duration, season, countryName });
        const createdActivity = response.data;
        dispatch(postActivity(createdActivity));
        return alert('Successful! Activity created');
      }
    } catch (error) {
   
      console.error("Error al crear la actividad:", error);
     
      return alert('Error creating the activity. Please try again later.');
    }
  }
  

export const filterActivities = (activityName) =>  (dispatch, getState) => {
    try {
        const allActivities = getState().activities.allActivities;
        if (!activityName) {
            // Si activityName está vacío, muestra todas las actividades
            dispatch(filterbyActivity(allActivities));
        } else {
            // Filtra las actividades basadas en activityName
            const filteredActivities = allActivities.filter(activity => activity.activityName === activityName);
            dispatch(filterbyActivity(filteredActivities));
        }
    } catch (error) {
        console.error("Error al filtrar las actividades:", error.message);
    }
};