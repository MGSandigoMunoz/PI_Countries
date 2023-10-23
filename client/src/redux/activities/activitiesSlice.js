import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allActivities:[],
    filteredActivity:[]
};

export const activitiesSlice = createSlice({
    name:'activities',
    initialState,
    reducers:{
        getAllActivities:(state,action) => {
            state.allActivities = action.payload
            state.filteredActivity= action.payload
            
        },
        postActivity:(state,action)=>{
            const {activityData} = action.payload
            state.allActivities=[...state.allActivities, activityData]
        },
        filterbyActivity:(state,action)=>{
            
            state.filteredActivity=action.payload
        },

    }
})

export const {getAllActivities, postActivity, filterbyActivity } = activitiesSlice.actions;

export default activitiesSlice.reducer;
