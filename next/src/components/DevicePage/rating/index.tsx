'use client'
import { useAppSelector } from '@/redux/hooks';
import { addRaiting, getUserRatings } from '@/services/clientApi';
import { Rate} from 'antd'
import React from 'react'
import {useRouter} from 'next/navigation'


interface Props {
  deviceID: number,
  user: any
}

const Rating : React.FC<Props> = ({deviceID, user}) => {
     const [rating, setRating] = React.useState<number>(0)
     const [serverRating, setServerRating] = React.useState<number>(0)
     const [ratingID, setRatingID] = React.useState<number>()
     const [loaded, setLoaded] = React.useState<boolean>(false)
     const router = useRouter();


     React.useEffect(()=> {
      const getRating = async ()=> {
        const res = await getUserRatings(deviceID, user?.id)
        setServerRating(res?.data?.data[0]?.attributes.value)
        setRatingID(res?.data?.data[0]?.id)
        // setLoaded(true)
   
      }
      getRating()
     },[user?.id, rating])

     


     
     

      // if (!loaded) {
      //  return <div></div>
      // }

      if (!user) {
        return <div style={{marginTop: '40px', fontSize: '18px '}} >Авторизуйтесь чтобы ставить оценку</div>
       }

  return (
    <div style={{fontSize: '18px', marginTop: '20px'}}>
      Оцените товар: 
    <Rate allowClear={false}  style={{fontSize: '50px'}} onChange={(e:number)=>{ setRating(e), addRaiting(e, deviceID, user?.id, ratingID, rating, loaded, router)}}  value={rating? rating: serverRating} defaultValue={0} />
    </div>
  )
}

export default Rating