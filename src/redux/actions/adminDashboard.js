import {createSlice} from '@reduxjs/toolkit';
import { AdminPendingTransaction, AdminCompletedTransaction, AdminDeletedTransaction } from '../actionCreators/actionCreators';

export const AdminDashboard = createSlice({
    name: 'adminDashboard',
    initialState: {
        pendingTransaction: {},
        completedTransaction: {},
        cancelledTransaction: {},
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(AdminPendingTransaction.pending, (state, action) => {
            state.pending = 'loading'
        })
        .addCase(AdminPendingTransaction.fulfilled, (state, action) => {
            state.pending = 'succeeded'
            state.pendingTransaction = action.payload
        })
        .addCase(AdminPendingTransaction.rejected, (state, action) => {
            state.pending = 'failed'
            state.error = action.error.message
        })
        .addCase(AdminCompletedTransaction.pending, (state, action) => {
            state.completed = 'loading'
        })
        .addCase(AdminCompletedTransaction.fulfilled, (state, action) => {
            state.completed = 'succeeded'
            state.completedTransaction = action.payload
        })
        .addCase(AdminCompletedTransaction.rejected, (state, action) => {
            state.completed = 'failed'
            state.error = action.error.message
        })
        .addCase(AdminDeletedTransaction.pending, (state, action) => {
            state.cancelled = 'loading'
        })
        .addCase(AdminDeletedTransaction.fulfilled, (state, action) => {
            state.cancelled = 'succeeded'
            state.cancelledTransaction = action.payload
        })
        .addCase(AdminDeletedTransaction.rejected, (state, action) => {
            state.cancelled = 'failed'
            state.error = action.error.message
        })
    }
});

export default AdminDashboard.reducer;