import { createSlice } from "@reduxjs/toolkit";
import { ongoingTransaction, RetrieveTransaction, PaymentPayStack, VerifyPayStack } from "../actionCreators/actionCreators";


export const PaymentsReducer = createSlice({
    name:'payment',
    initialState: {
        ongoingTransactions: {},
        ordersummary: {},
        payStack: {},
        verify: {}
    },
    extraReducers:(builder) => {
        builder
        .addCase(ongoingTransaction.pending, (state, action) => {
            state.proceess = 'loading'
        })
        .addCase(ongoingTransaction.fulfilled, (state, action) => {
            console.log(action.payload)
            state.proceess = 'succeeded'
            state.ongoingTransactions = action.payload
        })
        .addCase(ongoingTransaction.rejected, (state, action) => {
            state.proceess = 'failed'
            state.error = action.error.message
        })
        .addCase(RetrieveTransaction.pending, (state, action) => {
            state.proceess = 'loading'
        })
        .addCase(RetrieveTransaction.fulfilled, (state, action) => {
            console.log(action.payload)
            state.proceess = 'succeeded'
            state.ordersummary = action.payload
        })
        .addCase(RetrieveTransaction.rejected, (state, action) => {
            state.proceess = 'failed'
            state.error = action.error.message
        })
        .addCase(PaymentPayStack.pending, (state, action) => {
            state.proceess = 'loading'
        })
        .addCase(PaymentPayStack.fulfilled, (state, action) => {
            console.log(action.payload)
            state.status = 'succeeded'
            state.payStack = action.payload
        })
        .addCase(PaymentPayStack.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })
        .addCase(VerifyPayStack.pending, (state, action) => {
            state.status = 'loading'
        })
        .addCase(VerifyPayStack.fulfilled, (state, action) => {
            console.log(action.payload)
            state.status = 'succeeded'
            state.verify = action.payload
        })
        .addCase(VerifyPayStack.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })
    }

})



export default PaymentsReducer.reducer