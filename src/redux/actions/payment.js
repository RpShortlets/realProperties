import { createSlice } from "@reduxjs/toolkit";
import { ongoingTransaction, RetrieveTransaction, PaymentPayStack, VerifyPayStack, ManualPay, ManualCancel, ManualConfirmBookings } from "../actionCreators/actionCreators";


export const PaymentsReducer = createSlice({
    name:'payment',
    initialState: {
        ongoingTransactions: {},
        ordersummary: {},
        payStack: {},
        verify: {},
        manualTransfer: {},
        cancelTransfer: {},
        confirmTransfer: {}
    },
    extraReducers:(builder) => {
        builder
        .addCase(ongoingTransaction.pending, (state, action) => {
            state.proceess = 'loading'
        })
        .addCase(ongoingTransaction.fulfilled, (state, action) => {
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
            state.status = 'succeeded'
            state.verify = action.payload
        })
        .addCase(VerifyPayStack.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })
        .addCase(ManualPay.pending, (state, action) => {
            state.status = 'loading'
        })
        .addCase(ManualPay.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.manualTransfer = action.payload
        })
        .addCase(ManualPay.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })
        .addCase(ManualCancel.pending, (state, action) => {
            state.status = 'loading'
        })
        .addCase(ManualCancel.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.cancelTransfer = action.payload
        })
        .addCase(ManualCancel.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })
        .addCase(ManualConfirmBookings.pending, (state, action) => {
            state.status = 'loading'
        })
        .addCase(ManualConfirmBookings.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.confirmTransfer = action.payload
        })
        .addCase(ManualConfirmBookings.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })
    }

})



export default PaymentsReducer.reducer