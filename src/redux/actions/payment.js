import { createSlice } from "@reduxjs/toolkit";
import { ongoingTransaction, saveCustomerInformation } from "../actionCreators/actionCreators";


export const PaymentsReducer = createSlice({
    name:'payment',
    initialState: {
        reservations: {},
    },
     extraReducers:(builder) => {
        builder
        .addCase(ongoingTransaction.pending, (state, action) => {
            state.proceess = 'loading'
        })
        .addCase(ongoingTransaction.fulfilled, (state, action) => {
            console.log(action.payload)
            state.proceess = 'succeeded'
            state.reservations = action.payload
        })
        .addCase(ongoingTransaction.rejected, (state, action) => {
            state.proceess = 'failed'
            state.error = action.error.message
        })
    }

})



export default PaymentsReducer.reducer