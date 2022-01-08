import { createSlice } from "@reduxjs/toolkit";
import { searchShortlets }from "../actionCreators/actionCreators";



export const PropertyResultSlice = createSlice({
    name: "shortlet",
    initialState: {
        propertyResult: {},
        pending: null,
        error: null,
    },
    reducers: {},
    extraReducers: {
        [searchShortlets.pending]: (state) => {
            state.pending = true;
            state.error = false;
        },
        [searchShortlets.fulfilled]: (state, action) => {
            state.propertyResult = action.payload;
            state.pending = false;
        },
        [searchShortlets.rejected]: (state) => {
            state.error = true;
            state.pending = false;
        },

    }
});

export const { searchShortletStart, searchShortletSuccess, searchShortletFailure } = PropertyResultSlice.actions

export default PropertyResultSlice.reducer;