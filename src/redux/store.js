import { configureStore  } from "@reduxjs/toolkit"
import componentState from "./actions/componentState"
import formState from "./actions/formState"
import propertyResult from "./actions/propertyResult"


export const store = configureStore({
    reducer: {
        ComponentState: componentState,
        formState: formState,
        propertyResult: propertyResult
    }
})

