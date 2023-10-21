import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allCountries:[],
    filteredCountry:[],
    filteredCountries:[],
};

export const countriesSlice = createSlice({
    name:'countries',
    initialState,
    reducers:{
        getAllCountries:(state,action) => {
            state.allCountries = action.payload;//La action la recibe de countriesActions
            state.filteredCountries = action.payload;
        },

        getCountryById:(state,action) => {
            state.filteredCountry=action.payload;
        },


        filters:(state,action) => {
            state.filteredCountries=action.payload;
        },




    }
})

export const {getAllCountries, getCountryById, filters }=countriesSlice.actions;

export default countriesSlice.reducer;
