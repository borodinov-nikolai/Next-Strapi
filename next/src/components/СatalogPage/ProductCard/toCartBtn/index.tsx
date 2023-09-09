'use client'
import { useAppDispatch } from '@/redux/hooks'
import { addItem } from '@/redux/slices/cartSlice'
import { Button } from 'antd'
import React from 'react'



interface Props {
      name: string,
      price: number,
      image: string,
      id: number
  
}

const ToCartBtn = ({item}:{item:Props}) => {
  const dispatch = useAppDispatch()

  console.log(item.name)
  const addToCart = (e:any)=> {
    e.stopPropagation(); console.log('click')
   dispatch(addItem({...item, count:1}))
  }   


  return (
    <Button onClick={(e)=>addToCart(e)} >В корзину</Button>
  )
}

export default ToCartBtn