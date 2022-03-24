import {createSlice} from '@reduxjs/toolkit';
import { AdminPendingTransaction, AdminCompletedTransaction, 
    AdminDeletedTransaction, AdminLogin, GetCustomersComplains,
    UpdateBooking, GetPropertyInfoAdmin, AdminUserRegistration } 
    from '../actionCreators/actionCreators';

export const AdminDashboard = createSlice({
    name: 'adminDashboard',
    initialState: {
        pendingTransaction: {},
        completedTransaction: {},
        cancelledTransaction: {},
        login: {},
        profile: {},
        complains: {},
        updateBooks: {},
        apartmentInfo: {},
        userRegistration: {}
    },
    reducers: {
        getAdminProfile: (state, action) => {
            state.profile = action.payload
        },
        clearRegistration: (state, action) => {
            state.userRegistration = {}
            
        },
    },
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
        .addCase(AdminLogin.pending, (state, action) => {
            state.status = 'loading'
        })
        .addCase(AdminLogin.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.login = action.payload
        })
        .addCase(AdminLogin.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })
        .addCase(GetCustomersComplains.pending, (state, action) => {
            state.status = 'loading'
        })
        .addCase(GetCustomersComplains.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.complains = action.payload
        })
        .addCase(GetCustomersComplains.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })
        .addCase(UpdateBooking.pending, (state, action) => {
            state.bookings = 'loading'
        })
        .addCase(UpdateBooking.fulfilled, (state, action) => {
            state.bookings = 'succeeded'
            state.updateBooks = action.payload
        })
        .addCase(UpdateBooking.rejected, (state, action) => {
            state.bookings = 'failed'
            state.error = action.error.message
        })
        .addCase(GetPropertyInfoAdmin.pending, (state, action) => {
            state.status = 'loading'
        })
        .addCase(GetPropertyInfoAdmin.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.apartmentInfo = action.payload
        })
        .addCase(GetPropertyInfoAdmin.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })
        .addCase(AdminUserRegistration.pending, (state, action) => {
            state.status = 'loading'
        })
        .addCase(AdminUserRegistration.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.userRegistration = action.payload
        })
        .addCase(AdminUserRegistration.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })
    }
});

export const { getAdminProfile, clearRegistration } = AdminDashboard.actions;

export default AdminDashboard.reducer;