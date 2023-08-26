import Filters from "@/components/catalogPage/filters";
import styles from "./Catalog.module.scss"
import ProductCard from '@/components/catalogPage/productCard';
import { Metadata } from "next";
import {headers, cookies} from 'next/headers';
import { getProducts } from "../../services/getProducts";



export const metadata: Metadata = {
  title: 'Каталог',
  description: 'Каталог'
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




