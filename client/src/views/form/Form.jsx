import React, { useState,useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { createActivity } from "../../redux/activities/activitiesActions";
import { fetchCountries } from "../../redux/countries/countriesActions";
import validation from "./validations";

import styles from "./Form.module.css";


function Form() {
  const dispatch = useDispatch();


  const allCountries = useSelector((state) => state.countries.allCountries);

  const allActivities = useSelector((state) => state.activities.allActivities) 

  // Llama a la acción para cargar los países al cargar la página
  useEffect(() => {
    dispatch(fetchCountries());
  }, []);
  
  
  const [errors, setErrors] = useState({
    name: "Name activity can not be empty",
  });
  
  const [activityData, setActivityData] = useState({
    activityName: "",
    difficulty: "1", // Establece un valor por defecto para Difficulty
    duration: Number("1"),  // Establece un valor por defecto para Duration
    season: "Summer", // Establece un valor por defecto para Season
    countryName:[],//! ""
    searchedCountry: "",//!
    searchResults:[]//!
  });

  
  const handleChange = (event) => {
    const { name, value } = event.target;

    setActivityData({
      ...activityData,
      [name]: value,
    });

    setErrors(
      validation({
      ...activityData,
      [name]: value,
      }, allActivities)
    );
  };

  //!Busca countries que asocié a activity
  const handleSearchedCountry = (event) => {
    const searchedCountryLowerCase = event.target.value.toLowerCase();
    const filteredCountries = allCountries.filter((country) =>
      country.name.toLowerCase().includes(searchedCountryLowerCase)
    );
  
    // Asegúrate de que searchedCountry se establezca como una cadena no nula
    const searchedCountry = event.target.value || "";
  
    setActivityData({
      ...activityData,
      searchedCountry,
      searchResults: filteredCountries,
    });
  };
  

  const handleAddCountry = (country) => {
    if (!activityData.countryName.includes(country.name)) {
      setActivityData((prevData) => ({
        ...prevData,
        searchedCountry: "",
        searchResults: [],
        countryName: [...prevData.countryName, country.name],
      }));
    }
  };


  const handleRemoveCountry = (country) => {
    setActivityData((prevData) => ({
      ...prevData,
      searchedCountry: "",
      searchResults: [],
      countryName: prevData.countryName.filter((c) => c !== country),
    }));
  };


  const handleSubmit = async (event) => {
    event.preventDefault();

    dispatch(createActivity(activityData));
  

      setActivityData({
        activityName: "",
        difficulty: "1", // Establece un valor por defecto para Difficulty
        duration: Number("1"),  // Establece un valor por defecto para Duration
        season: "Summer", // Establece un valor por defecto para Season
        countryName:[],
      });


    }
 

  return (
    <div className={styles.allContainer}>
      <h1>Let's create a new adventure!</h1>
      <NavLink to="/home">
            <button >
              Home
            </button> 
          </NavLink>

          <NavLink to="/activities">
            <button >
              Activities
            </button> 
          </NavLink>


    <div className={styles.background}>


      <form onSubmit={handleSubmit}>
        <label>Activity name</label>
        <br/>
        <input
          type="text"
          name="activityName"
          value={activityData.activityName}
          placeholder="write a name..."
          onChange={handleChange}
          className={styles.inputsAndSelect}
        />
        {errors.name && <p className="error">{errors.name}</p>}
        <br/>
        <label>Difficulty    </label>
        <br/>
        <select
          name="difficulty"
          value={activityData.difficulty}
          onChange={handleChange}
          className={styles.inputsAndSelect}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
       <br/>
        <label>Duration in hours     </label>
        <br/>
        <select
          name="duration"
          value={activityData.duration}
          onChange={handleChange}
          className={styles.inputsAndSelect}
        >
          
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>

        <br/>
        <label>Season</label>
        <br/>
        <select
          name="season"
          value={activityData.season}
          onChange={handleChange}
          className={styles.inputsAndSelect}
        >
          <option value="Summer">Summer</option>
          <option value="Fall">Fall</option>
          <option value="Winter">Winter</option>
          <option value="Spring">Spring</option>
        </select>
        <br/>
        <label>Countries</label>


        <div>

        <input 
          type="text" 
          name="countryName" 
          placeholder="Write a country name" 
          value={activityData.searchedCountry || ''} 
          onChange={handleSearchedCountry}
          className={styles.inputsAndSelect}
        />


         <div>
            {
              activityData.searchResults?.map((country) => ( 
                <div key={country.name} onClick={() => handleAddCountry(country)}>
                  {country.name}
                  {/* {activityData.countries.includes(country.name)} */}
                </div>
              ))
            }
          </div>
      </div>
      <div>
          {
            activityData.countryName?.map((country) => (
              <div key={country}>
                <span>{country}</span>
                <button type="button" onClick={() => handleRemoveCountry(country)}>
                  X
                </button>
              </div>
            ))
          }


        </div>


        {errors.countryName && <p className="error">{errors.countryName}</p>}

        <button type="submit" disabled={errors.name || !activityData.countryName.length}>
          Submit
        </button>
      </form>
    </div>
    </div>
  );
}

export default Form;
