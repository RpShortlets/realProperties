import { configureStore  } from "@reduxjs/toolkit"
import componentState from "./actions/componentState"
import formState from "./actions/formState"
import propertyResult from "./actions/propertyResult"
import propertyDetails from "./actions/propertyDetails"
import reservation from "./actions/reservation"
import PaymentsReducer from "./actions/payment"
import CustomerRecords from "./actions/saveCustomerRecord"
import AdminDashboard from "./actions/adminDashboard"
import CustomerSupport from "./actions/customerSupport"
import GallarySlice from "./actions/gallery"
import HomeReducer  from "./actions/home"
import ComingSoonReducer from "./actions/comingSoonReducer"

export const store = configureStore({
    reducer: {
        homeReducer: HomeReducer,
        ComponentState: componentState,
        formState: formState,
        propertyResult: propertyResult,
        propertyDetails: propertyDetails,
        reservationState: reservation,
        paymentState: PaymentsReducer,
        customerRecord : CustomerRecords,
        adminDashboard: AdminDashboard,
        customerSupport: CustomerSupport,
        gallary: GallarySlice,
        comingsoonReducer: ComingSoonReducer

    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
    }),
})

