import { $apiServer_CMS } from "@/axios/serverConfig";




export async function POST(request: Request) {
   
    try {

        type Res = {
            text: string,
            device: string,
            user: string
        }

        const {text, device, user} : Res = await request.json();
      

         const comment = await $apiServer_CMS.get('/comments', {
            params: {
                filters: {
                    device: device,
                    users_permissions_user:user
                }
            }
         })


         if(!text) {
            $apiServer_CMS.delete( `/comments/${comment.data.data[0].id}`, {
                
            })
            console.log('work')
         }
     
    



          
         if(comment.data.data.length < 1) {
            $apiServer_CMS.post('/comments', {
                data: {
                    text: text,
                    device: device,
                    users_permissions_user: user
                }
            })
         } else {
            $apiServer_CMS.put(`/comments/${comment.data.data[0].id}`, {
                data: {
                    text: text
                }
            })
         }

       
         
         return new Response('ok', {
            status: 200
         })

    }catch(e) {
        console.error(e)
    }
   
}


