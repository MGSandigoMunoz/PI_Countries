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
            const {activityData} = action.payload
            state.allActivities=[...state.allActivities, activityData]
        }   

    }
})

export const {getAllActivities, postActivity } = activitiesSlice.actions;

export default activitiesSlice.reducer;
