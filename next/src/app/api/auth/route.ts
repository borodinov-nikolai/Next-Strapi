import axios from 'axios'



export async function POST(request: Request) {
      
        const {identifier, password} = await request.json()
        
    
        const res = await axios.post('http://localhost:1337/api/auth/local', {
                identifier,
                password
              })
                    

              return new Response('Hello, Next.js!', {
                status: 200,
                headers: { 'Set-Cookie': `token=${res.data.jwt};path=/;Secure;HttpOnly;SameSite=Strict`},
              })
    
}