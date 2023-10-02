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



export const getDevices = async (props:any) => {
  try {
    const query = qs.stringify(props);
    const res = await $apiServer_CMS.get(`/devices?${query ? query : 'sort=price:asc'}&populate=*`);
    return res.data
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
