import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ActivitiesView from "../../components/activitiesView/ActivitiesView";
import { fetchActivities } from "../../redux/activities/activitiesActions";

function Activities(){

    const dispatch = useDispatch ();
    const allActivities = useSelector((state) => state.activities.allActivities)

    useEffect(() => {
        // Llama a la acción para cargar las actividades al cargar la página
        dispatch(fetchActivities())
      }, []);

      return (
        <div>
          <h1>ACTIVITIES!</h1>  
          <ActivitiesView renderActivities={allActivities}/>


        </div>
      )
}

export default Activities