import { $axios } from "@/axios/config";



export async function POST(request: Request) {
    const {identifier, password} = await request.json()
  
   const {data} = await $axios.post('/auth/local', {
    identifier,
    password,
   })
  
  




  return new Response('Hello, Next.js!', {
    status: 200,
    headers: { 'Set-Cookie': `token=${data.jwt};path=/;httpOnly=true;samesite=strict`},
  })
}
