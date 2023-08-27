'use client'
import React from 'react'

const CheckAuth = () => {
   

React.useEffect(()=> {



     if(document.cookie === 'auth=true') {
      console.log('авторизован');
     }
    

        
    
  
    
},[]) 




  return (
    <>
    </>
  )
}

export default CheckAuth