import { configureStore  } from "@reduxjs/toolkit"
import componentState from "./actions/componentState"
import formState from "./actions/formState"
import propertyResult from "./actions/propertyResult"
import propertyDetails from "./actions/propertyDetails"
import reservation from "./actions/reservation"

export const store = configureStore({
    reducer: {
        ComponentState: componentState,
        formState: formState,
        propertyResult: propertyResult,
        propertyDetails: propertyDetails,
        reservationState: reservation
    }
})

