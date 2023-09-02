'use client'
import React from 'react'
import styles from '.Sort.module.scss'
import Form from 'react-bootstrap/Form';
import { setSort } from '@/redux/slices/filtersSlice';
import { useAppSelector } from '@/redux/hooks';





const Sort = ({dispatch, sortServer}:any) => {

   const sortItems: {name:string, value:string}[] = [{name: "по возрастанию", value: "price:asc"}, {name: "по убыванию", value: "price:desc"}]
  const {sort} :any = useAppSelector((state)=> state.filters)
   
   

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