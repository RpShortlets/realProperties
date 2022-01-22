import { createSlice } from "@reduxjs/toolkit";
import {  saveCustomerInformation } from "../actionCreators/actionCreators";


export const CustomerRecords = createSlice({
    name:'saveCustomer',
    initialState: {
        records: {}
    },
     extraReducers:(builder) => {
        builder
        .addCase(saveCustomerInformation.pending, (state, action) => {
            state.status = 'loading'
        })
        .addCase(saveCustomerInformation.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.records = action.payload
        })
        .addCase(saveCustomerInformation.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })
        

    }

})



export default CustomerRecords.reducer