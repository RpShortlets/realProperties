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
    extraReducers:(builder) => {
        builder
        .addCase(ShortletDetails.pending, (state, action) => {
            state.status = 'loading'
            
        })
        .addCase(ShortletDetails.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.PropertyDetails = action.payload        
        })
        .addCase(ShortletDetails.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })
        

    }
});
export const { getShortletStart, getShortletSuccess, getShortletFailure  } = PropertyDetails.actions;


export default PropertyDetails.reducer