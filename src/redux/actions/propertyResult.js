import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



export const updateUser2 = createAsyncThunk("users/update", async ({value, checkedin, checkedout, adultcount, childrencount}) => {
    console.log('I am here')
    const response = await axios.get("http://localhost:5050/search-shortlets", {
        params: {
            location: value,
            check_in_date: "",
            check_out_date: "",
            adult: "",
            child: "",
        }
    });

    console.log(response)
    
    return response.data;
});

export const PropertyResultSlice = createSlice({
    name: "users",
    initialState: {
        propertyResult: {},
        pending: null,
        error: null,
    },
    reducers: {},
    extraReducers: {
        [updateUser2.pending]: (state) => {
            state.pending = true;
            state.error = false;
        },
        [updateUser2.fulfilled]: (state, action) => {
            state.propertyResult = action.payload;
            state.pending = false;
        },
        [updateUser2.rejected]: (state) => {
            state.error = true;
            state.pending = false;
        },

    }
});

export const { updateStart, updateSuccess, updateFailure } = PropertyResultSlice.actions

export default PropertyResultSlice.reducer;