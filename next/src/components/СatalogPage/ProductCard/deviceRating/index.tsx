'use client'
import { Rate } from 'antd'
import React from 'react'



interface Rating  {
  rating: {
    attributes: {
      value : number
    } 
  } []

}



const DeviceRating = ({rating}: Rating) => {
  
  
   const value = rating.reduce((sum, item)=> sum + item.attributes.value, 0 )/rating.length
 
  return (
    <div >
         <Rate  disabled allowHalf value={value}  defaultValue={0} />
    </div>
  )
}

export default DeviceRating