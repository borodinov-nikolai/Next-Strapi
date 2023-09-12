import { $axios } from "@/axios/config"




export async function PUT(request: Request) {

    try {
        const {items, totalPrice} = await request.json()

         $axios.put('/carts/1', {
            data: {
                  items: {items, totalPrice}
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