import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BaseURL } from "../../api/index"



// let propertyDetails = localforage.createInstance({
//     name: "PropertyDetails"
// });

export const UpdateBooks = createAsyncThunk("reservation/UpdateBooks", async () => {
    const response = await axios.get(`${BaseURL}/update-booking`)
    console.log(response)
    return response.data;
});


export const searchShortlets = createAsyncThunk("shortlet/searchShortlet", async ({searchValue, checkInDate, checkOutDate, adultcount, childrencount}) => {
    console.log(checkInDate, checkOutDate, searchValue)
    const response = await axios.get(`${BaseURL}/search-shortlets`, {
        params: {
            location: searchValue,
            check_in_date: checkInDate,
            check_out_date: checkOutDate,
            adult: adultcount,
            child: childrencount,
        }
    });
    return response.data;
});

export const filter = createAsyncThunk("shortlet/filter", async ({startprice,endprice}) => {
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

    localStorage.setItem("PropertyDetails",JSON.stringify(response.data))
    return response.data;
    
    

});


export const getReservation = createAsyncThunk("reservation/getReservation", async ({checkInDate,checkOutDate, id}) => {


    const response = await axios.get(`${BaseURL}/payment-summary`,{
        params: {
            property_id: id,
            check_in: checkInDate,
            check_out: checkOutDate,
        }
    });

    
    // localStorage.setItem("getReservation",JSON.stringify(response.data))
    return response.data;
    
});

export const getReservationUpdate = createAsyncThunk("reservation/getReservationUpdate", async ({checkOutDate,checkInDate, selectedCar,carlengthValue, radio, driverlengthValue, checkboxes, Id}) => {

    const response = await axios.get(`${BaseURL}/payment-summary-update`,
    {
        params: {
            property_id: Id,
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
    // localStorage.setItem("getReservation",JSON.stringify(response.data))
    return response.data;

});


export const ongoingTransaction = createAsyncThunk("payment/ongoingTransaction", async ({id, stayLenght, totalPrice, security, apartmentPrice, totalApartmentPrice, cleaning, pickup, carPrice, driver, checkInDate, checkOutDate}) => {
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
        overall_total: totalPrice,
        check_in_date: checkInDate,
        check_out_date: checkOutDate
    }
    
    const response = await axios.post(`${BaseURL}/transaction`, formdat);

    return response.data;

});


export const RetrieveTransaction = createAsyncThunk("payment/RetrieveTransaction", async ({ongoingId}) => {
    const formdat = {
        ongoing_id: ongoingId
    }
    
    const response = await axios.post(`${BaseURL}/retreive-transaction`, formdat);

    return response.data;

});


export const PaymentPayStack = createAsyncThunk("payment/paymentStack", async ({apartmentId, userId, overAll, guestId }) => {
    const formdat = {
        apartment_id: apartmentId,
        user_id:  guestId,
        amount: overAll,
        ongoing_id: userId
    }
    
    const response = await axios.post(`${BaseURL}/payment-paystack`, formdat);
    localStorage.setItem('ref', JSON.stringify(response.data))
    return response.data;

});


export const VerifyPayStack = createAsyncThunk("payment/verifyPayStack", async ({ref}) => {
    
    const response = await axios.get(`${BaseURL}/paystack/callback/shortlet`, {
        params: {
            ref: ref
        }
    });
    return response.data;

});


export const saveCustomerInformation = createAsyncThunk("saveCustomer/saveCustomerInformation", async ({formdata, dropdown, phn, value, ongoingId, apartmentId}) => {
    const records = {
        firstname: formdata.firstname?.toLowerCase(), 
        lastname: formdata.lastname?.toLowerCase(),
        email: formdata.email?.toLowerCase(),
        phone_no: phn,
        dob: value?.toLocaleDateString('en-CA'),
        nationality: dropdown.nationality,
        mode_of_identification: dropdown.identification,
        identification_no: formdata.idnumber,
        apartment_id: apartmentId,
        ongoing_id: ongoingId
    }
    
    const response = await axios.post(`${BaseURL}/customer`, records);
    localStorage.setItem('guestId', response.data?.guest_id[0]?.guest_id) 

    return response.data;

});


