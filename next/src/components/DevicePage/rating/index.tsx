'use client'
import { Rate } from 'antd'
import React from 'react'





const Rating = () => {
  return (
    <Rate style={{fontSize: '50px'}} onChange={(e)=>{console.log(e)}}  defaultValue={0} />
  )
}

export default Rating