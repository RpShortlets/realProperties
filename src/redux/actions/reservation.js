import { createSlice } from "@reduxjs/toolkit"
import { getReservation, getReservationUpdate } from "../actionCreators/actionCreators"

export const ReservationState = createSlice({
    name: 'reservation',
    initialState: {
        reservation: {},
    }, 
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getReservation.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(getReservation.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.reservation = action.payload
            })
            .addCase(getReservation.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            .addCase(getReservationUpdate.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(getReservationUpdate.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.reservation = action.payload
            })
            .addCase(getReservationUpdate.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
        
    }
})


export default ReservationState.reducer