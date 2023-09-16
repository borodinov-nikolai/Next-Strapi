import { $apiServer_CMS } from "@/axios/serverConfig";




export async function POST(request: Request) {
    
    const {value, device, users_permissions_user} = await request.json()
 
    try {
          $apiServer_CMS.post('/ratings', {
            data : {
              value,
              device : String(device),
              users_permissions_user: String(users_permissions_user)
            }
          })
      
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

  const {value, id} = await request.json();
    
   try{
    const res = await $apiServer_CMS.put(`/ratings/${id}`, {
      data: {
        value
      }
     })
  
     return new Response('ok', {
      status: 200
     })
   } catch(e) {
    console.error(e)
   }
 

}

