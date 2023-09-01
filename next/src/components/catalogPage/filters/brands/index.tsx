
import { getBrands } from "@/utils/getBrands"
import Link from "next/link"




const Brands = async ({brand}: any) => {

type Brands = {
  id: number,
  attributes: {
    name: string
  }
}[]

  const brands : Brands = await getBrands()



  return (
    
    <>
      <Link  href={`/catalog/smartphones/all`} ><button type="button" className={'all' === brand? "btn btn-outline-dark active":"btn btn-outline-dark"}>Все</button></Link>
    {
      brands?.map(({id, attributes})=> {
      return  <Link key={id} href={`/catalog/smartphones/${attributes.name}`} ><button type="button" className={attributes.name === brand? "btn btn-outline-dark active":"btn btn-outline-dark"}>{attributes.name}</button></Link>
      })
    }
    </>
  )
}

export default Brands