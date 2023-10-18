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

    }
})

export const {getAllCountries}=countriesSlice.actions;

export default countriesSlice.reducer;
