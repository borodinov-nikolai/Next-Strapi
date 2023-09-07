'use client'
import React from 'react'
import Brands from './brands'
import Sort from './sort'
import styles from './Filters.module.scss'
import Search from './search'
import qs from 'qs'
import { useRouter } from 'next/navigation'


interface Props {
  brandValue: string,
  sortValue: string
}

const Filters = ({brandValue, sortValue}: Props) => {
   const [brand, setBrand] = React.useState<string>('');
   const [sort, setSort] = React.useState<string>('');
   const router = useRouter()
 


   



   React.useEffect(()=> {
    
   
        
          const query = qs.stringify({
            sort: {
                 [0]: sort || sortValue || 'price:asc'
               },
               filters: {
                brand: {
                  name: !brand ? brandValue : brand === 'all'? undefined : brand 
                }
              }
      })
    
      router.replace(`?${query}`)
        
         
   

   
       




     },[brand, sort])


  //  params:{
  //   pagination: {
  //    page: page,
  //    pageSize: 12 
  //   },
  //   filters: {
  //     name: {
  //       $containsi: search
  //      },
  //      brand: {
  //        id: brandId
  //       },
  //        type: {
  //           id: typeId
  //       }
  //    },
  //   sort: {
  //    0: sort
  //  },
  //   populate: "*

  return (
    
      <div className={styles.root}>
        <div>
          <Brands value={brandValue} setBrand={setBrand} />
            </div>
            <div>
              <Search/>
            </div>
            <div>
        <Sort value={sortValue} setSort={setSort} />
            </div>
      </div>
  
  )
}

export default Filters