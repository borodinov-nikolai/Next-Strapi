import { $apiCMS } from "@/axios/serverConfig";




export async function POST(request : Request) {


    try {
        
        type Req = {
            username: string,
            email: string,
            password : string
        }

        const {username, email, password} : Req = await request.json();  
     
    console.log(username, email, password)
        const res = await $apiCMS.post('/auth/local/register', {
            username,
            email,
            password
        })



    if (res?.status === 200) {
        console.log(res.data.user)
        await $apiCMS.post('/carts/', {
        data: {
            items: {},
            users_permissions_user: String(res.data.user.id)

        }

    

        })

    }
          
   return new Response( JSON.stringify(res.data), {
    status: 200,
    headers: { 'Set-Cookie': `token=${res.data.jwt};path=/;httpOnly=true;samesite=strict`}})
  
    } catch(e) {
        console.log(e)
    }
   

}