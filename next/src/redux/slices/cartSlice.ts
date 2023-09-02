import {createSlice} from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


interface CartState {
    cartItems: { name : string,
        price : number,
        img: string,
        count: number
    } [],
    totalPrice: number
   
}


export const initialState: CartState = {
    cartItems: [],
    totalPrice: 0
}


const cartSlice = createSlice({
    name: 'cart',
    initialState,
   reducers: {
         addCartItem: (state, action: PayloadAction<{name: string, price: number, img: string}>) => {
            console.log(action.payload)
                const foundItem: any = state.cartItems.find((item)=> {
                return  item.name === action.payload.name
                })
                if (foundItem) {
                       foundItem.count++
                } else {
                    state.cartItems.push({...action.payload, count:1})
                }
            }
        }})

export const {addCartItem} = cartSlice.actions
export default cartSlice.reducer