import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./slices/userSlice"
import filtersReducer from "@/redux/slices/filtersSlice"
import cartReducer from "@/redux/slices/cartSlice"


export const store = configureStore({
    reducer: {
       user : userReducer,
       filters: filtersReducer,
       cart: cartReducer
    }
})




export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch