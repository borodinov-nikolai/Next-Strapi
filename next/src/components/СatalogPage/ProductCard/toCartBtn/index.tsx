'use client'
import { useAppDispatch } from '@/redux/hooks'
import { addItem } from '@/redux/slices/cartSlice'
import { Button } from 'antd'
import axios from 'axios'

import React from 'react'



interface Props {
      name: string,
      price: number,
      image: string,
      id: number
  
}

const ToCartBtn = ({item}:{item:Props}) => {
  const dispatch = useAppDispatch()


  const addToCart = async (e:any)=> {
    e.stopPropagation(); console.log('click')
   dispatch(addItem({...item, count:1}))

   }
   
   
    


  return (
    <Button onClick={(e)=>addToCart(e)} >В корзину</Button>
  )
}

export default ToCartBtn