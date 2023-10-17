import { $apiServer_CMS } from "@/axios/serverConfig";




export async function POST(request: Request) {
    
 
    try {
      type Res = {
        value: string,
        device: string,
        users_permissions_user: string
      }
    const {value, device, users_permissions_user}: Res = await request.json()

         const res = await $apiServer_CMS.post('/ratings', {
            data : {
              value,
              device : device,
              users_permissions_user:users_permissions_user
            }
          })
          
          if(res) {
            const ratings = await $apiServer_CMS.get('/ratings', {
              params: {
                filters: {
                  device: device
                }
              }
            })
            const  deviceRating = ratings.data.data.reduce((sum :number, item: any)=> sum + item.attributes.value, 0)/ratings.data.data.length


            $apiServer_CMS.put(`/devices/${device}`, {
              data:{
                 deviceRating
              }
             })
      
        
   }
        

    

          return new Response('ok', {
              status: 200
          })

    } catch(e:any) {
        console.log(e.message)
        return new Response('error', {
            status: 500
        })
    }
   
}



export async function PUT(request: Request) {

  const {value, id, device} = await request.json();
   try{
    const res = await $apiServer_CMS.put(`/ratings/${id}`, {
      data: {
        value
      }
     })

     if(res) {
      const ratings = await $apiServer_CMS.get('/ratings', {
        params: {
          filters: {
            device: device
          }
        }
      })
      const  deviceRating = ratings.data.data.reduce((sum :number, item: any)=> sum + item.attributes.value, 0)/ratings.data.data.length


      $apiServer_CMS.put(`/devices/${device}`, {
        data:{
           deviceRating
        }
       })

      
}
  
     return new Response('ok', {
      status: 200
     })
   } catch(e) {
    console.error(e)
   }
 

}

