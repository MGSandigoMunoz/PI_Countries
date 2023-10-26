import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import ActivitiesView from "../../components/activitiesView/ActivitiesView";
import { fetchActivities, filterActivities } from "../../redux/activities/activitiesActions";

import styles from './Activities.module.css'
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
        <div className={styles.activities}>
          <h1>Let's find an amazing activity!</h1> 

          <NavLink to="/home">
            <button >
              Home
            </button> 
          </NavLink>
          <br/> 
          <br/>
          <br/>
          <br/>
          <div>
          <h3>Activities filter</h3>
         
            <select
            name="activityName"
            onChange={handleFilter}
            className={styles.selectActivity}
            >
              <option value="">All activities</option>
              {allActivities && allActivities?.map((activity,index)=> (
                <option  key={index} value={activity?.activityName}>{activity?.activityName}</option>
              ))}

              {/* {filteredActivity && filteredActivity.map((activity, index) => (
                  <option key={index} value={activity?.activityName}>{activity?.activityName}</option>
              ))} */}

             
            </select>
        </div>

          <ActivitiesView  filterActivity={filteredActivity}/>


        </div>
      )
}

export default Activities