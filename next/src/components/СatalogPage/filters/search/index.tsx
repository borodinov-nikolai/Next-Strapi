'use client'
import { Input } from 'antd'
import React from 'react'


interface Props {
  setSearch : React.Dispatch<React.SetStateAction<string>>
}


const Search = ({setSearch}: Props) => {

  

  return (
    <Input onChange={(e)=> setSearch(e.target.value)} placeholder="Поиск" />
  )
}

export default Search