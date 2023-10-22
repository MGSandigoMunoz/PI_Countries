import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import validation from './validations';
import { createActivity } from "../../redux/activities/activitiesActions";

function Form(props) {
  const dispatch = useDispatch();

  const [activityData, setActivityData] = useState({
    name: "",
    countries: "",
  });

  const [errors, setErrors] = useState({
    name: "Please fill out the form",
    countries: "", // You need to initialize the errors object with all expected keys
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

    if (!errors.name && !errors.countries) {
      await dispatch(createActivity(activityData));
      setActivityData({ name: "", countries: "" });
    }
  };

  return (
    <div>
      <p>FORM!</p>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          name="name"
          value={activityData.name}
          placeholder="Diving..."
          onChange={handleChange}
        />
        {errors.name && <p className="error">{errors.name}</p>}

        <label>Countries</label>
        <input
          name="countries"
          value={activityData.countries}
          placeholder="Japan, Colombia..."
          onChange={handleChange}
        />
        {errors.countries && <p className="error">{errors.countries}</p>}

        <button type="submit" disabled={errors.name || errors.countries}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
