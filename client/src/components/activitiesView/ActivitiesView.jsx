import React, {useState} from "react";
import Activity from "../activity/Activity";

import styles from './ActivitiesView.module.css'

function ActivitiesView({ filterActivity}){

  
    
    
    return(
    <div>

        <div className={styles.background}>

            <div className={styles.cardCountry}>

            {filterActivity.map((activity) => (
                <Activity
                    id={activity.id}
                    key={activity.id}
                    activityName={activity.activityName}
                    difficulty={activity.difficulty}
                    duration={activity.duration}
                    season={activity.season}
                    Countries={activity.Countries?.map((country)=> country.name + " - ")}
                />
            ))}

            </div>


        </div>
    </div>
    )
}

export default ActivitiesView;