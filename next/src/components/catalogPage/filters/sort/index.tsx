'use client'
import { Select } from 'antd'
import React from 'react'





interface Props {
  setSort: React.Dispatch<React.SetStateAction<string>>,
  value: string
}



const Sort = ({setSort, value}: Props) => {

 

  return (
    <Select
      defaultValue={value ? value:  "price:asc"}
      style={{ width: 190 }}
      onChange={(value:string)=>setSort(value)}
      options={[
        { value: 'price:asc', label: 'Цена по возрастанию' },
        { value: 'price:desc', label: 'Цена по убыванию' },
        { value: 'rating', label: 'По алфавиту' },
        { value: 'alphabetical', label: 'по рейтингу' },
      ]}
    />
  )
}

export default Sort