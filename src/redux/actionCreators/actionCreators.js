import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BaseURL } from "../../api/index"
import  CryptoJS  from "crypto-js"

const key = "@@TechnoRealProperty" 

export const getUserProfile = createAsyncThunk(
    "userProfile/getUserProfile",
    async () => {
        try {
            const { data } = await axios.get(`${BaseURL}/userProfile`);
            localStorage.setItem("userProfile", JSON.stringify(data));
            return data;
        } catch (error) {
            return error.message;
        }
    }
);

//*     UPADTE BOOKINGS ON EVERY LOAD
export const UpdateBooks = createAsyncThunk("reservation/UpdateBooks", async () => {
    const response = await axios.get(`${BaseURL}/update-booking`)
    return response.data;
});

//* END OF  UPDATE BOOKINGS


//* SEARCH BOOKINGS
export const searchShortlets = createAsyncThunk("shortlet/searchShortlet", async ({searchV, checkI, checkO, adult, childr}) => {
    // let headers = {
    //     'Content-Type': 'application/json',
    //     'Access-Control-Allow-Origin': '*',
    //     'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        
    // };
    const response = await axios.get(`${BaseURL}/search-shortlets`, {
        params: {
            location: searchV, 
            check_in_date: checkI, 
            check_out_date: checkO, 
            adult: adult,
            child: childr,
        },
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

//* END OF SEARCH BOOKINGS

//* GET APARTMENT DETAILS
export const ShortletDetails = createAsyncThunk("Shortlet/getShortlet", async ({checkInDate,checkOutDate, apartment_id, Id, decrypted}) => {

    const response = await axios.get(`${BaseURL}/shortlet-details`,
    {
        params: {
            property_id: Id,
            check_in: checkInDate,
            check_out: checkOutDate,
        }
    });
    return response.data;
});

//* END OF GET APARTMENT DETAILS


//*  GET PAYMENT DETAILS AND UPDATE PAYMENT
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
            driver_length: carlengthValue,
        }
    });
    // localStorage.setItem("getReservation",JSON.stringify(response.data))
    return response.data;

});

//* END OF GET PAYMENT DETAILS AND UPDATE PAYMENT


//* SAVE CUSTOMER TRANSACTION INFOMATION
export const ongoingTransaction = createAsyncThunk("payment/ongoingTransaction", async ({Id, stayLenght, totalPrice, security, apartmentPrice, totalApartmentPrice, cleaning, pickup, carPrice, driver, checkInDate, checkOutDate}) => {
    const formdat = {
        apartment_id: Id,
        apartment_price: apartmentPrice,
        stay_length: stayLenght,
        total_apartment_price: totalApartmentPrice,
        cleaning: cleaning,
        pickup: pickup,
        car_rental: carPrice,
        driver: driver,
        security_deposit: security,
        overall_total: 10,
        check_in_date: checkInDate,
        check_out_date: checkOutDate
    }
    
    const response = await axios.post(`${BaseURL}/transaction`, formdat); 
    const ddd =  await response?.data?.Ongoing_id[0]?.ongoing_id
    localStorage.setItem('defined', JSON.stringify( CryptoJS.AES.encrypt(ddd?.toString(), key).toString()));
    return response.data;

});

//* END OF SAVE CUSTOMER TRANSACTION INFOMATION

//* GET CUSTOMER RECORDS: KYC
export const saveCustomerInformation = createAsyncThunk("saveCustomer/saveCustomerInformation", async ({formdata, usedFirstname, usedLastname, dropdown, phn, value, ongoingId, apartmentId, agentPhn}) => {
    const records = {
        firstname: usedFirstname, 
        lastname: usedLastname,
        email: formdata.email?.toLowerCase(),
        phone_no: phn,
        dob: value?.toLocaleDateString('en-CA'),
        nationality: dropdown.nationality,
        mode_of_identification: dropdown.identification,
        identification_no: formdata.idnumber,
        apartment_id: apartmentId,
        ongoing_id: ongoingId,
        title: dropdown.title,
        agent_name: formdata.agentName,
        agent_phone_no: agentPhn,
    }
    
    const response = await axios.post(`${BaseURL}/customer`, records);
    const ddd =  await response?.data?.guest_id[0]?.guest_id
    localStorage.setItem('dddrd', JSON.stringify( CryptoJS.AES.encrypt(ddd?.toString(), key).toString()));
    return response.data;

});
//* END OF GET CUSTOMER RECORDS: KYC

//* RETRIEVE CUSTOMER TRANSACTION 
export const RetrieveTransaction = createAsyncThunk("payment/RetrieveTransaction", async (Id) => {
    const response = await axios.get(`${BaseURL}/retreive-transaction`, {
        params: {
            ongoing_id: parseInt(Id),
        }
    });
    return response.data;
});
//* END OF RETRIEVE CUSTOMER TRANSACTION


//* MANUAL PAYMENT 

export const ManualPay = createAsyncThunk("payment/manualPay", async ({apartmentId, userId, overAll, guestId }) => {
    const formdat = {
        apartment_id: apartmentId,
        user_id: parseInt(guestId),
        // amount: overAll,
        ongoing_id: userId
    }
    
    const response = await axios.post(`${BaseURL}/manual-pay`, formdat);
    return response.data;

});



