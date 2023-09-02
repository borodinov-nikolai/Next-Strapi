import { $axios } from '@/axios/server'


export const fetchCache = 'only-no-store'


export async function POST(request: Request) {
      
  try {
    const {identifier, password} = await request.json()
        
    
    const res = await $axios.post('/auth/local', {
            identifier,
            password
          }
          
          )
                
           
           

          return new Response('Hello, Next.js!', {
            status: 200,
            headers: { 'Set-Cookie': `token=${res.data.jwt};path=/;Secure;HttpOnly;SameSite=Strict;expires=session,auth=true;path=/;expires=session`},


          })

  } catch(e) {
    console.log(e)
        return new Response('Ошибка авторизации', {
          status: 500 })   
  }


     
            }