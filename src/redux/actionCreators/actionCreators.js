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

export const filter = createAsyncThunk("shortlet/filter", async ({startprice,endprice}) => {
    console.log('Fired')
    const response = await axios.get(`${BaseURL}/shortlet-filter`, {
        params: {
            start_price: startprice,
            end_price: endprice,
        }
    });

    return response.data;
});

export const ShortletDetails = createAsyncThunk("Shortlet/getShortlet", async () => {
    const response = await axios.get(`${BaseURL}/shortlet-details`,
    {
        params: {
            property_id: 1,
            check_in: '',
            check_out: '',
        }
    });


    return response.data;

});


export const getReservation = createAsyncThunk("reservation/getReservation", async () => {
    const response = await axios.get(`${BaseURL}/payment-summary`,
    {
        params: {
            property_id: 1,
            check_in: '',
            check_out: '',
        }
    });

    
    return response.data;

});

export const getReservationUpdate = createAsyncThunk("reservation/getReservationUpdate", async ({checkOutDate,checkInDate, selectedCar,carlengthValue, radio, driverlengthValue}) => {
    console.log('fired', checkOutDate, checkInDate)
    const response = await axios.get(`${BaseURL}/payment-summary-update`,
    {
        params: {
            property_id: 1,
            check_in: checkInDate,
            check_out: checkOutDate,
            cleaning: '',
            pickup: '',
            car_rental: selectedCar,
            car_rental_length: carlengthValue,
            driver: radio,
            driver_length: driverlengthValue,
        }
    });

    return response.data;

});


