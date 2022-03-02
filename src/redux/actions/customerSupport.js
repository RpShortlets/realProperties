import {createSlice} from '@reduxjs/toolkit';
import { ContactSupport} from  '../actionCreators/actionCreators';

export const CustomerSupport = createSlice({
    name: 'support',
    initialState: {
        enquiry: {}
    },
    extraReducers: (builder) => {
        builder
        .addCase(ContactSupport.pending, (state, action) => {
            state.pending = 'loading'
        })
        .addCase(ContactSupport.fulfilled, (state, action) => {
            state.pending = 'succeeded'
            state.enquiry = action.payload
        })
        .addCase(ContactSupport.rejected, (state, action) => {
            state.pending = 'failed'
            state.error = action.error.message
        })
    }
})

export default CustomerSupport.reducer