import React from "react"

import styles from './Activity.module.css'

function Activity({activityName, difficulty, duration, season, Countries}){

    return (
        <div className={styles.country}>
            
            <h2>Activity name: {activityName}</h2>
            <p>Difficulty : {difficulty}</p>
            <p>Duration (hours): {duration}</p>
            <p>Season : {season}</p>
            <p>Country: {Countries}</p>

        </div>
    )
}

export default Activity;