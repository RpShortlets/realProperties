import { createSlice } from "@reduxjs/toolkit"

export const ComponentState = createSlice({
    name: 'componentState',
    initialState: {
        adultcount: 0,
        childrencount: 0,
        guest: 0,
        textTitle: 'Find Shortlets',
        checkInDate: null,
        checkOutDate: null,
    }, 
    reducers: {
        incrementAdult: (state) => {
            state.adultcount++;
        },
        decrementAdult: (state) => {
            state.adultcount--;
        },
        incrementChildren: (state) => {
            state.childrencount++;
        },
        decrementChildren: (state) => {
            state.childrencount--;
        },
        totalGuest: (state) => {
            state.guest = state.adultcount 
        },
        resetCounts: (state) => {
            state.adultcount = 0;
            state.childrencount = 0;
        },
        DefaultText: (state) => {
            state.textTitle = 'Find Shortlets'
        },
        changeText: (state) => {
            state.textTitle = 'Search'
            console.log('Enter')
        },
        checkInDate: (state, action) => {
            state.checkInDate= action.payload
        },
        checkOutDate: (state, action) => {
            state.checkOutDate = action.payload
        }

    },
    extraReducers: {}
})

export const { incrementAdult, decrementAdult, incrementChildren, decrementChildren, totalGuest, resetCounts, changeText, DefaultText, checkInDate, checkOutDate  } = ComponentState.actions;

export default ComponentState.reducer