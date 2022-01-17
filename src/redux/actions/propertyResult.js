import { createSlice } from "@reduxjs/toolkit";
import { searchShortlets, filter }from "../actionCreators/actionCreators";



export const PropertyResultSlice = createSlice({
    name: "shortlet",
    initialState: {
        propertyResult: {},
        pending: null,
        error: null,
    },
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(searchShortlets.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(searchShortlets.fulfilled, (state, action) => {
                state.status = 'succeeded'
                // Add any fetched posts to the array
                state.propertyResult = action.payload
            })
            .addCase(searchShortlets.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            .addCase(filter.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(filter.fulfilled, (state, action) => {
                state.status = 'succeeded'
                // Add any fetched posts to the array
                state.propertyResult = action.payload
            })
            .addCase(filter.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
});

// export const { searchShortletStart, searchShortletSuccess, searchShortletFailure } = PropertyResultSlice.actions

export default PropertyResultSlice.reducer;