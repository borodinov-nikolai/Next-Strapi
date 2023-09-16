'use client'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { setUser } from '@/redux/slices/userSlice';
import React from 'react'




const SaveUser = ({user}:any) => {
   const dispatch = useAppDispatch();



   React.useEffect(()=> {
    if(user) {
        dispatch(setUser(user))
    
    }
},[])


  return (
   <></>
  )
}

export default SaveUser