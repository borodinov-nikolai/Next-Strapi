import { $apiClient_CMS, $apiClient_NEXT } from "@/axios/clientConfig"
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context"






export const register = async (login:string, email:string, password:string, setSuccess: React.Dispatch<React.SetStateAction<boolean>>, router: AppRouterInstance,  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>)=> {
  
  try {
    await $apiClient_NEXT.post('/auth/register', {
      username: login,
      email,
      password
    })
    
    setSuccess(true)
    setTimeout(()=>{router.refresh(); setIsModalOpen(false);}, 3000)
    setTimeout(()=> setSuccess(false), 3500)
    
    
    
    } catch(error) {
      console.error(error)
    }
   }

   export const mobileRegister = async (login:string, email:string, password:string, setSuccess: React.Dispatch<React.SetStateAction<boolean>>)=> {
  
    try {
      await $apiClient_NEXT.post('/auth/register', {
        username: login,
        email,
        password
      })
      
      setSuccess(true)
     
      setTimeout(()=> setSuccess(false), 3500)
      
      
      
      } catch(error) {
        console.error(error)
      }
     }

   export const auth = async (login:string, password:string, router: AppRouterInstance, setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>)=> {
    try {
      const {data} = await $apiClient_NEXT.post('/auth/login', {
        identifier: login,
        password
      })
       
      router.refresh();
      setIsModalOpen(false);
      return data;

    } catch(error: any) {
      console.error(error.message)
    }
   
   }


   export const authMobile = async (login:string, password:string)=> {
    try {
      const {data} = await $apiClient_NEXT.post('/auth/login', {
        identifier: login,
        password
      })
       
   
      return data;

    } catch(error: any) {
      console.error(error.message)
    }
   
   }



   export const logout = async (router: AppRouterInstance, setShowSubmenu: React.Dispatch<React.SetStateAction<boolean>>)=> {
    try {
      await $apiClient_NEXT.post('/auth/logout');
      router.refresh();
      setShowSubmenu(false);
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



  export const addRaiting = async (e:number, deviceID:number, userID:number|null, ratingID:number|undefined, rating: number, loaded: boolean, router: AppRouterInstance)=> {
    if (userID && !ratingID && !rating ) {
      await $apiClient_NEXT.post('/rating', {
        value: e,
        device: deviceID,
        users_permissions_user: userID
       
   }
   )
   router.refresh()
    } else if(ratingID) {
     await $apiClient_NEXT.put('/rating', {
        value: e,
        id: ratingID,
        device: deviceID
      })
      router.refresh()
    }
   
}




export const getUserRatings = async (deviceID : number, userID: number| null) => {
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
      console.error(e)
    }
    
  }
 
}


export const addComment = async (commentText:string, deviceID:number, userID:number|null, router:AppRouterInstance)=> {
  try {
    if(userID) {
      await $apiClient_NEXT.post('/comment', {
        text: commentText,
        device: deviceID,
        user: userID
       })
     }
     router.refresh()
  } catch(e) {
    console.error(e)
  }
     
     
}


export const removeComment = async (deviceID:number, userID:number|null, router: AppRouterInstance)=> {
  try {
    await $apiClient_NEXT.post('/comment', {
      device: deviceID,
      user: userID
    })
    router.refresh()
  } catch(e) {
    console.error(e)
  }
}




  export const editAccount = async (userID: number, dataType: string, dataValue: string, router: AppRouterInstance, setType: React.Dispatch<React.SetStateAction<string>>,
    setValue: React.Dispatch<React.SetStateAction<string>> )=> {
   try {
    await $apiClient_NEXT.put('/account', {
      userID,
      dataType,
      dataValue
     } 
    )
    router.refresh()
    setType('')
    setValue('')
   } catch(e) {
    console.error(e)
   }

  }
  

