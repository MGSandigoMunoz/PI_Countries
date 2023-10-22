import axios from "axios";

import { getAllActivities, postActivity } from "./activitiesSlice";

export const fetchActivities = () => async (dispatch)=>{
    try {
        const response = await axios.get("http://localhost:3001/activities");
        const data= response.data;
        dispatch(getAllActivities(data));
        
    } catch (error) {
        console.error("Error al obtener las actividades:", error);
    }
}

export const createActivity = ({activityName, difficulty, duration, season, countryId}) => async (dispatch) => {//Debo enviarla en un objeto la activityData

    console.log(activityName)
    console.log(difficulty)
    console.log(duration)
    console.log(season)
    console.log(countryId)
    
    try {
        const response = await axios.post("http://localhost:3001/activities", {activityName, difficulty, duration, season, countryId});
       
        if (!response) return alert ('no llegó la response')
        else{
            const createdActivity = response.data;
            dispatch(postActivity(createdActivity));
        }
        

        
    } catch (error) {
        console.error("Error al crear la actividad:", error);
    }
}