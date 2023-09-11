'use client'
import { useAppDispatch } from '@/redux/hooks'
import { setIsAuth } from '@/redux/slices/userSlice'
import React from 'react'




const ChekAuth = () => {
const dispatch = useAppDispatch()

  React.useEffect(()=> {
   if(document.cookie==='isAuth=true') {
    dispatch(setIsAuth(true))
   }

    
  },[])

  return (
    <></>
  )
}

export default ChekAuth