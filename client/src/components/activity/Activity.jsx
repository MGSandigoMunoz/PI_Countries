import React from "react"

function Activity({activityName, difficulty, duration, season, Countries}){

    return (
        <div>
            
            <h2>Activity name: {activityName}</h2>
            <p>Difficulty : {difficulty}</p>
            <p>Duration (hours): {duration}</p>
            <p>Season : {season}</p>
            <p>Country: {Countries}</p>

        </div>
    )
}

export default Activity;