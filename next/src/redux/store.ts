import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './slices/cartSlice'
import filtersSlice from './slices/filtersSlice'
import userSlice from './slices/userSlice'


export const store = configureStore({
    reducer: {
        user: userSlice,
        filters: filtersSlice,
        cart: cartSlice
        }
})




export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch