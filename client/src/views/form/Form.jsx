import React, { useState,useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createActivity } from "../../redux/activities/activitiesActions";
import { fetchCountries } from "../../redux/countries/countriesActions";
import validation from "./validations";

import styles from "./Form.module.css";

function Form() {
  const dispatch = useDispatch();

  //!Countries
  const allCountries = useSelector((state) => state.countries.allCountries);

  // Llama a la acción para cargar los países al cargar la página
  useEffect(() => {
    dispatch(fetchCountries());
  }, []);
//!


  const [activityData, setActivityData] = useState({
    activityName: "",
    difficulty: "1", // Establece un valor por defecto para Difficulty
    duration: Number("1"),  // Establece un valor por defecto para Duration
    season: "Summer", // Establece un valor por defecto para Season
    countryName:"",
  });
  const [errors, setErrors] = useState({
    name: "Please fill out the form",
    countries: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setActivityData({
      ...activityData,
      [name]: value,
    });

    setErrors(validation({
      ...activityData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!errors.activityName && !errors.countryName) {
      await dispatch(createActivity(activityData));

      setActivityData({
        activityName: "",
        difficulty: "1", // Establece un valor por defecto para Difficulty
        duration: Number("1"),  // Establece un valor por defecto para Duration
        season: "Summer", // Establece un valor por defecto para Season
        countryName:"",
      });
    }
  };

  return (
    <div>
      <p>FORM!</p>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="activityName"
          value={activityData.activityName}
          placeholder="Diving..."
          onChange={handleChange}
        />
        {errors.activityName && <p className="error">{errors.activityName}</p>}
        <label>Difficulty</label>
        <select
          name="difficulty"
          value={activityData.difficulty}
          onChange={handleChange}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <label>Duration in hours</label>
        <select
          name="duration"
          value={activityData.duration}
          onChange={handleChange}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <label>Season</label>
        <select
          name="season"
          value={activityData.season}
          onChange={handleChange}
        >
          <option value="Summer">Summer</option>
          <option value="Fall">Fall</option>
          <option value="Winter">Winter</option>
          <option value="Spring">Spring</option>
        </select>

        <label>Countries</label>
        <select
          name="countryName"
          value={activityData.countryName}
          onChange={handleChange}
        >
          <option value="">Select a country</option>
          {allCountries?.map((country, index) => (
            <option key={index} value={country.name}>
              {country.name}
            </option>
          ))}
        </select>
        {errors.countryName && <p className="error">{errors.countryName}</p>}

        <button type="submit" disabled={errors.activityName || errors.countryName}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
