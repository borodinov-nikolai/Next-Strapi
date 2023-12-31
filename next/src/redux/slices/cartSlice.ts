import {createSlice, PayloadAction} from '@reduxjs/toolkit'









interface Cart {
    items: {
        id: number, 
        name: string,
        price: number,
        image: string,
        count: number}[],
        totalCount: number,
        totalPrice: number
}

const initialState : Cart = {
   items: [],
   totalCount: 0,
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
               state.totalPrice = state.items.reduce((sum, item)=>sum + item.price * item.count , 0)
               state.totalCount = state.items.reduce((sum, item)=> sum + item.count,0)
               }
            ,
            minusItem: (state, action: PayloadAction<any>)=> {
               const foundedItem = state.items.find(item => item.id === action.payload.id);
               if(foundedItem){
                      foundedItem.count = action.payload.count
                      
               }
               state.totalPrice = state.items.reduce((sum, item)=>sum + item.price * item.count , 0)
               state.totalCount = state.items.reduce((sum, item)=> sum + item.count,0)
            },
            removeItem: (state, action: PayloadAction<any>)=> {
               const foundedItem = state.items.find(item => item.id === action.payload.id);
               if(foundedItem){
                      state.items = state.items.filter(item=> item.id !== action.payload.id)
               }
               state.totalPrice = state.items.reduce((sum, item)=>sum + item.price * item.count , 0)
               state.totalCount = state.items.reduce((sum, item)=> sum + item.count,0)
            },
            replaceItems: (state, action: PayloadAction<any>)=> {
                state.items = action.payload
                state.totalPrice = state.items.reduce((sum, item)=>sum + item.price * item.count , 0)
                state.totalCount = state.items.reduce((sum, item)=> sum + item.count,0)
            },


           clearItems: (state)=> {
            state.items = [];
            state.totalPrice = 0;
            state.totalCount = 0;
           }
       }
       

})

export const {addItem, minusItem, removeItem, replaceItems, clearItems} = cartSlice.actions
export default cartSlice.reducer