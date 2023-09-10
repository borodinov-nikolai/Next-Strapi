import { $axios } from "@/axios/api";
import { NextResponse } from "next/server";
import { cookies } from 'next/headers'


export async function POST(request: Request) {
    const {identifier, password} = await request.json()
  
   const {data} = await $axios.post('/auth/local', {
    identifier,
    password,
   })
  
   console.log(data.jwt)




  return new Response('Hello, Next.js!', {
    status: 200,
    headers: { 'Set-Cookie': `token=${data.jwt};path=/;httpOnly=true;samesite=strict`},
  })
}
