'use client'
import { setSearch } from '@/redux/slices/filters'
import React from 'react'



const Search = ({dispatch, search}:any) => {

  return (
    <div>
        <input onChange={(e)=> dispatch(setSearch(e.target.value))} value={search} type="text" placeholder='поиск' />
    </div>
  )
}

export default Search