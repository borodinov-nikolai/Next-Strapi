import axios from 'axios'


export const getProducts = async(filters: {sort:string, search: string}) =>  {
    const sort = filters.sort ? filters.sort : 'price:asc'
    const search = filters.search ? filters.search : ''
   
    try {
       const {data } = await axios.get(`http://localhost:1337/api/devices?filters[name][$containsi]=${search}&pagination[page]=1&pagination[pageSize]=40&sort=${sort}&populate=*`);
      
        return data.data
    } catch(e: any) {
      console.error("ошибка", e.message)
    }
  
  } 