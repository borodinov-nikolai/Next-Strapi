import { $axios } from '@/http'




export const getProducts = async() =>  {

  


    try {


        // const sort = props.sort ? props.sort : 'price:asc'
        // const search = props.search ? props.search : ''


        
       const {data } = await $axios.get(`/devices`);
        console.log('запрос')
        return data.data
    } catch(e: any) {
      console.error("ошибка зпроса", e.message)
    }
  
  } 