'use client'
import { $apiClient } from "@/axios/client"
import React from "react"
import { useDispatch } from "react-redux"
import { setBrand } from "@/redux/slices/filtersSlice"
import { useAppSelector } from "@/redux/hooks"



const Brands =  () => {
  
  type Brands = {
    id: number,
    attributes: {
      name: string
    }
  }[]

  const {brand} = useAppSelector((state)=>state.filters)
  const[brands, setBrands] = React.useState<Brands>([])
  const dispatch = useDispatch();

  React.useEffect(()=> {

   const getBrands = async ()=> {
    const res = await $apiClient.get('/brands', {
      params: {
          filters: {
              types: {
              id: 1
          }
          }
          
      }
  })
 console.log(res.data.data)
  setBrands(res.data.data)

   }

   getBrands()

  },[])








  return (
    
    <>
    <button onClick ={()=> dispatch(setBrand('all'))} type="button" className={'all' === brand? "btn btn-outline-dark active":"btn btn-outline-dark"}>Все</button>
    {brands?.map(({id, attributes})=> {
      return  <button onClick ={()=>dispatch(setBrand(attributes.name)) } type="button" className={attributes.name === brand? "btn btn-outline-dark active":"btn btn-outline-dark"}>{attributes.name}</button>
      })
    }
    </>
  )
}

export default Brands