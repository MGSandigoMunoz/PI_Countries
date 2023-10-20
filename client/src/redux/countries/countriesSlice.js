import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allCountries:[],
    filteredCountry:[],
};

export const countriesSlice = createSlice({
    name:'countries',
    initialState,
    reducers:{
        getAllCountries:(state,action) => {
            state.allCountries = action.payload//La action la recibe de countriesActions
        },

        getCountryById:(state,action) => {
            state.filteredCountry=action.payload
        }


    }
})

export const {getAllCountries, getCountryById }=countriesSlice.actions;

export default countriesSlice.reducer;
