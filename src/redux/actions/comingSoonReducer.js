import { createSlice } from "@reduxjs/toolkit"
import {getComingSoonDetails } from "../actionCreators/actionCreators"

export const ComingSoonReducer = createSlice({
    name:"comingReducer",
    initialState: {
        comingDetails: {}
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getComingSoonDetails.pending, (state, action) => {
            state.proceess = 'loading'
        })
        .addCase(getComingSoonDetails.fulfilled, (state, action) => {
            state.proceess= "succeeded"
            state.comingDetails = action.payload
        })
        .addCase(getComingSoonDetails.rejected, (state, action) => {
            state.proceess = "failed"
            state.comingDetails = action.error.message
        })
    }
})

export default ComingSoonReducer.reducer