export const ManualReceive = createAsyncThunk("payment/manualreceive", async ({maxId, customerRes }) => {
    const formdat = {
        max_id: maxId,
        cust_confirmation: customerRes
    }
    
    const response = await axios.post(`${BaseURL}/set-customer-pymt-confirmation`, formdat);
    return response.data;
});

export const ManualCancel = createAsyncThunk("payment/manualCancel", async ({pendingId }) => {
    const formdat = {
        pending_id: pendingId,
    }
    
    const response = await axios.post(`${BaseURL}/cancel-manual-payment`, formdat);
    return response.data;

});

export const ManualConfirmBookings = createAsyncThunk("payment/manualTransfer", async ({penId, formdata, time }) => {
    const formdat = {
        pending_id: penId,
        bank_transaction_id: formdata.transactionId,
        payment_time: time
    }
    
    const response = await axios.post(`${BaseURL}/confirm-book-manual`, formdat);
    return response.data;

});

export const ExpiredBooking =  createAsyncThunk("payment/expiredBooking", async ({pendingId}) => {
    const formdat = {
        pending_id: pendingId,
    }
    
    const response = await axios.post(`${BaseURL}/expired-manual-payment`, formdat);
    return response.data;

});


//* END MANUAL PAYMENT


//* PAYSTACK PAYMENT
export const PaymentPayStack = createAsyncThunk("payment/paymentStack", async ({apartmentId, userId, overAll, guestId }) => {
    const formdat = {
        apartment_id: apartmentId,
        user_id: parseInt(guestId),
        amount: overAll,
        ongoing_id: userId
    }
    
    const response = await axios.post(`${BaseURL}/card-payment`, formdat);
    const pay =  await response.data
    localStorage.setItem('ref', JSON.stringify( CryptoJS.AES.encrypt(pay?.toString(), key).toString()));
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

//* END PAYSTACK PAYMENT

//* Admin */

export const AdminLogin = createAsyncThunk("adminDashboard/adminLogin", async ({email, password}) => {
    const formdat = {
        email: email,
        password: password
    }
    const {data} = await axios.post(`${BaseURL}/admin-login`, formdat);
    if(data.msg === 'Password Updated Successfully!') {
        localStorage.setItem("admin", JSON.stringify(data))
        return data;
    }

});

export const HandleSignIn = async(formData) => {
    const Fdata = {
        email: formData.email,
        password: formData.password
    }

    try{
        const {data} = await axios.post(`${BaseURL}/admin-login`, Fdata)
        return data
    }catch(error){
        return error.message
    }

}


export const AdminPendingTransaction = createAsyncThunk("adminDashboard/adminPendingTransaction", async () => {
    const {data} = await axios.get(`${BaseURL}/admin/pending-payments`);
    return data.results;
});

export const AdminCompletedTransaction = createAsyncThunk("adminDashboard/adminCompletedTransaction", async () => {
    const {data} = await axios.get(`${BaseURL}/admin/completed-payments`);
    return data.results;
});

export const AdminDeletedTransaction = createAsyncThunk("adminDashboard/adminDeletedTransaction", async () => {
    const {data} = await axios.get(`${BaseURL}/admin/deleted-payments`);
    return data.results;
});

export const GetCustomersComplains = createAsyncThunk("adminDashboard/getCustomersComplains", async () => {
    const {data} = await axios.get(`${BaseURL}/get-customer-enquiry`);
    return data.results;
});

export const UpdateBooking = createAsyncThunk("adminDashboard/UpdateBookings", async ({formdata, phn,  dropdown,checkInDate,  checkOutDate, totalPrice}) => {
    
    const formdatas = {
        apartment_id: dropdown.apartment,
        firstname: formdata.firstname,
        lastname: formdata.lastname,
        email: formdata.email,
        phone_no: phn,
        check_in_date: checkInDate,
        check_out_date: checkOutDate,
        amount: totalPrice,
        reference_no: formdata.referenceId,
        bank_trasaction_id: formdata.transactionId,
        external_platform: dropdown.platform
    }

    const {data} = await axios.post(`${BaseURL}/update_booking_external`, formdatas);
    return data.title;
});

export const GetPropertyInfoAdmin = createAsyncThunk("adminDashboard/getPropertyInfoAdmin", async ({dropdown}) => {
    
    const response = await axios.get(`${BaseURL}/apartment-info`, 
    {
        params: {
            apartment_id: dropdown.apartment
        }
    });

    return response.data
})

//* END OF ADMIN 

//* CONTACT CUSTOMER SUPPORT
export const ContactSupport = createAsyncThunk("support/contactSupport", async ({formdata}) => {

    const formdat = {
        firstname: formdata.firstname,
        lastname:  formdata.lastname,
        email: formdata.email,
        subject: formdata.subject,
        message: formdata.message
    }
    
    const response = await axios.post(`${BaseURL}/contact-customer`, formdat);

    return response.data;

});
