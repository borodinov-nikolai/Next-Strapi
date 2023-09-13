import qs from 'qs'
import { $apiCMS} from '@/axios/serverConfig';




export const getDevices = async (props:any) => {
  try {
    const query = qs.stringify(props);
    const res = await $apiCMS.get(`/devices?${query ? query : 'sort=price:asc'}&populate=*`);
    return res.data
  } catch(e) {
    console.error(e)
  }
  
}


 export const getDevice = async (id:number) => {
    try {
      const res = await $apiCMS.get(`/devices/${id}?populate=*`)
      return res.data
    } catch(e) {
      console.error(e)
    }
  }