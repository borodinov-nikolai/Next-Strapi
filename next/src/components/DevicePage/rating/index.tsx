'use client'
import { useAppSelector } from '@/redux/hooks';
import { addRaiting, getUserRating } from '@/services/clientApi';
import { Rate } from 'antd'
import React from 'react'





const Rating = ({deviceID}: {deviceID: number}) => {
     const [rating, setRating] = React.useState<number>(0)
     const [ratingID, setRatingID] = React.useState<number>()
     const {id} = useAppSelector((state)=> state.user)
    
    
     React.useEffect(()=> {
      const getRating = async ()=> {
        const res = await getUserRating(deviceID, id)
        setRating(res?.data?.data[0]?.attributes.value)
        setRatingID(res?.data?.data[0]?.id)
      }

      getRating()
     },[id])

     

console.log(rating)
  return (
    <Rate style={{fontSize: '50px'}} onChange={(e:number)=>{addRaiting(e, deviceID, id, ratingID); setRating(e)}}  value={rating} defaultValue={0} />
  )
}

export default Rating