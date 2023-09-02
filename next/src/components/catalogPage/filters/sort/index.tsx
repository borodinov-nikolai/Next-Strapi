'use client'
import React from 'react'
import Form from 'react-bootstrap/Form';
import { setSort } from '@/redux/slices/filtersSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';





const Sort = ({sortServer}:any) => {

   const sortItems: {name:string, value:string}[] = [{name: "по возрастанию", value: "price:asc"}, {name: "по убыванию", value: "price:desc"}]
  const {sort} :any = useAppSelector((state)=> state.filters)
   const dispatch = useAppDispatch()
   

  return (
 
    <Form.Select value={sortServer? sortServer : sort} onChange={(e)=>dispatch(setSort(e.target.value))} aria-label="Default select example">
        {
            sortItems.map(({name, value})=> {
             return   <option  key={name} value={value ? value : ''} >{name}</option>
              
            })
        }
    
    </Form.Select>
 
  )
}

export default Sort