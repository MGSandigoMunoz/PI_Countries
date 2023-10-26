import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allCountries:[],
    filteredCountry:[],
    filteredCountries:[],
    currentPage:1,//!
    itemsPerPage:10,//!
};

export const countriesSlice = createSlice({
    name:'countries',
    initialState,
    reducers:{
        getAllCountries:(state,action) => {
            state.allCountries = action.payload;
            state.filteredCountries = action.payload;
        },

        getCountryById:(state,action) => {
            state.filteredCountry=action.payload;
        },


        filters:(state,action) => {
            state.filteredCountries=action.payload;
        },

        setCurrentPage: (state, action) => {//!
            state.currentPage = action.payload;
          },




    }
})

export const {getAllCountries, getCountryById, filters, setCurrentPage }=countriesSlice.actions; //!

export default countriesSlice.reducer;
