import { $apiNEXT } from "@/axios/clientConfig"






export const register = async (login:string, email:string, password:string, setSuccess: React.Dispatch<React.SetStateAction<boolean>>)=> {
  
  try {
    await $apiNEXT.post('/auth/register', {
      username: login,
      email,
      password
    })
    
    setSuccess(true)
    setTimeout(()=>window.location.reload(), 3000)
    
    } catch(e) {
      console.error(e)
    }
   
     
   }