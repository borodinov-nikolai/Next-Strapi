import { $apiServer_CMS } from "@/axios/serverConfig"



export async function PUT(request: Request) {
 
       
         try {

          type Req = {
            userID: number,
            dataType: string,
            dataValue: string
          }
         const {userID, dataType, dataValue} : Req = await request.json()
   console.log(userID)
            const res = await $apiServer_CMS.put(`/users/${userID}`, {
                  [dataType] : dataValue
                
            })
   

            // console.log(res)
          return new Response('ok', {
            status: 200,

          })

         } catch(e) {

            return new Response('error', {
                status: 500
            })
            
         }
}