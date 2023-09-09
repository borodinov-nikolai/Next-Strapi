import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit'
import axios from 'axios'








interface Cart {
    items: {
        id: number, 
        name: string,
        price: number,
        image: string,
        count: number}[],
        totalPrice: number
}

const initialState : Cart = {
   items: [],
   totalPrice: 0
}


export const cartSlice = createSlice({
       name: 'cart',
       initialState,
       reducers: {
            addItem: (state, action: PayloadAction<any>)=> {
               const foundedItem = state.items.find(item => item.id === action.payload.id);
               if(foundedItem){
                       foundedItem.count++
               } else {
                     state.items.push(action.payload)
               }
            },
            minusItem: (state, action: PayloadAction<any>)=> {
               const foundedItem = state.items.find(item => item.id === action.payload.id);
               if(foundedItem && foundedItem.count <= 1){
                      state.items = state.items.filter(item=> item.id !== action.payload.id)
               }
               if(foundedItem && foundedItem.count >= 1){
                      foundedItem.count--
               }
            },
            removeItem: (state, action: PayloadAction<any>)=> {
               const foundedItem = state.items.find(item => item.id === action.payload.id);
               if(foundedItem){
                      state.items = state.items.filter(item=> item.id !== action.payload.id)
               }
            },
           
       }
       

})

export const {addItem, minusItem, removeItem} = cartSlice.actions
export default cartSlice.reducer