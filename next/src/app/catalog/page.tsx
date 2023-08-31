import Filters from "@/components/catalogPage/filters";
import styles from "./Catalog.module.scss"
import ProductCard from '@/components/catalogPage/productCard';
import { Metadata } from "next";
import { getProducts } from "../../services/getProducts";
import {cookies} from "next/headers"


export const dynamic = 'force-dynamic'


export const metadata: Metadata = {
  title: 'Каталог',
  description: 'Каталог'
}






export default async function Catalog ({searchParams}:any ){

    
 
  const cookie = cookies();
  const token = cookie?.get('token')
 


const {sort, search} :{sort:string, search:string} = searchParams
 

type Products = {
    id: number,
    attributes: {
    name: string,
    image?: any,
    price: number
  }
 
}[]




  const products: Products = await getProducts({sort, search});



  return (

<div className={styles.root} >
<h1 className={styles.title} >
  Catalog
        
  
</h1>

<div className={styles.filters} >
 <Filters />
  </div>

    <div className={styles.card_holder}  >

      
      {products?.map(({id, attributes} )=> {
    
       return <ProductCard key={id} id = {id} price={attributes.price} name = {attributes.name} img={attributes.image?.data?.attributes.url} />
      })}


    </div>
    </div>
  )
}

  





