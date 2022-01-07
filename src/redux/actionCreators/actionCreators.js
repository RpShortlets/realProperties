import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const SearchShortlets = createAsyncThunk("shortlets/shortlets", async (value, arrivalDeparture, adultcount, childrencount, ) => {
    console.log('I am here')
    const  response = await axios.get("http://localhost:5050/search-shortlets", {
        params: {
            location: value,
            check_in_date: arrivalDeparture[0],
            check_out_date: arrivalDeparture[1],
            adult: adultcount,
            child: childrencount,
        }
    });
    
    return response;
});

