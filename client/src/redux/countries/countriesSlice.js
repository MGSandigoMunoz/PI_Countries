import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allCountries:[],
    countries:[],
};

export const countriesSlice = createSlice({
    name:'countries',
    initialState,
    reducers:{
        getAllCountries:(state,action) => {
            state.allCountries = action.payload//La action la recibe de countriesActions
        },

        searchCountryByName:(state,action) => {
            state.countries = action.payload
        }




    }
})

export const {getAllCountries, searchCountryByName }=countriesSlice.actions;

export default countriesSlice.reducer;
