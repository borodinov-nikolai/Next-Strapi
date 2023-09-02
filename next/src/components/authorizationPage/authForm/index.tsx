'use client'
import React from 'react'
import axios from 'axios'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { setIsAuth } from '@/redux/slices/user'



const AuthForm: React.FC = () => {
    const[identifier, setIdentifier]= React.useState<string>()
    const[password, setPassword]= React.useState<string>()
    const {isAuth} = useAppSelector((state)=> state.user);
    const dispatch = useAppDispatch()


    
React.useEffect(()=>{
  if(document.cookie === 'auth=true'){
    dispatch(setIsAuth(true))
  }
},[])



      
  
      const auth = async (identifier:string | undefined, password:string | undefined)=> {
        try {
          const res = await axios.post("http://localhost:3000/api/auth", {
            identifier,
            password,
             })
         console.log(res)
         if(res.status===200) {
          dispatch(setIsAuth(true))
         }
          return res
       }
         catch(e: any) {
          console.error('ошибка', e.message)
        }
      }
     
    

      const leave = async ()=> {
      const res = await  axios.get("http://localhost:3000/api/auth/leave")
      console.log(res)
      if(res.status===200) {
        dispatch(setIsAuth(false))
      }
        return res
      }
  
    
   

  return (
    <div>
        <div>AuthForm</div>

        <input onChange={(e=>setIdentifier(e.target.value))} type="text" placeholder='name' />
        <input onChange={(e=>setPassword(e.target.value))} type="text" placeholder='password' />
   
         { isAuth?
         <button onClick={()=>leave()}>Выйти</button>:
         <button onClick={()=>auth(identifier, password)}> Авторизоваться</button>
         }
       

    </div>
  )
}

export default AuthForm