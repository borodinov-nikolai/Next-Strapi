import Filters from "@/components/catalogPage/filters";
import styles from "./Catalog.module.scss"
import ProductCard from '@/components/catalogPage/productCard';
import axios from 'axios'
import { Metadata } from "next";
import {headers, cookies} from 'next/headers';



export const metadata: Metadata = {
  title: 'Каталог',
  description: 'Каталог'
}



const getProducts = async(filters: {sort:string, search: string}) =>  {
  const sort = filters.sort ? filters.sort : 'price:asc'
  const search = filters.search ? filters.search : ''
 
  try {
     const {data } = await axios.get(`http://localhost:1337/api/devices?filters[name][$containsi]=${search}&pagination[page]=1&pagination[pageSize]=40&sort=${sort}&populate=*`);
    
      return data.data
  } catch(e: any) {
    console.error("ошибка", e.message)
  }

} 


export default async function Catalog ({searchParams}: any){

  const headersList = headers();
  const getCookies = cookies()
  const token = getCookies.get("token")
  console.log(token?.value)



const {sort, search} = searchParams
 

type Products = {
  id: number,
  attributes: {
    name: string,
    image?: any,
    price: number
  }
 
}[]


  const products: Products = await getProducts({sort, search});
 

 console.log(products)


  return (

<div className={styles.root} >
<h1 className={styles.title} >
  Catalog
        
  
</h1>

<div className={styles.filters} >
 <Filters searchParams={searchParams}/>
  </div>

    <div className={styles.card_holder}  >

      
      {products.map(({id, attributes} )=> {
        console.log(attributes)
    
       return <ProductCard key={id} id = {id} price={attributes.price} name = {attributes.name} img={attributes.image?.data?.attributes.url} />
      })}


    </div>
    </div>
  )
}




