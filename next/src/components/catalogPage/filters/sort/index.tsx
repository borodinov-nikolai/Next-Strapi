'use client'
import React from 'react'
import styles from '.Sort.module.scss'
import Form from 'react-bootstrap/Form';
import { setSort } from '@/redux/slices/filters';





const Sort = ({dispatch, sort}:any) => {

   const sortItems: {name:string, value:string}[] = [{name: "по возрастанию", value: "price:asc"}, {name: "по убыванию", value: "price:desc"}]
  
   

  return (
 
    <Form.Select value={sort} onChange={(e)=>dispatch(setSort(e.target.value))} aria-label="Default select example">
        {
            sortItems.map(({name, value})=> {
             return   <option  key={name} value={value} >{name}</option>
              
            })
        }
    
    </Form.Select>
 
  )
}

export default Sort