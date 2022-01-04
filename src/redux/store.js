import { configureStore  } from "@reduxjs/toolkit"
import componentState from "./actions/componentState"


export const store = configureStore({
    reducer: {
        ComponentState: componentState
    }
})

