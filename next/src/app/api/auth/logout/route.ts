import { cookies } from "next/headers"




export async function POST() {

    try {

     const cookie = cookies()

     cookie.delete('token')
        

        return new Response('ok', {
        status: 200
    })
    } catch(error:any) {
        console.error(error.message)
    }
}