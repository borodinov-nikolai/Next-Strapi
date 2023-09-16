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
    
    } catch(error) {
      console.error(error)
    }
   }



   export const auth = async (login:string, password:string)=> {
    try {
      const {data} = await $apiNEXT.post('/auth/login', {
        identifier: login,
        password
      })
      location.reload()
      return data

    } catch(error: any) {
      console.error(error.message)
    }
   
   }




   export const logout = async ()=> {
    try {
      await $apiNEXT.post('/auth/logout');
      window.location.reload();
    } catch(e: any) {
      console.error(e)
    }
   
  }



  



  export const addRaiting = async (e:number, deviceID:number, id:number|null)=> {
    if (id) {
      $apiNEXT.post('/raiting', {
        value: e,
        device: deviceID,
        users_permissions_user: id
   })
    }
   
}

