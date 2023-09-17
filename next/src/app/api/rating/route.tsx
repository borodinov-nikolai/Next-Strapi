import { $apiServer_CMS } from "@/axios/serverConfig";
import DeviceRating from "@/components/СatalogPage/ProductCard/deviceRating";




export async function POST(request: Request) {
    
    const {value, device, users_permissions_user} = await request.json()
 
    try {
         const res = await $apiServer_CMS.post('/ratings', {
            data : {
              value,
              device : String(device),
              users_permissions_user: String(users_permissions_user)
            }
          })
          
          if(res) {
            const ratings = await $apiServer_CMS.get('/ratings', {
              params: {
                filters: {
                  device: String(device)
                }
              }
            })
            const  deviceRating = ratings.data.data.reduce((sum :number, item: any)=> sum + item.attributes.value, 0)/ratings.data.data.length


            $apiServer_CMS.put(`/devices/${device}`, {
              data:{
                 deviceRating
              }
             })
      
                console.log(deviceRating)
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
            device: String(device)
          }
        }
      })
      const  deviceRating = ratings.data.data.reduce((sum :number, item: any)=> sum + item.attributes.value, 0)/ratings.data.data.length


      $apiServer_CMS.put(`/devices/${device}`, {
        data:{
           deviceRating
        }
       })

          console.log(deviceRating)
}
  
     return new Response('ok', {
      status: 200
     })
   } catch(e) {
    console.error(e)
   }
 

}

