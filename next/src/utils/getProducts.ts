import { $axios } from '@/axios'




export const getProducts = async(props : {sort:string, search:string, brandName:string}) =>  {

  


    try {


        const sort = props.sort ? props.sort : 'price:asc'
        const search = props.search ? props.search : null
        const brand = props.brandName ? props.brandName : null

        
       const {data } = await $axios.get(`/devices`, {
        params:{
          pagination: {
           page: 1,
           pageSize: 12 
          },
          filters: {
            name: {
              $containsi: search
             },
             brand: {
              name: brand === 'all'? null : brand
             }
            
           },
          sort: {
           0: sort
         },
          populate: "*"
       }
        }
       
       );
       
        return data.data
    } catch(e: any) {
      console.error("ошибка зпроса", e.message)
    }
  
  } 