import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BaseURL } from "../../api/index"
export const searchShortlets = createAsyncThunk("shortlet/searchShortlet", async ({value, checkedin, checkedout, adultcount, childrencount}) => {
    const response = await axios.get(`${BaseURL}/search-shortlets`, {
        params: {
            location: value,
            check_in_date: checkedin,
            check_out_date: checkedout,
            adult: adultcount,
            child: childrencount,
        }
    });

    return response.data;
});
