import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./slices/user"
import filtersReducer from "@/redux/slices/filters"


export const store = configureStore({
    reducer: {
       user : userReducer,
       filters: filtersReducer
    }
})




export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch