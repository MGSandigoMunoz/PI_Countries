import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createActivity } from "../../redux/activities/activitiesActions";
import { fetchCountries } from "../../redux/countries/countriesActions";
import validation from "./validations";

import styles from "./Form.module.css";

function Form() {


//?ESTADOS LOCALES

  const [dataActivity, setDataActivity] = useState({
    name: "",
    countries: "",
    difficulty: "", 
    duration: "",  
    season: "",
  })

  const [error, setError] = useState({
    name: "",
    countries: "",
    difficulty: "", 
    duration: "",  
    season: "",
  })

  


  function handleChange(event){
    setDataActivity({
      ...dataActivity,
      [event.target.name] : event.target.value,
    })

    setError(validation({
      ...dataActivity,
      [event.target.name] : event.target.value,
    }));
  
  }

  return (
    <div>
      <p>FORM!</p>
      <form >
        <label>Name</label>
        <input
          name="name"
          value={dataActivity.value}
          onChange={handleChange}
          type="text"
          placeholder="Activity name"
        />
        <span>{error.name}</span>
        
        <label>Difficulty</label>
        <select 
        name="difficulty"
        value={dataActivity.value}
        onChange={handleChange}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <label>Duration in hours</label>
        <select 
        name="duration"
        value={dataActivity.value}
        onChange={handleChange}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <label>Season</label>
        <select 
        name="season"
        value={dataActivity.value}
        onChange={handleChange}>
          <option value="Summer">Summer</option>
          <option value="Fall">Fall</option>
          <option value="Winter">Winter</option>
          <option value="Spring">Spring</option>
        </select>
        <label>Countries</label>
        <input
          type="text"
          name="countries"
          value={dataActivity.value}
          onChange={handleChange}
          placeholder="Country or countries names"
        />
        <span>{error.countries}</span>
        

        <button 
        type="submit"
        disabled={error.name || error.countries}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;


