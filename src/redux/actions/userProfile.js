import { createSlice } from "@reduxjs/toolkit";
import { getUserProfile } from "../actionCreators/actionCreators";

export const userProfile = createSlice({
    name: "userProfile",
    initialState: {
        userProfile: {},
    
    },
    reducers: {
        getUserInfo: (state, action) => {
            state.userProfile = action.payload
        }

    },
    extraReducers(builder) {
        builder
            .addCase(getUserProfile.pending, (state, action) => {
                state.userProfile = 'loading'
            })
            .addCase(getUserProfile.fulfilled, (state, action) => {
                state.userProfile = 'succeeded'
                state.userProfile = action.payload
            })
            .addCase(getUserProfile.rejected, (state, action) => {
                state.userProfile = 'failed'
                state.error = action.error.message
            })
    }
});

