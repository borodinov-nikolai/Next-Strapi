import { configureStore } from '@reduxjs/toolkit'
import deviceSlice from './slices/deviceSlice'
import filtersSlice from './slices/filtersSlice'


export const store = configureStore({
    reducer: {
        devices: deviceSlice,
        filters: filtersSlice
        }
})




export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch