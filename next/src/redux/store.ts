import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './slices/cartSlice'
import filtersSlice from './slices/filtersSlice'


export const store = configureStore({
    reducer: {
        filters: filtersSlice,
        cart: cartSlice
        }
})




export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch