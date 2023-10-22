import { configureStore } from '@reduxjs/toolkit';
import countriesRreducer from './countries/countriesSlice'
import activitiesReducer from './activities/activitiesSlice'

const store = configureStore({
  reducer: {
    countries: countriesRreducer,
    activities: activitiesReducer,

  },
});

export default store;