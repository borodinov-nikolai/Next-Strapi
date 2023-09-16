'use client'
import { $apiNEXT } from '@/axios/clientConfig';
import { useAppSelector } from '@/redux/hooks';
import { addRaiting } from '@/services/clientApi';
import { Rate } from 'antd'
import React from 'react'





const Rating = ({deviceID}: {deviceID: number}) => {

     const {id} = useAppSelector((state)=> state.user)



  return (
    <Rate style={{fontSize: '50px'}} onChange={(e:number)=>{addRaiting(e, deviceID, id)}}  defaultValue={0} />
  )
}

export default Rating