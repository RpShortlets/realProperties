import { createSlice } from "@reduxjs/toolkit";
import { ShortletDetails } from "../actionCreators/actionCreators";


export const PropertyDetails = createSlice({
    name: "Shortlet",
    initialState: {
        PropertyDetails: {},
        pending: null,
        error: null,
    },
    reducers: {},
    extraReducers: {
        [ShortletDetails.pending]: (state) => {
            state.pending = true;
            state.error = false;
        },
        [ShortletDetails.fulfilled]: (state, action) => {
            state.PropertyDetails = action.payload;
            state.pending = false;
        },
        [ShortletDetails.rejected]: (state) => {
            state.error = true;
            state.pending = false;
        },

    }
});
export const { getShortletStart, getShortletSuccess, getShortletFailure  } = PropertyDetails.actions;


export default PropertyDetails.reducer