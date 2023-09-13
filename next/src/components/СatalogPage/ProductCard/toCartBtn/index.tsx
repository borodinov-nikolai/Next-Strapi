'use client'
import { useAppDispatch } from '@/redux/hooks'
import { addItem } from '@/redux/slices/cartSlice'
import { Button, message } from 'antd'


import React from 'react'



interface Props {
      name: string,
      price: number,
      image: string,
      id: number
  
}

const ToCartBtn = ({item}:{item:Props}) => {
  const dispatch = useAppDispatch()
  const [messageApi, contextHolder] = message.useMessage();

  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Товар добавлен в корзину!',
    });
  };

  const addToCart = async (e:any)=> {
    e.stopPropagation();
   dispatch(addItem({...item, count:1}));
   success()
   }
   
   
    


  return (
    <>
     {contextHolder}
    <Button onClick={(e)=>addToCart(e)} >В корзину</Button>
    </>
   
  )
}

export default ToCartBtn