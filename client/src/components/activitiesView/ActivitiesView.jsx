import React, {useState} from "react";
import Activity from "../activity/activity";

function ActivitiesView({ filterActivity}){

  
    
    
    return(
        <div>
            {filterActivity.map((activity) => (
                <Activity
                    id={activity.id}
                    key={activity.id}
                    activityName={activity.activityName}
                    difficulty={activity.difficulty}
                    duration={activity.duration}
                    season={activity.season}
                    Countries={activity.Countries[0].name}
                />
            ))}


        </div>
    )
}

export default ActivitiesView;