import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allActivities:[],
};

export const activitiesSlice = createSlice({
    name:'activities',
    initialState,
    reducers:{
        getAllActivities:(state,action) => {
            state.allActivities = action.payload
        },
        postActivity:(state,action)=>{
            state.allActivities=[...state, action.payload]//Las actividades acnteriores + la que agrego
        }   

    }
})

export const {getAllActivities, postActivity } = activitiesSlice.actions;

export default activitiesSlice.reducer;
