import { $apiCMS } from "@/axios/serverConfig"




export async function PUT(request: Request) {

    try {
        const {items, id} = await request.json()
       console.log(id)
         $apiCMS.put(`/carts/${id}`, {
            data: {
                  items: {items}
            }
          
            
        })

       return new Response( 'ok', {
        status: 200
       })

    } catch(e:any) {

        console.error(e.message)
        2
        return new Response('ошибка',{
        status: 500 }
      )
        }

}