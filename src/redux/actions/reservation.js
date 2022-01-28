import { createSlice } from "@reduxjs/toolkit"
import { getReservation, getReservationUpdate, UpdateBooks } from "../actionCreators/actionCreators"


export const ReservationState = createSlice({
    name: 'reservation',
    initialState: {
        reservation: {},
    }, 
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getReservation.pending, (state, action) => {
                state.reserve = 'loading'
            })
            .addCase(getReservation.fulfilled, (state, action) => {
                    state.reserve = 'succeeded'
                    state.reservation = action.payload
                
            })
            .addCase(getReservation.rejected, (state, action) => {
                state.reserve = 'failed'
                state.error = action.error.message
            })
            .addCase(getReservationUpdate.pending, (state, action) => {
                state.reserve = 'loading'
            })
            .addCase(getReservationUpdate.fulfilled, (state, action) => {
                state.reserve = 'succeeded'
                state.reservation = action.payload
                
            })
            .addCase(getReservationUpdate.rejected, (state, action) => {
                state.reserve = 'failed'
                state.error = action.error.message
            })
            .addCase(UpdateBooks.pending, (state, action) => {
                state.bookings = 'loading'
            })
            .addCase(UpdateBooks.fulfilled, (state, action) => {
                state.bookings = 'succeeded'
                state.updateBooks = action.payload
                
            })
            .addCase(UpdateBooks.rejected, (state, action) => {
                state.bookings = 'failed'
                state.error = action.error.message
            })
        
    }
})


export default ReservationState.reducer