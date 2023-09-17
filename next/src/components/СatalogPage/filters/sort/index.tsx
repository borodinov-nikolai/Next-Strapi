'use client'
import { Select } from 'antd'
import React from 'react'





interface Props {
  setSort: React.Dispatch<React.SetStateAction<string>>,
  value: string,
  sort: string
}



const Sort = ({setSort, value, sort}: Props) => {

 

  return (
    <Select
      defaultValue={"price:asc"}
      value={sort || value || 'price:asc'}
      style={{ width: 190 }}
      onChange={(value:string)=>setSort(value)}
      options={[
        { value: 'price:asc', label: 'Цена по возрастанию' },
        { value: 'price:desc', label: 'Цена по убыванию' },
        { value: 'deviceRating:asc', label: 'Рейтинг по возрастанию' },
        { value: 'deviceRating:desc', label: 'Рейтинг по убыванию' }
      ]}
    />
  )
}

export default Sort