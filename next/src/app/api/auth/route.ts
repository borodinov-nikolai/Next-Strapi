import { $axios } from "@/axios/config";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";



export async function POST(request: Request) {

   const cookie = cookies()

  try {
    const token = cookie.get('token')
    if(token) {
     cookie.delete('token')
    }

    const {identifier, password} = await request.json()
  
   const {data} = await $axios.post('/auth/local', {
    identifier,
    password,
   })
  
  
  
   return new Response( JSON.stringify(data), {
    status: 200,
    headers: { 'Set-Cookie': `token=${data.jwt};path=/;httpOnly=true;samesite=strict,isAuth=true;path=/`},
  })




  } catch(error: any) {
    console.error(error.message)
  }
    
}


