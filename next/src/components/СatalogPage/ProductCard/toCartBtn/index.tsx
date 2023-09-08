'use client'
import { Button } from 'antd'
import React from 'react'


const ToCartBtn = () => {
  return (
    <Button onClick={(e)=>{e.stopPropagation(); console.log('click')}} >В корзину</Button>
  )
}

export default ToCartBtn