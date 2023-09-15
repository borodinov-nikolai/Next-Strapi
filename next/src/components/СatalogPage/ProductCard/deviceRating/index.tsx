'use client'
import { Rate } from 'antd'
import React from 'react'



const DeviceRating = () => {
  return (
    <div onClick={(e)=>{ e.stopPropagation()}}>
         <Rate onChange={(e)=>{console.log(e)}}  defaultValue={0} />
    </div>
  )
}

export default DeviceRating