import { createSlice } from "@reduxjs/toolkit"
import {getComingSoonDetails, saveCustomerComingDetails } from "../actionCreators/actionCreators"

export const ComingSoonReducer = createSlice({
    name:"comingReducer",
    initialState: {
        comingDetails: {},
        saveCustomer: {}
    },
    reducers: {
        ClearSaveCustomer: (state, action) => {
            state.saveCustomer = {}
        }
    },
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
        .addCase(saveCustomerComingDetails.pending, (state, action) => {
            state.requesting = 'loading'
        })
        .addCase(saveCustomerComingDetails.fulfilled, (state, action) => {
            state.requesting= "succeeded"
            state.saveCustomer = action.payload
        })
        .addCase(saveCustomerComingDetails.rejected, (state, action) => {
            state.requesting = "failed"
            state.saveCustomer = action.error.message
        })
    }
})

export const { ClearSaveCustomer } = ComingSoonReducer.actions;


export default ComingSoonReducer.reducer