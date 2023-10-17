import qs from 'qs'
import { $apiServer_CMS } from '@/axios/serverConfig';





export const getUser = async()=> {
  try {
    const {data} = await $apiServer_CMS.get('/users/me?populate=*')
     return data 
  } catch(error) {
    console.error(error);
    return null
  }

}

export const getBrands = async (typeName:string)=> {
  try {
    if(typeName === 'all') {
      const res = await $apiServer_CMS.get(`/brands`)
      return res.data.data
    } else {
      const res = await $apiServer_CMS.get(`/brands?filters[types][name][$eq]=${typeName}`)
      return res.data.data
    }
   
  } catch(e) {
    console.error(e)
  }
}


export const getDevices = async (searchParams:Record<string,string>, typeParam:string)=> {
  try {
    const type = typeParam;
    const query = qs.stringify(searchParams);
    if(type === 'all') {
      const res = await $apiServer_CMS.get(`/devices?${query ? query : 'sort=price:asc'}&populate=*`);
    return res.data
    } else {
      const res = await $apiServer_CMS.get(`/devices?filters[type][name][$eq]=${type}&${query ? query : 'sort=price:asc'}&populate=*`);
      return res.data
    }
  
  } catch(e) {
    console.error(e)
  }
  
}


 export const getDevice = async (id:number) => {
    try {
      const res = await $apiServer_CMS.get(`/devices/${id}?populate=*`)
      return res.data
    } catch(e) {
      console.error(e)
    }
  }

  export const getComments = async (id:number)=> {
   
    try {
      const res = await $apiServer_CMS.get(`/comments?filters[device][id][$eq]=${id}&populate=*`)
      return res.data
    } catch(e) {
      console.error(e)
    }
  }

