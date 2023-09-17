'use client'
import { useAppSelector } from '@/redux/hooks';
import { addRaiting, getUserRatings } from '@/services/clientApi';
import { Rate} from 'antd'
import React from 'react'





const Rating = ({deviceID}: {deviceID: number}) => {
     const [rating, setRating] = React.useState<number>(0)
     const [serverRating, setServerRating] = React.useState<number>(0)
     const [ratingID, setRatingID] = React.useState<number>()
     const [loaded, setLoaded] = React.useState<boolean>(false)
     const {id} = useAppSelector((state)=> state.user)
    
    
     React.useEffect(()=> {
      const getRating = async ()=> {
        const res = await getUserRatings(deviceID, id)
        setServerRating(res?.data?.data[0]?.attributes.value)
        setRatingID(res?.data?.data[0]?.id)
        setLoaded(true)
        console.log(res?.data?.data[0]?.id)
      }
      getRating()
     },[id, rating])

     


     
     

      if (!loaded) {
       return <div></div>
      }

      if (!id && loaded) {
        return <div style={{marginTop: '40px', fontSize: '18px '}} >Авторизуйтесь чтобы ставить оценку</div>
       }

  return (
    <div style={{fontSize: '18px', marginTop: '20px'}}>
      Оцените товар: 
    <Rate allowClear={false}  style={{fontSize: '50px'}} onChange={(e:number)=>{ setRating(e), addRaiting(e, deviceID, id, ratingID, rating, loaded)}}  value={rating? rating: serverRating} defaultValue={0} />
    </div>
  )
}

export default Rating