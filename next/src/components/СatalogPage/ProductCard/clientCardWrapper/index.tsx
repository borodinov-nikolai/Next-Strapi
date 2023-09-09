'use client'
import {usePathname, useRouter } from 'next/navigation'
import React from 'react'





const ClientCardWrapper = ({children, id}:{children: React.ReactNode, id:number}) => {
 const router = useRouter();
const pathname = usePathname();



  return (
    
      <div onClick={()=>router.push(`${pathname + '/' + id}`)}>
          {children}
      </div>
   
  )
}

export default ClientCardWrapper