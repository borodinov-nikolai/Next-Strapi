import { $apiCMS } from "@/axios/serverConfig";




export async function POST(request: Request) {
    
    const {value, device, users_permissions_user} = await request.json()
 
    try {
          $apiCMS.post('/ratings', {
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