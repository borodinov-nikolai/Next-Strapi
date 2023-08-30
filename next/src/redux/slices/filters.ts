import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


interface FiltersState {
    sort:string | string[] | qs.ParsedQs | qs.ParsedQs[] | undefined,
    search: string | string[] | qs.ParsedQs | qs.ParsedQs[] | undefined
}


export const initialState: FiltersState  = {
    sort: '',
    search: ''
}


const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
         setSort: (state, action: PayloadAction<string | string[] | qs.ParsedQs | qs.ParsedQs[] | undefined>)=> {
            state.sort = action.payload
         },
         setSearch: (state, action: PayloadAction<string | string[] | qs.ParsedQs | qs.ParsedQs[] | undefined>)=> {
            state.search = action.payload
         },
         
    }
})


export const {setSort, setSearch} = filtersSlice.actions

export default filtersSlice.reducer 