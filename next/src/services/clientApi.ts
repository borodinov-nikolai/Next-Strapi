import { $apiClient_CMS, $apiClient_NEXT } from "@/axios/clientConfig"






export const register = async (login:string, email:string, password:string, setSuccess: React.Dispatch<React.SetStateAction<boolean>>)=> {
  
  try {
    await $apiClient_NEXT.post('/auth/register', {
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
      const {data} = await $apiClient_NEXT.post('/auth/login', {
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
      await $apiClient_NEXT.post('/auth/logout');
      window.location.reload();
    } catch(e: any) {
      console.error(e)
    }
   
  }



   
 export const addToCart = async (user:any , items: any)=> {
    await $apiClient_NEXT.put(`/cart`,
   { 
     id: user?.cart?.id,
     items
   }
   )
  }



  export const addRaiting = async (e:number, deviceID:number, userID:number|null, ratingID:number|undefined)=> {
    if (userID && !ratingID) {
      $apiClient_NEXT.post('/rating', {
        value: e,
        device: deviceID,
        users_permissions_user: userID
   })
    } else if(ratingID) {
      $apiClient_NEXT.put('/rating', {
        id: ratingID,
        value: e
      })
    }
   
}




export const getUserRating = async (deviceID : number, userID: number| null) => {
  if(userID) {

    try {
      const res = await $apiClient_CMS.get('/ratings', {
        params: {
          filters: {
  
              users_permissions_user: {
                id: userID
              },
              device: {
                id: deviceID
              }
            
          }
        } 
       
       
      })

      return res
    } catch(e) {
      console.log(e)
    }
    
  }
 
}
