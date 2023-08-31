import { $axios } from '@/axios'




export const getProducts = async(props : {sort:string, search:string}) =>  {

  


    try {


        const sort = props.sort ? props.sort : 'price:asc'
        const search = props.search ? props.search : ''


        
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
            
           },
          sort: {
           0: sort
         },
          populate: "*"
       }
        }
       
       );
        console.log('запрос')
        return data.data
    } catch(e: any) {
      console.error("ошибка зпроса", e.message)
    }
  
  } 