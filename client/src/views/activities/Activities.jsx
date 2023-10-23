import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import ActivitiesView from "../../components/activitiesView/ActivitiesView";
import { fetchActivities, filterActivities } from "../../redux/activities/activitiesActions";

function Activities(){

    const dispatch = useDispatch ();

    const allActivities = useSelector((state) => state.activities.allActivities)

    const filteredActivity = useSelector((state) => state.activities.filteredActivity)

    useEffect(() => {
      // Llama a la acción para cargar los países al cargar la página
        dispatch(fetchActivities())
      }, []);

//? FILTRO ACTIVIDADES

      const handleFilter = (event) =>{
       dispatch(filterActivities(event.target.value))
      }

    
      return (
        <div>
          <h1>ACTIVITIES!</h1> 

          <NavLink to="/home">
            <button >
              Home
            </button> 
          </NavLink>

          <div>
          <h3>Activities filter</h3>
            <select
            name="activityName"
            onChange={handleFilter}
            >
              <option value="">All activities</option>
              {allActivities?.map((activity,index)=> (
                <option  key={index} value={activity.activityName}>{activity.activityName}</option>
              ))}
             
            </select>
        </div>

          <ActivitiesView  filterActivity={filteredActivity}/>


        </div>
      )
}

export default Activities