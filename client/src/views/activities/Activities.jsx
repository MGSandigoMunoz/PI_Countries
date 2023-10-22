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


    const handleChange = (event)=>{
      const{ name, value }= event.target;
      
    }
      return (
        <div>
          <h1>ACTIVITIES!</h1>  

          <div>
          <h3>Activities filter</h3>
            <select
            name="activityName"
            onChange={handleChange}
            >
              <option value="">Select an activity</option>
              {allActivities?.map((activity,index)=> (
                <option  key={index} value={activity.activityName}>{activity.activityName}</option>
              ))}
             
            </select>
        </div>

          <ActivitiesView renderActivities={allActivities}/>


        </div>
      )
}

export default Activities