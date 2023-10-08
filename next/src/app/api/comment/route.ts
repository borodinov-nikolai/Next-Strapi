import { $apiServer_CMS } from "@/axios/serverConfig";




export async function POST(request: Request) {
   
    try {
        const {text, device, user} = await request.json();
      

         const comment = await $apiServer_CMS.get('/comments', {
            params: {
                filters: {
                    device: String(device),
                    users_permissions_user: String(user)
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
                    text: String(text),
                    device: String(device),
                    users_permissions_user: String(user)
                }
            })
         } else {
            $apiServer_CMS.put(`/comments/${comment.data.data[0].id}`, {
                data: {
                    text: String(text)
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


