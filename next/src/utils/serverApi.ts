import qs from 'qs'
import axios from 'axios'




export const getDevices = async (props:any) => {
  try {
    const query = qs.stringify(props);
    const res = await axios.get(`${process.env.API_URL}/devices?${query ? query : 'sort=price:asc'}&populate=*`);
    return res.data
  } catch(e) {
    console.error(e)
  }
  
}


 export const getDevice = async (id:number) => {
    try {
      const res = await axios.get(`${process.env.API_URL}/devices/${id}?populate=*`)
      return res.data
    } catch(e) {
      console.error(e)
    }
  }