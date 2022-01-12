import { createSlice } from "@reduxjs/toolkit"

export const ReservationState = createSlice({
    name: 'reservationState',
    initialState: {
        adultcount: 2,
        childrencount: 2,
        guest: 4,
    }, 
    reducers: {
        incrementAdultReservation: (state) => {
            state.adultcount++;
        },
        decrementAdultReservation: (state) => {
            state.adultcount--;
        },
        incrementChildrenReservation: (state) => {
            state.childrencount++;
        },
        decrementChildrenReservation: (state) => {
            state.childrencount--;
        },
        totalGuestReservation: (state) => {
            state.guest = state.adultcount 
        },
        // resetCounts: (state) => {
        //     state.adultcount = 0;
        //     state.childrencount = 0;
        // },
        // DefaultText: (state) => {
        //     state.textTitle = 'Find Shortlets'
        // },
        // changeText: (state) => {
        //     state.textTitle = 'Search'
        //     console.log('Enter')
        // }
    },
    extraReducers: {}
})

export const { incrementAdult, decrementAdult, incrementChildren, decrementChildren, totalGuest, resetCounts, changeText, DefaultText } = ComponentState.actions;

export default ReservationState.reducer