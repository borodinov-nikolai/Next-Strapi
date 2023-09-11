'use client'
import { Input } from 'antd'
import React from 'react'


interface Props {
  setSearch : React.Dispatch<React.SetStateAction<string>>,
  search: string
}


const Search = ({setSearch , search}: Props) => {

  

  return (
    <Input value={search} onChange={(e)=> setSearch(e.target.value)} placeholder="Поиск" />
  )
}

export default Search