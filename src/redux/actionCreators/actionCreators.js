import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const searchShortlets = createAsyncThunk("shortlet/searchShortlet", async ({value, checkedin, checkedout, adultcount, childrencount}) => {
    const response = await axios.get("https://tranquil-tundra-47751.herokuapp.com/search-shortlets", {
        params: {
            location: value,
            check_in_date: "",
            check_out_date: "",
            adult: "",
            child: "",
        }
    });

    return response.data;
});
