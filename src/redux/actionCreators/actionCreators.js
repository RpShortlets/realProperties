import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BaseURL } from "../../api/index"

export const searchShortlets = createAsyncThunk("shortlet/searchShortlet", async ({value, checkInDate, checkOutDate, adultcount, childrencount}) => {
    const response = await axios.get(`${BaseURL}/search-shortlets`, {
        params: {
            location: value,
            check_in_date: checkInDate,
            check_out_date: checkOutDate,
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

export const ShortletDetails = createAsyncThunk("Shortlet/getShortlet", async ({checkInDate,checkOutDate, apartment_id, Id}) => {
    const response = await axios.get(`${BaseURL}/shortlet-details`,
    {
        params: {
            property_id: Id || apartment_id,
            check_in: checkInDate,
            check_out: checkOutDate,
        }
    });


    return response.data;

});


export const getReservation = createAsyncThunk("reservation/getReservation", async ({checkInDate,checkOutDate, id}) => {
    const response = await axios.get(`${BaseURL}/payment-summary`,
    {
        params: {
            property_id: id,
            check_in: checkInDate,
            check_out: checkOutDate,
        }
    });

    
    return response.data;

});

export const getReservationUpdate = createAsyncThunk("reservation/getReservationUpdate", async ({checkOutDate,checkInDate, selectedCar,carlengthValue, radio, driverlengthValue, checkboxes, id}) => {

    const response = await axios.get(`${BaseURL}/payment-summary-update`,
    {
        params: {
            property_id: id,
            check_in: checkInDate,
            check_out: checkOutDate,
            cleaning: checkboxes?.cleaning,
            pickup: checkboxes?.pickup,
            car_rental: selectedCar,
            car_rental_length: carlengthValue,
            driver: radio,
            driver_length: driverlengthValue,
        }
    });

    return response.data;

});


export const ongoingTransaction = createAsyncThunk("payment/ongoingTransaction", async ({id, stayLenght, totalPrice, security, apartmentPrice, totalApartmentPrice, cleaning, pickup, carPrice, driver}) => {
    const formdat = {
        apartment_id: id,
        apartment_price: apartmentPrice,
        stay_length: stayLenght,
        total_apartment_price: totalApartmentPrice,
        cleaning: cleaning,
        pickup: pickup,
        car_rental: carPrice,
        driver: driver,
        security_deposit: security,
        overall_total: totalPrice
    }
    
    const response = await axios.post(`http://localhost:5050/transaction`, formdat);

    return response.data;

});


export const saveCustomerInformation = createAsyncThunk("saveCustomer/saveCustomerInformation", async ({formdata, dropdown, phn, value}) => {
    const records = {
        firstname: formdata.firstname, 
        lastname: formdata.lastname,
        email: formdata.email,
        phone_no: phn,
        dob: value?.toLocaleDateString('en-CA'),
        nationality: dropdown.nationality,
        mode_of_identification: dropdown.identification,
        identification_no: formdata.idnumber
    }

    console.log(formdata)
    
    const response = await axios.post(`http://localhost:5050/customer`, records);

    return response.data;

});


