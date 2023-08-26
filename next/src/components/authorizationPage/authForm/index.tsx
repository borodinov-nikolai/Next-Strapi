'use client'
import React from 'react'
import axios from 'axios'



const AuthForm: React.FC = () => {
    const[identifier, setIdentifier]= React.useState<string>()
    const[password, setPassword]= React.useState<string>()

      
    
  
      const auth = async (identifier:string | undefined, password:string | undefined)=> {
         const res = await axios.post("http://localhost:3000/api/auth", {
           identifier,
           password
         })
        console.log(res)
         return res
      }

  

   

  return (
    <div>
        <div>AuthForm</div>

        <input onChange={(e=>setIdentifier(e.target.value))} type="text" placeholder='name' />
        <input onChange={(e=>setPassword(e.target.value))} type="text" placeholder='password' />
        <button onClick={()=>auth(identifier, password)}> Авторизоваться</button>

    </div>
  )
}

export default AuthForm