import { $apiServer_CMS } from "@/axios/serverConfig";




export async function POST(request: Request) {
   
    try {
        const {text, device, user} = await request.json();
        console.log(text, device, user)

        $apiServer_CMS.post('/comments', {
            data: {
                text: String(text),
                device: String(device),
                users_permissions_user: String(user)
            }
        })
         
         return new Response('ok', {
            status: 200
         })

    }catch(e) {
        console.error(e)
    }
   
}