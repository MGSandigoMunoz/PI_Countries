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

export const createActivity = (activityData) => async (dispatch) => {//Debo enviarla en un objeto la activityData
    try {
        const response = await axios.post("http://localhost:3001/activities", activityData);
        console.log(response)
        const createdActivity = response.data;
        dispatch(postActivity(createdActivity));

        
    } catch (error) {
        console.error("Error al crear la actividad:", error);
    }
}