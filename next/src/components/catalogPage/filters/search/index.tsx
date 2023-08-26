'use client'
import React from 'react'



const Search = ({setSearch, search}:any) => {

  return (
    <div>
        <input onChange={(e)=> setSearch(e.target.value)} value={search} type="text" placeholder='поиск' />
    </div>
  )
}

export default Search