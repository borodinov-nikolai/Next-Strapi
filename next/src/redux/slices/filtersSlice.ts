import {createSlice, PayloadAction} from '@reduxjs/toolkit';



interface State {
    sort: string,
    search: string,
    brand: string,
    page: number,
   
  
  

}

const initialState : State = {
    sort: '',
    search: '',
    brand : '',
    page: 0,

   

}


export const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload
        }
       
        
        
        
    }
})

export const {setPage,} = filtersSlice.actions

export default filtersSlice.reducer