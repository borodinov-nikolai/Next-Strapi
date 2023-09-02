import Filters from "@/components/catalogPage/filters";
import styles from "./Brand.module.scss"
import ProductCard from '@/components/catalogPage/productCard';
import { Metadata } from "next";
import { getProducts } from "../../../../utils/getProducts";
import {cookies} from "next/headers"
import Brands from "@/components/catalogPage/filters/brands";


export const dynamic = 'force-dynamic'


export const metadata: Metadata = {
  title: 'Каталог',
  description: 'Каталог'
}






export default async function Brand ({searchParams, params}:any ){


 
  const cookie = cookies();
  const token = cookie?.get('token')
const {sort, search} :{sort:string, search:string} = searchParams
const brandName: string = params?.brand
 

type Products = {
    id: number,
    attributes: {
    name: string,
    image?: any,
    price: number
  }
 
}[]




  const products: Products = await getProducts({sort, search, brandName});



  return (

<div className={styles.root} >
<h1 className={styles.title} >
  Catalog
        
  
</h1>

<div className={styles.brands} >
  <Brands brand = {params.brand} />

</div>

<div className={styles.filters} >
 <Filters searching = {search} params={params}  sorting = {sort} />
  </div>

    <div className={styles.card_holder}  >

      
      {products?.map(({id, attributes} )=> {
    
       return <ProductCard key={id} id = {id} price={attributes.price} name = {attributes.name} img={attributes.image?.data?.attributes.url} />
      })}


    </div>
    </div>
  )
}

  