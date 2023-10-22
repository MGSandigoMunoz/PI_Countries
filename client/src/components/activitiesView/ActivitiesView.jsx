import React, {useState} from "react";
import Activity from "../activity/activity";

function ActivitiesView(renderActivities){

    return(
        <div>
            {renderActivities?.map((activity) => (
                <Activity
                    id={renderActivities.id}
                    key={renderActivities.id}
                    activityName={renderActivities.activityName}
                    difficulty={renderActivities.difficulty}
                    duration={renderActivities.duration}
                    season={renderActivities.season}
                    Countries={renderActivities.Countries}
                />
            ))}


        </div>
    )
}

export default ActivitiesView;