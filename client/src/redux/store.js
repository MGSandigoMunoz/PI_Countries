import { configureStore } from '@reduxjs/toolkit';
import countriesRreducer from './countriesSlice'

const store = configureStore({
  reducer: {
    countries: countriesRreducer,
  },
});

export default store;

//ACTIONS

// import axios from 'axios'

// import {GET_COUNTRIES, FILTER_BY_CONTINENT, FILTER_BY_ACTIVITY, ALPHABETICAL_ORDER, POPULATION_ORDER} from './actionTypes'

// export function getCountries(){
//     return async function(dispatch){
//         const response = await axios(`http://localhost:3001/countries`);//db

//         return dispatch({
//             type:GET_COUNTRIES,
//             payload: response.data
//         })
//     }
// }



// export function filterByContinent(continent){
//     return{
//         type:FILTER_BY_CONTINENT,
//         payload:continent,
//     };
// };

// export function filterByActivity(activity){
//     return{
//         type:FILTER_BY_ACTIVITY,
//         payload:activity,
//     };
// };

// export function alphabeticalOrder(order){
//     //order puede ser A: ascendente o D :Descendente
//     return{
//         type:ALPHABETICAL_ORDER,
//         payload:order
//     }
// }

// export function populationOrder(order){
//     //order puede ser A: ascendente o D :Descendente
//     return{
//         type:POPULATION_ORDER,
//         payload:order
//     }
// }