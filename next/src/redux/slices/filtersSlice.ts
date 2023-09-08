import {createSlice, PayloadAction} from '@reduxjs/toolkit';



interface State {
    sort: string,
    search: string,
    brand: string,
    page: number,
    pageSize: number

}

const initialState : State = {
    sort: '',
    search: '',
    brand : '',
    page: 1,
    pageSize: 20

}


export const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload
        },
        setPageSize: (state, action: PayloadAction<number>) => {
            state.pageSize = action.payload
        },
        
        
    }
})

export const {setPage, setPageSize} = filtersSlice.actions

export default filtersSlice.reducer