import { $axios } from "@/axios"





export const getBrands = async ()=> {
    try {
        const {data}:any = await $axios.get('/brands' )
        console.log('pfghjcbr')
        return data?.data
    } catch(e: any) {
        console.error('ошибка', e.message)
    }
   
}