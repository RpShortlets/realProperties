import { createSlice } from "@reduxjs/toolkit"

export const formState = createSlice({
    name: 'formState',
    pending: false,
    error: false,
    initialState: {
        newsLetterEmail: ''   
    },
    reducers: {
        sendNewsLetterEmail: (state, action) => {
            state.newsLetterEmail = action.payload;

        }
    }
})


export const { sendNewsLetterEmail } = formState.actions;

export default formState.reducer;