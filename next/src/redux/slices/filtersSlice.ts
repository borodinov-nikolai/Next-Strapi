import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


interface FiltersState {
    sort:string | string[] | qs.ParsedQs | qs.ParsedQs[] | undefined,
    searchValue: string | string[] | qs.ParsedQs | qs.ParsedQs[] | undefined,
    search: string | string[] | qs.ParsedQs | qs.ParsedQs[] | undefined
}


export const initialState: FiltersState  = {
    sort: '',
    searchValue: '',
    search: '',
}


const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
         setSort: (state, action: PayloadAction<string | string[] | qs.ParsedQs | qs.ParsedQs[] | undefined>)=> {
            state.sort = action.payload
         },
         setSearchValue : (state, action: PayloadAction<string | string[] | qs.ParsedQs | qs.ParsedQs[] | undefined> )=> {
          state.searchValue = action.payload
         },
         setSearch: (state, action: PayloadAction<string | string[] | qs.ParsedQs | qs.ParsedQs[] | undefined>)=> {
            state.search = action.payload
         },
         resetFilters: (state)=> {
            state.sort= '',
            state.searchValue= '',
            state.search= ''
         }
         
    }
})


export const {setSort, setSearchValue, setSearch, resetFilters} = filtersSlice.actions

export default filtersSlice.reducer 