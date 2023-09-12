import { $apiCMS} from "@/axios/serverConfig";
import { cookies } from "next/headers";



export async function POST(request: Request) {

   const cookie = cookies()

  try {
    const token = cookie.get('token')
    if(token) {
     cookie.delete('token')
    }

    const {identifier, password} = await request.json()
  
   const {data} = await $apiCMS.post('/auth/local', {
    identifier,
    password,
   })
  
  
  
   return new Response( JSON.stringify(data), {
    status: 200,
    headers: { 'Set-Cookie': `token=${data.jwt};path=/;httpOnly=true;samesite=strict`},
  })




  } catch(error: any) {
    console.error(error.message)
  }
    
}


