import { $apiServer_CMS } from "@/axios/serverConfig"



export async function PUT(request: Request) {
         const req = await request.json()

         try {


            await $apiServer_CMS.put('/users', {
                
            })
   
          return new Response('ok', {
            status: 200,

          })

         } catch(e) {

            return new Response('error', {
                status: 500
            })
            
         }
}