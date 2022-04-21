import { createSlice } from "@reduxjs/toolkit";
import { getHomeData } from "../actionCreators/actionCreators";


export const HomeReducer = createSlice({
    name: 'homeReducer',
    initialState: {
        upcomingGallery: {},

    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getHomeData.pending, (state, action) => {
            state.process = 'loading'
        })
        .addCase(getHomeData.fulfilled, (state, action) => {
            state.process = 'succeeded'
            state.upcomingGallery = action.payload
        })
        .addCase(getHomeData.rejected, (state, action) => {
            state.process = 'failed'
            state.upcomingGallery = action.error.message
        })
    }


})

export default HomeReducer.reducer;
