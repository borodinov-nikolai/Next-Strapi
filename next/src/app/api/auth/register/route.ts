import { $apiServer_CMS } from "@/axios/serverConfig";




export async function POST(request : Request) {


    try {
        
        type Req = {
            username: string,
            email: string,
            password : string
        }

        const {username, email, password} : Req = await request.json();  
     
    
        const res = await $apiServer_CMS.post('/auth/local/register', {
            username,
            email,
            password
        })


         
    
    
     const res2 = await $apiCMS.post('/carts', {
        data: {
            items: {},
            users_permissions_user: String(res.data.user.id)

        }
         })

    
          
   return new Response( JSON.stringify(res.data), {
    status: 200,
    headers: { 'Set-Cookie': `token=${res.data.jwt};path=/;httpOnly=true;samesite=strict`}})
  
    } catch(e) {
        console.log(e)
    }
   

}